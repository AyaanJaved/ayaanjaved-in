# Ayaan Javed Portfolio - AI Assistant Context

## Project Overview
Personal portfolio website for Ayaan Javed, built with Next.js 15, React 19, TypeScript, and Tailwind CSS. 

**Purpose**: Showcase transition from Android Developer to Software Engineer, targeting FAANG companies.

## Development Context

### Background & Goals
- **Current Role**: Android Developer
- **Target**: General Software Developer (Google, Meta, FAANG)
- **Timeline**: Interview preparation (few months)
- **Focus**: Demonstrate full-stack capabilities beyond mobile development

### Tech Stack
- **Framework**: Next.js 15 with App Router
- **Frontend**: React 19, TypeScript (strict mode)
- **Styling**: Tailwind CSS
- **Fonts**: Inter (sans), Playfair Display (serif)
- **Animation**: react-simple-typewriter
- **Analytics**: Google Analytics integration
- **Deployment**: Static export via FTP

### Architecture Overview
```
src/app/
├── layout.tsx          # SEO metadata, fonts, global layout
├── page.tsx           # Home page
├── fonts.ts           # Font configurations
├── globals.css        # Custom animations, Tailwind
└── components/
    ├── Navbar.tsx     # Responsive navigation
    ├── HeroSection.tsx # Main landing wrapper
    ├── HeroContent.tsx # Typewriter animation
    ├── OrbitAnimation.tsx # Orbiting tech icons
    └── GoogleAnalytics.tsx # GA4 integration
```

### Key Components
- **OrbitAnimation**: 6 tech icons orbiting profile image
- **HeroContent**: Typewriter effect for role transitions
- **Navbar**: Mobile-responsive with hamburger menu
- **Layout**: Comprehensive SEO and Open Graph metadata

### Development Commands
- **Dev**: `npm run dev` (uses Turbopack)
- **Build**: `npm run build` (static export to /out/)
- **Lint**: `npm run lint`
- **Deploy**: Manual FTP upload of /out/ contents

### Design System
- **Colors**: Dark theme (#0C0908, #EAE7DC, #E98074 accent)
- **Typography**: Inter for body, Playfair for headings
- **Responsive**: Mobile-first approach

### Interview-Focused Standards
- Production-ready, maintainable code
- TypeScript strict mode for type safety
- Component reusability and separation of concerns
- Performance optimizations (image optimization, lazy loading)
- Accessibility best practices
- Clean file structure and naming conventions

### Current Status
- ✅ Responsive navigation
- ✅ Hero section with animations
- ✅ SEO optimization
- ✅ Mobile-friendly layout
- 🚧 Additional sections needed (About, Projects, Contact)

### Deployment Workflow
1. `npm run build` → creates /out/ directory
2. `powershell Compress-Archive -Path .\out\* -DestinationPath .\out.zip -Force`
3. Upload out.zip to FTP server at /public_html
4. Extract and verify deployment

### Performance Goals
- Core Web Vitals optimization
- < 3 seconds page load
- Mobile performance priority
- Bundle optimization awareness

---
*Last updated: Project scan completion*