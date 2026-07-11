# Harvest Community Church Website - Codebase Analysis

## 1. LOGO USAGE & REFERENCES

### Primary Logo Location
- **File**: [src/components/Header.tsx](src/components/Header.tsx#L15)
- **Image**: `/Harves Church Logo.png` (from public folder)
- **Implementation**:
  ```tsx
  <img src="/Harves Church Logo.png" alt="Harvest Community Church" className="h-12 w-auto" />
  ```
- **Styling**: 
  - Height: `h-12` (48px)
  - Width: automatically sized to maintain aspect ratio (`w-auto`)
  - Container: Flexbox with 3px gap between logo and text (`flex items-center gap-3`)

### Logo Architecture
The Header component displays the logo combined with branding text:
- **Logo Image**: PNG file (48px height)
- **Text Branding**: 
  - Church Name: "HARVEST COMMUNITY CHURCH" (font-bold, text-lg, text-slate-700)
  - Tagline: "Growing God's Kingdom" (text-xs, text-slate-500)

### Secondary Logo References
- **Footer**: Displays text branding only (no image), 48px height equivalent text styling with "HARVEST COMMUNITY CHURCH" and "Growing God's Kingdom"

### Logo Notes
- The filename has a typo: `Harves Church Logo.png` (should be "Harvest")
- Currently only used in the Header navigation component
- **Opportunity**: Footer could benefit from logo image as well for brand consistency

---

## 2. PUBLIC FOLDER ASSETS

Located in `public/` directory:

| File | Usage | Type |
|------|-------|------|
| **Harves Church Logo.png** | Header component branding (primary logo) | PNG Logo |
| **photo-collage.png** | Contact page hero section background | Background Image |
| **1.jpg** | Unused (available for future enhancement) | Image |
| **iamfoundation.jpeg** | Unused (potentially partner branding) | Image |
| **next.svg** | Vercel Next.js default (unused in prod) | SVG |
| **vercel.svg** | Vercel default (unused in prod) | SVG |
| **file.svg** | Unused default asset | SVG |
| **globe.svg** | Unused default asset | SVG |
| **window.svg** | Unused default asset | SVG |

### Background Images (External URLs)
1. **Hero Section** ([Hero.tsx](src/components/Hero.tsx#L5)):
   - URL: `https://www.nextlevelworship.com/wp-content/uploads/2019/01/Cross-Easter-scaled.jpg`
   - With overlay: `rgba(0,0,0,0.3)`

2. **About Page** ([about/page.tsx](src/app/about/page.tsx#L6)):
   - URL: `https://res.cloudinary.com/pine-cove/image/upload/t_twitterimagelarge/blog/imported/content/Bible-Open-Leather`
   - With overlay: `rgba(0,0,0,0.3)`

3. **Services Page** ([services/page.tsx](src/app/services/page.tsx#L7)):
   - URL: `https://t3.ftcdn.net/jpg/07/08/96/18/360_F_708961853_Wz6z791evkm31nm2MtOwdAIXzJzBbaHM.jpg`
   - With overlay: `rgba(0,0,0,0.3)`

---

## 3. SITE STRUCTURE & COMPONENT ARCHITECTURE

### Layout Architecture
```
Root Layout (layout.tsx)
├── Header (sticky, z-50)
├── Main Content (flex-grow)
└── Footer
```

### Page Structure

#### **Home Page** ([page.tsx](src/app/page.tsx))
Contains 4 hero sections:
1. **Hero Component** - Large banner with cross image, call-to-action
2. **Mission Component** - Organization mission statement and approach
3. **Services Component** - 6 service cards with emoji icons
4. **Support Component** - Donation call-to-action

#### **About Page** ([about/page.tsx](src/app/about/page.tsx))
- Hero banner with Bible background
- (Content not yet visible in codebase)

#### **Services Page** ([services/page.tsx](src/app/services/page.tsx))
- Hero banner with community background
- (Content not yet visible in codebase)

#### **Contact Page** ([contact/page.tsx](src/app/contact/page.tsx))
- Hero banner with photo-collage background
- Likely contains ContactForm component

#### **Contact API Route** ([api/contact/route.ts](src/app/api/contact/route.ts))
- Handles form submissions

### Component Breakdown

| Component | File | Purpose | Features |
|-----------|------|---------|----------|
| **Header** | Header.tsx | Navigation & branding | Sticky top, logo+text, responsive menu, donate button |
| **Footer** | Footer.tsx | Site footer | Contact info for Roger Catalan, copyright year |
| **Hero** | Hero.tsx | Hero banner | Full-width, background image, call-to-action text |
| **Mission** | Mission.tsx | Mission statement | White background, centered text, italicized points |
| **Services** | Services.tsx | Service cards | 3-column grid on desktop, emoji icons, optional "Learn More" button |
| **Support** | Support.tsx | Donation section | Simple CTA, "Donate Now" button |
| **ContactForm** | ContactForm.tsx | Contact form | Form fields: name, email, phone, message + submission handling |

---

## 4. CURRENT STYLING & DESIGN APPROACH

### CSS Framework
- **Tailwind CSS v4** - Primary styling framework
- **Next.js with TypeScript** - Development setup
- **Font**: Google Fonts (Geist Sans & Geist Mono)

### Design System

#### Color Palette
- **Primary**: Slate colors (`slate-500`, `slate-600`, `slate-700`)
- **Background**: 
  - Light: `#FAFAF8` (off-white)
  - Dark: `#2A2A28` (for dark mode)
- **Text**: 
  - Light mode foreground: `#5A5A5A`
  - Dark mode foreground: `#E8E8E6`
- **Accent**: Blue (`blue-600`) for emphasis in Support section

#### Typography
- **Headings**: 
  - H1/H2: Large, bold (`font-bold`, `text-3xl`-`text-5xl`)
  - H3/H4: Medium (`text-lg`, `font-bold`)
- **Body**: Mix of `text-slate-600`, `text-slate-700`, with `leading-relaxed` for readability
- **Small text**: `text-xs` for taglines, `text-sm` for descriptions

#### Spacing Principles
- Container: `max-w-7xl mx-auto` with `px-4 sm:px-6 lg:px-8` responsive padding
- Sections: `py-16 md:py-24` vertical spacing
- Gap utilities: `gap-3`, `gap-8`, `gap-12` for flexible layouts

#### Component Styling

**Header**:
- White background with shadow (`shadow-sm`)
- Sticky positioning (`sticky top-0 z-50`)
- Slate text with hover transitions
- Mobile hamburger menu

**Buttons**:
- Solid: `bg-slate-500 text-white px-6 py-2 font-bold hover:bg-slate-600 transition rounded`
- Outlined: `border-2 border-slate-500 text-slate-500 px-6 py-2 font-bold hover:bg-slate-500 hover:text-white transition`

**Cards** (Services):
- Text-centered layout
- Large emoji icons (`text-5xl`)
- Uppercase tracking (`tracking-wide`)
- No background (minimal design)

**Background Images**:
- Cover mode (`bg-cover bg-center`)
- Dark overlay (`linear-gradient(rgba(0,0,0,0.3), rgba(0,0,0,0.3))`)
- Responsive height (`py-32 md:py-48` or `py-32 md:py-40`)

#### Responsive Design
- **Mobile**: Single column, full width
- **Tablet** (md): Two columns, adjusted padding
- **Desktop** (lg): Three columns/full layout with side padding
- Breakpoints: Uses Tailwind default (`md:` = 768px, `lg:` = 1024px)

---

## 5. TECHNICAL STACK

### Dependencies
```json
{
  "next": "16.1.6",
  "react": "19.2.3",
  "react-dom": "19.2.3",
  "@tailwindcss/postcss": "^4",
  "tailwindcss": "^4",
  "typescript": "^5"
}
```

### Project Structure
```
harvest-community-church/
├── src/
│   ├── app/
│   │   ├── layout.tsx          (Root layout with Header/Footer)
│   │   ├── page.tsx            (Home page)
│   │   ├── globals.css         (Tailwind imports & theme)
│   │   ├── about/page.tsx
│   │   ├── services/page.tsx
│   │   ├── contact/page.tsx
│   │   └── api/contact/route.ts (Form submission handler)
│   └── components/
│       ├── Header.tsx
│       ├── Footer.tsx
│       ├── Hero.tsx
│       ├── Mission.tsx
│       ├── Services.tsx
│       ├── Support.tsx
│       └── ContactForm.tsx
├── public/                      (Static assets, logo)
├── package.json
├── tsconfig.json
├── tailwind.config.ts (if exists)
├── postcss.config.mjs
└── next.config.ts
```

---

## 6. PROFESSIONAL ENHANCEMENT OPPORTUNITIES

### High Priority
1. **Logo Optimization**
   - Fix filename typo: `Harves Church Logo.png` → `Harvest Church Logo.png`
   - Consider adding logo to Footer for brand consistency
   - Optimize PNG file size for faster loading
   - Consider creating SVG version for better scalability

2. **Hero Sections**
   - Replace external image URLs with local assets for performance/reliability
   - Image loading issues could break main pages (currently using 3rd-party URLs)
   - Implement Next.js `Image` component for optimization

3. **Design System**
   - Create reusable button component (currently inline Tailwind classes)
   - Create reusable card component for services
   - Establish consistent layout component wrapper

### Medium Priority
4. **Accessibility**
   - Add proper semantic HTML structure
   - Enhance form validation and error states
   - Add skip navigation links

5. **Performance**
   - Implement lazy loading for images
   - Convert background images to optimized Next.js Image component
   - Add metadata optimization for social sharing

6. **Brand Consistency**
   - Standardize font sizes and spacing across pages
   - Implement consistent button styling
   - Consider brand color variations (current: mostly slate)

### Lower Priority
7. **Content Enhancement**
   - Add image gallery for mission work
   - Testimonials section
   - Team/Leadership section

---

## 7. KEY FINDINGS

✅ **Well-structured React/Next.js application** with TypeScript
✅ **Responsive design** with Tailwind CSS
✅ **Modular component architecture**
✅ **Functional contact form** with API integration

⚠️ **Logo only in Header** - no brand presence in Footer
⚠️ **External image URLs** - potential reliability issues with 3rd-party sources
⚠️ **File naming typo** - "Harves" instead of "Harvest"
⚠️ **Minimal assets** - unused SVGs and images in public folder
⚠️ **Inline styling** - buttons and cards use repeated Tailwind classes
