<!-- DESIGN SPECIFICATIONS & PROTOTYPE GUIDE -->

# 🎨 Elite CS2 Coaching - Design System Documentation

## Color Palette

### Primary Colors
```
#FF6B35 - Primary Orange
  Usage: Buttons, accents, highlights, hover states
  RGB: 255, 107, 53
  HSL: 14°, 100%, 60%
  
#00D4FF - Accent Cyan
  Usage: Highlights, secondary accents, borders
  RGB: 0, 212, 255
  HSL: 187°, 100%, 50%
```

### Background Palette
```
#0A0E27 - Main Background (very dark)
  Usage: Body background, main container
  RGB: 10, 14, 39
  
#151932 - Card Background (dark)
  Usage: Cards, modals, secondary containers
  RGB: 21, 25, 50
  
#0F3460 - Secondary Background (footer-dark)
  Usage: Footer, secondary sections
  RGB: 15, 52, 96
```

### Text Colors
```
#FFFFFF - Primary Text (White)
  Usage: Headings, main text
  
#B0B0B0 - Secondary Text (Gray)
  Usage: Descriptions, smaller text
  
#2A2F48 - Border Color
  Usage: Dividers, borders
```

### Gradients Used
```
Hero Title Gradient:
  from: #FF6B35 (orange)
  to: #00D4FF (cyan)
  direction: 135deg

Button Gradient:
  from: #FF6B35
  to: #FF8C5A (lighter orange)
  direction: 135deg

About Overlay Gradient:
  from: #FF6B35
  to: #0F3460
  direction: 135deg
```

---

## Typography System

### Font Families
```
Poppins (Google Fonts)
  Weights: 400, 500, 600, 700, 800
  Usage: Headings, bold text
  Style: Modern, geometric, bold

Inter (Google Fonts)
  Weights: 400, 500, 600
  Usage: Body text, UI elements
  Style: Clean, readable, professional

Fallback: System fonts (San Francisco, Segoe UI, Roboto)
```

### Font Sizes & Hierarchy
```
h1 (Hero Title)
  Desktop: 56px (3.5rem)
  Tablet:  40px (2.5rem)
  Mobile:  28px (1.8rem)
  Weight:  800 Poppins
  Color:   Gradient (Orange → Cyan)

h2 (Section Title)
  Size:    40px (2.5rem)
  Weight:  700 Poppins
  Color:   #FFFFFF
  Margin:  0 0 48px 0

h3 (Subsection)
  Size:    20px (1.3rem)
  Weight:  700 Poppins
  Color:   #FFFFFF
  Margin:  0 0 16px 0

p (Body Text)
  Size:    16px (1rem)
  Weight:  400 Inter
  Color:   #B0B0B0
  Line-height: 1.6
  Margin:  0 0 16px 0

small (Meta Text)
  Size:    14px (0.9rem)
  Weight:  500 Inter
  Color:   #B0B0B0
```

---

## Spacing System

### Units (Based on 16px baseline)
```
xs:  8px  (0.5rem)   - Tight spacing
sm:  16px (1rem)     - Small spacing
md:  32px (2rem)     - Medium spacing (default)
lg:  48px (3rem)     - Large spacing
xl:  64px (4rem)     - Extra large spacing

Usage Examples:
  Padding:    --spacing-md (32px)
  Gap:        --spacing-lg (48px)
  Margin:     --spacing-md (32px)
  Border-rad: 8px (smaller elements)
```

### Vertical Rhythm
```
Section Padding:      64px top/bottom (--spacing-xl)
Container Padding:    32px sides (--spacing-md)
Card Padding:         48px (--spacing-lg)
Component Gap:        32px (--spacing-md)
Element Gap:          16px (--spacing-sm)
```

---

## Layout System

### Container
```
Max-width: 1200px
Padding: 32px sides (responsive)
Margin: 0 auto
```

### Grid Layouts
```
Benefits Grid:
  Columns: repeat(auto-fit, minmax(300px, 1fr))
  Gap: 48px
  Auto-responsive: 3 cols (1200px) → 1 col (480px)

Pricing Grid:
  Columns: repeat(auto-fit, minmax(300px, 1fr))
  Gap: 48px
  Special: .featured scaled 1.05

Credentials Grid:
  Columns: repeat(2, 1fr)
  Gap: 32px
  Responsive: 2 cols (768px) → 1 col (480px)

Footer Grid:
  Columns: repeat(auto-fit, minmax(250px, 1fr))
  Gap: 48px
```

