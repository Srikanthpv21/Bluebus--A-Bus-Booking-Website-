import React, { useState, useEffect, useRef } from 'react';
import {
  ChevronLeft,
  ChevronRight,
  Sparkles,
  Tag,
  Copy,
  Check,
  ArrowRight,
  Flame,
  Zap,
  Gift
} from 'lucide-react';
import confetti from 'canvas-confetti';

const CAROUSEL_SLIDES = [
  {
    id: 'diwali-10',
    festivalBadge: '🪔 SHUBH DEEPAVALI 2026',
    pillText: 'EXTRA 10% OFF',
    title: 'Diwali Maha Dhamaka: Extra 10% OFF',
    subtitle: 'Celebrate the Festival of Lights! Flat 10% extra discount up to ₹350 on all AC Sleeper, Volvo & Luxury buses.',
    couponCode: 'DIWALI10',
    discountAmount: '10% Extra OFF',
    maxSavings: 'Save up to ₹350',
    minBooking: 'Min. Booking ₹300',
    validity: 'Valid across all 2,500+ Routes',
    ctaText: 'Book Deepavali Bus',
    themeClass: 'slide-diwali-royal',
    iconType: 'diya',
    perks: ['Instant Fare Deduction', 'All AC & Sleeper Buses', 'Deepavali Festive Special']
  },
  {
    id: 'festive-15',
    festivalBadge: '✨ FESTIVE HOMECOMING SPECIAL',
    pillText: 'FLAT 15% OFF',
    title: 'Festival Return Saver: 15% OFF',
    subtitle: 'Beat the post-Diwali rush! Book your return bus journey back early and save flat 15% up to ₹400.',
    couponCode: 'FESTIVE15',
    discountAmount: 'Flat 15% OFF',
    maxSavings: 'Save up to ₹400',
    minBooking: 'Min. Booking ₹600',
    validity: 'Valid on Round-Trip Bookings',
    ctaText: 'Book Return Journey',
    themeClass: 'slide-diwali-sapphire',
    iconType: 'sparkle',
    perks: ['Guaranteed Berths', 'Flexible Rescheduling', 'Zero Convenience Surcharge']
  },
  {
    id: 'green-diwali',
    festivalBadge: '🌿 GREEN & POLLUTION-FREE DIWALI',
    pillText: 'FLAT ₹150 OFF',
    title: 'Silent Green Deepavali: Flat ₹150 OFF',
    subtitle: 'Celebrate a noise-free, zero-emission Deepavali on 100% Electric NueGo & GreenCell luxury coaches.',
    couponCode: 'EVGREEN',
    discountAmount: 'Flat ₹150 OFF',
    maxSavings: 'Instant ₹150 Off',
    minBooking: 'Min. Booking ₹500',
    validity: 'Valid on NueGo & EV Buses',
    ctaText: 'Explore Electric Buses',
    themeClass: 'slide-diwali-emerald',
    iconType: 'leaf',
    perks: ['Zero Smoke & Noise', 'Luxury Recliner Seats', 'High-Speed USB Charging']
  },
  {
    id: 'welcome-20',
    festivalBadge: '🎁 NEW TRAVELER DIWALI GIFT',
    pillText: 'FLAT 20% OFF',
    title: 'First Festive Trip: Flat 20% OFF',
    subtitle: 'First time on BlueBus? Get flat 20% discount up to ₹300 on your first festive bus ticket booking.',
    couponCode: 'FIRSTTRIP',
    discountAmount: 'Flat 20% OFF',
    maxSavings: 'Save up to ₹300',
    minBooking: 'Min. Booking ₹500',
    validity: 'First-time App Users',
    ctaText: 'Claim Welcome Offer',
    themeClass: 'slide-diwali-amber',
    iconType: 'gift',
    perks: ['Live Bus GPS Tracking', '24x7 BlueCare Support', 'Women Safety Assured']
  }
];

