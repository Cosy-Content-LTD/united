import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { cn } from '../utils/cn';

const navLinks = [
  { label: 'Services', href: '#services' },
  { label: 'About', href: '#about' },
  { label: 'Testimonials', href: '#testimonials' },
  { label: 'Contact', href: '#contact' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (href: string) => {
    setMobileOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <header
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-500',
        scrolled
          ? 'bg-[#0a1e3d]/95 backdrop-blur-md shadow-lg shadow-black/20 py-3'
          : 'bg-transparent py-6'
      )}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-10 flex items-center justify-between">
        {/* Logo */}
        <a
          href="#"
          className="flex items-center gap-3 group"
          onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
        >
          <div className="relative w-9 h-9">
            <div
              className="absolute inset-0 rounded-sm"
              style={{ background: 'linear-gradient(135deg, #0f2d6b, #1a4499)' }}
            />
            <div
              className="absolute inset-0 flex items-center justify-center"
              style={{ fontFamily: 'var(--font-display)', fontSize: '1.1rem', fontWeight: 600, color: '#c9a84c', letterSpacing: '0.05em' }}
            >
              U
            </div>
          </div>
          <span
            className="text-white tracking-[0.3em] uppercase text-sm font-medium"
            style={{ fontFamily: 'var(--font-body)' }}
          >
            United
          </span>
        </a>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <button
              key={link.label}
              onClick={() => handleNavClick(link.href)}
              className="text-white/70 hover:text-white transition-colors duration-300 text-sm tracking-widest uppercase font-medium relative group"
              style={{ fontFamily: 'var(--font-body)' }}
            >
              {link.label}
              <span className="absolute -bottom-1 left-0 h-px bg-[#c9a84c] w-0 group-hover:w-full transition-all duration-300" />
            </button>
          ))}
        </nav>

        {/* CTA Button */}
        <a
          href="#contact"
          onClick={(e) => { e.preventDefault(); handleNavClick('#contact'); }}
          className="hidden md:inline-flex items-center gap-2 px-6 py-2.5 text-xs tracking-widest uppercase font-medium transition-all duration-300 border"
          style={{
            fontFamily: 'var(--font-body)',
            borderColor: '#c9a84c',
            color: '#c9a84c',
          }}
          onMouseEnter={(e) => {
            (e.currentTarget as HTMLAnchorElement).style.backgroundColor = '#c9a84c';
            (e.currentTarget as HTMLAnchorElement).style.color = '#0a1e3d';
          }}
          onMouseLeave={(e) => {
            (e.currentTarget as HTMLAnchorElement).style.backgroundColor = 'transparent';
            (e.currentTarget as HTMLAnchorElement).style.color = '#c9a84c';
          }}
        >
          Engage Us
        </a>

        {/* Mobile Hamburger */}
        <button
          className="md:hidden text-white p-2"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Drawer */}
      <div
        className={cn(
          'md:hidden absolute top-full left-0 right-0 transition-all duration-500 overflow-hidden',
          mobileOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        )}
        style={{ background: 'rgba(10, 30, 61, 0.98)', backdropFilter: 'blur(16px)' }}
      >
        <div className="px-6 py-8 flex flex-col gap-6">
          {navLinks.map((link) => (
            <button
              key={link.label}
              onClick={() => handleNavClick(link.href)}
              className="text-white/80 hover:text-white text-left text-sm tracking-widest uppercase font-medium transition-colors duration-300"
              style={{ fontFamily: 'var(--font-body)' }}
            >
              {link.label}
            </button>
          ))}
          <button
            onClick={() => handleNavClick('#contact')}
            className="mt-2 px-6 py-3 text-xs tracking-widest uppercase font-medium border text-center transition-all duration-300"
            style={{ borderColor: '#c9a84c', color: '#c9a84c', fontFamily: 'var(--font-body)' }}
          >
            Engage Us
          </button>
        </div>
      </div>
    </header>
  );
}
