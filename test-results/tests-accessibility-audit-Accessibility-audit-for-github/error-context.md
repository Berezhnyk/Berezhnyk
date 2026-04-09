# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: tests\accessibility\audit.spec.ts >> Accessibility audit for /github
- Location: tests\accessibility\audit.spec.ts:13:7

# Error details

```
Error: expect(received).toEqual(expected) // deep equality

- Expected  -   1
+ Received  + 279

- Array []
+ Array [
+   Object {
+     "description": "Ensure buttons have discernible text",
+     "help": "Buttons must have discernible text",
+     "helpUrl": "https://dequeuniversity.com/rules/axe/4.11/button-name?application=playwright",
+     "id": "button-name",
+     "impact": "critical",
+     "nodes": Array [
+       Object {
+         "all": Array [],
+         "any": Array [
+           Object {
+             "data": null,
+             "id": "button-has-visible-text",
+             "impact": "critical",
+             "message": "Element does not have inner text that is visible to screen readers",
+             "relatedNodes": Array [],
+           },
+           Object {
+             "data": null,
+             "id": "aria-label",
+             "impact": "critical",
+             "message": "aria-label attribute does not exist or is empty",
+             "relatedNodes": Array [],
+           },
+           Object {
+             "data": null,
+             "id": "aria-labelledby",
+             "impact": "critical",
+             "message": "aria-labelledby attribute does not exist, references elements that do not exist or references elements that are empty",
+             "relatedNodes": Array [],
+           },
+           Object {
+             "data": Object {
+               "messageKey": "noAttr",
+             },
+             "id": "non-empty-title",
+             "impact": "critical",
+             "message": "Element has no title attribute",
+             "relatedNodes": Array [],
+           },
+           Object {
+             "data": null,
+             "id": "implicit-label",
+             "impact": "critical",
+             "message": "Element does not have an implicit (wrapped) <label>",
+             "relatedNodes": Array [],
+           },
+           Object {
+             "data": null,
+             "id": "explicit-label",
+             "impact": "critical",
+             "message": "Element does not have an explicit <label>",
+             "relatedNodes": Array [],
+           },
+           Object {
+             "data": null,
+             "id": "presentational-role",
+             "impact": "critical",
+             "message": "Element's default semantics were not overridden with role=\"none\" or role=\"presentation\"",
+             "relatedNodes": Array [],
+           },
+         ],
+         "failureSummary": "Fix any of the following:
+   Element does not have inner text that is visible to screen readers
+   aria-label attribute does not exist or is empty
+   aria-labelledby attribute does not exist, references elements that do not exist or references elements that are empty
+   Element has no title attribute
+   Element does not have an implicit (wrapped) <label>
+   Element does not have an explicit <label>
+   Element's default semantics were not overridden with role=\"none\" or role=\"presentation\"",
+         "html": "<button data-v-2a295ead=\"\" class=\"glass-toggle-button relative overflow-hidden\">",
+         "impact": "critical",
+         "none": Array [],
+         "target": Array [
+           ".glass-toggle-button",
+         ],
+       },
+     ],
+     "tags": Array [
+       "cat.name-role-value",
+       "wcag2a",
+       "wcag412",
+       "section508",
+       "section508.22.a",
+       "TTv5",
+       "TT6.a",
+       "EN-301-549",
+       "EN-9.4.1.2",
+       "ACT",
+       "RGAAv4",
+       "RGAA-11.9.1",
+     ],
+   },
+   Object {
+     "description": "Ensure the contrast between foreground and background colors meets WCAG 2 AA minimum contrast ratio thresholds",
+     "help": "Elements must meet minimum color contrast ratio thresholds",
+     "helpUrl": "https://dequeuniversity.com/rules/axe/4.11/color-contrast?application=playwright",
+     "id": "color-contrast",
+     "impact": "serious",
+     "nodes": Array [
+       Object {
+         "all": Array [],
+         "any": Array [
+           Object {
+             "data": Object {
+               "bgColor": "#b3b3b3",
+               "contrastRatio": 2,
+               "expectedContrastRatio": "4.5:1",
+               "fgColor": "#fafafa",
+               "fontSize": "12.0pt (16px)",
+               "fontWeight": "normal",
+               "messageKey": null,
+             },
+             "id": "color-contrast",
+             "impact": "serious",
+             "message": "Element has insufficient color contrast of 2 (foreground color: #fafafa, background color: #b3b3b3, font size: 12.0pt (16px), font weight: normal). Expected contrast ratio of 4.5:1",
+             "relatedNodes": Array [
+               Object {
+                 "html": "<div data-v-b0c79161=\"\" class=\"left-1/2 transform -translate-x-1/2 md:w-[25%] w-[90%] glass-panel bottom-5 fixed z-[100] flex items-center justify-between overflow-hidden\">",
+                 "target": Array [
+                   ".left-1\\/2",
+                 ],
+               },
+               Object {
+                 "html": "<div data-v-2a8638ae=\"\" class=\"h-full rounded-xl p-6 flex flex-col glass-panel relative overflow-hidden\">",
+                 "target": Array [
+                   ".github:nth-child(2) > .h-full.rounded-xl.p-6",
+                 ],
+               },
+             ],
+           },
+         ],
+         "failureSummary": "Fix any of the following:
+   Element has insufficient color contrast of 2 (foreground color: #fafafa, background color: #b3b3b3, font size: 12.0pt (16px), font weight: normal). Expected contrast ratio of 4.5:1",
+         "html": "<span data-v-b0c79161=\"\" class=\"text-[#fafafa] relative z-10\">This site use cookies! 🍪</span>",
+         "impact": "serious",
+         "none": Array [],
+         "target": Array [
+           ".text-\\[\\#fafafa\\]",
+         ],
+       },
+     ],
+     "tags": Array [
+       "cat.color",
+       "wcag2aa",
+       "wcag143",
+       "TTv5",
+       "TT13.c",
+       "EN-301-549",
+       "EN-9.1.4.3",
+       "ACT",
+       "RGAAv4",
+       "RGAA-3.2.1",
+     ],
+   },
+   Object {
+     "description": "Ensure links have discernible text",
+     "help": "Links must have discernible text",
+     "helpUrl": "https://dequeuniversity.com/rules/axe/4.11/link-name?application=playwright",
+     "id": "link-name",
+     "impact": "serious",
+     "nodes": Array [
+       Object {
+         "all": Array [],
+         "any": Array [
+           Object {
+             "data": null,
+             "id": "has-visible-text",
+             "impact": "serious",
+             "message": "Element does not have text that is visible to screen readers",
+             "relatedNodes": Array [],
+           },
+           Object {
+             "data": null,
+             "id": "aria-label",
+             "impact": "serious",
+             "message": "aria-label attribute does not exist or is empty",
+             "relatedNodes": Array [],
+           },
+           Object {
+             "data": null,
+             "id": "aria-labelledby",
+             "impact": "serious",
+             "message": "aria-labelledby attribute does not exist, references elements that do not exist or references elements that are empty",
+             "relatedNodes": Array [],
+           },
+           Object {
+             "data": Object {
+               "messageKey": "noAttr",
+             },
+             "id": "non-empty-title",
+             "impact": "serious",
+             "message": "Element has no title attribute",
+             "relatedNodes": Array [],
+           },
+         ],
+         "failureSummary": "Fix all of the following:
+   Element is in tab order and does not have accessible text
+
+ Fix any of the following:
+   Element does not have text that is visible to screen readers
+   aria-label attribute does not exist or is empty
+   aria-labelledby attribute does not exist, references elements that do not exist or references elements that are empty
+   Element has no title attribute",
+         "html": "<a href=\"mailto:ivan@berezhnyk.net\" class=\"social-link glass-social-link\" data-v-3801e5de=\"\">",
+         "impact": "serious",
+         "none": Array [
+           Object {
+             "data": null,
+             "id": "focusable-no-name",
+             "impact": "serious",
+             "message": "Element is in tab order and does not have accessible text",
+             "relatedNodes": Array [],
+           },
+         ],
+         "target": Array [
+           ".social-link",
+         ],
+       },
+     ],
+     "tags": Array [
+       "cat.name-role-value",
+       "wcag2a",
+       "wcag244",
+       "wcag412",
+       "section508",
+       "section508.22.a",
+       "TTv5",
+       "TT6.a",
+       "EN-301-549",
+       "EN-9.2.4.4",
+       "EN-9.4.1.2",
+       "ACT",
+       "RGAAv4",
+       "RGAA-6.2.1",
+     ],
+   },
+   Object {
+     "description": "Ensure all page content is contained by landmarks",
+     "help": "All page content should be contained by landmarks",
+     "helpUrl": "https://dequeuniversity.com/rules/axe/4.11/region?application=playwright",
+     "id": "region",
+     "impact": "moderate",
+     "nodes": Array [
+       Object {
+         "all": Array [],
+         "any": Array [
+           Object {
+             "data": Object {
+               "isIframe": false,
+             },
+             "id": "region",
+             "impact": "moderate",
+             "message": "Some page content is not contained by landmarks",
+             "relatedNodes": Array [],
+           },
+         ],
+         "failureSummary": "Fix any of the following:
+   Some page content is not contained by landmarks",
+         "html": "<div class=\"nuxt-devtools-panel-content nuxt-devtools-label\" title=\"Page load time\"><div class=\"nuxt-devtools-label-main\">52</div><span class=\"nuxt-devtools-label-secondary\">ms</span></div>",
+         "impact": "moderate",
+         "none": Array [],
+         "target": Array [
+           Array [
+             "nuxt-devtools-frame",
+             ".nuxt-devtools-label",
+           ],
+         ],
+       },
+     ],
+     "tags": Array [
+       "cat.keyboard",
+       "best-practice",
+       "RGAAv4",
+       "RGAA-9.2.1",
+     ],
+   },
+ ]
```