// Bespoke animated Diya SVG illustration
const DiyaIllustration = () => (
  <div className="diwali-illustration-box" aria-hidden="true">
    <div className="diwali-aura-glow"></div>
    <svg className="diwali-diya-svg" viewBox="0 0 130 110" fill="none" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <filter id="diyaGlowFilter" x="-30%" y="-30%" width="160%" height="160%">
          <feGaussianBlur stdDeviation="4" result="blur" />
          <feComposite in="SourceGraphic" in2="blur" operator="over" />
        </filter>
        <linearGradient id="flameGrad" x1="50%" y1="0%" x2="50%" y2="100%">
          <stop offset="0%" stopColor="#ffffff" />
          <stop offset="25%" stopColor="#fef08a" />
          <stop offset="65%" stopColor="#f59e0b" />
          <stop offset="100%" stopColor="#dc2626" />
        </linearGradient>
        <linearGradient id="bowlGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#fcd34d" />
          <stop offset="45%" stopColor="#d97706" />
          <stop offset="100%" stopColor="#78350f" />
        </linearGradient>
        <linearGradient id="oilGlow" x1="0%" y1="50%" x2="100%" y2="50%">
          <stop offset="0%" stopColor="#f59e0b" />
          <stop offset="50%" stopColor="#fef08a" />
          <stop offset="100%" stopColor="#f59e0b" />
        </linearGradient>
      </defs>

      {/* Decorative Sparkles */}
      <circle cx="50" cy="20" r="2" fill="#fef08a" className="diwali-sparkle-1" />
      <circle cx="80" cy="18" r="2.5" fill="#fde047" className="diwali-sparkle-2" />
      <circle cx="65" cy="8" r="3" fill="#ffffff" className="diwali-sparkle-3" />
      <circle cx="28" cy="38" r="1.8" fill="#fbbf24" className="diwali-sparkle-4" />
      <circle cx="102" cy="36" r="2" fill="#fbbf24" className="diwali-sparkle-5" />

      {/* Outer Glow Flame */}
      <path
        d="M65 14 C70 28 80 40 78 52 C76 62 71 66 65 66 C59 66 54 62 52 52 C50 40 60 28 65 14 Z"
        fill="url(#flameGrad)"
        filter="url(#diyaGlowFilter)"
        className="diwali-flame-anim"
      />

      {/* Inner White Core Flame */}
      <path
        d="M65 24 C68 34 74 42 72 50 C71 56 68 59 65 59 C62 59 59 56 58 50 C56 42 62 34 65 24 Z"
        fill="#ffffff"
        opacity="0.95"
        className="diwali-core-flame"
      />

      {/* Golden Diya Body / Bowl */}
      <path
        d="M22 60 C22 60 32 84 65 84 C98 84 108 60 108 60 C108 60 92 70 65 70 C38 70 22 60 22 60 Z"
        fill="url(#bowlGrad)"
        stroke="#fef08a"
        strokeWidth="1.2"
      />

      {/* Inner Rim of Golden Light */}
      <ellipse cx="65" cy="60" rx="43" ry="7" fill="url(#oilGlow)" opacity="0.85" />

      {/* Pedestal Base */}
      <path
        d="M52 84 L46 95 C46 98 55 100 65 100 C75 100 84 98 84 95 L78 84 Z"
        fill="#92400e"
      />
      <ellipse cx="65" cy="98" rx="20" ry="4" fill="#78350f" />
    </svg>
  </div>
);

