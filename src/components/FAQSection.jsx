import React, { useState } from 'react';
import { ChevronDown, ChevronUp, HelpCircle } from 'lucide-react';
import { TESTIMONIALS } from '../data/mockBusData';

const FAQS = [
  {
    q: 'How does live seat selection work on BlueBus?',
    a: 'BlueBus connects in real time with private and state bus operators across India. You can view the actual bus blueprint, choose between Lower Deck and Upper Deck, select single window sleeper berths or double beds, and even see seats reserved exclusively for female passengers.'
  },
  {
    q: 'Can women book female-only seats safely?',
    a: 'Yes, absolutely. Seats marked with the female indicator (pink border) are reserved exclusively for women travelers. Men are prevented from selecting adjacent seats, ensuring maximum safety and privacy.'
  },
  {
    q: 'How can I live track my bus on journey day?',
    a: 'Every confirmed booking comes with a Live GPS link sent via WhatsApp and SMS. You can also click the "Live GPS Tracker" button on BlueBus and enter your PNR to see real-time satellite location, highway speed, and arrival ETA.'
  },
  {
    q: 'What is the cancellation and instant refund policy?',
    a: 'Most AC Sleeper buses offer free cancellation up to 12-24 hours prior to departure. Instant refunds are processed directly into your UPI or bank account within 15 minutes.'
  },
  {
    q: 'Do I need a physical printout of the ticket to board?',
    a: 'No. The m-ticket (SMS or WhatsApp message) or digital boarding pass generated on BlueBus along with a valid government ID is 100% accepted by all bus operators.'
  }
];

export default function FAQSection() {
  const [openIdx, setOpenIdx] = useState(0);

  return (
    <section className="faq-and-reviews-section">
      <div className="container">
        {/* Customer Testimonials Grid */}
        <div className="testimonials-header">
          <span className="badge badge-green">TRUSTED BY OVER 36 MILLION TRAVELERS</span>
          <h2 className="section-title">What Our Travelers Say About Us</h2>
        </div>

        <div className="testimonials-grid">
          {TESTIMONIALS.map((t, idx) => (
            <div key={idx} className="testimonial-card animate-fade-in">
              <div className="testimonial-stars">
                {'★'.repeat(t.rating)}
              </div>
              <p className="testimonial-text">"{t.comment}"</p>
              <div className="testimonial-author-row">
                <div className="author-avatar">{t.name[0]}</div>
                <div>
                  <div className="author-name">{t.name}</div>
                  <div className="author-route">{t.route}</div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* FAQs Accordion */}
        <div className="faq-container-box">
          <div className="faq-title-group">
            <HelpCircle size={22} className="text-red" />
            <h3 className="faq-title">Frequently Asked Questions</h3>
          </div>

          <div className="faq-accordion-list">
            {FAQS.map((faq, index) => {
              const isOpen = openIdx === index;
              return (
                <div key={index} className={`faq-accordion-item ${isOpen ? 'active' : ''}`}>
                  <button
                    type="button"
                    className="faq-question-btn"
                    onClick={() => setOpenIdx(isOpen ? null : index)}
                  >
                    <span>{faq.q}</span>
                    {isOpen ? <ChevronUp size={18} /> : <ChevronDown size={18} />}
                  </button>
                  {isOpen && (
                    <div className="faq-answer-panel animate-fade-in">
                      <p>{faq.a}</p>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
