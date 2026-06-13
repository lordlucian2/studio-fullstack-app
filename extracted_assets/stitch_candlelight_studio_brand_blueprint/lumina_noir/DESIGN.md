---
name: Lumina Noir
colors:
  surface: '#131313'
  surface-dim: '#131313'
  surface-bright: '#3a3939'
  surface-container-lowest: '#0e0e0e'
  surface-container-low: '#1c1b1b'
  surface-container: '#201f1f'
  surface-container-high: '#2a2a2a'
  surface-container-highest: '#353534'
  on-surface: '#e5e2e1'
  on-surface-variant: '#d7c3ae'
  inverse-surface: '#e5e2e1'
  inverse-on-surface: '#313030'
  outline: '#9f8e7a'
  outline-variant: '#524534'
  surface-tint: '#ffb955'
  primary: '#ffc880'
  on-primary: '#452b00'
  primary-container: '#f5a623'
  on-primary-container: '#644000'
  inverse-primary: '#835500'
  secondary: '#ffb95a'
  on-secondary: '#462a00'
  secondary-container: '#c68315'
  on-secondary-container: '#3d2400'
  tertiary: '#d4d2cb'
  on-tertiary: '#31312c'
  tertiary-container: '#b8b6b0'
  on-tertiary-container: '#484743'
  error: '#ffb4ab'
  on-error: '#690005'
  error-container: '#93000a'
  on-error-container: '#ffdad6'
  primary-fixed: '#ffddb4'
  primary-fixed-dim: '#ffb955'
  on-primary-fixed: '#291800'
  on-primary-fixed-variant: '#633f00'
  secondary-fixed: '#ffddb6'
  secondary-fixed-dim: '#ffb95a'
  on-secondary-fixed: '#2a1800'
  on-secondary-fixed-variant: '#643f00'
  tertiary-fixed: '#e5e2db'
  tertiary-fixed-dim: '#c9c6c0'
  on-tertiary-fixed: '#1c1c18'
  on-tertiary-fixed-variant: '#474742'
  background: '#131313'
  on-background: '#e5e2e1'
  surface-variant: '#353534'
  obsidian-surface: '#171717'
  soft-cream: '#EFE7D8'
  glow-amber: rgba(245, 166, 35, 0.15)
typography:
  headline-xl:
    fontFamily: Playfair Display
    fontSize: 64px
    fontWeight: '700'
    lineHeight: '1.1'
    letterSpacing: -0.02em
  headline-xl-mobile:
    fontFamily: Playfair Display
    fontSize: 40px
    fontWeight: '700'
    lineHeight: '1.2'
  headline-lg:
    fontFamily: Playfair Display
    fontSize: 48px
    fontWeight: '600'
    lineHeight: '1.2'
  headline-md:
    fontFamily: Playfair Display
    fontSize: 32px
    fontWeight: '600'
    lineHeight: '1.3'
  body-lg:
    fontFamily: Manrope
    fontSize: 18px
    fontWeight: '400'
    lineHeight: '1.6'
    letterSpacing: 0.01em
  body-md:
    fontFamily: Manrope
    fontSize: 16px
    fontWeight: '400'
    lineHeight: '1.6'
  label-caps:
    fontFamily: Manrope
    fontSize: 12px
    fontWeight: '700'
    lineHeight: '1.0'
    letterSpacing: 0.1em
  label-md:
    fontFamily: Manrope
    fontSize: 14px
    fontWeight: '500'
    lineHeight: '1.4'
rounded:
  sm: 0.125rem
  DEFAULT: 0.25rem
  md: 0.375rem
  lg: 0.5rem
  xl: 0.75rem
  full: 9999px
spacing:
  container-max: 1280px
  gutter: 2rem
  margin-base: 1rem
  section-padding: 8rem
  grid-columns: '12'
---

## Brand & Style

The design system is engineered for **Candlelight Studio**, a premium agency that balances technical SEO precision with high-end creative web design. The brand personality is authoritative yet warm, evoking the atmosphere of a dimly lit, upscale studio where craft and strategy meet. 

