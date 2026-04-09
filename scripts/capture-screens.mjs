import { chromium } from 'playwright'
import { mkdir } from 'node:fs/promises'
import { fileURLToPath } from 'node:url'
import { dirname, resolve } from 'node:path'

const __dirname = dirname(fileURLToPath(import.meta.url))
const outDir = resolve(__dirname, '..', '.screenshots')
await mkdir(outDir, { recursive: true })

const base = process.env.BASE_URL || 'http://localhost:3001'

const pages = [
  { slug: 'home',    path: '/' },
  { slug: 'resume',  path: '/resume' },
  { slug: 'apps',    path: '/apps' },
  { slug: 'github',  path: '/github' },
  { slug: '404',     path: '/this-page-does-not-exist' },
]

const viewports = [
  { name: 'mobile',  width: 390,  height: 844 },
  { name: 'tablet',  width: 768,  height: 1024 },
  { name: 'desktop', width: 1440, height: 900 },
]

const themes = ['light', 'dark']

const browser = await chromium.launch()

for (const theme of themes) {
  for (const vp of viewports) {
    const context = await browser.newContext({
      viewport: { width: vp.width, height: vp.height },
      deviceScaleFactor: 1,
      colorScheme: theme,
    })
    const page = await context.newPage()

    for (const p of pages) {
      const url = base + p.path
      try {
        await page.goto(url, { waitUntil: 'networkidle', timeout: 15000 })
        // Apply theme explicitly since color-mode uses a class on <html>
        if (theme === 'dark') {
          await page.evaluate(() => {
            document.documentElement.classList.add('dark')
            localStorage.setItem('nuxt-color-mode', 'dark')
          })
          await page.waitForTimeout(150)
        }
        const file = `${outDir}/${theme}__${vp.name}__${p.slug}.png`
        await page.screenshot({ path: file, fullPage: true })
        console.log(`✓ ${theme} ${vp.name.padEnd(7)} ${p.slug.padEnd(8)} → ${file}`)
      } catch (err) {
        console.error(`✗ ${theme} ${vp.name} ${p.slug}: ${err.message}`)
      }
    }
    await context.close()
  }
}

await browser.close()
console.log('\nDone.')