### Breakpoints
```
Desktop:  ≥1200px   Full 3-column layouts
Tablet:   768px     2-column → 1-column transitions
Mobile:   480px     Single column, touch-optimized
Extra:    320px     Minimum supported width
```

---

## Component Styles

### Buttons
```
Primary Button (.btn-primary)
  Background: Gradient (#FF6B35 → #FF8C5A)
  Color: White
  Padding: 16px 32px (sm lg)
  Border-radius: 8px
  Font-weight: 600
  Font-size: 16px
  Cursor: pointer
  Box-shadow: 0 10px 25px rgba(255,107,53,0.3)
  
  Hover:
    Transform: translateY(-3px)
    Box-shadow: 0 15px 35px rgba(255,107,53,0.4)
  
  Transition: all 0.3s cubic-bezier(0.4,0,0.2,1)


Secondary Button (.btn-secondary)
  Background: transparent
  Color: #00D4FF (cyan)
  Border: 2px solid #00D4FF
  Padding: 16px 32px
  
  Hover:
    Background: #00D4FF
    Color: #0A0E27
    Transform: translateY(-3px)
```

### Cards
```
Benefit Card (.benefit-card)
  Background: var(--card-bg)
  Padding: 48px (24px on mobile)
  Border-radius: 12px
  Border: 1px solid var(--border-color)
  Text-align: center
  Transition: all 0.3s ease
  
  Hover:
    Border-color: #FF6B35
    Transform: translateY(-10px)
    Box-shadow: 0 20px 40px rgba(255,107,53,0.15)

Pricing Card (.pricing-card)
  Background: var(--card-bg)
  Padding: 48px
  Border-radius: 12px
  Border: 2px solid var(--border-color)
  
  .featured:
    Border-color: #FF6B35
    Transform: scale(1.05)
    
  Hover:
    Border-color: #FF6B35
    Transform: translateY(-10px)

Testimonial Card (.testimonial-card)
  Background: var(--card-bg)
  Padding: 48px
  Border-radius: 12px
  Border: 1px solid var(--border-color)
  Position: absolute → relative when active
  Opacity: 0 → 1 on active
  Transform: translateX(100px) → translateX(0)
```

### Form Elements
```
Input/Textarea/Select
  Background: var(--dark-bg)
  Border: 1px solid var(--border-color)
  Border-radius: 8px
  Padding: 16px
  Color: #FFFFFF
  Font-size: 16px
  Transition: all 0.3s ease
  
  Focus:
    Outline: none
    Border-color: #FF6B35
    Box-shadow: 0 0 0 3px rgba(255,107,53,0.1)

Label
  Position: absolute → floating
  Font-size: 14px (0.9rem) when focused
  Color: #FF6B35 when focused
  Background: var(--card-bg) padding
  Smooth animation on focus/fill
```

---

## Animations

### Timing Functions
```
Default: cubic-bezier(0.4, 0, 0.2, 1)
Duration: 300ms for most interactions
Slow: cubic-bezier(0.4, 0, 0.2, 1) 600ms

Applied to:
  - Button hovers
  - Card transitions
  - Border color changes
  - Background changes
```

### Keyframe Animations
```
@keyframes slideInLeft
  From: opacity: 0; transform: translateX(-50px)
  To:   opacity: 1; transform: translateX(0)
  Duration: 800ms ease-out
  Usage: Hero content, animations on load

@keyframes slideInRight
  From: opacity: 0; transform: translateX(50px)
  To:   opacity: 1; transform: translateX(0)
  Duration: 800ms ease-out
  Usage: Hero image, alternate direction

@keyframes slideUp
  From: opacity: 0; transform: translateY(30px)
  To:   opacity: 1; transform: translateY(0)
  Duration: 600ms ease-out
  Usage: Cards on scroll

@keyframes pulse
  0%, 100%: transform: scale(1)
  50%:      transform: scale(1.1)
  Duration: 2s ease-in-out infinite
  Usage: Logo icon pulse

@keyframes fadeIn
  From: opacity: 0
  To:   opacity: 1
  Duration: 600ms ease-out
  Usage: Section appears
```

### Hover Effects
```
Buttons:
  translateY(-3px) + increased box-shadow
  Duration: 300ms
  Easing: ease

Cards:
  translateY(-10px) + border/shadow change
  Duration: 300ms
  Easing: ease

Text Links:
  Color change + underline animation
  Width: 0 → 100%
  Duration: 300ms
  Easing: ease
```