The aesthetic follows a **Dark Luxury Minimalism** movement. It prioritizes extreme legibility through high-contrast typography and utilizes "negative space" as a functional element of prestige. Unlike typical corporate dark modes, this system uses "warm-spectrum" blacks and soft, glowing highlights to create depth, moving away from cold, blue-toned shadows to a more inviting, fire-lit ambiance.

## Colors

The palette is rooted in the interplay between shadow and light. The foundation uses **Deep Charcoal (#111111)** for primary backgrounds, while **Obsidian Black (#171717)** defines nested containers and elevated surfaces.

- **Warm Ivory (#F8F5EE)** serves as the primary text color, chosen to reduce the harsh eye-strain of pure white while maintaining a luxurious, editorial feel.
- **Amber Gold (#F5A623)** and **Candle Glow Orange (#FFB347)** are reserved strictly for high-impact actions, brand-centric accents, and interactive highlights.
- Semantic colors (success, error) should be muted to align with the warm palette—use deep emeralds and burnt siennas rather than neon variations.

## Typography

This design system employs a sophisticated pairing of **Playfair Display** for high-impact messaging and **Manrope** for utilitarian content. 

- **Display Hierarchy:** Headings utilize tight letter spacing and generous line heights to emphasize the "Editorial" nature of the studio.
- **Readability:** Body text uses Manrope with a slightly increased line height (1.6) to ensure long-form SEO case studies remain highly readable against the dark background. 
- **The Accents:** Small labels and overlines should use the `label-caps` style with significant letter-spacing to create a technical, professional counter-balance to the flowing serif headlines.

## Layout & Spacing

The layout philosophy is defined by **expansive whitespace** (or "dark-space"). Large section paddings allow the content to breathe and signify premium quality.

- **Grid:** Use a 12-column fixed-width grid for desktop, centered with 2rem gutters. 
- **Margins:** For mobile, maintain a 1.5rem side margin.
- **Rhythm:** Spacing should follow a base-8 scale (8, 16, 24, 32, 48, 64, 80, 128). Use larger increments between major sections to emphasize the transition from one thought to the next.

## Elevation & Depth

In a dark luxury environment, depth is not created with traditional drop shadows, but through **Tonal Layering** and **Luminescence**.

- **Surfaces:** The base layer is #111111. Cards and modals sit on #171717.
- **Subtle Glow:** Instead of black shadows, use extremely soft, low-opacity Amber Gold glows (`rgba(245, 166, 35, 0.05)`) on hover states to simulate the light of a candle hitting the surface.
- **Glassmorphism:** Use a light frost effect (backdrop-blur 12px) for navigation bars to allow the background content to subtly bleed through as the user scrolls, creating a sense of transparency and lightness.

## Shapes

The shape language is **Soft (0.25rem)**. This slight rounding provides a modern, refined touch without veering into the "bubbly" territory of consumer apps. 

- **Buttons:** Use sharp corners or the Soft (1) setting for a professional, architectural feel.
- **Cards:** Utilize the `rounded-lg` (0.5rem) setting for project thumbnails and service cards to gently frame imagery.
- **Interactive Elements:** Checkboxes and inputs should remain strictly Soft (1) to maintain the "studio" precision.

## Components

### Buttons
- **Primary:** Solid Amber Gold (#F5A623) with Dark Charcoal text. No border. On hover, apply a soft outer glow.
- **Secondary:** Transparent with a 1px Warm Ivory border. Text in Warm Ivory. On hover, the background fills with a very faint Warm Ivory (opacity 0.05).

### Cards
- **Project Cards:** Background of Obsidian Black (#171717). High-quality imagery should have a slight desaturation that returns to full color on hover.
- **Hover State:** When a card is hovered, a 1px border of Candle Glow Orange (#FFB347) appears at 30% opacity, accompanied by a subtle inner glow.

### Input Fields
- Underlined or fully boxed in Obsidian Black. The focus state should transition the bottom border to Amber Gold. Use Warm Ivory for placeholder text at 50% opacity.

### Navigation
- A floating top bar with a backdrop-blur. Links should be in Manrope (label-md), transitioning to Amber Gold on hover.

### Icons
- Use minimalist, thin-stroke icons (1.5px stroke weight). Icons should be monochromatic Warm Ivory, switching to Amber Gold for active states.