export default function DiwaliCarouselBanner({ onApplyCoupon, onBookClick }) {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [copiedCode, setCopiedCode] = useState(null);
  const timerRef = useRef(null);

  // Auto-slide advance every 4.5 seconds
  useEffect(() => {
    if (isPaused) return;

    timerRef.current = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % CAROUSEL_SLIDES.length);
    }, 4500);

    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [isPaused]);

  const handlePrev = (e) => {
    if (e) e.stopPropagation();
    setCurrentSlide((prev) => (prev - 1 + CAROUSEL_SLIDES.length) % CAROUSEL_SLIDES.length);
  };

  const handleNext = (e) => {
    if (e) e.stopPropagation();
    setCurrentSlide((prev) => (prev + 1) % CAROUSEL_SLIDES.length);
  };

  const handleCopy = (code, e) => {
    if (e) e.stopPropagation();
    try {
      navigator.clipboard.writeText(code);
    } catch (err) {
      console.warn('Clipboard write failed:', err);
    }
    setCopiedCode(code);

    // Burst festive confetti
    try {
      confetti({
        particleCount: 50,
        spread: 65,
        origin: { y: 0.65 },
        colors: ['#f59e0b', '#fbbf24', '#3b82f6', '#10b981', '#ec4899', '#ffffff']
      });
    } catch {
      // confetti non-fatal
    }

    if (onApplyCoupon) {
      onApplyCoupon(code);
    }

    setTimeout(() => {
      setCopiedCode((curr) => (curr === code ? null : curr));
    }, 2800);
  };

  const handleCta = (slide, e) => {
    if (e) e.stopPropagation();
    handleCopy(slide.couponCode, e);

    if (onBookClick) {
      onBookClick(slide.couponCode);
    } else {
      const el = document.getElementById('buses-results-anchor');
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <section
      className="diwali-carousel-section"
      aria-label="Festive Diwali Offer Carousel"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      onTouchStart={() => setIsPaused(true)}
      onTouchEnd={() => setIsPaused(false)}
    >
      <div className="container">
        {/* Continuous Right-to-Left Festive Marquee Ticker */}
        <div className="diwali-marquee-ticker-wrap">
          <div className="marquee-badge">
            <Sparkles size={14} className="sparkle-spin" />
            <span>DEEPAVALI DHAMAKA</span>
          </div>
          <div className="marquee-track-window">
            <div className="marquee-sliding-track">
              <span className="marquee-item">🪔 <strong>Shubh Deepavali 2026:</strong> Extra 10% OFF on all Bus Bookings with Code <strong>DIWALI10</strong></span>
              <span className="marquee-separator">✦</span>
              <span className="marquee-item">✨ <strong>Homecoming Return Saver:</strong> Flat 15% OFF with Code <strong>FESTIVE15</strong></span>
              <span className="marquee-separator">✦</span>
              <span className="marquee-item">🌿 <strong>Green Electric Diwali:</strong> Flat ₹150 OFF on NueGo AC Buses with Code <strong>EVGREEN</strong></span>
              <span className="marquee-separator">✦</span>
              <span className="marquee-item">🎁 <strong>New User Festive Gift:</strong> Flat 20% OFF with Code <strong>FIRSTTRIP</strong></span>
              <span className="marquee-separator">✦</span>
              <span className="marquee-item">🪔 <strong>Shubh Deepavali 2026:</strong> Extra 10% OFF on all Bus Bookings with Code <strong>DIWALI10</strong></span>
              <span className="marquee-separator">✦</span>
              <span className="marquee-item">✨ <strong>Homecoming Return Saver:</strong> Flat 15% OFF with Code <strong>FESTIVE15</strong></span>
              <span className="marquee-separator">✦</span>
              <span className="marquee-item">🌿 <strong>Green Electric Diwali:</strong> Flat ₹150 OFF on NueGo AC Buses with Code <strong>EVGREEN</strong></span>
              <span className="marquee-separator">✦</span>
              <span className="marquee-item">🎁 <strong>New User Festive Gift:</strong> Flat 20% OFF with Code <strong>FIRSTTRIP</strong></span>
            </div>
          </div>
        </div>

        {/* Festive Carousel Container */}
        <div className="diwali-carousel-container">
          {/* Slides Track */}
          <div
            className="diwali-slides-wrapper"
            style={{ transform: `translateX(-${currentSlide * 100}%)` }}
          >
            {CAROUSEL_SLIDES.map((slide, index) => {
              const isCopied = copiedCode === slide.couponCode;
              const isActive = index === currentSlide;

              return (
                <div
                  key={slide.id}
                  className={`diwali-slide-item ${slide.themeClass} ${isActive ? 'is-active' : ''}`}
                  aria-hidden={!isActive}
                >
                  {/* Background Festive Floating Lights */}
                  <div className="festive-stars-field" aria-hidden="true">
                    <span className="star-dot s1"></span>
                    <span className="star-dot s2"></span>
                    <span className="star-dot s3"></span>
                    <span className="star-dot s4"></span>
                    <span className="star-dot s5"></span>
                  </div>

                  <div className="diwali-slide-content">
                    {/* Left Details Column */}
                    <div className="slide-left-col">
                      <div className="slide-badge-row">
                        <span className="festive-pill-badge">
                          <Sparkles size={13} className="sparkle-spin" />
                          <span>{slide.festivalBadge}</span>
                        </span>
                        <span className="offer-highlight-pill">{slide.pillText}</span>
                      </div>

                      <h2 className="slide-main-title">
                        {slide.title}
                      </h2>

                      <p className="slide-subtitle-desc">
                        {slide.subtitle}
                      </p>

                      {/* Perks Row */}
                      <div className="slide-perks-row">
                        {slide.perks.map((perk, i) => (
                          <div key={i} className="perk-chip">
                            <Check size={13} className="perk-check" />
                            <span>{perk}</span>
                          </div>
                        ))}
                      </div>

                      {/* Action Row: Coupon Code + Copy + Book CTA */}
                      <div className="slide-actions-row">
                        <div className="diwali-coupon-box">
                          <div className="coupon-left-info">
                            <span className="coupon-small-label">USE COUPON CODE</span>
                            <div className="coupon-code-display">
                              <Tag size={15} className="coupon-tag-icon" />
                              <strong className="code-string">{slide.couponCode}</strong>
                            </div>
                          </div>

                          <button
                            type="button"
                            className={`btn-diwali-copy ${isCopied ? 'copied' : ''}`}
                            onClick={(e) => handleCopy(slide.couponCode, e)}
                            title={`Copy ${slide.couponCode} to clipboard`}
                            aria-label={`Copy coupon ${slide.couponCode}`}
                          >
                            {isCopied ? (
                              <>
                                <Check size={15} />
                                <span>COPIED!</span>
                              </>
                            ) : (
                              <>
                                <Copy size={15} />
                                <span>COPY</span>
                              </>
                            )}
                          </button>
                        </div>

                        <button
                          type="button"
                          className="btn-diwali-cta"
                          onClick={(e) => handleCta(slide, e)}
                        >
                          <span>{slide.ctaText}</span>
                          <ArrowRight size={16} />
                        </button>
                      </div>

                      <div className="slide-terms-meta">
                        <span>{slide.minBooking}</span> • <span>{slide.validity}</span>
                      </div>
                    </div>

                    {/* Right Decorative Festive Column */}
                    <div className="slide-right-col">
                      <div className="diwali-graphic-wrapper">
                        {slide.iconType === 'diya' && <DiyaIllustration />}

                        {slide.iconType === 'sparkle' && (
                          <div className="festive-graphic-circle sapphire">
                            <div className="circle-pulsing-aura"></div>
                            <div className="graphic-center-icon">
                              <Sparkles size={64} className="sparkle-gold-icon" />
                            </div>
                            <div className="festive-floating-tag">15% SAVER</div>
                          </div>
                        )}

                        {slide.iconType === 'leaf' && (
                          <div className="festive-graphic-circle emerald">
                            <div className="circle-pulsing-aura"></div>
                            <div className="graphic-center-icon">
                              <Zap size={64} className="zap-emerald-icon" />
                            </div>
                            <div className="festive-floating-tag">₹150 OFF EV</div>
                          </div>
                        )}

                        {slide.iconType === 'gift' && (
                          <div className="festive-graphic-circle amber">
                            <div className="circle-pulsing-aura"></div>
                            <div className="graphic-center-icon">
                              <Gift size={64} className="gift-amber-icon" />
                            </div>
                            <div className="festive-floating-tag">FLAT 20% OFF</div>
                          </div>
                        )}

                        {/* Floating Savings Card */}
                        <div className="floating-savings-bubble animate-bounce-subtle">
                          <div className="savings-bubble-icon">
                            <Flame size={16} />
                          </div>
                          <div className="savings-bubble-text">
                            <span className="bubble-label">{slide.discountAmount}</span>
                            <span className="bubble-val">{slide.maxSavings}</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Left / Right Chevron Arrows */}
          <button
            type="button"
            className="carousel-nav-btn prev-btn"
            onClick={handlePrev}
            aria-label="Previous Offer Slide"
          >
            <ChevronLeft size={22} />
          </button>

          <button
            type="button"
            className="carousel-nav-btn next-btn"
            onClick={handleNext}
            aria-label="Next Offer Slide"
          >
            <ChevronRight size={22} />
          </button>

          {/* Bottom Indicators & Progress Dots */}
          <div className="carousel-pagination-bar">
            {CAROUSEL_SLIDES.map((slide, index) => {
              const isActive = index === currentSlide;
              return (
                <button
                  key={slide.id}
                  type="button"
                  className={`pagination-dot-btn ${isActive ? 'active' : ''}`}
                  onClick={() => setCurrentSlide(index)}
                  aria-label={`Go to slide ${index + 1}: ${slide.title}`}
                >
                  <span className="dot-pill-label">{slide.pillText}</span>
                  <span className="dot-pill-bar">
                    {isActive && !isPaused && (
                      <span className="dot-fill-progress"></span>
                    )}
                  </span>
                </button>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
