Technical Specification: Ayaan's Portfolio - Multi-Phase Architecture
Version: 3.0 - Phase 1 Complete, Phase 2 Specifications Added
Project: Ayaan's Personal Portfolio Website
Framework: Next.js 15 + React 19 + TypeScript

1. High-Level Overview
   This document outlines the technical requirements for a comprehensive portfolio system consisting of:
   
   **Phase 1: The Asymmetrical Showcase** ✅ IMPLEMENTED
   A one-page interactive hero section serving as the primary landing page and recruitment-focused introduction.
   
   **Phase 2: Dedicated Section Spaces** 🚧 SPECIFICATION PHASE
   Individual section pages (TECH, MUSIC, TRAVEL) with unique environmental characteristics while maintaining brand consistency.
   
   **Core Architecture Philosophy:**
   - Home page preserves successful asymmetrical showcase for immediate impact
   - Section pages provide immersive exploration spaces
   - Consistent navigation spine maintains brand unity
   - Progressive disclosure supports both quick scanning and deep exploration
2. Core Technologies & Libraries ✅ IMPLEMENTED
   Frontend Framework: Next.js 15 with App Router, React 19, TypeScript (strict mode)
   Styling: Tailwind CSS with CSS Custom Properties for theming
   Animations: GSAP (GreenSock Animation Platform) for professional animations
   Fonts: Google Fonts - Montserrat (800), Roboto (300,400), Noto Nastaliq Urdu (700)
   Build System: Static export configuration for FTP deployment
   Performance: Hardware-accelerated animations, optimized font loading
3. Component Breakdown ✅ IMPLEMENTED
   3.1. Preloader Component
   Technology: React component with GSAP timeline animation
   Functionality: Multilingual greeting sequence establishing cultural identity
   Structure:
   - Fixed position fullscreen overlay (z-index: 100)
   - Flexbox content container with gap for consistent spacing
   - Main text and subtext elements with conditional Urdu styling
   Implementation:
   - GSAP timeline with power easing curves
   - Sequence: नमस्ते (namaste) → آداب (aadab) → வணక்கம் (vanakkam) → </>
   - Urdu text: translateY(-30px) offset, smaller font size
   - Mobile responsive: 12vw main text, 4vw subtext
   - Smooth 0.7s fade out transition
   3.2. Hero Container (.hero-container)
   Functionality: The main container for the entire hero section.
   Structure:
   A div.hero-container with height: 100vh.
   Desktop Layout (> 768px): Uses display: grid with grid-template-columns: 60% 40%.
   Mobile Layout (<= 768px): Uses display: grid with grid-template-rows: 60% 40%.
   Behavior: Fades in with a 1s duration after the preloader has finished fading out (delay of ~3.5s).
   3.3. Main Panel (.main-panel)
   Functionality: The primary content stage. Its background and tagline change based on the application's state.
   Structure:
   A div.main-panel acting as a grid item.
   A ::before pseudo-element for a dark overlay to ensure text legibility over background images.
   An h1.hero-name for the main name display.
   An h2.tagline for the descriptive text.
   State-based Styling:
   Default State: background-image is set to the "Tech" photo.
   Music State: A .music-active class is added. This class changes the background-image to the "Music" photo.
   Travel State: A .travel-active class is added. This class changes the background-image to the "Travel" photo.
   Interaction:
   On :hover, the h1.hero-name transitions from an outlined (stroked) style to a solid fill color. color animates from transparent to var(--primary-accent).
   3.4. Secondary Panels (.secondary-panels)
   Functionality: Act as the navigation menu for changing the state of the Main Panel.
   Structure:
   A div.secondary-panels container using display: grid with grid-template-rows: 50% 50%.
   Two child divs: div#music-panel and div#travel-panel.
   Interaction (Desktop):
   On mouseenter of #music-panel, the application state changes to 'music'.
   On mouseenter of #travel-panel, the application state changes to 'travel'.
   On mouseleave of the parent .secondary-panels container, the state reverts to 'tech'.
   Interaction (Mobile):
   On touchstart of #music-panel, the state toggles between 'music' and 'tech'.
   On touchstart of #travel-panel, the state toggles between 'travel' and 'tech'.
   3.5. Marquee (.marquee)
   Functionality: A continuously scrolling ticker at the bottom of the hero section.
   Structure:
   A div.marquee with position: absolute, bottom: 0, and width: 100%.
   A child div.marquee-content containing the text elements. The entire text sequence is duplicated inside this div to create a seamless loop.
   Behavior:
   A CSS keyframe animation (@keyframes marquee) translates the .marquee-content from translateX(0) to translateX(-50%).
   The animation timing is linear and has a long duration (~30s) for a smooth, steady scroll.
   Styling: A backdrop-filter: blur(5px) should be applied for a frosted glass effect over the background.
