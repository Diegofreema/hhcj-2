## Design Goals
- Follow existing palette, typography, and layout to match site theme.
- Use semantic Tailwind classes (bg-background, text-foreground, border-primary) for consistency.
- Leverage shared components and animation utilities already in the repo.

## References
- Layout and fonts: [layout.tsx](file:///Users/mac/Desktop/hhcj/app/layout.tsx#L31-L37)
- Global theme tokens: [globals.css](file:///Users/mac/Desktop/hhcj/app/globals.css#L46-L113)
- Shared components: [page-hero.tsx](file:///Users/mac/Desktop/hhcj/features/shared/components/page-hero.tsx), [animated-text.tsx](file:///Users/mac/Desktop/hhcj/features/shared/components/animated-text.tsx), [animated-content.tsx](file:///Users/mac/Desktop/hhcj/features/shared/components/animated-content.tsx), [count-up.tsx](file:///Users/mac/Desktop/hhcj/features/shared/components/count-up.tsx), [blockquote.tsx](file:///Users/mac/Desktop/hhcj/features/shared/components/blockquote.tsx), [button.tsx](file:///Users/mac/Desktop/hhcj/components/ui/button.tsx), [card.tsx](file:///Users/mac/Desktop/hhcj/components/ui/card.tsx)
- Province page pattern: [ghana/page.tsx](file:///Users/mac/Desktop/hhcj/app/about-us/province/ghana/page.tsx), [ghana-client.tsx](file:///Users/mac/Desktop/hhcj/app/about-us/province/ghana/_components/ghana-client.tsx)

## Page Structure
- Metadata: add title and description for SEO similar to province pages.
- Hero: PageHero with title "HHCJ Kenya Region" and short subtitle. Gradient backdrop, subtle motion accents.
- Introduction: Narrative section using AnimatedText for headline and motion-staggered paragraphs.
- Timeline: Vertical timeline with key milestones (1989 arrival → 2008 regional status → present). Scroll-reveal and line grow animations.
- Impact Stats: CountUp cards (Convents: 10, Dioceses: 6, Founded: 1989, Vocations: many) with glassmorphism style.
- Dioceses: Animated badge grid for Eldoret, Mombasa, Nairobi, Kakamega, Ngong, Singida (TZ).
- Leadership: Card grid with names and roles, entrance/hover animations.
- Foundress Quote: Blockquote with gentle fade-in and accent border.
- CTA: Button(s) to learn more/contact, aligned to theme.

## Animations
- Use framer-motion for section/element variants (fade-up, stagger) as seen in [ghana-client.tsx](file:///Users/mac/Desktop/hhcj/app/about-us/province/ghana/_components/ghana-client.tsx#L40-L52).
- Use AnimatedText for headings for a refined split-text effect.
- Add subtle parallax decorative shapes (pure CSS or small motion transforms) without heavy assets.

## Content Modeling
- Define structured data arrays:
  - timeline: date, title, description.
  - stats: label, value, suffix.
  - dioceses: names.
  - leadership: name and role.
- Keep content in the client component to simplify maintenance.

## Implementation Steps
- Create app/about-us/region/kenya/_components/kenya-client.tsx as a client component.
- Update app/about-us/region/kenya/page.tsx to export metadata and render KenyaClient.
- Compose sections with Tailwind containers (container mx-auto px-4) and semantic tokens.
- Reuse PageHero, AnimatedText, CountUp, Blockquote, Button, Card components.
- Ensure accessible headings, link semantics, and alt text.

## Styling and Theme
- Use theme variables for colors and backgrounds per [globals.css](file:///Users/mac/Desktop/hhcj/app/globals.css#L46-L113).
- Respect dark mode by relying on bg-background/text-foreground.
- Add light borders and shadows for modern, crisp feel.

## Performance
- Avoid new dependencies; rely on framer-motion and existing utilities.
- Keep images optimized via next/image if any are added.
- Use motion reduced for prefers-reduced-motion.

## Verification
- Visual check across breakpoints (sm → xl) for responsiveness.
- Confirm smooth animations, dark mode compatibility, and consistent spacing.
- Validate metadata renders and navigation flows.

## Deliverables
- Kenya page with modern UI/UX and animations implemented in:
  - [kenya/page.tsx](file:///Users/mac/Desktop/hhcj/app/about-us/region/kenya/page.tsx)
  - [kenya/_components/kenya-client.tsx] (new)
- No changes to global config; all within existing design system.