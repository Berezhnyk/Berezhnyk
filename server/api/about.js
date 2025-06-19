import { defineEventHandler, setHeader } from 'h3'
import { aboutData } from '~/data/about.js'

export default defineEventHandler((event) => {
  // Set cache headers that consider locale variations
  setHeader(event, 'cache-control', 's-maxage=3600, stale-while-revalidate=3600')
  setHeader(event, 'vary', 'accept-language, cookie')
  
  return aboutData
})