4. State Management
   A single state variable, activePanel, should control the hero's appearance.
   Possible Values: 'tech' (default), 'music', 'travel'.
   Logic:
   Initialize activePanel = 'tech'.
   Event listeners on the secondary panels update this state variable.
   A central updateUI() function reads the activePanel state and:
   Sets the appropriate class (.music-active, .travel-active) on .main-panel.
   Updates the textContent of the .tagline element.
5. Animation & Timing Specifications
   Global Transition Speed: A CSS variable --transition-speed: 0.5s should be used for all state-change transitions (backgrounds, colors, opacity). The timing function should be ease.
   Preloader: 600ms per word, 1s fade-out.
   Hero Fade-in: 1s duration, 3.5s delay.
   Marquee: 30s duration, linear timing.
6. Asset Requirements
   Fonts:
   Montserrat (Bold 800): For .hero-name, .panel text, and .preloader-text.
   Roboto (Light 300, Regular 400): For .tagline and .marquee-text.
   Images:
   Three high-resolution, professionally shot, cinematic-style photographs are required.
   Theme: Tech, Music, Travel.
   Composition: Must be composed with sufficient "negative space" or low-contrast areas to ensure the overlaid white text is legible.
   Optimization: All images must be optimized for fast web loading.

7. Phase 2: Dedicated Section Architecture 🚧 SPECIFICATIONS

7.1. Navigation System
   **Route Structure:**
   - `/` - Home page (current asymmetrical showcase)
   - `/tech` - TECH section with development-focused environment
   - `/music` - MUSIC section with audio-visual environment
   - `/travel` - TRAVEL section with geographic environment
   
   **Navigation Implementation:**
   - Panel components on home page become Next.js Link wrappers
   - Smooth page transitions using GSAP or Framer Motion
   - Breadcrumb system: [HOME] > [SECTION] for easy return navigation
   - Consistent header/footer elements across all pages