---

## Navigation Design

### Header Structure
```
┌─────────────────────────────────────────────┐
│ ⚡ Elite Coaching  Services Reviews ...  EN РУ │
└─────────────────────────────────────────────┘
  ^                                            ^
  Logo                                  Language toggle
```

### Header Styles
```
Position: sticky
Top: 0
Z-index: 1000
Background: rgba(10,14,39,0.95) with blur
Border-bottom: 1px solid #2A2F48
Height: auto (with padding)
Backdrop-filter: blur(10px)

Logo:
  Display: flex
  Gap: 8px
  Font-size: 24px
  Font-weight: 700
  Color: #FFFFFF
  Icon: Pulsing animation

Nav Links:
  Display: flex
  Gap: 48px
  Color: #B0B0B0
  Font-weight: 500
  
  Link Underline:
    Height: 2px
    Width: 0 → 100% on hover
    Color: #FF6B35
    Duration: 300ms

Language Switcher:
  Display: flex
  Gap: 4px
  Background: var(--card-bg)
  Padding: 4px
  Border: 1px solid var(--border-color)
  Border-radius: 8px
  
  Button:
    Padding: 4px 16px
    Font-weight: 600
    Font-size: 14px
    Active: #FF6B35 background
```

### Mobile Menu
```
Toggle Button:
  Display: none (desktop)
  3 horizontal lines (hamburger)
  Transition: smooth rotation
  
Menu:
  Position: absolute
  Top: 70px
  Left: 0, Right: 0
  Flex: column
  Gap: 16px
  Background: var(--secondary-color)
  Padding: 32px
  Border-bottom: 1px solid var(--border-color)
  
  Activated: display: flex
```

---

## Hero Section Layout

```
┌──────────────────────────────────────────────┐
│                                              │
│  [Hero Content]      [Hero Image]           │
│  - Title (gradient)   - Placeholder         │
│  - Subtitle          - Hover effect         │
│  - CTA Buttons       - Border glow          │
│  - Stats (3)                                │
│                                             │
└──────────────────────────────────────────────┘
```

### Dimensions
```
Desktop:
  Layout: Grid 1fr 1fr (50% each)
  Height: 100vh (full viewport)
  Gap: 64px
  
  Title: 56px height
  Subtitle: 19px, line-height 1.8
  
Tablet:
  Layout: Single column stack
  Height: auto
  
Mobile:
  Layout: Single column
  Padding: aggressive reduction
  Title: 28px
  Subtitle: 16px
```

---

## Section Patterns

### Benefits Section Pattern
```
Title: "What You'll Achieve"
├─ Card 1 [Icon | Title | Description]
├─ Card 2 [Icon | Title | Description]
├─ Card 3 [Icon | Title | Description]
├─ Card 4 [Icon | Title | Description]
├─ Card 5 [Icon | Title | Description]
└─ Card 6 [Icon | Title | Description]

Grid: auto-fit minmax(300px, 1fr)
Each Card: 300px minimum width
```

### Pricing Section Pattern
```
Title: "Training Packages"
├─ Card 1: Single Session
│  ├─ Badge: "Popular"
│  ├─ Price: $45/hour
│  └─ Features: 4 items
│
├─ Card 2: Training Package (FEATURED)
│  ├─ Badge: "Best Value"
│  ├─ Price: $199/4 sessions
│  ├─ Scale: 1.05x larger
│  └─ Features: 5 items
│
└─ Card 3: Premium Coaching
   ├─ Badge: "Elite"
   ├─ Price: $449/month
   └─ Features: 5 items
```

### Testimonials Carousel
```
┌─────────────────────────────────┐
│ ★★★★★                          │
│ "Quote text here..."            │
│ [Avatar] Name                   │
│          Role                   │
└─────────────────────────────────┘
    [←]  • • • •  [→]
```

Active card: opacity 1, transform translateX(0)
Inactive cards: opacity 0, transform translateX(100px)
Auto-forward every 5 seconds

---

## Contact Form Design

```
Form Layout:
├─ Input: Name (floating label)
├─ Input: Email (floating label)
├─ Input: Discord (floating label, optional)
├─ Select: Package (dropdown)
├─ Textarea: Message (floating label, optional)
└─ Button: Submit (full width)

Label Behavior:
  Default: Below input (placeholder-like)
  Focused: Above input (smaller, primary color)
  Filled: Above input (primary color background)
```

