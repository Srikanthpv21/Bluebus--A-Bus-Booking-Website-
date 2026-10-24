import React, { useState, useEffect, useRef } from 'react';
import { X, ShieldCheck, Tag, Sparkles, CreditCard, Smartphone, Building2, User, Phone, Mail, ArrowRight, Lock, AlertCircle } from 'lucide-react';
import confetti from 'canvas-confetti';
import { PROMO_OFFERS } from '../data/mockBusData';
import { FemalePersonIcon, MalePersonIcon } from './GenderIcons';

export default function BookingModal({
  isOpen,
  onClose,
  bus,
  selectedSeats = [],
  selectedBoardingPoint,
  selectedDroppingPoint,
  travelDate,
  fromCity,
  toCity,
  onBookingSuccess,
  initialCoupon
}) {
  // Passenger data state initialized for each seat
  const [passengers, setPassengers] = useState(() =>
    (selectedSeats || []).map(seat => ({
      seatId: seat.id,
      seatType: seat.type,
      name: '',
      age: '',
      gender: seat.isFemaleOnly ? 'Female' : seat.isMaleOnly ? 'Male' : 'Male',
      isFemaleOnly: seat.isFemaleOnly,
      isMaleOnly: seat.isMaleOnly
    }))
  );

  const [contactInfo, setContactInfo] = useState({
    email: 'traveler@example.com',
    phone: '9876543210',
    whatsappUpdates: true
  });

  const [insuranceSelected, setInsuranceSelected] = useState(true);
  const [carbonOffsetSelected, setCarbonOffsetSelected] = useState(false);
  const [couponCode, setCouponCode] = useState(() => initialCoupon || '');
  const [appliedCouponCode, setAppliedCouponCode] = useState(() => initialCoupon || '');
  const [couponError, setCouponError] = useState('');
  const [paymentMethod, setPaymentMethod] = useState('upi'); // 'upi' | 'card' | 'netbanking'
  const [isProcessing, setIsProcessing] = useState(false);

  // Derive applied coupon object cleanly from promo offers
  const appliedCoupon = appliedCouponCode
    ? PROMO_OFFERS.find(o => o.code === appliedCouponCode) || null
    : null;

  const prevSeatsRef = useRef(selectedSeats);
  useEffect(() => {
    if (prevSeatsRef.current !== selectedSeats && selectedSeats && selectedSeats.length > 0) {
      prevSeatsRef.current = selectedSeats;
      setPassengers(
        selectedSeats.map(seat => ({
          seatId: seat.id,
          seatType: seat.type,
          name: '',
          age: '',
          gender: seat.isFemaleOnly ? 'Female' : seat.isMaleOnly ? 'Male' : 'Male',
          isFemaleOnly: seat.isFemaleOnly,
          isMaleOnly: seat.isMaleOnly
        }))
      );
    }
  }, [selectedSeats]);

  if (!isOpen || !bus || !selectedSeats || selectedSeats.length === 0) return null;

  const handlePassengerChange = (index, field, value) => {
    const updated = [...passengers];
    updated[index][field] = value;
    setPassengers(updated);
  };

  const baseFareTotal = selectedSeats.reduce((sum, s) => sum + s.price, 0);
  const gstAmount = Math.round(baseFareTotal * 0.05);
  const insuranceAmount = insuranceSelected ? selectedSeats.length * 19 : 0;
  const carbonAmount = carbonOffsetSelected ? 10 : 0;

  // Calculate discount
  let discountAmount = 0;
  if (appliedCoupon) {
    if (appliedCoupon.discountPercent) {
      discountAmount = Math.min(
        Math.round((baseFareTotal * appliedCoupon.discountPercent) / 100),
        appliedCoupon.maxDiscount || 9999
      );
    } else if (appliedCoupon.discountAmount) {
      discountAmount = appliedCoupon.discountAmount;
    }
  }

  const finalPayable = Math.max(0, baseFareTotal + gstAmount + insuranceAmount + carbonAmount - discountAmount);

  const handleApplyCoupon = (codeToApply) => {
    const code = (codeToApply || couponCode).trim().toUpperCase();
    setCouponError('');

    const foundOffer = PROMO_OFFERS.find(o => o.code === code);
    if (!foundOffer) {
      setCouponError('Invalid coupon code. Try DIWALI10, FIRSTTRIP, or EVGREEN');
      return;
    }

    if (foundOffer.code === 'EVGREEN' && !bus.isElectric) {
      setCouponError('EVGREEN coupon is only valid for Electric Buses.');
      return;
    }

    if (baseFareTotal < (foundOffer.minBooking || 0)) {
      setCouponError(`Minimum booking value of ₹${foundOffer.minBooking} required.`);
      return;
    }

    setAppliedCouponCode(code);
    setCouponCode(code);
    confetti({
      particleCount: 50,
      spread: 60,
      origin: { y: 0.7 }
    });
  };

  const handleRemoveCoupon = () => {
    setAppliedCouponCode('');
    setCouponCode('');
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();

    // Validate passenger names
    for (let i = 0; i < passengers.length; i++) {
      if (!passengers[i].name.trim()) {
        alert(`Please enter full name for Seat ${passengers[i].seatId}`);
        return;
      }
      if (!passengers[i].age || Number(passengers[i].age) < 1 || Number(passengers[i].age) > 110) {
        alert(`Please enter a valid age for Seat ${passengers[i].seatId}`);
        return;
      }
    }

    setIsProcessing(true);

    // Simulate payment gateway delay
    setTimeout(() => {
      setIsProcessing(false);

      const pnrNumber = `BLB-${Math.floor(100000 + Math.random() * 900000)}`;
      const bookingId = `BK-${Date.now().toString().slice(-6)}`;

      const newBooking = {
        bookingId,
        pnrNumber,
        bookingDate: new Date().toISOString(),
        travelDate,
        fromCity,
        toCity,
        busId: bus.id,
        operator: bus.operator,
        busType: bus.busType,
        isElectric: bus.isElectric,
        departureTime: bus.departureTime,
        arrivalTime: bus.arrivalTime,
        duration: bus.duration,
        boardingPoint: selectedBoardingPoint,
        droppingPoint: selectedDroppingPoint,
        passengers,
        selectedSeats,
        paymentMethod,
        finalPayable,
        discountAmount,
        status: 'CONFIRMED'
      };

      // Save to localStorage safely
      try {
        const stored = localStorage.getItem('bluebus_bookings') || localStorage.getItem('redvoyage_bookings');
        const existing = stored ? JSON.parse(stored) : [];
        const safeExisting = Array.isArray(existing) ? existing : [];
        localStorage.setItem('bluebus_bookings', JSON.stringify([newBooking, ...safeExisting]));
      } catch (err) {
        console.warn('Could not persist booking to localStorage:', err);
      }

      // Trigger Confetti explosion
      confetti({
        particleCount: 120,
        spread: 80,
        origin: { y: 0.5 }
      });

      onBookingSuccess(newBooking);
    }, 1800);
  };

  return (
    <div className="modal-backdrop animate-fade-in">
      <div className="booking-modal-sheet">
        {/* Header */}
        <div className="modal-header">
          <div>
            <h2 className="modal-title">Passenger Details & Secure Checkout</h2>
            <div className="modal-subtitle">
              {fromCity} → {toCity} • {travelDate} • {selectedSeats.length} {selectedSeats.length === 1 ? 'Seat' : 'Seats'}
            </div>
          </div>
          <button className="modal-close-btn" onClick={onClose} aria-label="Close Checkout">
            <X size={22} />
          </button>
        </div>

        {/* Modal Body */}
        <div className="modal-body-scrollable">
          <form id="checkout-form" onSubmit={handleFormSubmit}>
            {/* Bus Summary Banner */}
            <div className="checkout-bus-banner">
              <div className="banner-operator">
                <strong>{bus.operator}</strong>
                <span className="banner-type">{bus.busType}</span>
              </div>
              <div className="banner-route">
                <div>
                  <span className="banner-time">{bus.departureTime}</span>
                  <span className="banner-station">{selectedBoardingPoint ? selectedBoardingPoint.name : ''}</span>
                </div>
                <div className="banner-arrow">→</div>
                <div>
                  <span className="banner-time">{bus.arrivalTime}</span>
                  <span className="banner-station">{selectedDroppingPoint ? selectedDroppingPoint.name : ''}</span>
                </div>
              </div>
            </div>

            {/* Passenger Information Cards */}
            <div className="checkout-section">
              <div className="section-title-with-icon">
                <User size={18} className="text-red" />
                <h3>Passenger Information</h3>
              </div>

              <div className="passengers-inputs-list">
                {passengers.map((p, index) => (
                  <div key={p.seatId} className="passenger-input-card">
                    <div className="passenger-seat-badge">
                      <span>Seat {p.seatId}</span>
                      <span className="badge-seat-type">{p.seatType.toUpperCase()}</span>
                      {p.isFemaleOnly && (
                        <span className="badge-gender-reserved female">
                          <FemalePersonIcon size={12} /> Women Only
                        </span>
                      )}
                      {p.isMaleOnly && (
                        <span className="badge-gender-reserved male">
                          <MalePersonIcon size={12} /> Men Only
                        </span>
                      )}
                    </div>

                    <div className="passenger-fields-grid">
                      <div className="field-block">
                        <label className="field-label" htmlFor={`p-name-${index}`}>FULL NAME</label>
                        <input
                          id={`p-name-${index}`}
                          type="text"
                          className="field-text-input"
                          placeholder="e.g. Ramesh Sharma"
                          value={p.name}
                          onChange={(e) => handlePassengerChange(index, 'name', e.target.value)}
                          required
                        />
                      </div>

                      <div className="field-block field-block-sm">
                        <label className="field-label" htmlFor={`p-age-${index}`}>AGE</label>
                        <input
                          id={`p-age-${index}`}
                          type="number"
                          min="1"
                          max="110"
                          className="field-text-input"
                          placeholder="Age"
                          value={p.age}
                          onChange={(e) => handlePassengerChange(index, 'age', e.target.value)}
                          required
                        />
                      </div>

                      <div className="field-block field-block-sm">
                        <label className="field-label" htmlFor={`p-gender-${index}`}>GENDER</label>
                        <select
                          id={`p-gender-${index}`}
                          className="field-select-input"
                          value={p.gender}
                          onChange={(e) => handlePassengerChange(index, 'gender', e.target.value)}
                        >
                          <option value="Male">Male</option>
                          <option value="Female">Female</option>
                          <option value="Other">Other</option>
                        </select>
                      </div>
                    </div>

                    {p.isFemaleOnly && p.gender !== 'Female' && (
                      <div className="gender-mismatch-warning female">
                        <AlertCircle size={13} />
                        <span>Seat {p.seatId} is exclusively reserved for women travelers.</span>
                      </div>
                    )}
                    {p.isMaleOnly && p.gender !== 'Male' && (
                      <div className="gender-mismatch-warning male">
                        <AlertCircle size={13} />
                        <span>Seat {p.seatId} is designated for men travelers.</span>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* Contact Details */}
            <div className="checkout-section">
              <div className="section-title-with-icon">
                <Phone size={18} className="text-red" />
                <h3>Contact Details (Ticket & Live Bus Updates)</h3>
              </div>

              <div className="contact-fields-grid">
                <div className="field-block">
                  <label className="field-label" htmlFor="contact-email">EMAIL ADDRESS</label>
                  <div className="input-with-icon">
                    <Mail size={16} className="input-icon" />
                    <input
                      id="contact-email"
                      type="email"
                      className="field-text-input"
                      placeholder="name@example.com"
                      value={contactInfo.email}
                      onChange={(e) => setContactInfo({ ...contactInfo, email: e.target.value })}
                      required
                    />
                  </div>
                </div>

                <div className="field-block">
                  <label className="field-label" htmlFor="contact-phone">WHATSAPP / MOBILE NUMBER</label>
                  <div className="input-with-icon">
                    <Phone size={16} className="input-icon" />
                    <input
                      id="contact-phone"
                      type="tel"
                      className="field-text-input"
                      placeholder="10-digit mobile number"
                      value={contactInfo.phone}
                      onChange={(e) => setContactInfo({ ...contactInfo, phone: e.target.value })}
                      required
                    />
                  </div>
                </div>
              </div>

              <label className="checkbox-item mt-3">
                <input
                  type="checkbox"
                  checked={contactInfo.whatsappUpdates}
                  onChange={(e) => setContactInfo({ ...contactInfo, whatsappUpdates: e.target.checked })}
                />
                <span className="custom-checkbox"></span>
                <span>Send booking confirmation, boarding point map link, and live GPS bus tracking on WhatsApp</span>
              </label>
            </div>

            {/* Travel Add-ons (Insurance & Green Offset) */}
            <div className="checkout-section">
              <div className="section-title-with-icon">
                <ShieldCheck size={18} className="text-emerald" />
                <h3>Smart Travel Add-ons</h3>
              </div>

              <div className="addon-option-card">
                <label className="addon-label-wrap">
                  <input
                    type="checkbox"
                    checked={insuranceSelected}
                    onChange={(e) => setInsuranceSelected(e.target.checked)}
                  />
                  <div className="addon-content">
                    <div className="addon-title-row">
                      <span className="addon-name">Travel Protection Insurance (₹19/passenger)</span>
                      <span className="addon-price">+₹{selectedSeats.length * 19}</span>
                    </div>
                    <p className="addon-desc">
                      Covers medical emergencies (₹3 Lakhs), personal accident (₹5 Lakhs), and baggage loss. Over 92% of travelers opt for this.
                    </p>
                  </div>
                </label>
              </div>

              <div className="addon-option-card mt-2">
                <label className="addon-label-wrap">
                  <input
                    type="checkbox"
                    checked={carbonOffsetSelected}
                    onChange={(e) => setCarbonOffsetSelected(e.target.checked)}
                  />
                  <div className="addon-content">
                    <div className="addon-title-row">
                      <span className="addon-name">Plant 1 Tree (Zero Carbon Offset)</span>
                      <span className="addon-price">+₹10</span>
                    </div>
                    <p className="addon-desc">
                      Neutralize your journey's carbon footprint in partnership with SankalpTaru Foundation.
                    </p>
                  </div>
                </label>
              </div>
            </div>

            {/* Coupons and Promos */}
            <div className="checkout-section">
              <div className="section-title-with-icon">
                <Tag size={18} className="text-red" />
                <h3>Have a Promo Code?</h3>
              </div>

              <div className="coupon-input-box">
                <input
                  type="text"
                  className="coupon-text-field"
                  placeholder="Enter Coupon (e.g. FIRSTTRIP, EVGREEN)"
                  value={couponCode}
                  onChange={(e) => {
                    setCouponCode(e.target.value.toUpperCase());
                    setCouponError('');
                  }}
                  disabled={!!appliedCoupon}
                />
                {appliedCoupon ? (
                  <button type="button" className="btn-coupon-remove" onClick={handleRemoveCoupon}>
                    Remove
                  </button>
                ) : (
                  <button type="button" className="btn-coupon-apply" onClick={() => handleApplyCoupon()}>
                    Apply Code
                  </button>
                )}
              </div>

              {couponError && (
                <div className="coupon-error-msg animate-fade-in">
                  <AlertCircle size={14} />
                  <span>{couponError}</span>
                </div>
              )}

              {appliedCoupon && (
                <div className="coupon-success-msg animate-fade-in">
                  <Sparkles size={16} />
                  <span>Coupon <strong>{appliedCoupon.code}</strong> applied! You saved ₹{discountAmount} on this trip.</span>
                </div>
              )}

              <div className="quick-coupon-pills">
                {PROMO_OFFERS.slice(0, 3).map(offer => (
                  <button
                    key={offer.code}
                    type="button"
                    className="coupon-chip-suggestion"
                    onClick={() => handleApplyCoupon(offer.code)}
                  >
                    <span>{offer.code}</span>
                    <small>({offer.badge})</small>
                  </button>
                ))}
              </div>
            </div>

            {/* Payment Method Selector */}
            <div className="checkout-section">
              <div className="section-title-with-icon">
                <CreditCard size={18} className="text-red" />
                <h3>Select Payment Method</h3>
              </div>

              <div className="payment-options-grid">
                <div
                  className={`payment-option-card ${paymentMethod === 'upi' ? 'active' : ''}`}
                  onClick={() => setPaymentMethod('upi')}
                >
                  <Smartphone size={22} className="payment-icon text-emerald" />
                  <div className="payment-opt-title">UPI / QR Code</div>
                  <div className="payment-opt-desc">GPay, PhonePe, Paytm, BHIM</div>
                </div>

                <div
                  className={`payment-option-card ${paymentMethod === 'card' ? 'active' : ''}`}
                  onClick={() => setPaymentMethod('card')}
                >
                  <CreditCard size={22} className="payment-icon text-blue" />
                  <div className="payment-opt-title">Credit / Debit Card</div>
                  <div className="payment-opt-desc">Visa, MasterCard, RuPay</div>
                </div>

                <div
                  className={`payment-option-card ${paymentMethod === 'netbanking' ? 'active' : ''}`}
                  onClick={() => setPaymentMethod('netbanking')}
                >
                  <Building2 size={22} className="payment-icon text-purple" />
                  <div className="payment-opt-title">Net Banking</div>
                  <div className="payment-opt-desc">All Major Indian Banks</div>
                </div>
              </div>
            </div>
          </form>
        </div>

        {/* Modal Footer with Fare Summary and Submit Button */}
        <div className="modal-checkout-footer">
          <div className="checkout-fare-summary">
            <div className="summary-item">
              <span>Base Fare ({selectedSeats.length} Seats)</span>
              <span>₹{baseFareTotal}</span>
            </div>
            {discountAmount > 0 && (
              <div className="summary-item text-emerald">
                <span>Promo Discount ({appliedCoupon?.code})</span>
                <span>-₹{discountAmount}</span>
              </div>
            )}
            <div className="summary-item text-muted">
              <span>Taxes + Travel Add-ons</span>
              <span>₹{gstAmount + insuranceAmount + carbonAmount}</span>
            </div>
            <div className="summary-final-total">
              <span className="label">Total Payable</span>
              <span className="price">₹{finalPayable}</span>
            </div>
          </div>

          <div className="checkout-cta-action">
            <button
              type="submit"
              form="checkout-form"
              className="btn-pay-confirm"
              disabled={isProcessing}
              id="btn-pay-confirm"
            >
              {isProcessing ? (
                <div className="flex-center-gap">
                  <span className="spinner-dots"></span>
                  <span>Connecting to Bank Gateway...</span>
                </div>
              ) : (
                <div className="flex-center-gap">
                  <Lock size={16} />
                  <span>PAY ₹{finalPayable} & CONFIRM TICKET</span>
                  <ArrowRight size={18} />
                </div>
              )}
            </button>
            <div className="safe-pay-badge">
              <ShieldCheck size={14} className="text-emerald" />
              <span>256-Bit SSL Bank Level Encryption</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
