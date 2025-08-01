Technical Specification: "The Asymmetrical Showcase" Portfolio
Version: 2.0 - Implementation Complete
Project: Ayaan's Personal Portfolio Website
Framework: Next.js 15 + React 19 + TypeScript

1. High-Level Overview
   This document outlines the technical requirements for building a one-page, interactive hero section for a personal portfolio. The concept, "The Asymmetrical Showcase," is designed to present the subject's primary identity as a Creative Developer while showcasing secondary passions for Music and Travel.
   The user experience is divided into three acts:
   The Ignition: A dynamic preloader that sets the stage.
   The Core Layout: An asymmetrical grid that establishes a clear visual hierarchy.
   The Interaction: A rich, hover- and tap-driven experience that reveals different facets of the subject's personality.
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
