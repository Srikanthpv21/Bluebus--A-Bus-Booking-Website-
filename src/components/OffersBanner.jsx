import React, { useState, useRef, useEffect } from 'react';
import { Tag, Copy, Check, Sparkles, Percent, ChevronLeft, ChevronRight, Flame } from 'lucide-react';
import { PROMO_OFFERS } from '../data/mockBusData';
import confetti from 'canvas-confetti';

export default function OffersBanner({ onApplyCoupon }) {
  const [copiedCode, setCopiedCode] = useState(null);
  const [activeFilter, setActiveFilter] = useState('all'); // 'all' | 'diwali' | 'electric' | 'return'
  const [isHovered, setIsHovered] = useState(false);
  const scrollTrackRef = useRef(null);

  // Filter offers based on category
  const filteredOffers = PROMO_OFFERS.filter((offer) => {
    if (activeFilter === 'diwali') return offer.code.includes('DIWALI') || offer.badge.includes('DIWALI');
    if (activeFilter === 'electric') return offer.code === 'EVGREEN' || offer.badge.includes('ECO');
    if (activeFilter === 'return') return offer.code === 'FESTIVE15' || offer.badge.includes('RETURN');
    return true;
  });

  // Auto-scroll from right to left
  useEffect(() => {
    if (isHovered) return;

    const timer = setInterval(() => {
      if (scrollTrackRef.current) {
        const { scrollLeft, scrollWidth, clientWidth } = scrollTrackRef.current;
        // If near end, loop smoothly back to beginning
        if (scrollLeft + clientWidth >= scrollWidth - 15) {
          scrollTrackRef.current.scrollTo({ left: 0, behavior: 'smooth' });
        } else {
          // Scroll rightwards by card width + gap (cards scroll from right into view towards the left)
          scrollTrackRef.current.scrollBy({ left: 320, behavior: 'smooth' });
        }
      }
    }, 3200);

    return () => clearInterval(timer);
  }, [isHovered, activeFilter]);

  const handleManualScroll = (direction) => {
    if (scrollTrackRef.current) {
      const distance = direction === 'left' ? -320 : 320;
      scrollTrackRef.current.scrollBy({ left: distance, behavior: 'smooth' });
    }
  };

  const handleCopy = (code, e) => {
    if (e) e.stopPropagation();
    try {
      navigator.clipboard.writeText(code);
    } catch (err) {
      console.warn('Clipboard write failed:', err);
    }
    setCopiedCode(code);

    try {
      confetti({
        particleCount: 40,
        spread: 60,
        origin: { y: 0.7 },
        colors: ['#3b82f6', '#f59e0b', '#10b981', '#ef4444']
      });
    } catch {
      // ignore
    }

    if (onApplyCoupon) {
      onApplyCoupon(code);
    }

    setTimeout(() => {
      setCopiedCode((curr) => (curr === code ? null : curr));
    }, 2500);
  };

  return (
    <section className="offers-section" aria-label="Trending Travel Offers">
      <div className="container">
        {/* Section Header with Category Tabs & Nav Arrows */}
        <div className="offers-section-header">
          <div className="offers-title-block">
            <div className="section-badge">
              <Sparkles size={14} className="text-amber" />
              <span>FESTIVE DISCOUNTS & PROMOS</span>
            </div>
            <h2 className="section-title">Trending Offers & Deals</h2>
            <p className="offers-sub-hint">Offers automatically scroll from right to left • Hover to pause</p>
          </div>

          <div className="offers-controls-wrap">
            {/* Filter Pills */}
            <div className="offers-filter-tabs">
              <button
                type="button"
                className={`filter-tab-btn ${activeFilter === 'all' ? 'active' : ''}`}
                onClick={() => setActiveFilter('all')}
              >
                All Offers ({PROMO_OFFERS.length})
              </button>
              <button
                type="button"
                className={`filter-tab-btn diwali-tab ${activeFilter === 'diwali' ? 'active' : ''}`}
                onClick={() => setActiveFilter('diwali')}
              >
                <span>🪔 Diwali Special</span>
              </button>
              <button
                type="button"
                className={`filter-tab-btn ${activeFilter === 'electric' ? 'active' : ''}`}
                onClick={() => setActiveFilter('electric')}
              >
                <span>⚡ Electric EV</span>
              </button>
              <button
                type="button"
                className={`filter-tab-btn ${activeFilter === 'return' ? 'active' : ''}`}
                onClick={() => setActiveFilter('return')}
              >
                <span>✨ Return Saver</span>
              </button>
            </div>

            {/* Carousel Nav Arrows */}
            <div className="offers-nav-buttons">
              <button
                type="button"
                className="offers-arrow-btn"
                onClick={() => handleManualScroll('left')}
                title="Scroll Left"
                aria-label="Scroll offers left"
              >
                <ChevronLeft size={18} />
              </button>
              <button
                type="button"
                className="offers-arrow-btn"
                onClick={() => handleManualScroll('right')}
                title="Scroll Right"
                aria-label="Scroll offers right"
              >
                <ChevronRight size={18} />
              </button>
            </div>
          </div>
        </div>

        {/* Horizontal Scrolling Track (Right to Left) */}
        <div
          className="offers-scroller-viewport"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          onTouchStart={() => setIsHovered(true)}
          onTouchEnd={() => setIsHovered(false)}
        >
          <div className="offers-cards-carousel-track" ref={scrollTrackRef}>
            {filteredOffers.map((offer) => {
              const isCopied = copiedCode === offer.code;
              const isDiwaliOffer = offer.code.includes('DIWALI') || offer.badge.includes('DIWALI');

              return (
                <div
                  key={offer.code}
                  className={`offer-card-item ${isDiwaliOffer ? 'diwali-featured-card' : ''} animate-fade-in`}
                >
                  {isDiwaliOffer && (
                    <div className="festive-glow-tag">
                      <Flame size={12} />
                      <span>FESTIVE HIGHLIGHT</span>
                    </div>
                  )}

                  <div className="offer-card-top">
                    <span className={`offer-badge ${isDiwaliOffer ? 'diwali-badge' : ''}`}>
                      {offer.badge}
                    </span>
                    <div className="offer-percent-icon">
                      <Percent size={17} />
                    </div>
                  </div>

                  <div className="offer-body">
                    <h3 className="offer-title">{offer.title}</h3>
                    <p className="offer-desc">{offer.desc}</p>
                  </div>

                  <div className="offer-footer">
                    <div className="coupon-code-pill">
                      <Tag size={13} className="tag-icon" />
                      <span className="code-text">{offer.code}</span>
                    </div>

                    <button
                      type="button"
                      className={`btn-copy-code ${isCopied ? 'copied' : ''}`}
                      onClick={(e) => handleCopy(offer.code, e)}
                      title="Click to copy coupon code"
                    >
                      {isCopied ? (
                        <>
                          <Check size={14} />
                          <span>COPIED!</span>
                        </>
                      ) : (
                        <>
                          <Copy size={14} />
                          <span>COPY CODE</span>
                        </>
                      )}
                    </button>
                  </div>

                  <div className="offer-validity">
                    Valid until {offer.validUntil}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
