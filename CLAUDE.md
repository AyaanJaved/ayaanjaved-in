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
- **Fonts**: Inter, Montserrat, Roboto, Noto Nastaliq Urdu
- **Animation**: GSAP (GreenSock Animation Platform)
- **Deployment**: Static export via FTP

### Architecture Overview
**Phase 1 Structure (Current):**
```
src/app/
├── layout.tsx          # SEO metadata, fonts, favicon
├── page.tsx           # Home page (asymmetrical showcase)
├── fonts.ts           # Font configurations (multilingual)
├── globals.css        # Custom animations, CSS variables
└── components/
    ├── HeroContainer.tsx  # Main hero orchestrator
    ├── Preloader.tsx      # Multilingual greeting sequence
    ├── MainPanel.tsx      # Tech panel
    ├── SecondaryPanels.tsx # Music/Travel panels
    ├── Marquee.tsx        # Scrolling text banner
    └── ui/
        └── Panel.tsx      # Reusable panel component
```

**Phase 2 Structure (Planned):**
```
src/app/
├── layout.tsx          # SEO metadata, fonts, favicon
├── page.tsx           # Home page (asymmetrical showcase)
├── tech/
│   └── page.tsx       # TECH section with code environment
├── music/
│   └── page.tsx       # MUSIC section with audio visualizations
├── travel/
│   └── page.tsx       # TRAVEL section with interactive maps
├── fonts.ts           # Font configurations (multilingual)
├── globals.css        # Custom animations, CSS variables
└── components/
    ├── HeroContainer.tsx    # Main hero orchestrator
    ├── Preloader.tsx        # Multilingual greeting sequence
    ├── MainPanel.tsx        # Tech panel (now with Link wrapper)
    ├── SecondaryPanels.tsx  # Music/Travel panels (now with Link wrappers)
    ├── Marquee.tsx          # Adaptive scrolling text banner
    ├── sections/
    │   ├── TechSection.tsx    # Code rain, GitHub integration
    │   ├── MusicSection.tsx   # Audio visualizations, track embedding
    │   └── TravelSection.tsx  # Interactive maps, photo galleries
    ├── shared/
    │   ├── Navigation.tsx     # Consistent header/breadcrumbs
    │   └── SectionLayout.tsx  # Shared section page wrapper
    └── ui/
        └── Panel.tsx          # Reusable panel component
```

### Key Components
- **Preloader**: Multilingual greeting sequence (नमस्ते, آداب, வணக்கம், </>)
- **HeroContainer**: 60/40 asymmetrical grid layout
- **MainPanel**: Tech identity showcase
- **SecondaryPanels**: Music and Travel panels
- **Marquee**: Scrolling banner with multilingual names
- **Panel**: Reusable UI component for consistent styling

### Development Commands
- **Dev**: `npm run dev` (uses Turbopack)
- **Build**: `npm run build` (static export to /out/)
- **Lint**: `npm run lint`
- **Deploy**: Manual FTP upload of /out/ contents

### Design System
- **Colors**: Dark theme (#121212, #EAEAEA, #AAAAAA, #1A1A1A)
- **Typography**: Montserrat (headings), Roboto (body), Noto Nastaliq Urdu (Urdu script)
- **Layout**: 60/40 asymmetrical grid system
- **Responsive**: Mobile-first approach with stack layout
- **Cultural Identity**: Multilingual text integration

### Interview-Focused Standards
- Production-ready, maintainable code
- TypeScript strict mode for type safety
- Component reusability (shared Panel component)
- Modern animation with GSAP
- Cultural representation and inclusivity
- Clean component architecture

### Current Status
**Phase 1: Complete ✅**
- ✅ Multilingual preloader with GSAP animations
- ✅ Asymmetrical hero section layout (60/40 grid)
- ✅ Reusable component library (Panel)
- ✅ Multilingual marquee with Hindi/Urdu names
- ✅ Mobile-responsive design
- ✅ Devanagari favicon integration
- ✅ Static export build system for FTP deployment

**Phase 2: Planned 🚧**
- 🚧 Section-specific routing (/tech, /music, /travel)
- 🚧 TECH section with code environment and GitHub integration
- 🚧 MUSIC section with audio visualizations and track embedding
- 🚧 TRAVEL section with interactive maps and photo galleries
- 🚧 Adaptive marquee system with section-specific content
- 🚧 Smooth page transitions maintaining spatial relationships

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

### Multilingual Features
- **Preloader**: Sequential greetings in Hindi, Urdu, Tamil, and code symbols
- **Favicon**: Devanagari अ (first letter symbolizing new beginnings)
- **Marquee**: Names in both Hindi (अयान) and Urdu (عیان) scripts
- **Font Support**: Comprehensive multilingual typography system

### Component Architecture
- **Panel Component**: Reusable UI building block for consistent styling
- **GSAP Integration**: Professional animations with hardware acceleration
- **Static Export**: Production-ready build system for FTP deployment
- **TypeScript**: Strict type checking for production quality

### Phase 2 Design Philosophy
**Strategic Approach**: Preserve the successful home page while adding dedicated exploration spaces
- **Home Page**: Maintains asymmetrical showcase for immediate recruiter impact
- **Section Pages**: Immersive environments showcasing different technical capabilities
- **Navigation**: Smooth transitions maintaining spatial relationships between home and sections
- **Brand Consistency**: Multilingual marquee adapts content per section while preserving identity

### Section-Specific Environments (Phase 2)
**TECH Section**:
- Code rain animations, terminal aesthetics
- GitHub API integration, live project demos
- Interactive code snippets with syntax highlighting
- Marquee: "अयान — FULL STACK — REACT — عیان — NODE.JS — TYPESCRIPT"

**MUSIC Section**:
- Real-time audio visualizations, waveform patterns
- Embedded track players, production tool showcases
- Beat-synchronized animations and audio-reactive interfaces
- Marquee: "अयान — PRODUCER — ELECTRONIC — عیان — ABLETON — SYNTHESIZER"

**TRAVEL Section**:
- Interactive world maps, location-based transitions
- Photo galleries with geolocation data, travel stories
- Geographic visual language and cultural documentation
- Marquee: "अयान — EXPLORER — CULTURES — عیان — PHOTOGRAPHY — STORIES"

---
*Last updated: Phase 2 architecture and section-specific environments planned*