import React from 'react';
import { X, Ticket, Calendar, MapPin, Trash2, ExternalLink, AlertCircle } from 'lucide-react';

export default function MyBookingsModal({
  isOpen,
  onClose,
  bookings,
  onViewTicket,
  onTrackBus,
  onCancelBooking
}) {
  if (!isOpen) return null;

  return (
    <div className="modal-backdrop animate-fade-in">
      <div className="bookings-modal-sheet">
        <div className="modal-header">
          <div className="header-title-group">
            <Ticket size={22} className="text-red" />
            <div>
              <h2 className="modal-title">My Booked Trips</h2>
              <p className="modal-subtitle">Manage tickets, live track buses, or download passes</p>
            </div>
          </div>
          <button className="modal-close-btn" onClick={onClose} aria-label="Close My Bookings">
            <X size={20} />
          </button>
        </div>

        <div className="bookings-list-body">
          {bookings.length === 0 ? (
            <div className="empty-bookings-state">
              <AlertCircle size={44} className="text-muted" />
              <h3>No Bookings Yet</h3>
              <p>You haven't booked any bus journeys yet. Search buses on top to plan your next trip!</p>
            </div>
          ) : (
            bookings.map((booking) => (
              <div key={booking.bookingId} className="my-booking-card animate-fade-in">
                <div className="booking-card-top">
                  <div>
                    <div className="booking-pnr-tag">PNR: {booking.pnrNumber}</div>
                    <h3 className="booking-operator-title">{booking.operator}</h3>
                    <div className="booking-bus-sub">{booking.busType}</div>
                  </div>

                  <div className="booking-badge-confirmed">
                    <span className="live-dot"></span>
                    <span>{booking.status}</span>
                  </div>
                </div>

                <div className="booking-route-row">
                  <div className="route-city-group">
                    <span className="city-title">{booking.fromCity}</span>
                    <span className="time-badge">{booking.departureTime}</span>
                  </div>
                  <div className="route-arrow-sep">→</div>
                  <div className="route-city-group">
                    <span className="city-title">{booking.toCity}</span>
                    <span className="time-badge">{booking.arrivalTime}</span>
                  </div>
                </div>

                <div className="booking-details-strip">
                  <div className="detail-item">
                    <Calendar size={14} className="text-muted" />
                    <span>Travel Date: <strong>{booking.travelDate}</strong></span>
                  </div>
                  <div className="detail-item">
                    <span>Seats: <strong>{booking.selectedSeats?.map(s => s.id).join(', ')}</strong></span>
                  </div>
                  <div className="detail-item">
                    <span>Paid: <strong>₹{booking.finalPayable}</strong></span>
                  </div>
                </div>

                <div className="booking-actions-footer">
                  <button
                    type="button"
                    className="btn-action-primary"
                    onClick={() => {
                      onViewTicket(booking);
                    }}
                  >
                    <ExternalLink size={14} />
                    <span>View Digital Ticket</span>
                  </button>

                  <button
                    type="button"
                    className="btn-action-secondary"
                    onClick={() => {
                      onTrackBus(booking);
                    }}
                  >
                    <MapPin size={14} className="text-red" />
                    <span>Live Bus Tracking</span>
                  </button>

                  <button
                    type="button"
                    className="btn-action-cancel"
                    onClick={() => {
                      if (window.confirm(`Are you sure you want to cancel ticket ${booking.pnrNumber}? A refund of ₹${Math.round(booking.finalPayable * 0.9)} will be credited to your original payment mode.`)) {
                        onCancelBooking(booking.bookingId);
                      }
                    }}
                    title="Cancel Booking & Claim Refund"
                  >
                    <Trash2 size={14} />
                    <span>Cancel</span>
                  </button>
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
}
