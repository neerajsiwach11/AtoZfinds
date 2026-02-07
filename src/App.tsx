import { useEffect, useRef, useLayoutEffect, useState } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { ArrowRight, Instagram, Mail, Copy, Check, Menu, X, Camera, Sparkles, Send } from 'lucide-react'
import './App.css'

gsap.registerPlugin(ScrollTrigger)

function App() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [emailCopied, setEmailCopied] = useState(false)
  const mainRef = useRef<HTMLDivElement>(null)
  const heroRef = useRef<HTMLDivElement>(null)
  const wallRef = useRef<HTMLDivElement>(null)
  const spotlightRef = useRef<HTMLDivElement>(null)
  const studioRef = useRef<HTMLDivElement>(null)
  const proofRef = useRef<HTMLDivElement>(null)
  const contactRef = useRef<HTMLDivElement>(null)

  // Hero load animation
  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ delay: 0.2 })
      
      // Chrome blob entrance
      tl.fromTo('.hero-chrome', 
        { opacity: 0, y: '-12vh', rotate: 18, scale: 0.92 },
        { opacity: 1, y: 0, rotate: 0, scale: 1, duration: 1, ease: 'power2.out' }
      )
      
      // Headline words
      tl.fromTo('.hero-headline span',
        { opacity: 0, y: 40 },
        { opacity: 1, y: 0, duration: 0.6, stagger: 0.03, ease: 'power2.out' },
        '-=0.6'
      )
      
      // Subheadline + CTA
      tl.fromTo('.hero-subtext',
        { opacity: 0, y: 18 },
        { opacity: 1, y: 0, duration: 0.5, ease: 'power2.out' },
        '-=0.3'
      )
      
      // Micro labels
      tl.fromTo('.micro-label-hero',
        { opacity: 0 },
        { opacity: 1, duration: 0.4 },
        '-=0.2'
      )
    }, heroRef)

    return () => ctx.revert()
  }, [])

  // Scroll animations
  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      // Hero scroll animation (pinned)
      const heroScrollTl = gsap.timeline({
        scrollTrigger: {
          trigger: heroRef.current,
          start: 'top top',
          end: '+=130%',
          pin: true,
          scrub: 0.6,
          onLeaveBack: () => {
            // Reset hero elements when scrolling back to top
            gsap.set('.hero-headline, .hero-subtext, .hero-chrome, .micro-label-hero', {
              opacity: 1, x: 0, y: 0, rotate: 0, scale: 1
            })
          }
        }
      })

      // Hero exit phase (70%-100%)
      heroScrollTl.fromTo('.hero-headline',
        { x: 0, opacity: 1 },
        { x: '-55vw', opacity: 0, ease: 'power2.in' },
        0.7
      )
      heroScrollTl.fromTo('.hero-subtext',
        { y: 0, opacity: 1 },
        { y: '10vh', opacity: 0, ease: 'power2.in' },
        0.7
      )
      heroScrollTl.fromTo('.hero-chrome',
        { x: 0, y: 0, rotate: 0, scale: 1, opacity: 1 },
        { x: '18vw', y: '-10vh', rotate: 25, scale: 1.08, opacity: 0, ease: 'power2.in' },
        0.7
      )
      heroScrollTl.fromTo('.micro-label-hero',
        { opacity: 1 },
        { opacity: 0, ease: 'power2.in' },
        0.75
      )

      // Wall section (pinned)
      const wallScrollTl = gsap.timeline({
        scrollTrigger: {
          trigger: wallRef.current,
          start: 'top top',
          end: '+=140%',
          pin: true,
          scrub: 0.7,
        }
      })

      // Wall entrance (0%-30%)
      wallScrollTl.fromTo('.wall-headline',
        { y: '18vh', opacity: 0 },
        { y: 0, opacity: 1, ease: 'none' },
        0
      )
      wallScrollTl.fromTo('.wall-subtext',
        { y: '10vh', opacity: 0 },
        { y: 0, opacity: 1, ease: 'none' },
        0.05
      )
      wallScrollTl.fromTo('.wall-card-top',
        { y: '-40vh', opacity: 0 },
        { y: 0, opacity: 1, stagger: 0.02, ease: 'none' },
        0
      )
      wallScrollTl.fromTo('.wall-card-bottom',
        { y: '40vh', opacity: 0 },
        { y: 0, opacity: 1, stagger: 0.02, ease: 'none' },
        0
      )
      wallScrollTl.fromTo('.wall-card-left',
        { x: '-50vw', opacity: 0 },
        { x: 0, opacity: 1, ease: 'none' },
        0
      )
      wallScrollTl.fromTo('.wall-card-right',
        { x: '50vw', opacity: 0 },
        { x: 0, opacity: 1, ease: 'none' },
        0
      )

      // Wall exit (70%-100%)
      wallScrollTl.fromTo('.wall-headline',
        { x: 0, opacity: 1 },
        { x: '55vw', opacity: 0, ease: 'power2.in' },
        0.7
      )
      wallScrollTl.fromTo('.wall-subtext',
        { y: 0, opacity: 1 },
        { y: '10vh', opacity: 0, ease: 'power2.in' },
        0.7
      )
      wallScrollTl.fromTo('.wall-card-top',
        { y: 0, opacity: 1 },
        { y: '-35vh', opacity: 0, ease: 'power2.in' },
        0.7
      )
      wallScrollTl.fromTo('.wall-card-bottom',
        { y: 0, opacity: 1 },
        { y: '35vh', opacity: 0, ease: 'power2.in' },
        0.7
      )
      wallScrollTl.fromTo('.wall-card-left',
        { x: 0, opacity: 1 },
        { x: '-40vw', opacity: 0, ease: 'power2.in' },
        0.7
      )
      wallScrollTl.fromTo('.wall-card-right',
        { x: 0, opacity: 1 },
        { x: '40vw', opacity: 0, ease: 'power2.in' },
        0.7
      )

      // Spotlight section (pinned)
      const spotlightScrollTl = gsap.timeline({
        scrollTrigger: {
          trigger: spotlightRef.current,
          start: 'top top',
          end: '+=130%',
          pin: true,
          scrub: 0.6,
        }
      })

      // Spotlight entrance
      spotlightScrollTl.fromTo('.spotlight-card',
        { x: '60vw', opacity: 0 },
        { x: 0, opacity: 1, ease: 'none' },
        0
      )
      spotlightScrollTl.fromTo('.spotlight-headline',
        { x: '-40vw', opacity: 0 },
        { x: 0, opacity: 1, ease: 'none' },
        0.05
      )
      spotlightScrollTl.fromTo('.spotlight-body',
        { y: '10vh', opacity: 0 },
        { y: 0, opacity: 1, ease: 'none' },
        0.1
      )
      spotlightScrollTl.fromTo('.spotlight-chrome',
        { y: '-20vh', rotate: -18, opacity: 0 },
        { y: 0, rotate: 0, opacity: 1, ease: 'none' },
        0
      )

      // Spotlight exit
      spotlightScrollTl.fromTo('.spotlight-card',
        { x: 0, opacity: 1 },
        { x: '55vw', opacity: 0, ease: 'power2.in' },
        0.7
      )
      spotlightScrollTl.fromTo('.spotlight-headline, .spotlight-body',
        { x: 0, opacity: 1 },
        { x: '-35vw', opacity: 0, ease: 'power2.in' },
        0.7
      )
      spotlightScrollTl.fromTo('.spotlight-chrome',
        { y: 0, rotate: 0, opacity: 1 },
        { y: '-18vh', rotate: -20, opacity: 0, ease: 'power2.in' },
        0.7
      )

      // Studio section (flowing)
      gsap.fromTo('.studio-headline',
        { y: 40, opacity: 0 },
        {
          y: 0, opacity: 1,
          scrollTrigger: {
            trigger: studioRef.current,
            start: 'top 80%',
            end: 'top 35%',
            scrub: 0.5,
          }
        }
      )

      gsap.fromTo('.studio-subcopy',
        { y: 30, opacity: 0 },
        {
          y: 0, opacity: 1,
          scrollTrigger: {
            trigger: studioRef.current,
            start: 'top 75%',
            end: 'top 40%',
            scrub: 0.5,
          }
        }
      )

      gsap.fromTo('.studio-image',
        { x: '12vw', opacity: 0, scale: 0.98 },
        {
          x: 0, opacity: 1, scale: 1,
          scrollTrigger: {
            trigger: studioRef.current,
            start: 'top 70%',
            end: 'top 30%',
            scrub: 0.5,
          }
        }
      )

      gsap.fromTo('.step-card-item',
        { x: '-8vw', opacity: 0 },
        {
          x: 0, opacity: 1, stagger: 0.08,
          scrollTrigger: {
            trigger: '.steps-container',
            start: 'top 80%',
            end: 'top 50%',
            scrub: 0.5,
          }
        }
      )

      gsap.fromTo('.studio-cta',
        { y: 20, opacity: 0 },
        {
          y: 0, opacity: 1,
          scrollTrigger: {
            trigger: '.studio-cta',
            start: 'top 90%',
            end: 'top 70%',
            scrub: 0.5,
          }
        }
      )

      // Proof section (flowing)
      gsap.fromTo('.proof-headline',
        { y: 30, opacity: 0 },
        {
          y: 0, opacity: 1,
          scrollTrigger: {
            trigger: proofRef.current,
            start: 'top 80%',
            end: 'top 50%',
            scrub: 0.5,
          }
        }
      )

      gsap.fromTo('.metric-card-item',
        { y: 40, opacity: 0 },
        {
          y: 0, opacity: 1, stagger: 0.1,
          scrollTrigger: {
            trigger: '.metrics-grid',
            start: 'top 80%',
            end: 'top 50%',
            scrub: 0.5,
          }
        }
      )

      gsap.fromTo('.testimonial-card',
        { y: 20, opacity: 0 },
        {
          y: 0, opacity: 1,
          scrollTrigger: {
            trigger: '.testimonial-card',
            start: 'top 90%',
            end: 'top 70%',
            scrub: 0.5,
          }
        }
      )

      // Contact section (pinned)
      const contactScrollTl = gsap.timeline({
        scrollTrigger: {
          trigger: contactRef.current,
          start: 'top top',
          end: '+=120%',
          pin: true,
          scrub: 0.6,
        }
      })

      // Contact entrance
      contactScrollTl.fromTo('.contact-headline',
        { y: '18vh', opacity: 0 },
        { y: 0, opacity: 1, ease: 'none' },
        0.05
      )
      contactScrollTl.fromTo('.contact-subcopy',
        { y: '10vh', opacity: 0 },
        { y: 0, opacity: 1, ease: 'none' },
        0.1
      )
      contactScrollTl.fromTo('.contact-ctas',
        { y: '10vh', opacity: 0 },
        { y: 0, opacity: 1, ease: 'none' },
        0.15
      )
      contactScrollTl.fromTo('.contact-social',
        { y: '6vh', opacity: 0 },
        { y: 0, opacity: 1, ease: 'none' },
        0.2
      )

    }, mainRef)

    return () => ctx.revert()
  }, [])

  const copyEmail = () => {
    navigator.clipboard.writeText('hello@atoz.studio')
    setEmailCopied(true)
    setTimeout(() => setEmailCopied(false), 2000)
  }

  const scrollToSection = (ref: React.RefObject<HTMLDivElement | null>) => {
    ref.current?.scrollIntoView({ behavior: 'smooth' })
    setMenuOpen(false)
  }

  return (
    <div ref={mainRef} className="relative">
      {/* Grain overlay */}
      <div className="grain-overlay" />

      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 px-6 py-6 flex justify-between items-center">
        <div className="text-xl font-heading font-bold tracking-tight">ATOZ</div>
        
        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-8">
          <button onClick={() => scrollToSection(wallRef)} className="text-sm font-medium hover:opacity-60 transition-opacity">Work</button>
          <button onClick={() => scrollToSection(studioRef)} className="text-sm font-medium hover:opacity-60 transition-opacity">Studio</button>
          <button onClick={() => scrollToSection(contactRef)} className="text-sm font-medium hover:opacity-60 transition-opacity">Contact</button>
        </div>

        {/* Mobile menu button */}
        <button 
          className="md:hidden p-2"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="fixed inset-0 z-40 bg-[#F4F2EE] flex flex-col items-center justify-center gap-8 md:hidden">
          <button onClick={() => scrollToSection(wallRef)} className="text-2xl font-heading font-bold">Work</button>
          <button onClick={() => scrollToSection(studioRef)} className="text-2xl font-heading font-bold">Studio</button>
          <button onClick={() => scrollToSection(contactRef)} className="text-2xl font-heading font-bold">Contact</button>
        </div>
      )}

      {/* Section 1: Hero */}
      <section ref={heroRef} className="section-pinned bg-[#F4F2EE] flex items-center justify-center z-10">
        {/* Chrome blob */}
        <img 
          src="/hero_chrome_blob.png" 
          alt="" 
          className="hero-chrome absolute right-[-6vw] top-[-10vh] w-[52vw] max-w-[700px] z-[3] chrome-float"
        />
        
        {/* Micro labels */}
        <div className="micro-label-hero micro-label absolute left-[6vw] top-[16vh] text-[#6E6E6E] z-[4]">
          Curated by AtoZ
        </div>
        <div className="micro-label-hero micro-label absolute right-[6vw] top-[16vh] text-[#6E6E6E] z-[4]">
          Scroll to explore
        </div>

        {/* Center content */}
        <div className="relative z-[5] text-center px-6">
          <h1 className="hero-headline headline-xl text-[clamp(2.5rem,12vw,9rem)] mb-6">
            <span>Finds</span> <span>from</span> <span>A</span> <span>to</span> <span>Z.</span>
          </h1>
          <p className="hero-subtext text-lg md:text-xl text-[#6E6E6E] max-w-[640px] mx-auto mb-8">
            Curated products. Honest notes. Shoppable stories.
          </p>
          <button 
            onClick={() => scrollToSection(wallRef)}
            className="hero-subtext btn-primary inline-flex items-center gap-2"
          >
            Explore the wall <ArrowRight size={18} />
          </button>
        </div>
      </section>

      {/* Section 2: Curated Wall */}
      <section ref={wallRef} className="section-pinned bg-[#F4F2EE] z-20">
        {/* Product cards */}
        <div className="wall-card-top absolute left-[6vw] top-[10vh] w-[26vw] h-[16vh] product-card card-breathe">
          <img src="/wall_product_01.jpg" alt="" className="w-full h-full object-cover" />
        </div>
        <div className="wall-card-top absolute left-[37vw] top-[8vh] w-[26vw] h-[16vh] product-card card-breathe card-breathe-delay-1">
          <img src="/wall_product_02.jpg" alt="" className="w-full h-full object-cover" />
        </div>
        <div className="wall-card-top absolute left-[68vw] top-[10vh] w-[26vw] h-[16vh] product-card card-breathe card-breathe-delay-2">
          <img src="/wall_product_03.jpg" alt="" className="w-full h-full object-cover" />
        </div>
        
        <div className="wall-card-left absolute left-[6vw] top-[38vh] w-[18vw] h-[28vh] product-card card-breathe">
          <img src="/wall_product_04.jpg" alt="" className="w-full h-full object-cover" />
        </div>
        <div className="wall-card-right absolute left-[76vw] top-[38vh] w-[18vw] h-[28vh] product-card card-breathe card-breathe-delay-1">
          <img src="/wall_product_05.jpg" alt="" className="w-full h-full object-cover" />
        </div>
        
        <div className="wall-card-bottom absolute left-[6vw] top-[74vh] w-[26vw] h-[16vh] product-card card-breathe card-breathe-delay-2">
          <img src="/wall_product_06.jpg" alt="" className="w-full h-full object-cover" />
        </div>
        <div className="wall-card-bottom absolute left-[37vw] top-[78vh] w-[26vw] h-[16vh] product-card card-breathe card-breathe-delay-3">
          <img src="/wall_product_07.jpg" alt="" className="w-full h-full object-cover" />
        </div>
        <div className="wall-card-bottom absolute left-[68vw] top-[74vh] w-[26vw] h-[16vh] product-card card-breathe">
          <img src="/wall_product_08.jpg" alt="" className="w-full h-full object-cover" />
        </div>

        {/* Center content */}
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-center z-[5] px-6">
          <h2 className="wall-headline headline-lg text-[clamp(2rem,10vw,7rem)] mb-6">
            A Wall of Good Decisions.
          </h2>
          <p className="wall-subtext text-lg md:text-xl text-[#6E6E6E] max-w-[720px] mx-auto mb-8">
            From daily essentials to small luxuries—each pick earns its place.
          </p>
          <button className="wall-subtext btn-secondary inline-flex items-center gap-2">
            Request the media kit <ArrowRight size={18} />
          </button>
        </div>
      </section>

      {/* Section 3: Spotlight Product */}
      <section ref={spotlightRef} className="section-pinned bg-[#F4F2EE] z-30">
        {/* Chrome shape */}
        <img 
          src="/spotlight_chrome_shape.png" 
          alt="" 
          className="spotlight-chrome absolute left-[-10vw] top-[-12vh] w-[46vw] max-w-[600px] z-[2] chrome-float"
        />

        {/* Left content */}
        <div className="absolute left-[8vw] top-1/2 -translate-y-1/2 z-[5] max-w-[34vw]">
          <h2 className="spotlight-headline headline-lg text-[clamp(1.75rem,6vw,5rem)] mb-6">
            One Perfect Pick.
          </h2>
          <p className="spotlight-body text-lg text-[#6E6E6E] mb-8 max-w-[30vw]">
            A single object, photographed like it matters—because it does.
          </p>
          <button className="spotlight-body btn-secondary inline-flex items-center gap-2">
            See how we shoot <Camera size={18} />
          </button>
        </div>

        {/* Right product card */}
        <div className="spotlight-card absolute right-[6vw] top-[14vh] w-[44vw] h-[72vh] product-card z-[3]">
          <img src="/spotlight_product_main.jpg" alt="" className="w-full h-full object-cover" />
        </div>
      </section>

      {/* Section 4: Content Studio */}
      <section ref={studioRef} className="relative bg-[#F4F2EE] min-h-screen py-24 z-40">
        <div className="px-[6vw]">
          <div className="grid md:grid-cols-2 gap-12 items-start">
            {/* Left column */}
            <div>
              <h2 className="studio-headline headline-lg text-[clamp(2rem,6vw,5rem)] mb-6">
                Shoot. Edit. Publish.
              </h2>
              <p className="studio-subcopy text-lg text-[#6E6E6E] mb-12 max-w-[44vw]">
                A repeatable system that keeps every launch consistent—and every product unmistakably AtoZ.
              </p>

              {/* Steps */}
              <div className="steps-container space-y-4">
                <div className="step-card-item step-card flex items-start gap-4">
                  <span className="text-2xl font-heading font-bold text-[#111214]/30">01</span>
                  <div>
                    <h4 className="font-semibold mb-1">Capture clean assets in natural light.</h4>
                    <p className="text-sm text-[#6E6E6E]">Professional photography that highlights every detail.</p>
                  </div>
                </div>
                <div className="step-card-item step-card flex items-start gap-4">
                  <span className="text-2xl font-heading font-bold text-[#111214]/30">02</span>
                  <div>
                    <h4 className="font-semibold mb-1">Grade for a cool, editorial finish.</h4>
                    <p className="text-sm text-[#6E6E6E]">Consistent color treatment across all content.</p>
                  </div>
                </div>
                <div className="step-card-item step-card flex items-start gap-4">
                  <span className="text-2xl font-heading font-bold text-[#111214]/30">03</span>
                  <div>
                    <h4 className="font-semibold mb-1">Publish with a note people actually read.</h4>
                    <p className="text-sm text-[#6E6E6E]">Copy that converts browsers into buyers.</p>
                  </div>
                </div>
              </div>

              {/* CTA */}
              <div className="studio-cta mt-12">
                <p className="text-[#6E6E6E] mb-4">Ready to collaborate? Send a brief.</p>
                <button 
                  onClick={() => scrollToSection(contactRef)}
                  className="btn-primary inline-flex items-center gap-2"
                >
                  Start a project <Sparkles size={18} />
                </button>
              </div>
            </div>

            {/* Right column - image */}
            <div className="studio-image product-card h-[52vh] md:sticky md:top-24">
              <img src="/studio_behind_the_scenes.jpg" alt="" className="w-full h-full object-cover" />
            </div>
          </div>
        </div>
      </section>

      {/* Section 5: Proof / Metrics */}
      <section ref={proofRef} className="relative bg-[#F4F2EE] py-24 z-50">
        <div className="px-[6vw]">
          <h2 className="proof-headline headline-lg text-[clamp(2rem,6vw,5rem)] text-center mb-16">
            Built for Conversion.
          </h2>

          {/* Metrics grid */}
          <div className="metrics-grid grid md:grid-cols-3 gap-6 max-w-[920px] mx-auto mb-16">
            <div className="metric-card-item metric-card">
              <div className="text-4xl md:text-5xl font-heading font-bold mb-2">12%</div>
              <div className="font-semibold mb-1">Avg CTR</div>
              <div className="text-sm text-[#6E6E6E]">On shoppable content</div>
            </div>
            <div className="metric-card-item metric-card">
              <div className="text-4xl md:text-5xl font-heading font-bold mb-2">3.2M</div>
              <div className="font-semibold mb-1">Monthly Reach</div>
              <div className="text-sm text-[#6E6E6E]">Across platforms</div>
            </div>
            <div className="metric-card-item metric-card">
              <div className="text-4xl md:text-5xl font-heading font-bold mb-2">48hr</div>
              <div className="font-semibold mb-1">Turnaround</div>
              <div className="text-sm text-[#6E6E6E]">From brief to publish</div>
            </div>
          </div>

          {/* Testimonial */}
          <div className="testimonial-card max-w-[760px] mx-auto text-center p-8 md:p-12 bg-white/60 backdrop-blur-sm rounded-[28px] border border-[#111214]/5">
            <blockquote className="text-xl md:text-2xl font-medium mb-6 leading-relaxed">
              "AtoZ doesn't just list products—they make people want to click."
            </blockquote>
            <cite className="text-sm text-[#6E6E6E] not-italic">
              — Brand Partner, Home & Living
            </cite>
          </div>
        </div>
      </section>

      {/* Section 6: Contact */}
      <section ref={contactRef} className="section-pinned dark-section z-[60]">
        {/* Center content */}
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-center z-[5] px-6 w-full">
          <h2 className="contact-headline headline-lg text-[clamp(2rem,10vw,7rem)] text-[#F4F2EE] mb-6">
            Let's Build the Next Drop.
          </h2>
          <p className="contact-subcopy text-lg text-[#F4F2EE]/70 max-w-[640px] mx-auto mb-10">
            Tell us what you're launching. We'll reply with a plan, timeline, and rate card.
          </p>
          
          {/* CTAs */}
          <div className="contact-ctas flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
            <a 
              href="mailto:hello@atoz.studio"
              className="btn-primary bg-[#F4F2EE] text-[#0B0D10] hover:bg-white inline-flex items-center gap-2"
            >
              <Mail size={18} /> Email hello@atoz.studio
            </a>
            <button 
              onClick={copyEmail}
              className="btn-secondary border-[#F4F2EE]/30 text-[#F4F2EE] hover:bg-[#F4F2EE]/10 inline-flex items-center gap-2"
            >
              {emailCopied ? <Check size={18} /> : <Copy size={18} />}
              {emailCopied ? 'Copied!' : 'Copy email'}
            </button>
          </div>

          {/* Social links */}
          <div className="contact-social flex items-center justify-center gap-8">
            <a href="https://instagram.com/atoz.finds" target="_blank" rel="noopener noreferrer" className="text-[#F4F2EE]/70 hover:text-[#F4F2EE] transition-colors flex items-center gap-2">
              <Instagram size={20} /> Instagram
            </a>
            <a href="#" className="text-[#F4F2EE]/70 hover:text-[#F4F2EE] transition-colors flex items-center gap-2">
              <Send size={20} /> TikTok
            </a>
            <a href="#" className="text-[#F4F2EE]/70 hover:text-[#F4F2EE] transition-colors flex items-center gap-2">
              <Camera size={20} /> YouTube
            </a>
          </div>
        </div>

        {/* Footer */}
        <div className="absolute bottom-8 left-0 right-0 text-center">
          <p className="text-xs text-[#F4F2EE]/40">
            © 2026 AtoZ Finds. All rights reserved.
          </p>
        </div>
      </section>
    </div>
  )
}

export default App