7.2. Section-Specific Environmental Systems

   **7.2.1. TECH Section Environment**
   Technology Stack Extensions:
   - Canvas API or CSS animations for code rain background effects
   - Syntax highlighting libraries (Prism.js, highlight.js)
   - GitHub API integration for live contribution data
   - Code sandbox embedding (CodePen, StackBlitz)
   
   Environmental Elements:
   - Background: Animated matrix-style code rain, terminal cursor blinks
   - Color Scheme: Monospace terminal aesthetics (green on black variants)
   - Interactive Elements: Clickable code blocks, expandable project cards
   - Sound Design: Optional subtle keyboard typing sounds, terminal beeps
   
   Content Architecture:
   - Hero section with coding GIF/video background
   - Interactive project showcase with live demos
   - Skills visualization (tech stack, proficiency levels)
   - GitHub contribution heatmap integration
   - Code snippet galleries with syntax highlighting

   **7.2.2. MUSIC Section Environment**
   Technology Stack Extensions:
   - Web Audio API for real-time visualizations
   - Three.js or P5.js for 3D audio reactive graphics
   - Spotify/SoundCloud API for track embedding
   - Canvas-based waveform rendering
   
   Environmental Elements:
   - Background: Real-time audio visualizers, frequency spectrum displays
   - Color Scheme: Dynamic color palettes responding to audio frequencies
   - Interactive Elements: Play/pause controls, volume visualizers
   - Sound Design: Ambient electronic textures, beat-synchronized UI animations
   
   Content Architecture:
   - Audio player with embedded tracks
   - Production tools showcase (Ableton screenshots, gear photos)
   - Genre exploration with audio samples
   - Creative process documentation (studio photos, workflow videos)
   - Collaboration history and featured releases

   **7.2.3. TRAVEL Section Environment**
   Technology Stack Extensions:
   - Mapbox GL JS or Google Maps API for interactive maps
   - Three.js for 3D globe visualizations
   - Image optimization and lazy loading systems
   - Geolocation APIs for location-based content
   
   Environmental Elements:
   - Background: Animated world map with location pins, geographic transitions
   - Color Scheme: Warm, earth-toned palettes inspired by travel photography
   - Interactive Elements: Clickable map regions, photo gallery carousels
   - Sound Design: Subtle ambient sounds from different regions
   
   Content Architecture:
   - Interactive world map with visited locations
   - Photo galleries organized by destination
   - Travel stories with embedded media
   - Cultural experiences documentation
   - Location-based timeline of journeys

7.3. Shared Component Systems

   **7.3.1. Adaptive Marquee System**
   The existing marquee component adapts content based on current section:
   - Home: "अयान — DEVELOPER — PROBLEM SOLVER — عیان — MUSICIAN — TRAVELLER"
   - TECH: "अयान — FULL STACK — REACT — عیان — NODE.JS — TYPESCRIPT"
   - MUSIC: "अयान — PRODUCER — ELECTRONIC — عیان — ABLETON — SYNTHESIZER"
   - TRAVEL: "अयान — EXPLORER — CULTURES — عیان — PHOTOGRAPHY — STORIES"
   
   **7.3.2. Navigation Header**
   Consistent across all pages:
   - Logo/Name (links to home)
   - Section indicators with current state
   - Language toggle (if multilingual content expands)
   - Theme toggle (optional dark/light mode)
   
   **7.3.3. Transition System**
   - Page-to-page transitions maintain spatial relationships
   - Loading states with section-appropriate animations
   - Smooth color palette transitions between sections
   - Consistent timing functions across all animations

7.4. Performance Considerations

   **Code Splitting:**
   - Section-specific components loaded on demand
   - Heavy libraries (Three.js, audio processing) loaded only when needed
   - Image optimization with next/image for all gallery content
   
   **Animation Performance:**
   - Hardware acceleration for all visual effects
   - RequestAnimationFrame for smooth 60fps animations
   - GPU-optimized shaders for WebGL content
   - Reduce motion preferences respected
   
   **Mobile Optimization:**
   - Touch-friendly interactions for all environmental elements
   - Reduced animation complexity on mobile devices
   - Optimized asset delivery for mobile connections
   - Progressive enhancement for advanced features

7.5. Development Roadmap

   **Phase 2a: Foundation (Week 1-2)**
   - Routing system setup with Next.js App Router
   - Basic section page layouts with shared components
   - Navigation system implementation
   
   **Phase 2b: TECH Section (Week 3-4)**
   - Code rain animations and terminal aesthetics
   - Project showcase with GitHub API integration
   - Interactive code demos and skills visualization
   
   **Phase 2c: MUSIC Section (Week 5-6)**
   - Web Audio API integration and visualizations
   - Embedded audio players and track showcases
   - Production tools and creative process documentation
   
   **Phase 2d: TRAVEL Section (Week 7-8)**
   - Interactive map system with location markers
   - Photo gallery systems with geolocation data
   - Travel story integration and cultural documentation
   
   **Phase 2e: Polish & Optimization (Week 9-10)**
   - Performance optimization and mobile testing
   - Cross-browser compatibility and accessibility audit
   - SEO optimization and meta tag implementation