# Page snapshot

```yaml
- generic [active] [ref=e1]:
  - main [ref=e4]:
    - complementary [ref=e5]:
      - generic [ref=e6]:
        - generic [ref=e7]:
          - link [ref=e8] [cursor=pointer]:
            - /url: mailto:ivan@berezhnyk.net
            - img [ref=e9]
          - img "en flag" [ref=e14] [cursor=pointer]
          - button [ref=e15] [cursor=pointer]:
            - img [ref=e17]
        - button "Show Contacts" [ref=e20] [cursor=pointer]:
          - generic [ref=e21]: Show Contacts
          - img [ref=e22]
      - generic [ref=e25]:
        - figure [ref=e26]:
          - img "Ivan Berezhnyk Photo" [ref=e27]
        - generic [ref=e28]:
          - heading "Ivan Berezhnyk" [level=1] [ref=e29]
          - paragraph [ref=e30]: API and Web Development, Senior Software Engineer
      - list [ref=e32]:
        - listitem [ref=e33]:
          - img [ref=e35]
          - generic [ref=e37]:
            - paragraph [ref=e38]: GitHub
            - link "berezhnyk" [ref=e39] [cursor=pointer]:
              - /url: https://github.com/berezhnyk
        - listitem [ref=e40]:
          - img [ref=e42]
          - generic [ref=e44]:
            - paragraph [ref=e45]: LinkedIn
            - link "Ivan Berezhnyk" [ref=e46] [cursor=pointer]:
              - /url: https://linkedin.com/in/berezhnyk/
        - listitem [ref=e47]:
          - img [ref=e49]
          - generic [ref=e52]:
            - paragraph [ref=e53]: Location
            - generic [ref=e54]: Czechia
    - generic [ref=e55]:
      - navigation [ref=e56]:
        - list [ref=e57]:
          - listitem [ref=e58]:
            - link "About" [ref=e59] [cursor=pointer]:
              - /url: /
          - listitem [ref=e60]:
            - link "Resume" [ref=e61] [cursor=pointer]:
              - /url: /resume
          - listitem [ref=e62]:
            - link "GitHub" [ref=e63] [cursor=pointer]:
              - /url: /github
      - article [ref=e64]:
        - heading "GitHub" [level=2] [ref=e66]
        - generic [ref=e68]:
          - generic [ref=e70]:
            - generic [ref=e71]:
              - img [ref=e72]
              - link "github-copilot-certification-study-guide" [ref=e74] [cursor=pointer]:
                - /url: https://github.com/Berezhnyk/github-copilot-certification-study-guide
            - generic [ref=e75]: A study guide for preparing to a GitHub Copilot certification generated by GitHub Copilot (Claude Sonnet 4)
            - generic [ref=e76]:
              - generic [ref=e79]: Python
              - generic [ref=e80]:
                - img "stars" [ref=e81]
                - generic [ref=e83]: "37"
              - generic [ref=e84]:
                - img "fork" [ref=e85]
                - generic [ref=e87]: "30"
          - generic [ref=e89]:
            - generic [ref=e90]:
              - img [ref=e91]
              - link "intruder-alerts" [ref=e93] [cursor=pointer]:
                - /url: https://github.com/Berezhnyk/intruder-alerts
            - generic [ref=e94]: Alerts you when untrusted players enter your render distance
            - generic [ref=e95]:
              - generic [ref=e98]: Java
              - generic [ref=e99]:
                - img "fork" [ref=e100]
                - generic [ref=e102]: "0"
          - generic [ref=e104]:
            - generic [ref=e105]:
              - img [ref=e106]
              - link "Berezhnyk" [ref=e108] [cursor=pointer]:
                - /url: https://github.com/Berezhnyk/Berezhnyk
            - generic [ref=e109]: Personal portfolio website built with Nuxt.js, Vue.js, and Tailwind CSS. Features multilingual support, GitHub API integration, and modern glass morphism design.
            - generic [ref=e110]:
              - generic [ref=e113]: Vue
              - generic [ref=e114]:
                - img "fork" [ref=e115]
                - generic [ref=e117]: "0"
          - generic [ref=e119]:
            - generic [ref=e120]:
              - img [ref=e121]
              - link "flowify" [ref=e123] [cursor=pointer]:
                - /url: https://github.com/Berezhnyk/flowify
            - generic [ref=e124]: A modern UML diagram editor built with Vue 3 and Mermaid.js. Features AI-powered assistance (OpenAI, Anthropic, LM Studio), real-time preview, 10 diagram types, multi-tab support, dark/light themes, and PNG export.
            - generic [ref=e125]:
              - generic [ref=e128]: Vue
              - generic [ref=e129]:
                - img "fork" [ref=e130]
                - generic [ref=e132]: "0"
          - generic [ref=e134]:
            - generic [ref=e135]:
              - img [ref=e136]
              - link "time-table" [ref=e138] [cursor=pointer]:
                - /url: https://github.com/Berezhnyk/time-table
            - generic [ref=e139]:
              - generic [ref=e142]: Vue
              - generic [ref=e143]:
                - img "fork" [ref=e144]
                - generic [ref=e146]: "0"
          - generic [ref=e148]:
            - generic [ref=e149]:
              - img [ref=e150]
              - link "VisualiZer" [ref=e152] [cursor=pointer]:
                - /url: https://github.com/Berezhnyk/VisualiZer
            - generic [ref=e153]: Library for visualize your data
            - generic [ref=e154]:
              - generic [ref=e157]: TypeScript
              - generic [ref=e158]:
                - img "stars" [ref=e159]
                - generic [ref=e161]: "1"
              - generic [ref=e162]:
                - img "fork" [ref=e163]
                - generic [ref=e165]: "0"
          - generic [ref=e167]:
            - generic [ref=e168]:
              - img [ref=e169]
              - link "homebrew-dotnet-secrets-tool" [ref=e171] [cursor=pointer]:
                - /url: https://github.com/Berezhnyk/homebrew-dotnet-secrets-tool
            - generic [ref=e175]: Ruby
          - generic [ref=e177]:
            - generic [ref=e178]:
              - img [ref=e179]
              - link "dotnet-secrets-tool" [ref=e181] [cursor=pointer]:
                - /url: https://github.com/Berezhnyk/dotnet-secrets-tool
            - generic [ref=e182]: A .NET 8 CLI tool that fetches GitLab CI/CD project-level variables via the GitLab API and writes them into the .NET user secrets storage.
            - generic [ref=e183]:
              - generic [ref=e186]: Shell
              - generic [ref=e187]:
                - img "stars" [ref=e188]
                - generic [ref=e190]: "1"
              - generic [ref=e191]:
                - img "fork" [ref=e192]
                - generic [ref=e194]: "0"
    - generic [ref=e195]:
      - generic [ref=e196]: This site use cookies! 🍪
      - img [ref=e198] [cursor=pointer]
  - generic:
    - img
  - generic [ref=e200]:
    - button "Toggle Nuxt DevTools" [ref=e201] [cursor=pointer]:
      - img [ref=e202]
    - generic "Page load time" [ref=e205]:
      - generic [ref=e206]: "52"
      - generic [ref=e207]: ms
    - button "Toggle Component Inspector" [ref=e209] [cursor=pointer]:
      - img [ref=e210]
```

# Test source

```ts
  1  | import { test, expect } from '@playwright/test';
  2  | import AxeBuilder from '@axe-core/playwright';
  3  | 
  4  | const BASE_URL = 'http://localhost:3005'; 
  5  | const pagesToAudit = [
  6  |   '/',
  7  |   '/apps',
  8  |   '/github',
  9  |   '/resume',
  10 | ];
  11 | 
  12 | for (const url of pagesToAudit) {
  13 |   test(`Accessibility audit for ${url}`, async ({ page }) => {
  14 |     await page.goto(`${BASE_URL}${url}`);
  15 |     // Wait for potential hydration or animations
  16 |     await page.waitForLoadState('networkidle');
  17 |     
  18 |     const accessibilityScanResults = await new AxeBuilder({ page }).analyze();
  19 | 
> 20 |     expect(accessibilityScanResults.violations).toEqual([]);
     |                                                 ^ Error: expect(received).toEqual(expected) // deep equality
  21 |   });
  22 | }
  23 | 
```