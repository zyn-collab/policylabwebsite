# Cities Landing Page – Build Guide

## What this is

A landing page for Public Policy Lab's urbanism work, to live at something like cities.policylabmv.com. It's a visually compelling, browseable collection of urbanist policy projects – transport, third spaces, street design, city identity – with an event calendar and links out to individual project pages/articles.

## Design principles

- **Visually interesting and dynamic**, not a wall of text, but also not decorative for its own sake
- **Design serves the content.** If a visual element (stat callout, gradient box, icon) doesn't communicate something the user actually benefits from seeing highlighted, cut it. The test: would someone browsing this page learn something useful from the visual treatment alone, or is it just filling a template slot?
- **No template-filling.** Don't pull out a random number into a callout box just because the design has a slot for a number. "43.5% of road width blocked by parking" communicates something. "5 proposed route changes" doesn't – the interesting thing is the routes themselves, not the count.
- **Match the feel of the existing PolicyLab site** (new.policylabmv.com) without being identical. Clean, professional, slightly editorial. Not corporate SaaS, not blog-casual.
- **Scroll-driven and flowing.** Content reveals as you scroll. Cards, maps, and sections feel like browsing a gallery of ideas, not reading a report.
- **No emoji in project cards or headings.** 
- **Proper typography.** Serif for headings (Source Serif 4 or similar), sans for body (DM Sans). Headings need adequate letter-spacing – don't let them look squished.

## Content structure

### 1. Hero
- Single compelling question framing the whole project: "What would Malé look like if it were built for the people who live in it?"
- Short subtitle identifying this as Public Policy Lab's urbanism work
- Clean, not overly dark/dramatic. Can have subtle visual interest but not a heavy gradient

### 2. Event calendar strip
- Horizontal scrollable row of upcoming events
- Film screenings and poetry nights alternating every two weeks starting 28 March 2026:
  - 28 Mar: In the Mood for Love (film)
  - 11 Apr: Poetry night
  - 25 Apr: Princess Mononoke (film)
  - 9 May: Poetry night  
  - 23 May: The Blair Witch Project (film)
  - 6 Jun: Poetry night
- These are free community events run by PPL as part of the cultural programming pilot
- Brief note linking down to the third spaces / cultural programming section for context

### 3. Project sections
Group by theme. Each section gets a clean header. Projects within each section can have different visual treatments based on how much there is to show:

**Transport & mobility**
- **Bus routes** (FEATURED – has interactive maps): This is the flagship piece. Show the embedded map (embed_carnival-velaanaage.html) as a real visual, not a gradient box. Link to BusRoutes_Article.html for the full interactive article with all 5 routes, stop-by-stop maps, and coverage analysis.
- **Street parking research**: Field measurements showing 43.5% of road width blocked. This stat actually communicates something if used.
- **Elderly shuttle**: Smaller/in-progress item. Working with Israhvehinge Naadhee.

**Third spaces & cultural life**
- **Third spaces policy framework**: Led to a Cabinet decision in Nov 2024. This is a real policy outcome.
- **Community cultural programming pilot**: Film screenings and poetry nights, 6-16 people per event. The finding is that people show up to free events on slow nights. Scaling across venues.
- **Network of small venues**: The policy brief for distributed mini-venues.

**Streets, greenery & heat**  
- **Greenery estimation**: Malé at 12-16% vs 40% threshold for cooling. Northern Hulhumalé at 30-45%.
- (Street parking research also relevant here – can cross-reference)

**City identity & design**
- **Maldivian urban design language**: Guidelines based on Medhuziyaaraiy/Hukuru Miskiyy complex.
- **Old City and Capital District**: Concept for pedestrianised government/historical core. 35% of streets already vehicle-free.

### 4. Footer
Link back to PolicyLab main site, contact, note that urbanism is one of four focus areas.

## Embed files available

These HTML files should be in the same directory. They use CartoDB Voyager tiles (no OSM 403 issues in iframes):

- `embed_hulhumale-bypass.html` – Hulhumalé Bypass route
- `embed_carnival-velaanaage.html` – Carnival–Velaanaage route  
- `embed_westpark-jumhooree.html` – West Park–Jumhooree Maidaan route
- `embed_westpark-majeedhee.html` – West Park–Majeedhee route
- `embed_ameenee-majeedhee.html` – Ameenee–Majeedhee route
- `BusRoutes_Article.html` – Full article with all routes, prose, and coverage analysis

## Writing style

Follow the intentional-writing and avoid-ai-style skill files. Key points:

- Go straight into substance, no setup-pivot-reveal openings
- No short declarative pivot sentences used as rhetorical punctuation
- No parallel sentence structures used as rhetorical devices
- No evaluative adjectives as substitutes for evidence ("transformative", "game-changing")
- No dramatic closers that add emphasis without information
- No filler bridge sentences ("This manifests in several key ways")
- Descriptions should be specific and concrete, not marketing copy
- Use " – " (en dash with spaces) not "—" (em dash)
- Sentence case for everything, not Title Case
- The tone is intellectually rigorous but accessible, passionately argumentative, compassionately non-judgmental (locates responsibility with systems not individuals)

## What to avoid

- Stat-in-gradient-box pattern where a number is pulled out just to fill a visual template slot
- Marketing-speak ("game-changing", "transformative", "cutting-edge")
- Walls of body text on what should be a browseable landing page
- Pure text with no visual interest – the page should look good and be dynamic
- Template-feeling layouts where content is obviously squeezed into pre-made slots