import React from 'react';
import { CheckCircle2, Download, MapPin, Bus, Calendar, Share2, X, ShieldCheck } from 'lucide-react';

export default function TicketSuccessModal({
  booking,
  onClose,
  onOpenLiveTracking
}) {
  if (!booking) return null;

  const handlePrint = () => {
    window.print();
  };

  const handleShare = () => {
    if (navigator.share) {
      navigator.share({
        title: `BlueBus Ticket: ${booking.pnrNumber}`,
        text: `Confirmed BlueBus Ticket from ${booking.fromCity} to ${booking.toCity} on ${booking.travelDate}. PNR: ${booking.pnrNumber}`,
        url: window.location.href
      }).catch(() => {});
    } else {
      navigator.clipboard.writeText(`BlueBus Ticket: ${booking.pnrNumber} | ${booking.fromCity} -> ${booking.toCity} on ${booking.travelDate}`);
      alert('Ticket details copied to clipboard!');
    }
  };

  return (
    <div className="modal-backdrop animate-fade-in">
      <div className="ticket-modal-sheet">
        {/* Top Celebration Ribbon */}
        <div className="ticket-celebration-header">
          <div className="celebration-badge">
            <CheckCircle2 size={24} className="check-icon" />
            <div>
              <h2 className="success-title">Booking Confirmed!</h2>
              <p className="success-sub">E-Ticket sent to your registered email & WhatsApp</p>
            </div>
          </div>
          <button className="modal-close-btn" onClick={onClose} aria-label="Close Ticket Modal">
            <X size={20} />
          </button>
        </div>

        {/* The Printable Boarding Pass Card */}
        <div className="boarding-pass-card" id="printable-boarding-pass">
          {/* Card Top: Branding & PNR */}
          <div className="pass-header">
            <div className="pass-logo-wrap">
              <Bus size={22} className="text-red" />
              <div className="pass-brand-name">
                <span className="text-red font-bold">Blue</span>
                <span className="font-bold">Bus</span>
                <span className="pass-badge">E-TICKET</span>
              </div>
            </div>
            <div className="pass-pnr-box">
              <span className="pnr-label">PNR NUMBER</span>
              <span className="pnr-code">{booking.pnrNumber}</span>
            </div>
          </div>

          {/* Bus Operator & Type */}
          <div className="pass-operator-row">
            <div>
              <div className="operator-title">{booking.operator}</div>
              <div className="operator-bus-spec">{booking.busType}</div>
            </div>
            <div className="booking-status-tag">
              <span className="live-dot"></span>
              <span>CONFIRMED</span>
            </div>
          </div>

          {/* Journey Route & Timings */}
          <div className="pass-route-grid">
            <div className="route-stop-block">
              <span className="stop-caption">FROM</span>
              <span className="stop-city">{booking.fromCity}</span>
              <span className="stop-time">{booking.departureTime}</span>
              <div className="stop-pickup-detail">
                <MapPin size={13} className="text-red" />
                <span>{booking.boardingPoint ? booking.boardingPoint.name : ''}</span>
              </div>
            </div>

            <div className="route-mid-indicator">
              <span className="duration-pill">{booking.duration}</span>
              <div className="route-line-visual">
                <span></span>
                <Bus size={16} className="mid-bus-icon text-red" />
                <span></span>
              </div>
              <span className="travel-date-tag">
                <Calendar size={13} />
                <span>{booking.travelDate}</span>
              </span>
            </div>

            <div className="route-stop-block stop-block-dest">
              <span className="stop-caption">TO</span>
              <span className="stop-city">{booking.toCity}</span>
              <span className="stop-time">{booking.arrivalTime}</span>
              <div className="stop-pickup-detail">
                <MapPin size={13} className="text-emerald" />
                <span>{booking.droppingPoint ? booking.droppingPoint.name : ''}</span>
              </div>
            </div>
          </div>

          {/* Perforated Divider Line */}
          <div className="pass-perforation">
            <span className="perforation-notch-left"></span>
            <span className="perforation-dashed-line"></span>
            <span className="perforation-notch-right"></span>
          </div>

          {/* Passengers & Seats */}
          <div className="pass-passengers-section">
            <div className="section-mini-title">PASSENGER & SEAT DETAILS</div>
            <div className="passengers-ticket-list">
              {booking.passengers.map((p, idx) => (
                <div key={idx} className="ticket-passenger-item">
                  <div className="p-info">
                    <span className="p-num">{idx + 1}.</span>
                    <strong className="p-name">{p.name}</strong>
                    <span className="p-meta">({p.gender}, {p.age} yrs)</span>
                  </div>
                  <div className="p-seat-pill">
                    Seat: <strong>{p.seatId}</strong> ({p.seatType.toUpperCase()})
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* QR Code and Verification Strip */}
          <div className="pass-footer-strip">
            <div className="pass-qr-box">
              {/* Scalable SVG QR code mockup */}
              <svg className="qr-svg" viewBox="0 0 100 100" width="80" height="80">
                <rect width="100" height="100" fill="white" />
                {/* Outer corners */}
                <rect x="5" y="5" width="30" height="30" fill="black" />
                <rect x="10" y="10" width="20" height="20" fill="white" />
                <rect x="15" y="15" width="10" height="10" fill="black" />

                <rect x="65" y="5" width="30" height="30" fill="black" />
                <rect x="70" y="10" width="20" height="20" fill="white" />
                <rect x="75" y="15" width="10" height="10" fill="black" />

                <rect x="5" y="65" width="30" height="30" fill="black" />
                <rect x="10" y="70" width="20" height="20" fill="white" />
                <rect x="15" y="75" width="10" height="10" fill="black" />

                {/* Inner random patterns */}
                <rect x="42" y="10" width="8" height="15" fill="black" />
                <rect x="40" y="35" width="15" height="8" fill="black" />
                <rect x="45" y="50" width="10" height="15" fill="black" />
                <rect x="25" y="42" width="12" height="10" fill="black" />
                <rect x="65" y="42" width="25" height="8" fill="black" />
                <rect x="70" y="65" width="12" height="20" fill="black" />
                <rect x="45" y="75" width="15" height="15" fill="black" />
              </svg>
              <span className="qr-scan-label">Scan to Board</span>
            </div>

            <div className="pass-fare-summary-box">
              <div className="fare-line">
                <span>Total Amount Paid:</span>
                <strong className="paid-amount">₹{booking.finalPayable}</strong>
              </div>
              <div className="fare-mode">Paid via {booking.paymentMethod.toUpperCase()} (Confirmed)</div>
              <div className="helpline-hint">
                <ShieldCheck size={14} className="text-emerald" />
                <span>Show this digital pass or SMS along with a Government Photo ID.</span>
              </div>
            </div>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="ticket-actions-bar">
          <button
            type="button"
            className="ticket-btn-primary"
            onClick={() => onOpenLiveTracking(booking)}
          >
            <MapPin size={17} />
            <span>LIVE TRACK BUS (GPS)</span>
          </button>

          <button
            type="button"
            className="ticket-btn-secondary"
            onClick={handlePrint}
          >
            <Download size={17} />
            <span>Print / Save PDF</span>
          </button>

          <button
            type="button"
            className="ticket-btn-secondary"
            onClick={handleShare}
          >
            <Share2 size={17} />
            <span>Share Ticket</span>
          </button>
        </div>
      </div>
    </div>
  );
}
