## Design Goals
- Build a responsive, modern missionary page aligned with site theme and typography.
- Use semantic Tailwind tokens and shared components without adding dependencies.
- Present history, apostolate focus, locations, stats, and a photo gallery with smooth animations.

## References
- Route pattern: [missionary/page.tsx](file:///Users/mac/Desktop/hhcj/app/about-us/missionary/page.tsx)
- Hero and animations: [page-hero.tsx](file:///Users/mac/Desktop/hhcj/features/shared/components/page-hero.tsx), [animated-text.tsx](file:///Users/mac/Desktop/hhcj/features/shared/components/animated-text.tsx)
- Cards/Buttons: [card.tsx](file:///Users/mac/Desktop/hhcj/components/ui/card.tsx), [button.tsx](file:///Users/mac/Desktop/hhcj/components/ui/button.tsx)
- Carousel (optional): [carousel.tsx](file:///Users/mac/Desktop/hhcj/features/shared/components/carousel.tsx)

## Page Structure
- Metadata: title "Italy Mission – HHCJ" and a concise description.
- Hero: PageHero with title and short subtitle; subtle backdrop accents.
- Brief History: AnimatedText heading and staggered paragraphs using provided content.
- Apostolate: Three themed cards (Education, Healthcare, Social Work) with motion reveals and concise descriptions from content.
- Presence & Locations: Badge/grid listing San Maurizio (Cologno Monzese), Trezzano sul Naviglio (Milan), and Rome (Mission House).
- Impact Stats: CountUp cards
  - Years in Mission: currentYear - 1991
  - Cities of Presence: 3
  - Core Apostolates: 3
- Photo Gallery: Responsive grid or carousel displaying the provided images with Next/Image, hover reveals, and captions like "Missionary life in Italy". Alt text remains generic and respectful.
- Motto Quote: Block with "Love & Service" and Foundress-inspired line; gentle fade-in.
- CTA: Themed buttons (Learn More / Contact) using shared Button variants.

## Animations
- Framer-motion variants for fade-up/stagger across sections.
- SplitText for headings via AnimatedText for refined entrance.
- Optional carousel autoplay using features/shared/components/carousel.tsx if needed; otherwise a responsive grid with hover effects.

## Content Modeling
- Define arrays for stats, locations, apostolate blocks, and gallery items.
- Keep content inside a client component in a local _components directory for maintainability.

## Implementation Steps
1. Create app/about-us/missionary/italy/_components/italy-client.tsx (use client) composing all sections and animations.
2. Update app/about-us/missionary/italy/page.tsx to export metadata and render ItalyClient.
3. Add images to public path: /public/missionary/italy/italy-1.jpg … italy-6.jpg and reference with Next/Image.
4. Ensure responsive layouts (sm → xl), semantic tokens (bg-background, text-foreground, border-primary), and accessible alt text/headings.

## Performance & Accessibility
- Optimize image sizing through Next/Image and responsive containers.
- Respect prefers-reduced-motion implicitly via simple variants and viewport controls.
- Maintain heading hierarchy and link/button semantics.

## Deliverables
- Italy Mission page implemented with:
  - [italy/page.tsx](file:///Users/mac/Desktop/hhcj/app/about-us/missionary/italy/page.tsx)
  - [italy/_components/italy-client.tsx] (new)
  - Images saved under /public/missionary/italy/ and referenced in the gallery.

## Verification
- Run diagnostics and visual checks for responsiveness, animation smoothness, and theme consistency.
- Confirm images render, and alt/captions are appropriate.