---

## Button States

```
Default:
  Background: Gradient
  Color: White
  Box-shadow: Medium (0 10px 25px)
  Transform: scale(1)

Hover:
  Background: Brighter gradient
  Color: White
  Box-shadow: Larger (0 15px 35px)
  Transform: translateY(-3px) scale(1)
  Cursor: pointer

Active (while clicking):
  Transform: translateY(0px) scale(0.98)
  Box-shadow: Smaller

Disabled:
  Opacity: 0.5
  Cursor: not-allowed
  No animation
```

---

## Responsive Behavior

### Desktop (1200px+)
```
- 3-column grids
- Sidebar visible
- Full navigation
- Large typography
- Normal spacing
```

### Tablet (768px - 1199px)
```
- 2-column grids
- Hamburger menu
- Medium typography
- Adjusted spacing
```

### Mobile (480px - 767px)
```
- 1-column layouts
- Full-width elements
- Hamburger menu (active)
- Smaller typography (80%)
- Reduced spacing
```

### Small Mobile (320px - 479px)
```
- Minimal padding
- Stacked buttons (full width)
- Extra-small typography
- Touch-optimized targets
```

---

## Accessibility

### WCAG 2.1 AA Compliance
```
✓ Color contrast: 4.5:1 minimum
✓ Focus states: Visible outline
✓ Touch targets: 44x44px minimum
✓ Font sizes: Readable at all breakpoints
✓ Form labels: Associated with inputs
✓ Semantic HTML: Screen reader friendly
✓ Animations: Respects prefers-reduced-motion
```

### Focus Indicators
```
Input Focus:
  Outline: 2px solid #FF6B35
  Outline-offset: 2px
  
Button Focus:
  Box-shadow: 0 0 0 3px rgba(255,107,53,0.3)
  
Link Focus:
  Outline: 2px solid #00D4FF
```

---

## Image Specifications

### Hero Image Placeholder
```
Size: 1:1 aspect ratio (square)
Width: 100% of container
Max: 500px
Background: Linear gradient (#0F3460 → #151932)
Border: 2px solid #2A2F48
Border-radius: 15px
Content: "CS2" (large text, centered)
Hover: 10px translateY + glow
```

---

## Typography Scales

### Heading Hierarchy
```
H1: Huge, bold, gradient, 56px → 28px mobile
H2: Large, bold, white, 40px → 28px mobile  
H3: Medium, bold, white, 20px → 18px mobile
H4: Footer, 18px constant
```

### Readability
```
Line-height: 1.6 for body text
Line-height: 1.2 for headings
Max-width: 600px for article text
Letter-spacing: Normal (no tracking)
```

---

## Design Tokens Export

```css
/* Color System */
--primary: #FF6B35;
--accent: #00D4FF;
--secondary: #0F3460;
--dark-bg: #0A0E27;
--card-bg: #151932;
--text-primary: #FFFFFF;
--text-secondary: #B0B0B0;
--border: #2A2F48;

/* Typography */
--font-heading: 'Poppins', sans-serif;
--font-body: 'Inter', sans-serif;
--font-size-h1: 3.5rem;
--font-size-h2: 2.5rem;
--font-size-h3: 1.3rem;
--font-size-body: 1rem;

/* Spacing */
--spacing-xs: 0.5rem;
--spacing-sm: 1rem;
--spacing-md: 2rem;
--spacing-lg: 3rem;
--spacing-xl: 4rem;

/* Transitions */
--transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
--transition-slow: all 0.6s cubic-bezier(0.4, 0, 0.2, 1);

/* Border Radius */
--radius-sm: 6px;
--radius-md: 8px;
--radius-lg: 12px;
--radius-xl: 15px;

/* Shadows */
--shadow-sm: 0 2px 8px rgba(0,0,0,0.1);
--shadow-md: 0 10px 25px rgba(255,107,53,0.3);
--shadow-lg: 0 20px 40px rgba(255,107,53,0.15);
```

---

This design system is:
✅ Coherent and consistent
✅ Scalable to different devices
✅ Accessible and inclusive
✅ Performance-optimized
✅ Easy to extend and modify

---

**Design Version**: 1.0  
**Last Updated**: February 2025  
**Figma-Compatible**: Yes (DM for design file)
