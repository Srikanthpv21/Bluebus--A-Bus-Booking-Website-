import React, { useState } from 'react';
import { Star, Zap, ChevronDown, ChevronUp, CheckCircle, Info, Camera } from 'lucide-react';
import SeatLayout from './SeatLayout';
import OperatorLogo from './OperatorLogo';
import RatingBreakdownPopover from './RatingBreakdownPopover';
import BusPhotosGallery from './BusPhotosGallery';

export default function BusCard({
  bus,
  selectedSeats,
  setSelectedSeats,
  selectedBoardingPoint,
  setSelectedBoardingPoint,
  selectedDroppingPoint,
  setSelectedDroppingPoint,
  onProceedToBooking
}) {
  const [isOpenSeats, setIsOpenSeats] = useState(false);
  const [activeTab, setActiveTab] = useState('seats'); // 'seats' | 'photos' | 'points' | 'amenities' | 'policy'
  const [showRatingPopover, setShowRatingPopover] = useState(false);

  const toggleSeats = () => {
    if (isOpenSeats && activeTab === 'seats') {
      setIsOpenSeats(false);
    } else {
      setIsOpenSeats(true);
      setActiveTab('seats');
    }
  };

  const discountPercent = Math.round(((bus.originalFare - bus.baseFare) / bus.originalFare) * 100);

  return (
    <div className={`bus-result-card ${isOpenSeats ? 'card-expanded' : ''} animate-fade-in`}>
      {/* Top Banner if Electric / SmartBus */}
      {bus.isElectric && (
        <div className="bus-card-top-tag electric-tag">
          <Zap size={14} />
          <span>100% Zero-Emission Electric Bus • Super Silent & Eco-Friendly</span>
        </div>
      )}

      {/* Main Bus Summary Row */}
      <div className="bus-card-main-content">
        {/* Col 1: Operator with Brand Logo & Bus Type Info */}
        <div className="bus-info-col">
          <div className="operator-branding-row">
            <OperatorLogo operatorName={bus.operator} size="md" />

            <div className="operator-text-block">
              <div className="operator-header">
                <h3 className="bus-operator-name">{bus.operator}</h3>
                {bus.rating >= 4.7 && (
                  <span className="primo-badge" title="Primo: Top-rated bus operator with on-time guarantee">
                    PRIMO
                  </span>
                )}
                <div className="rating-pill-wrapper">
                  <button
                    type="button"
                    className="rating-pill interactive"
                    onClick={() => setShowRatingPopover(!showRatingPopover)}
                    title="Click to view verified traveler ratings breakdown"
                  >
                    <Star size={13} className="star-icon" fill="currentColor" />
                    <span className="rating-num">{bus.rating}</span>
                    <span className="reviews-num">({bus.totalReviews})</span>
                  </button>

                  {showRatingPopover && (
                    <RatingBreakdownPopover bus={bus} onClose={() => setShowRatingPopover(false)} />
                  )}
                </div>
              </div>
              <div className="bus-type-text">{bus.busType}</div>
            </div>
          </div>

          {/* Key Feature Badges */}
          <div className="bus-quick-features">
            {bus.hasLiveTracking && (
              <span className="feature-pill tracking-pill">
                <span className="live-dot"></span>
                <span>Live GPS Tracking</span>
              </span>
            )}
            <button
              type="button"
              className="feature-pill photos-pill-btn"
              onClick={() => {
                setIsOpenSeats(true);
                setActiveTab('photos');
              }}
              title="View interior photos, berths, and captain details"
            >
              <Camera size={13} />
              <span>Photos (4)</span>
            </button>
            {bus.features.slice(0, 2).map((feat, i) => (
              <span key={i} className="feature-pill">
                {feat}
              </span>
            ))}
          </div>
        </div>

        {/* Col 2: Journey Schedule Timeline */}
        <div className="bus-timeline-col">
          <div className="time-block time-departure">
            <span className="time-hour">{bus.departureTime}</span>
            <span className="time-station">{bus.boardingPoints[0].name.split('(')[0]}</span>
          </div>

          <div className="journey-duration-track">
            <span className="duration-label">{bus.duration}</span>
            <div className="duration-line">
              <span className="line-dot-start"></span>
              <span className="line-bar"></span>
              <span className="line-dot-end"></span>
            </div>
            <span className="rest-stops-label">1 Rest Stop</span>
          </div>

          <div className="time-block time-arrival">
            <span className="time-hour">{bus.arrivalTime}</span>
            <span className="time-station">{bus.droppingPoints[0].name.split('(')[0]}</span>
          </div>
        </div>

        {/* Col 3: Seat Availability & Pricing */}
        <div className="bus-fare-col">
          <div className="fare-pricing-box">
            <span className="fare-start-label">Starts from</span>
            <div className="fare-numbers">
              <span className="original-fare">₹{bus.originalFare}</span>
              <span className="current-fare">₹{bus.baseFare}</span>
            </div>
            {discountPercent > 0 && (
              <span className="save-badge">Save {discountPercent}%</span>
            )}
          </div>

          <div className="seats-available-info">
            <span className="seats-count-highlight">
              {bus.seatsLeft} Seats Available
            </span>
            {bus.singleSeatsLeft > 0 && (
              <span className="single-seats-hint">
                ({bus.singleSeatsLeft} Single Window)
              </span>
            )}
          </div>

          {/* View Seats CTA */}
          <button
            type="button"
            className={`btn-toggle-seats ${isOpenSeats && activeTab === 'seats' ? 'btn-active' : ''}`}
            onClick={toggleSeats}
            id={`btn-view-seats-${bus.id}`}
          >
            <span>{isOpenSeats && activeTab === 'seats' ? 'HIDE SEATS' : 'VIEW SEATS'}</span>
            {isOpenSeats && activeTab === 'seats' ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
          </button>
        </div>
      </div>

      {/* Tabs Bar when Card is Expanded */}
      {isOpenSeats && (
        <div className="bus-expanded-tabs-nav">
          <button
            type="button"
            className={`tab-btn ${activeTab === 'seats' ? 'active' : ''}`}
            onClick={() => setActiveTab('seats')}
          >
            Select Seats
          </button>
          <button
            type="button"
            className={`tab-btn ${activeTab === 'photos' ? 'active' : ''}`}
            onClick={() => setActiveTab('photos')}
          >
            Photos & Vehicle
          </button>
          <button
            type="button"
            className={`tab-btn ${activeTab === 'points' ? 'active' : ''}`}
            onClick={() => setActiveTab('points')}
          >
            Boarding & Dropping Points ({bus.boardingPoints.length + bus.droppingPoints.length})
          </button>
          <button
            type="button"
            className={`tab-btn ${activeTab === 'amenities' ? 'active' : ''}`}
            onClick={() => setActiveTab('amenities')}
          >
            All Amenities ({bus.features.length})
          </button>
          <button
            type="button"
            className={`tab-btn ${activeTab === 'policy' ? 'active' : ''}`}
            onClick={() => setActiveTab('policy')}
          >
            Cancellation Policy
          </button>
        </div>
      )}

      {/* Tab Panels */}
      {isOpenSeats && (
        <div className="bus-card-expanded-body">
          {activeTab === 'seats' && (
            <SeatLayout
              bus={bus}
              selectedSeats={selectedSeats}
              setSelectedSeats={setSelectedSeats}
              selectedBoardingPoint={selectedBoardingPoint}
              setSelectedBoardingPoint={setSelectedBoardingPoint}
              selectedDroppingPoint={selectedDroppingPoint}
              setSelectedDroppingPoint={setSelectedDroppingPoint}
              onProceedToBooking={onProceedToBooking}
            />
          )}

          {activeTab === 'photos' && (
            <BusPhotosGallery bus={bus} />
          )}

          {activeTab === 'points' && (
            <div className="points-tab-grid animate-fade-in">
              <div className="points-column">
                <h4 className="points-col-title">BOARDING POINTS ({bus.boardingPoints.length})</h4>
                <div className="points-list">
                  {bus.boardingPoints.map(bp => (
                    <div key={bp.id} className="point-row-item">
                      <div className="point-time-tag">{bp.time}</div>
                      <div>
                        <div className="point-title">{bp.name}</div>
                        <div className="point-subtext">Landmark: {bp.landmark}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="points-column">
                <h4 className="points-col-title">DROPPING POINTS ({bus.droppingPoints.length})</h4>
                <div className="points-list">
                  {bus.droppingPoints.map(dp => (
                    <div key={dp.id} className="point-row-item">
                      <div className="point-time-tag drop-time-tag">{dp.time}</div>
                      <div>
                        <div className="point-title">{dp.name}</div>
                        <div className="point-subtext">Landmark: {dp.landmark}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {activeTab === 'amenities' && (
            <div className="amenities-tab-grid animate-fade-in">
              {bus.features.map((feat, idx) => (
                <div key={idx} className="amenity-item-card">
                  <CheckCircle size={18} className="text-emerald" />
                  <span>{feat}</span>
                </div>
              ))}
            </div>
          )}

          {activeTab === 'policy' && (
            <div className="policy-tab-content animate-fade-in">
              <table className="policy-table">
                <thead>
                  <tr>
                    <th>Time of Cancellation</th>
                    <th>Refund Percentage</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Before 24 hours of bus departure</td>
                    <td className="text-emerald font-bold">100% Full Refund</td>
                  </tr>
                  <tr>
                    <td>Between 12 to 24 hours before departure</td>
                    <td className="text-amber font-bold">80% Refund</td>
                  </tr>
                  <tr>
                    <td>Between 4 to 12 hours before departure</td>
                    <td className="text-amber font-bold">50% Refund</td>
                  </tr>
                  <tr>
                    <td>Within 4 hours of bus departure</td>
                    <td className="text-red font-bold">0% (Non-refundable)</td>
                  </tr>
                </tbody>
              </table>
              <div className="policy-note">
                <Info size={15} />
                <span>Partial cancellation is allowed for individual passenger tickets.</span>
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
}
