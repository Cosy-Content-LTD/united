import {
  Compass,
  BarChart3,
  Network,
  Lightbulb,
  Shield,
  TrendingUp,
} from 'lucide-react';
import type { LucideIcon } from 'lucide-react';
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';
import { cn } from '../utils/cn';

interface ServiceItem {
  icon: LucideIcon;
  title: string;
  description: string;
  tag: string;
}

const services: ServiceItem[] = [
  {
    icon: Compass,
    title: 'Strategic Direction',
    description:
      'We work alongside leadership teams to define bold, coherent strategies that navigate market complexity and create lasting competitive differentiation.',
    tag: '01',
  },
  {
    icon: BarChart3,
    title: 'Performance Advisory',
    description:
      'Rigorous analysis of operational and financial performance, surfacing the levers that unlock measurable improvement and organisational health.',
    tag: '02',
  },
  {
    icon: Network,
    title: 'Transformation',
    description:
      'End-to-end change management and transformation programmes that mobilise organisations, shift culture, and embed lasting capability.',
    tag: '03',
  },
  {
    icon: Lightbulb,
    title: 'Innovation Consulting',
    description:
      'Structured methodologies for identifying growth opportunities, stress-testing new ventures, and building innovation pipelines aligned to strategic intent.',
    tag: '04',
  },
  {
    icon: Shield,
    title: 'Risk & Governance',
    description:
      'Comprehensive frameworks for enterprise risk, regulatory compliance, and board-level governance that protect value and build institutional confidence.',
    tag: '05',
  },
  {
    icon: TrendingUp,
    title: 'Growth Strategy',
    description:
      'Market entry, M&A advisory, and organic growth strategy grounded in deep sector knowledge and a relentless focus on value creation.',
    tag: '06',
  },
];

export default function Services() {
  const { ref, isVisible } = useIntersectionObserver(0.1);

  return (
    <section
      id="services"
      className="relative py-32 lg:py-40"
      style={{ background: 'var(--color-ivory)' }}
    >
      {/* Decorative vertical line */}
      <div
        className="absolute left-1/2 top-0 bottom-0 w-px opacity-20 hidden lg:block"
        style={{ background: 'linear-gradient(to bottom, transparent, #0f2d6b, transparent)' }}
      />

      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        {/* Section Header */}
        <div
          ref={ref}
          className={cn('reveal mb-20 max-w-3xl', isVisible && 'visible')}
        >
          <div className="flex items-center gap-4 mb-6">
            <div className="h-px w-12" style={{ background: '#0f2d6b' }} />
            <span
              className="text-xs tracking-[0.4em] uppercase font-medium"
              style={{ color: '#0f2d6b', fontFamily: 'var(--font-body)' }}
            >
              Our Capabilities
            </span>
          </div>
          <h2
            style={{
              fontFamily: 'var(--font-display)',
              fontSize: 'clamp(2.5rem, 5vw, 4.5rem)',
              fontWeight: 300,
              lineHeight: 1.05,
              color: 'var(--color-ink)',
              letterSpacing: '-0.02em',
            }}
          >
            Consulting that{' '}
            <em style={{ fontStyle: 'italic', color: 'var(--color-primary)' }}>
              moves the needle.
            </em>
          </h2>
          <p
            className="mt-6"
            style={{
              fontFamily: 'var(--font-body)',
              fontSize: '1.1rem',
              color: 'var(--color-ink-muted)',
              lineHeight: 1.8,
              fontWeight: 300,
            }}
          >
            Six integrated practice areas. One unified intelligence. United brings coherence
            to complexity, enabling organisations to act with clarity and confidence.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px"
          style={{ background: 'rgba(15,45,107,0.1)' }}
        >
          {services.map((service, index) => (
            <ServiceCard key={service.title} service={service} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}

interface ServiceCardProps {
  service: ServiceItem;
  index: number;
}

function ServiceCard({ service, index }: ServiceCardProps) {
  const { ref, isVisible } = useIntersectionObserver(0.1);
  const Icon = service.icon;

  return (
    <div
      ref={ref}
      className={cn('reveal group', isVisible && 'visible')}
      style={{ transitionDelay: `${index * 80}ms` }}
    >
      <div
        className="relative p-10 h-full transition-all duration-500 group-hover:-translate-y-1"
        style={{ background: 'var(--color-ivory)' }}
        onMouseEnter={(e) => {
          (e.currentTarget as HTMLDivElement).style.background = '#0f2d6b';
          const title = e.currentTarget.querySelector('.card-title') as HTMLElement;
          const desc = e.currentTarget.querySelector('.card-desc') as HTMLElement;
          const tagEl = e.currentTarget.querySelector('.card-tag') as HTMLElement;
          if (title) title.style.color = '#ffffff';
          if (desc) desc.style.color = 'rgba(255,255,255,0.65)';
          if (tagEl) tagEl.style.color = '#c9a84c';
        }}
        onMouseLeave={(e) => {
          (e.currentTarget as HTMLDivElement).style.background = 'var(--color-ivory)';
          const title = e.currentTarget.querySelector('.card-title') as HTMLElement;
          const desc = e.currentTarget.querySelector('.card-desc') as HTMLElement;
          const tagEl = e.currentTarget.querySelector('.card-tag') as HTMLElement;
          if (title) title.style.color = 'var(--color-ink)';
          if (desc) desc.style.color = 'var(--color-ink-muted)';
          if (tagEl) tagEl.style.color = 'rgba(15,45,107,0.25)';
        }}
      >
        {/* Tag */}
        <span
          className="card-tag block mb-6 transition-colors duration-500"
          style={{
            fontFamily: 'var(--font-display)',
            fontSize: '3.5rem',
            fontWeight: 300,
            lineHeight: 1,
            color: 'rgba(15,45,107,0.25)',
          }}
        >
          {service.tag}
        </span>

        {/* Icon */}
        <div
          className="mb-6 w-12 h-12 flex items-center justify-center"
          style={{ background: 'rgba(201,168,76,0.12)', borderRadius: '2px' }}
        >
          <Icon className="w-5 h-5" style={{ color: '#c9a84c' }} />
        </div>

        {/* Title */}
        <h3
          className="card-title mb-4 transition-colors duration-500"
          style={{
            fontFamily: 'var(--font-display)',
            fontSize: '1.6rem',
            fontWeight: 500,
            color: 'var(--color-ink)',
            lineHeight: 1.2,
          }}
        >
          {service.title}
        </h3>

        {/* Description */}
        <p
          className="card-desc transition-colors duration-500"
          style={{
            fontFamily: 'var(--font-body)',
            fontSize: '0.92rem',
            color: 'var(--color-ink-muted)',
            lineHeight: 1.8,
            fontWeight: 300,
          }}
        >
          {service.description}
        </p>
      </div>
    </div>
  );
}
