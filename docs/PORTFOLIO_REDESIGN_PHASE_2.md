# Portfolio Redesign — Phase 2 Architecture & Preparation

## Scope

This document records an implementation plan for a cinematic, space-inspired portfolio. It is preparation only: no redesign, asset creation, dependency installation, or application-code changes are part of this phase. The existing React + Vite site should remain the working baseline until a later phase is approved.

## 1. Current architecture audit

- **Application:** `src/main.jsx` mounts `src/App.jsx`; `App.jsx` assembles the navbar, page sections, and footer as a single scrolling page. Vite serves `index.html` and bundles the app.
- **Section flow today:** Hero → Selected Work → Stack → Services → About → Achievements → Testimonials → Contact. The requested order differs and should be changed deliberately in a later implementation phase, with anchor navigation updated at the same time.
- **Components:** `src/components/` contains `Navbar`, `Footer`, `ProjectCard`, `SectionHeader`, `StackBadge`, and `TestimonialCard`. `src/sections/` contains the eight current page sections.
- **Styles:** Styling is primarily Tailwind utility classes in JSX, enabled by `@tailwindcss/vite`. `src/index.css` imports Tailwind and defines the global reset, focus styles, scrollbar, and theme tokens. There is no separate component stylesheet architecture.
- **Motion and icons:** Existing Framer Motion imports provide section/card reveals and Hero motion values. Lucide React provides the current interface icons.
- **Data:** `src/data/portfolioData.js` holds the consolidated `personalInfo`, `socialLinks`, `projects`, `skills`, `services`, `achievements`, and `testimonials` exports. Existing sections still import their original category-specific files; using the consolidated module across the app is a future migration, not a Phase 2 change.
- **Current portfolio content:** The project archive must remain exactly Kisan Setu and Royal Rajasthani Wedding Invitation. The source project data has GitHub profile URLs in its `githubUrl` fields; these are not dedicated repositories. Future project UI must not present them as project source links. The consolidated projects have no project-level GitHub URL.
- **Assets:** `public/` currently contains `favicon.svg` and four PNG files under `public/images/` (one named `avatar.png` and three Gemini-generated image files). There are no current project screenshot assets, `public/assets/` structure, or ambient audio files. Confirm the identity and intended use of existing images before reusing them.
- **Metadata and fonts:** `index.html` contains portfolio metadata and Google Fonts preconnect hints, but no font stylesheet request. `src/index.css` declares Inter and JetBrains Mono font-family stacks; the font names are not themselves font files. Space Grotesk is not currently configured or loaded.
- **Dependencies:** `package.json` includes React, React DOM, Vite, Tailwind’s Vite plugin, Framer Motion, and Lucide React. No router, 3D renderer, audio library, backend, database, or authentication dependency is present or needed for the planned single-page experience.

## 2. Existing components worth preserving

- **`Navbar.jsx`:** Keep as the basis for accessible desktop/mobile anchor navigation and the WhatsApp call to action. Update labels, IDs, and destinations only in sync with the approved section order.
- **`Footer.jsx`:** Reuse the contact/social links, monogram, and back-to-top interaction; avoid maintaining duplicate social URL data when consolidating imports later.
- **`SectionHeader.jsx`:** Retain as a shared semantic heading component. Its present visual treatment can be restyled during the implementation phase.
- **`ProjectCard.jsx`:** Reuse its project fields, feature list, and language breakdown rendering. First reconcile the source-link CTA with the absence of actual repository URLs; retain only verified project destinations.
- **`StackBadge.jsx`:** Reuse for skill labels if it remains useful in the approved design.
- **`TestimonialCard.jsx`:** Reuse its quote/name/relation/project presentation and preserve the original testimonial text.
- **Existing sections:** `About`, `Stack`, `SelectedWork`, `Services`, `Achievements`, `Testimonials`, and `Contact` already render the corresponding content and are candidates to adapt rather than replace wholesale.
- **`Hero.jsx`:** Already includes a generated starfield, pointer-responsive subtle movement, and entrance motion. Evaluate reducing or adapting this effect rather than layering a second always-running starfield on top.

Preserving a component does not require preserving its current visual styling. Any visual change is deferred to the implementation phase.

## 3. Proposed component structure

Keep the current single-page React architecture and grow it only where there is a concrete need:

```text
src/
  App.jsx                         # Page composition and agreed section order
  components/
    Navbar.jsx                    # Accessible in-page navigation
    Footer.jsx                    # Contact links and back-to-top
    SectionHeader.jsx             # Shared section headings
    ProjectCard.jsx               # Adapted project archive entry
    StackBadge.jsx                # Optional skill label
    TestimonialCard.jsx           # Adapted crew transmission
    JourneyIntro.jsx              # Optional, dismissible/skip-ready opening
    SpaceBackdrop.jsx             # Optional shared, low-cost atmosphere
  sections/
    Hero.jsx                      # Explorer identity and primary actions
    About.jsx                     # Existing biography and working approach
    Stack.jsx                     # Mission Equipment
    SelectedWork.jsx              # Mission Archives
    Services.jsx                  # What I Can Build
    Achievements.jsx              # Mission Milestones
    Testimonials.jsx              # Crew Transmissions
    Contact.jsx                   # Establish Connection
  data/
    portfolioData.js              # Consolidated content source
  index.css                       # Existing global styles plus approved tokens
```

