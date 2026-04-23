import { useIntersectionObserver } from '../hooks/useIntersectionObserver';
import { cn } from '../utils/cn';

const stats = [
  { value: '2003', label: 'Founded' },
  { value: '£2B+', label: 'Value Created' },
  { value: '40+', label: 'Sectors Served' },
  { value: 'Global', label: 'Reach' },
];

export default function About() {
  const { ref: leftRef, isVisible: leftVisible } = useIntersectionObserver(0.15);
  const { ref: rightRef, isVisible: rightVisible } = useIntersectionObserver(0.15);

  return (
    <section
      id="about"
      className="relative py-32 lg:py-40 overflow-hidden"
      style={{ background: 'linear-gradient(135deg, #0a1e3d 0%, #0f2d6b 50%, #1a3a7a 100%)' }}
    >
      {/* Background texture */}
      <div
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage:
            'radial-gradient(circle at 1px 1px, rgba(255,255,255,0.3) 1px, transparent 0)',
          backgroundSize: '40px 40px',
        }}
      />

      {/* Accent line */}
      <div
        className="absolute top-0 left-0 right-0 h-px"
        style={{ background: 'linear-gradient(90deg, transparent, rgba(201,168,76,0.5), transparent)' }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          {/* Left Column — Decorative Visual */}
          <div
            ref={leftRef}
            className={cn('reveal-left', leftVisible && 'visible')}
          >
            <div className="relative">
              {/* Main visual block */}
              <div
                className="relative aspect-square max-w-md mx-auto lg:mx-0"
                style={{
                  background: 'rgba(255,255,255,0.04)',
                  border: '1px solid rgba(201,168,76,0.2)',
                }}
              >
                {/* Inner decorative lines */}
                <div
                  className="absolute inset-8"
                  style={{ border: '1px solid rgba(201,168,76,0.15)' }}
                />
                <div
                  className="absolute inset-16"
                  style={{ border: '1px solid rgba(201,168,76,0.1)' }}
                />

                {/* Central monogram */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="relative">
                    <span
                      style={{
                        fontFamily: 'var(--font-display)',
                        fontSize: '10rem',
                        fontWeight: 300,
                        color: 'transparent',
                        WebkitTextStroke: '1px rgba(201,168,76,0.4)',
                        lineHeight: 1,
                        userSelect: 'none',
                      }}
                    >
                      U
                    </span>
                  </div>
                </div>

                {/* Corner accents */}
                {[['top-0 left-0', 'border-t border-l'], ['top-0 right-0', 'border-t border-r'],
                  ['bottom-0 left-0', 'border-b border-l'], ['bottom-0 right-0', 'border-b border-r']].map(
                  ([pos, borders], i) => (
                    <div
                      key={i}
                      className={`absolute ${pos} w-8 h-8 ${borders}`}
                      style={{ borderColor: '#c9a84c' }}
                    />
                  )
                )}

                {/* Floating year badge */}
                <div
                  className="floating absolute -bottom-6 -right-6 w-28 h-28 flex flex-col items-center justify-center"
                  style={{
                    background: 'linear-gradient(135deg, #c9a84c, #e2c06e)',
                  }}
                >
                  <span
                    style={{
                      fontFamily: 'var(--font-display)',
                      fontSize: '1.8rem',
                      fontWeight: 500,
                      color: '#0a1e3d',
                      lineHeight: 1,
                    }}
                  >
                    Est.
                  </span>
                  <span
                    style={{
                      fontFamily: 'var(--font-display)',
                      fontSize: '1.2rem',
                      fontWeight: 300,
                      color: '#0a1e3d',
                      lineHeight: 1,
                    }}
                  >
                    2003
                  </span>
                </div>
              </div>

              {/* Stats row below visual */}
              <div className="mt-16 grid grid-cols-2 gap-6">
                {stats.map((stat) => (
                  <div
                    key={stat.label}
                    className="p-5"
                    style={{
                      background: 'rgba(255,255,255,0.05)',
                      border: '1px solid rgba(201,168,76,0.15)',
                    }}
                  >
                    <div
                      style={{
                        fontFamily: 'var(--font-display)',
                        fontSize: '2.2rem',
                        fontWeight: 400,
                        color: '#c9a84c',
                        lineHeight: 1,
                      }}
                    >
                      {stat.value}
                    </div>
                    <div
                      className="mt-1"
                      style={{
                        fontFamily: 'var(--font-body)',
                        fontSize: '0.7rem',
                        color: 'rgba(255,255,255,0.45)',
                        letterSpacing: '0.15em',
                        textTransform: 'uppercase',
                      }}
                    >
                      {stat.label}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column — Copy */}
          <div
            ref={rightRef}
            className={cn('reveal-right', rightVisible && 'visible')}
          >
            <div className="flex items-center gap-4 mb-8">
              <div className="h-px w-12" style={{ background: '#c9a84c' }} />
              <span
                className="text-xs tracking-[0.4em] uppercase font-medium"
                style={{ color: '#c9a84c', fontFamily: 'var(--font-body)' }}
              >
                About United
              </span>
            </div>

            <h2
              className="mb-8"
              style={{
                fontFamily: 'var(--font-display)',
                fontSize: 'clamp(2.2rem, 4vw, 3.8rem)',
                fontWeight: 300,
                lineHeight: 1.1,
                color: '#ffffff',
                letterSpacing: '-0.02em',
              }}
            >
              Counsel forged in the
              <br />
              <em style={{ fontStyle: 'italic', color: '#c9a84c' }}>City&apos;s crucible.</em>
            </h2>

            <div
              className="space-y-6"
              style={{
                fontFamily: 'var(--font-body)',
                fontSize: '1rem',
                color: 'rgba(255,255,255,0.65)',
                lineHeight: 1.9,
                fontWeight: 300,
              }}
            >
              <p>
                United was founded at the heart of London&apos;s financial district with a singular
                conviction: that the most complex business challenges yield to rigorous thinking
                combined with genuine partnership.
              </p>
              <p>
                Headquartered at The Walbrook Building, steps from the Bank of England, we sit
                at the intersection of capital, commerce, and consequence. Our consultants bring
                decades of frontline experience across financial services, infrastructure,
                professional services, and beyond.
              </p>
              <p>
                We do not subscribe to the belief that great strategy is born in isolation.
                United&apos;s process is inherently collaborative — your knowledge of your
                organisation, combined with our frameworks and independence, produces something
                neither could achieve alone.
              </p>
            </div>

            {/* Location callout */}
            <div
              className="mt-10 p-6 flex items-start gap-4"
              style={{
                background: 'rgba(201,168,76,0.08)',
                border: '1px solid rgba(201,168,76,0.25)',
              }}
            >
              <div
                className="w-1 flex-shrink-0 self-stretch"
                style={{ background: '#c9a84c' }}
              />
              <div>
                <div
                  style={{
                    fontFamily: 'var(--font-display)',
                    fontSize: '1.1rem',
                    fontWeight: 500,
                    color: '#c9a84c',
                    marginBottom: '4px',
                  }}
                >
                  The Walbrook Building
                </div>
                <div
                  style={{
                    fontFamily: 'var(--font-body)',
                    fontSize: '0.85rem',
                    color: 'rgba(255,255,255,0.5)',
                    lineHeight: 1.7,
                  }}
                >
                  25 Walbrook, Bank, City of London<br />
                  EC4N 8AQ, United Kingdom
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
