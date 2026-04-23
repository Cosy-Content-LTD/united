import { useIntersectionObserver } from '../hooks/useIntersectionObserver';
import { cn } from '../utils/cn';

interface TestimonialItem {
  quote: string;
  name: string;
  role: string;
  initials: string;
  rating: number;
}

const testimonials: TestimonialItem[] = [
  {
    quote:
      'United redefined how we approach strategic planning. Their counsel was incisive, their team exceptional, and the results spoke for themselves within the first quarter.',
    name: 'Jonathan Ashworth',
    role: 'Chief Executive, Meridian Capital',
    initials: 'JA',
    rating: 5,
  },
  {
    quote:
      'What distinguishes United is their genuine investment in understanding your business before prescribing solutions. They became true partners in our transformation journey.',
    name: 'Sophia Brennan',
    role: 'Group Strategy Director, Aldgate Holdings',
    initials: 'SB',
    rating: 5,
  },
  {
    quote:
      'The governance framework United developed for us has become the foundation of our board confidence. Rigorous, pragmatic, and delivered with real expertise.',
    name: 'Marcus Fielding',
    role: 'Chairman, Threadneedle Partners',
    initials: 'MF',
    rating: 5,
  },
];

export default function Testimonials() {
  const { ref, isVisible } = useIntersectionObserver(0.1);

  return (
    <section
      id="testimonials"
      className="relative py-32 lg:py-40 overflow-hidden"
      style={{ background: 'var(--color-ivory)' }}
    >
      {/* Decorative large text behind */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none select-none"
        style={{
          fontFamily: 'var(--font-display)',
          fontSize: 'clamp(8rem, 20vw, 20rem)',
          fontWeight: 700,
          color: 'rgba(15,45,107,0.03)',
          whiteSpace: 'nowrap',
          lineHeight: 1,
        }}
      >
        UNITED
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-10">
        {/* Header */}
        <div
          ref={ref}
          className={cn('reveal mb-16 text-center', isVisible && 'visible')}
        >
          <div className="flex items-center justify-center gap-4 mb-6">
            <div className="h-px w-12" style={{ background: '#0f2d6b' }} />
            <span
              className="text-xs tracking-[0.4em] uppercase font-medium"
              style={{ color: '#0f2d6b', fontFamily: 'var(--font-body)' }}
            >
              Client Voices
            </span>
            <div className="h-px w-12" style={{ background: '#0f2d6b' }} />
          </div>
          <h2
            style={{
              fontFamily: 'var(--font-display)',
              fontSize: 'clamp(2.2rem, 5vw, 4rem)',
              fontWeight: 300,
              lineHeight: 1.1,
              color: 'var(--color-ink)',
              letterSpacing: '-0.02em',
            }}
          >
            The measure of our work is
            <br />
            <em style={{ fontStyle: 'italic', color: 'var(--color-primary)' }}>your results.</em>
          </h2>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard key={testimonial.name} testimonial={testimonial} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}

interface TestimonialCardProps {
  testimonial: TestimonialItem;
  index: number;
}

function TestimonialCard({ testimonial, index }: TestimonialCardProps) {
  const { ref, isVisible } = useIntersectionObserver(0.1);

  return (
    <div
      ref={ref}
      className={cn('reveal', isVisible && 'visible')}
      style={{ transitionDelay: `${index * 120}ms` }}
    >
      <div
        className="relative h-full p-10 flex flex-col"
        style={{
          background: '#ffffff',
          border: '1px solid rgba(15,45,107,0.08)',
          boxShadow: '0 4px 40px rgba(15,45,107,0.06)',
        }}
      >
        {/* Decorative quote mark */}
        <div
          className="absolute top-6 right-8"
          style={{
            fontFamily: 'var(--font-display)',
            fontSize: '5rem',
            fontWeight: 700,
            color: 'rgba(15,45,107,0.08)',
            lineHeight: 1,
            userSelect: 'none',
          }}
        >
          &ldquo;
        </div>

        {/* Stars */}
        <div className="flex items-center gap-1 mb-6">
          {Array.from({ length: testimonial.rating }).map((_, i) => (
            <svg
              key={i}
              className="w-4 h-4"
              fill="#c9a84c"
              viewBox="0 0 24 24"
            >
              <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
            </svg>
          ))}
        </div>

        {/* Quote */}
        <blockquote
          className="flex-1 mb-8"
          style={{
            fontFamily: 'var(--font-display)',
            fontSize: '1.15rem',
            fontWeight: 300,
            color: 'var(--color-ink)',
            lineHeight: 1.75,
            fontStyle: 'italic',
          }}
        >
          &ldquo;{testimonial.quote}&rdquo;
        </blockquote>

        {/* Divider */}
        <div
          className="h-px mb-6"
          style={{ background: 'linear-gradient(90deg, #0f2d6b, transparent)' }}
        />

        {/* Author */}
        <div className="flex items-center gap-4">
          <div
            className="w-12 h-12 flex items-center justify-center flex-shrink-0"
            style={{
              background: 'linear-gradient(135deg, #0f2d6b, #1a4499)',
            }}
          >
            <span
              style={{
                fontFamily: 'var(--font-display)',
                fontSize: '1rem',
                fontWeight: 500,
                color: '#c9a84c',
              }}
            >
              {testimonial.initials}
            </span>
          </div>
          <div>
            <div
              style={{
                fontFamily: 'var(--font-body)',
                fontSize: '0.9rem',
                fontWeight: 600,
                color: 'var(--color-ink)',
              }}
            >
              {testimonial.name}
            </div>
            <div
              style={{
                fontFamily: 'var(--font-body)',
                fontSize: '0.78rem',
                color: 'var(--color-ink-muted)',
                letterSpacing: '0.05em',
              }}
            >
              {testimonial.role}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