`JourneyIntro` and `SpaceBackdrop` are proposed abstractions, not mandatory additions. Keep a section’s background local if no sharing benefit exists. Avoid introducing a canvas/WebGL abstraction or routing layer for a single page.

## 4. Section-by-section implementation plan

Implement later in the specified order and wire stable, unique IDs to navigation. Keep the order and links consistent between `App.jsx`, `Navbar.jsx`, and any in-page calls to action.

1. **Opening Experience — A Journey Begins:** A restrained, short entry into the portfolio’s atmosphere, not a blocking loading screen. Provide an obvious “Enter/Skip” action, support keyboard and touch, and avoid delaying access to content or trapping focus.
2. **Hero — The Explorer:** Use `personalInfo` for name, role, headline, location, and availability; provide clear paths to work and contact. Reuse/adapt the current Hero starfield only if its movement remains subtle and respects reduced-motion preferences.
3. **About — The Human Behind the Mission:** Preserve the existing biography and working approach. Treat the profile image as optional until its source, crop, and rights are confirmed.
4. **Skills — Mission Equipment:** Render all five existing categories from `skills`; do not invent technologies or proficiency rankings.
5. **Projects — Mission Archives:** Feature exactly Kisan Setu and Royal Rajasthani Wedding Invitation, preserving their descriptions, feature lists, technology breakdowns, team/role fields, and verified live URLs. Do not add a repository link unless a dedicated repository is supplied.
6. **Services — What I Can Build:** Use the existing four services and descriptions.
7. **Achievements — Mission Milestones:** Preserve the actual SIH Internal Round and Production Web Deployments wording and scope. Do not imply external selection, awards, or production reach beyond existing evidence.
8. **Testimonials — Crew Transmissions:** Preserve names, exact quotes, relations, and project associations for Mahi Singh, Anuj Kumar, and Divyansh Rai.
9. **Contact — Establish Connection:** Reuse the verified email, GitHub profile, LinkedIn, WhatsApp, and location information; ensure links are keyboard-accessible and external links are safe.

## 5. Design tokens

Use the requested values as initial design tokens for exploration, subject to contrast checks and visual testing:

| Token | Value | Intended use |
|---|---|---|
| Deep Space | `#070A12` | Main background |
| Nebula Navy | `#111C2C` | Secondary surfaces |
| Cosmic Blue | `#83B8DB` | Interactive/visual accent |
| Stellar Gold | `#D8B47A` | Restrained highlight |
| Starlight | `#E7EAF0` | Primary text |
| Nebula Grey | `#8491A5` | Secondary text |

Define tokens centrally in the existing Tailwind theme/global CSS instead of repeating raw colors throughout JSX. Validate text and control contrast before finalizing accents. Avoid using every accent at once or relying on color alone to convey state.

**Typography direction:** Space Grotesk for headings, Inter for body, and JetBrains Mono for technical labels. Inter and JetBrains Mono are currently present only in CSS font-family declarations/fallback stacks, not loaded font resources; Space Grotesk is not configured. Before adding font delivery, choose a reliable source and loading strategy (self-hosted licensed files or a documented external font service), provide local/system fallbacks, and avoid blocking text rendering. No typography dependency is needed.

## 6. Asset folder plan

Organize future, rights-cleared assets under `public/assets/`:

```text
public/assets/
  space/
    backgrounds/
    celestial/
  profile/
  projects/
    kisan-setu/
    royal-rajasthani-wedding/
  icons/
  audio/
```

- Use optimized WebP for photographic backgrounds, astronomical imagery, profile imagery, and project screenshots when browser support and source quality permit. Keep SVG for simple authored icons/logos and preserve meaningful transparency where needed.
- Prefer appropriately sized responsive imagery (`srcset`/`sizes` where justified), explicit width/height or aspect ratio, compression, and descriptive filenames. Do not ship oversized originals as page backgrounds.
- Use only original, licensed, or otherwise rights-cleared space visuals. Do not use Interstellar movie stills, marks/logos, or soundtrack recordings.
- Request actual screenshots for both existing projects before populating those folders. Do not use generated imagery as a substitute for real project UI.
- Ambient audio is optional and should be omitted unless it adds clear value. If added, it must start disabled, have an explicit visitor-controlled enable/disable action, and never autoplay.
- This is a proposed organization only; no directories or assets are created in Phase 2.

## 7. Animation and interaction plan

