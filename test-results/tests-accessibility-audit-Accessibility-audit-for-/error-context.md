# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: tests\accessibility\audit.spec.ts >> Accessibility audit for /
- Location: tests\accessibility\audit.spec.ts:13:7

# Error details

```
Error: expect(received).toEqual(expected) // deep equality

- Expected  -   1
+ Received  + 392

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
+               "bgColor": "#ffffff",
+               "contrastRatio": 3.41,
+               "expectedContrastRatio": "4.5:1",
+               "fgColor": "#c37b0a",
+               "fontSize": "15.0pt (20px)",
+               "fontWeight": "normal",
+               "messageKey": null,
+             },
+             "id": "color-contrast",
+             "impact": "serious",
+             "message": "Element has insufficient color contrast of 3.41 (foreground color: #c37b0a, background color: #ffffff, font size: 15.0pt (20px), font weight: normal). Expected contrast ratio of 4.5:1",
+             "relatedNodes": Array [],
+           },
+         ],
+         "failureSummary": "Fix any of the following:
+   Element has insufficient color contrast of 3.41 (foreground color: #c37b0a, background color: #ffffff, font size: 15.0pt (20px), font weight: normal). Expected contrast ratio of 4.5:1",
+         "html": "<p class=\"text-xl text-ranko-600 max-w-2xl mx-auto leading-relaxed\" data-v-02281a80=\"\">sections.welcome_message</p>",
+         "impact": "serious",
+         "none": Array [],
+         "target": Array [
+           ".text-ranko-600",
+         ],
+       },
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
+     "description": "Ensure the order of headings is semantically correct",
+     "help": "Heading levels should only increase by one",
+     "helpUrl": "https://dequeuniversity.com/rules/axe/4.11/heading-order?application=playwright",
+     "id": "heading-order",
+     "impact": "moderate",
+     "nodes": Array [
+       Object {
+         "all": Array [],
+         "any": Array [
+           Object {
+             "data": null,
+             "id": "heading-order",
+             "impact": "moderate",
+             "message": "Heading order invalid",
+             "relatedNodes": Array [],
+           },
+         ],
+         "failureSummary": "Fix any of the following:
+   Heading order invalid",
+         "html": "<h4 class=\"h4 service-item-title\" data-v-e7692a85=\"\">Claude Code</h4>",
+         "impact": "moderate",
+         "none": Array [],
+         "target": Array [
+           ".service-item.paper-panel.overflow-hidden:nth-child(1) > .service-content-box.z-10[data-v-e7692a85=\"\"] > .service-item-title",
+         ],
+       },
+       Object {
+         "all": Array [],
+         "any": Array [
+           Object {
+             "data": null,
+             "id": "heading-order",
+             "impact": "moderate",
+             "message": "Heading order invalid",
+             "relatedNodes": Array [],
+           },
+         ],
+         "failureSummary": "Fix any of the following:
+   Heading order invalid",
+         "html": "<h4 class=\"h4 project-item-title\" data-v-d57433fc=\"\">Timetable Guide</h4>",
+         "impact": "moderate",
+         "none": Array [],
+         "target": Array [
+           ".project-item-title",
+         ],
+       },
+     ],
+     "tags": Array [
+       "cat.semantics",
+       "best-practice",
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
+     "description": "Ensure <li> elements are used semantically",
+     "help": "<li> elements must be contained in a <ul> or <ol>",
+     "helpUrl": "https://dequeuniversity.com/rules/axe/4.11/listitem?application=playwright",
+     "id": "listitem",
+     "impact": "serious",
+     "nodes": Array [
+       Object {
+         "all": Array [],
+         "any": Array [
+           Object {
+             "data": null,
+             "id": "listitem",
+             "impact": "serious",
+             "message": "List item does not have a <ul>, <ol> parent element",
+             "relatedNodes": Array [],
+           },
+         ],
+         "failureSummary": "Fix any of the following:
+   List item does not have a <ul>, <ol> parent element",
+         "html": "<li class=\"about-item paper-panel relative overflow-hidden\" data-v-02281a80=\"\" data-v-631d641a=\"\">",
+         "impact": "serious",
+         "none": Array [],
+         "target": Array [
+           ".about-item",
+         ],
+       },
+     ],
+     "tags": Array [
+       "cat.structure",
+       "wcag2a",
+       "wcag131",
+       "EN-301-549",
+       "EN-9.1.3.1",
+       "RGAAv4",
+       "RGAA-9.3.1",
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
+         "html": "<div class=\"nuxt-devtools-panel-content nuxt-devtools-label\" title=\"Page load time\"><div class=\"nuxt-devtools-label-main\">55</div><span class=\"nuxt-devtools-label-secondary\">ms</span></div>",
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
      - article [ref=e65]:
        - generic [ref=e66]:
          - heading "About" [level=1] [ref=e67]
          - paragraph [ref=e68]: sections.welcome_message
        - listitem [ref=e71]:
          - paragraph [ref=e73]: Senior Software Engineer with over 10 years of experience transforming complex customer requirements into high-value software solutions. I specialize in .Net Core, MySQL, and Vue, with a strong background in the trading sector. I'm proficient with modern cloud and DevOps technologies including Docker, AWS, Azure, and Kubernetes. I leverage AI-powered tools like Claude Code to accelerate development and deliver quality results.
        - generic [ref=e74]:
          - heading "Skills" [level=2] [ref=e76]
          - list [ref=e78]:
            - listitem [ref=e79]:
              - img [ref=e81]
              - generic [ref=e83]:
                - heading "Claude Code" [level=4] [ref=e84]
                - paragraph [ref=e85]: I use Claude Code, an AI-powered coding assistant by Anthropic, to accelerate development, improve code quality, and streamline complex tasks.
            - listitem [ref=e86]:
              - img [ref=e88]
              - generic [ref=e92]:
                - heading "Vue" [level=4] [ref=e93]
                - paragraph [ref=e94]: I use Vue, a progressive JavaScript framework, to create interactive and dynamic web interfaces.
            - listitem [ref=e95]:
              - img [ref=e97]
              - generic [ref=e101]:
                - heading ".Net Core" [level=4] [ref=e102]
                - paragraph [ref=e103]: I use .Net Core, an open-source framework by Microsoft, for crafting modern, cross-platform applications predominantly with C#.
            - listitem [ref=e104]:
              - img [ref=e106]
              - generic [ref=e111]:
                - heading "Azure" [level=4] [ref=e112]
                - paragraph [ref=e113]: I utilize Azure, Microsoft's cloud computing service, to deploy, manage, and scale applications on a global scale.
        - generic [ref=e114]:
          - heading "Pet Projects" [level=2] [ref=e116]
          - list [ref=e118]:
            - listitem [ref=e119]:
              - link "View Timetable Guide" [ref=e120] [cursor=pointer]:
                - /url: https://timetable.guide
                - img [ref=e122]
                - generic [ref=e124]:
                  - heading "Timetable Guide" [level=4] [ref=e125]
                  - paragraph [ref=e126]: Prague public transport timetable. Easily select a nearby stop and monitor metro, tram, trolleybus, and bus departures live.
                  - text: https://timetable.guide
    - generic [ref=e127]:
      - generic [ref=e128]: This site use cookies! 🍪
      - img [ref=e130] [cursor=pointer]
  - generic:
    - img
  - generic [ref=e132]:
    - button "Toggle Nuxt DevTools" [ref=e133] [cursor=pointer]:
      - img [ref=e134]
    - generic "Page load time" [ref=e137]:
      - generic [ref=e138]: "55"
      - generic [ref=e139]: ms
    - button "Toggle Component Inspector" [ref=e141] [cursor=pointer]:
      - img [ref=e142]
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