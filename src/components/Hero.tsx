import { useEffect, useRef } from 'react';
import { ArrowRight, ChevronDown } from 'lucide-react';

export default function Hero() {
  const headlineRef = useRef<HTMLHeadingElement>(null);
  const subRef = useRef<HTMLParagraphElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);
  const badgesRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const elements = [
      { el: headlineRef.current, delay: 0 },
      { el: subRef.current, delay: 150 },
      { el: ctaRef.current, delay: 300 },
      { el: badgesRef.current, delay: 500 },
    ];
    elements.forEach(({ el, delay }) => {
      if (!el) return;
      el.style.opacity = '0';
      el.style.transform = 'translateY(40px)';
      setTimeout(() => {
        if (!el) return;
        el.style.transition = 'opacity 1s cubic-bezier(0.16,1,0.3,1), transform 1s cubic-bezier(0.16,1,0.3,1)';
        el.style.opacity = '1';
        el.style.transform = 'translateY(0)';
      }, delay + 200);
    });
  }, []);

  const scrollToServices = () => {
    document.querySelector('#services')?.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToContact = () => {
    document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col justify-center overflow-hidden"
      style={{ background: 'linear-gradient(135deg, #050f20 0%, #0a1e3d 40%, #0f2d6b 80%, #1a3a7a 100%)' }}
    >
      {/* Decorative background grid */}
      <div
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage:
            'linear-gradient(rgba(201,168,76,0.2) 1px, transparent 1px), linear-gradient(90deg, rgba(201,168,76,0.2) 1px, transparent 1px)',
          backgroundSize: '80px 80px',
        }}
      />

      {/* Large decorative circle */}
      <div
        className="absolute right-[-15%] top-[-10%] w-[700px] h-[700px] rounded-full opacity-10 spin-slow"
        style={{
          border: '1px solid rgba(201,168,76,0.6)',
          boxShadow: 'inset 0 0 80px rgba(201,168,76,0.1)',
        }}
      />
      <div
        className="absolute right-[-5%] top-[5%] w-[500px] h-[500px] rounded-full opacity-15"
        style={{
          border: '1px solid rgba(201,168,76,0.4)',
        }}
      />

      {/* Accent line top */}
      <div
        className="absolute top-0 left-0 h-px w-full"
        style={{ background: 'linear-gradient(90deg, transparent, #c9a84c, transparent)' }}
      />

      {/* Floating orb */}
      <div
        className="floating absolute left-[10%] bottom-[20%] w-2 h-2 rounded-full"
        style={{ background: '#c9a84c', boxShadow: '0 0 20px rgba(201,168,76,0.8)' }}
      />
      <div
        className="floating absolute left-[20%] top-[30%] w-1 h-1 rounded-full"
        style={{ background: '#c9a84c', boxShadow: '0 0 12px rgba(201,168,76,0.8)', animationDelay: '2s' }}
      />
      <div
        className="floating absolute right-[30%] bottom-[30%] w-1.5 h-1.5 rounded-full"
        style={{ background: '#c9a84c', boxShadow: '0 0 16px rgba(201,168,76,0.8)', animationDelay: '4s' }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-10 pt-32 pb-24">
        <div className="max-w-5xl">
          {/* Eyebrow */}
          <div
            className="inline-flex items-center gap-3 mb-8"
            style={{ opacity: 0 }}
            ref={useRef<HTMLDivElement>(null)}
          >
            <div className="h-px w-12" style={{ background: '#c9a84c' }} />
            <span
              className="text-xs tracking-[0.4em] uppercase font-medium"
              style={{ color: '#c9a84c', fontFamily: 'var(--font-body)' }}
            >
              City of London
            </span>
          </div>

          {/* Main Headline */}
          <h1
            ref={headlineRef}
            className="text-balance"
            style={{
              fontFamily: 'var(--font-display)',
              fontSize: 'clamp(3.5rem, 9vw, 8rem)',
              fontWeight: 300,
              lineHeight: 1.0,
              color: '#ffffff',
              letterSpacing: '-0.02em',
            }}
          >
            Where Vision
            <br />
            <em
              className="shimmer-text"
              style={{ fontStyle: 'italic', fontWeight: 400 }}
            >
              Meets Mastery.
            </em>
          </h1>

          {/* Subheadline */}
          <p
            ref={subRef}
            className="mt-8 max-w-2xl"
            style={{
              fontFamily: 'var(--font-body)',
              fontSize: 'clamp(1rem, 1.5vw, 1.25rem)',
              color: 'rgba(255,255,255,0.6)',
              lineHeight: 1.8,
              fontWeight: 300,
            }}
          >
            United is a premier consulting practice headquartered at The Walbrook Building,
            heart of the City of London. We partner with organisations to navigate complexity,
            unlock competitive advantage, and build enduring value.
          </p>

          {/* CTA Buttons */}
          <div ref={ctaRef} className="mt-12 flex flex-wrap items-center gap-4">
            <button
              onClick={scrollToContact}
              className="group inline-flex items-center gap-3 px-8 py-4 text-sm tracking-widest uppercase font-medium transition-all duration-300 pulse-glow"
              style={{
                background: 'linear-gradient(135deg, #c9a84c, #e2c06e)',
                color: '#0a1e3d',
                fontFamily: 'var(--font-body)',
              }}
            >
              Begin a Conversation
              <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
            </button>
            <button
              onClick={scrollToServices}
              className="group inline-flex items-center gap-3 px-8 py-4 text-sm tracking-widest uppercase font-medium transition-all duration-300 border"
              style={{
                borderColor: 'rgba(255,255,255,0.3)',
                color: 'rgba(255,255,255,0.85)',
                fontFamily: 'var(--font-body)',
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLButtonElement).style.borderColor = '#c9a84c';
                (e.currentTarget as HTMLButtonElement).style.color = '#c9a84c';
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLButtonElement).style.borderColor = 'rgba(255,255,255,0.3)';
                (e.currentTarget as HTMLButtonElement).style.color = 'rgba(255,255,255,0.85)';
              }}
            >
              Explore Services
            </button>
          </div>

          {/* Trust Badges */}
          <div
            ref={badgesRef}
            className="mt-16 pt-10 border-t flex flex-wrap items-center gap-10"
            style={{ borderColor: 'rgba(255,255,255,0.1)' }}
          >
            {[
              { value: '20+', label: 'Years of Expertise' },
              { value: '150+', label: 'Engagements Delivered' },
              { value: 'FTSE', label: 'Client Portfolio' },
              { value: 'EC4N', label: 'Walbrook, London' },
            ].map((badge) => (
              <div key={badge.label} className="flex flex-col gap-1">
                <span
                  style={{
                    fontFamily: 'var(--font-display)',
                    fontSize: '2rem',
                    fontWeight: 500,
                    color: '#c9a84c',
                    lineHeight: 1,
                  }}
                >
                  {badge.value}
                </span>
                <span
                  style={{
                    fontFamily: 'var(--font-body)',
                    fontSize: '0.7rem',
                    color: 'rgba(255,255,255,0.45)',
                    letterSpacing: '0.15em',
                    textTransform: 'uppercase',
                  }}
                >
                  {badge.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <button
        onClick={scrollToServices}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-50 hover:opacity-100 transition-opacity duration-300"
        aria-label="Scroll to services"
      >
        <span
          style={{
            fontFamily: 'var(--font-body)',
            fontSize: '0.65rem',
            color: 'white',
            letterSpacing: '0.3em',
            textTransform: 'uppercase',
          }}
        >
          Scroll
        </span>
        <ChevronDown className="w-4 h-4 text-white animate-bounce" />
      </button>

      {/* Bottom gradient fade */}
      <div
        className="absolute bottom-0 left-0 right-0 h-32"
        style={{ background: 'linear-gradient(to bottom, transparent, rgba(5,15,32,0.6))' }}
      />
    </section>
  );
}