- Keep motion rare and purposeful: slow, low-contrast starfield drift; limited parallax tied to pointer/scroll only where it remains comfortable; short text reveals on entry; and subtle hover/focus feedback.
- Use gentle planetary/celestial movement only if it can be achieved without heavy assets, continuous expensive rendering, or distracting loops.
- Prefer CSS transforms/opacity or existing Framer Motion primitives; avoid animating layout properties and avoid stacking competing motion systems.
- Avoid constant attention-demanding movement. Pause or simplify decorative motion when off-screen, when the document is hidden, or on constrained/mobile devices where feasible.
- Honor `prefers-reduced-motion` in CSS and Framer Motion; provide a static atmosphere and immediate readable content when motion is reduced.
- Keep anchor navigation predictable, use semantic links and headings, ensure visible keyboard focus, and make any opening experience skippable and non-blocking.
- Audio defaults to off and requires an explicit visitor action. Do not autoplay audio.

## 8. Dependencies to reuse or potentially add

**Reuse existing dependencies:** React for composition; Vite for development/build; Tailwind’s existing Vite integration and global CSS for layout/tokens; Framer Motion for restrained optional transitions; and Lucide React for consistent icons.

**No additional dependency is currently necessary.** A CSS/SVG atmosphere or the existing starfield is sufficient for the stated scope; no 3D requirement justifies Three.js/WebGL. A single-page anchor layout does not require a router. Do not add an audio library unless a later, approved feature demonstrates a specific need.

If requirements change, evaluate a new dependency only against a concrete feature, mobile performance, bundle cost, maintenance, accessibility, and whether current browser APIs or installed tools already solve the problem.

## 9. Responsive and performance considerations

- Design mobile-first: maintain readable line lengths, touch-sized controls, legible type, and a clear section hierarchy on narrow screens.
- Keep the opening and primary portfolio content fast and immediately accessible. Do not make visitors wait for a scene, video, audio, or large background to load.
- Lazy-load below-the-fold images; prioritize only a genuinely above-the-fold hero visual. Include intrinsic image dimensions/aspect ratios to reduce layout shift.
- Optimize and appropriately size images; use WebP where suitable. Avoid video backgrounds, excessive blur/filter layers, oversized DOM starfields, and unnecessary 3D rendering.
- Limit continuous animation work; prefer transform/opacity, avoid pointer-driven effects on touch-only contexts, and honor reduced-motion preferences.
- Keep core text and navigation usable when images, external fonts, or motion are unavailable. Use fallback backgrounds and font stacks.
- Validate at mobile and desktop breakpoints, with keyboard navigation, reduced-motion settings, and production build checks before shipping a later phase.

## 10. Future file impact (not part of Phase 2)

**Expected future modifications, subject to approval:**

- `src/App.jsx` — new section sequence and any opening component.
- `src/components/Navbar.jsx` and `src/components/Footer.jsx` — anchor labels/IDs and any data-link cleanup.
- Existing section JSX files — content composition, presentation, responsive layout, and import migration.
- `src/components/ProjectCard.jsx` — remove or conditionally render the source-code link unless a dedicated repository URL exists.
- `src/index.css` — approved tokens, font loading/fallback rules, reduced-motion styles, and global visual treatment.
- `index.html` — only if future font loading or metadata adjustments are required.
- `src/data/portfolioData.js` — preserve as the consolidated content source; update only for confirmed information.
- `public/assets/` — future reviewed, optimized, rights-cleared assets; not created now.

**Potential future additions:** `JourneyIntro.jsx` and, only if needed, `SpaceBackdrop.jsx`. No new page, route, backend, database, or authentication files are planned.

**Preserve:** Existing original data modules until consumers have been migrated and verified; current project information and testimonial wording; existing deployment/build setup; favicon and any verified useful existing assets. Do not remove legacy modules as part of an initial visual implementation.

## 11. Risks and safeguards

| Risk | Safeguard |
|---|---|
| Section order changes but anchors do not | Define stable IDs and update `App.jsx`, navbar links, and CTAs together; verify all destinations. |
| Existing components are replaced unnecessarily | Adapt and retain components where their behavior/data rendering fits; introduce new components only for a clear responsibility. |
| Project cards imply a GitHub repository that does not exist | Do not use the GitHub profile as a project repository; show only verified live URLs unless a dedicated repo is confirmed. |
| Consolidated and legacy data diverge during migration | Migrate imports deliberately, compare values, and retain legacy files until all consumers and builds are verified. |
| Large imagery or motion slows mobile | Use optimized responsive images, defer below-fold loading, minimize continuous effects, and test on mobile-sized viewports. |
| Fonts delay rendering or fail to load | Provide system fallbacks, avoid blocking font loading, and verify local behavior without the external font service. |
| Atmospheric treatment harms legibility/accessibility | Maintain contrast, semantic structure, keyboard access, reduced-motion alternatives, and content availability without effects. |
| Opening sequence obstructs content or accessibility | Keep it short, optional/skippable, keyboard-operable, and never a prerequisite for reaching the portfolio. |
| Unlicensed media is introduced | Use only original or appropriately licensed assets; exclude film imagery, branding, and soundtrack recordings. |
| Broad app/CSS changes break the working baseline | Make future visual work in approved, reviewable increments and run lint/build plus responsive/accessibility checks. |

## Phase 2 completion boundary

Only this planning document is created in Phase 2. Existing JSX, CSS, data modules, dependencies, assets, routes, and runtime behavior are intentionally unchanged. Phase 3 requires explicit approval.
