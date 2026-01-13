# Visual Design Guide & Component Showcase

## 🎨 Color Palette

### Primary Colors
```
Cyan       #00f3ff  - Primary brand color, used for buttons, text accents
Blue       #3b82f6  - Secondary accent for gradients
Purples    #a855f7  - Tertiary accent color
```

### Neutral Colors
```
Black      #000000  - Background color
Dark Gray  #0f172a  - Dark sections
Gray       #1f2937  - Cards and borders
Light Gray #9ca3af  - Secondary text
```

### Status Colors
```
Green      #22c55e  - Success states
Red        #ef4444  - Error states
Yellow     #eab308  - Warning states
```

## 🧩 Component Examples

### Button Variants

**Primary Button**
```
Background: Gradient cyan → blue
Text: Black (bold)
Hover: Scale up, glow effect
```

**Secondary Button**
```
Background: Gradient purple → pink
Text: White
Hover: Shadow glow
```

**Outline Button**
```
Border: Cyan
Text: Cyan
Hover: Light cyan background
```

**Ghost Button**
```
Text: Cyan
Hover: Light background
No border
```

### Card Variants

**Default Card**
```
Background: Gradient gray-900 → black
Border: Gray-700
Hover: Lift effect, slight scale
```

**Glass Card**
```
Background: White with opacity + blur
Border: Subtle white
Hover: Enhanced glow
```

**Gradient Card**
```
Background: Gradient with reduced opacity
Border: Colored for variants
Hover: Reveal accent line
```

### Input Styling

**Normal State**
```
Background: White/5
Border: Gray-700
Text: White
Placeholder: Gray-600
```

**Focus State**
```
Border: Cyan (animated)
Shadow: Cyan glow
Bottom Line: Animated gradient
```

**Error State**
```
Border: Red-500
Text: Red
Message: "✗ Error message"
```

## 📐 Spacing System

```
xs: 4px   (minimal spacing)
sm: 8px   (small gaps)
md: 12px  (medium spacing)
lg: 16px  (large spacing)
xl: 24px  (section spacing)
2xl: 32px (major spacing)
```

## 🔤 Typography Hierarchy

### Headlines (Orbitron Font)
```
h1: 48-96px, bold, tracking-tighter
h2: 36-60px, bold, tracking-tighter
h3: 24-32px, bold, tracking-tight
h4: 20px,   bold, tracking-tight
```

### Body Text (Rajdhani Font)
```
Large:   18-20px, leading-relaxed
Base:    16px,    leading-relaxed
Small:   14px,    leading-tight
Tiny:    12px,    leading-tight (labels)
```

### Labels (JetBrains Mono)
```
All labels: uppercase, tracking-widest
Font size: 12-14px
Color: Cyan-400 or Gray-400
```

## ✨ Animation Timings

### Quick Animations
```
Duration: 150-300ms
Easing: cubic-bezier(0.4, 0, 0.6, 1)
Usage: Hover effects, state changes
```

### Medium Animations
```
Duration: 300-500ms
Easing: ease-out
Usage: Entrance effects, transitions
```

### Slow Animations
```
Duration: 800ms-2s
Easing: ease-in-out
Usage: Background effects, loops
```

## 🎬 Interaction Patterns

### Hover States
- Scale: 1 → 1.05 (slight enlargement)
- Glow: Box shadow with cyan/blue glow
- Color: Gray → Cyan transition
- Translate: -8px (subtle lift)

### Focus States
- Border: Gray → Cyan
- Shadow: Enhanced glow effect
- Outline: None (no default focus ring)

### Active States
- Scale: 0.95-0.98 (pressed effect)
- Opacity: Full opacity maintained
- Shadow: Slightly reduced

### Disabled States
- Opacity: 50%
- Cursor: not-allowed
- No hover effects
- Grayed out colors

## 📱 Responsive Breakpoints

```
Mobile:   320px - 767px   (single column)
Tablet:   768px - 1024px  (2 columns max)
Desktop:  1025px+         (3+ columns)
```

## 🌐 Section Spacing

### Hero Section
```
Padding: 128px (top/bottom), 24px (sides)
Min Height: 100vh
Content Max Width: 96rem
```

### Product/Service Sections
```
Padding: 128px (vertical), 24px (horizontal)
Gap between items: 32px
Grid: 2 columns desktop, 1 mobile
```

### Form Section
```
Max Width: 48rem
Padding: 48-96px
Field spacing: 32px
```

## 🎯 Visual Hierarchy

1. **Headlines** (Largest, boldest, colorful)
2. **Primary CTAs** (Bright, large buttons)
3. **Secondary Content** (Medium, gray)
4. **Tertiary Elements** (Small, subtle)
5. **Labels/Help Text** (Tiny, very subtle)

## 🔍 Accessibility Standards

- **Contrast Ratio**: Minimum 4.5:1 (text on background)
- **Focus Indicators**: Visible 2px borders
- **Touch Targets**: Minimum 44x44px
- **Color Not Only**: Icons + text for meaning
- **Alt Text**: Present on all meaningful images

## 🎪 Animation Best Practices

✅ **Do's**
- Use for feedback and guidance
- Keep animations under 500ms for UI
- Use hardware-accelerated properties
- Respect prefers-reduced-motion

❌ **Don'ts**
- Animate on every hover
- Use too many colors in motion
- Create distracting effects
- Ignore animation performance

---

**Design System Version**: 2.0
**Last Updated**: January 2025
**Status**: Production Ready
