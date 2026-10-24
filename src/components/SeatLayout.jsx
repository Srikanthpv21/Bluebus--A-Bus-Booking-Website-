import React, { useState } from 'react';
import { AlertCircle, ArrowRight, ShieldCheck, MapPin, X, ChevronDown } from 'lucide-react';
import { FemalePersonIcon, MalePersonIcon } from './GenderIcons';
import { RedBusSeatSvg, SteeringWheelSvg } from './RedBusSeat';

export default function SeatLayout({
  bus,
  selectedSeats,
  setSelectedSeats,
  selectedBoardingPoint,
  setSelectedBoardingPoint,
  selectedDroppingPoint,
  setSelectedDroppingPoint,
  onProceedToBooking
}) {
  const [activeDeck, setActiveDeck] = useState('lower');
  const [showSeatTypesInfo, setShowSeatTypesInfo] = useState(false);

  const hasUpperDeck = bus.upperDeck && bus.upperDeck.length > 0;
  const currentDeckSeats = activeDeck === 'lower' ? bus.lowerDeck : bus.upperDeck;

  const handleSeatClick = (seat) => {
    if (seat.status === 'booked') return;

    const isAlreadySelected = selectedSeats.some(s => s.id === seat.id);

    if (isAlreadySelected) {
      setSelectedSeats(selectedSeats.filter(s => s.id !== seat.id));
    } else {
      if (selectedSeats.length >= 6) {
        alert('You can select a maximum of 6 seats per booking.');
        return;
      }
      setSelectedSeats([...selectedSeats, seat]);
    }
  };

  const totalPrice = selectedSeats.reduce((sum, s) => sum + s.price, 0);

  // Group seats by row to render realistic 2+1 or 2+2 layout with aisle
  const rowsMap = {};
  currentDeckSeats.forEach(seat => {
    if (!rowsMap[seat.row]) rowsMap[seat.row] = [];
    rowsMap[seat.row].push(seat);
  });
  const rowNumbers = Object.keys(rowsMap).sort((a, b) => Number(a) - Number(b));

  const renderSeatItem = (seat) => {
    if (!seat) return <div className="seat-cell-placeholder" />;

    const isSelected = selectedSeats.some(s => s.id === seat.id);
    const isBooked = seat.status === 'booked';
    const isFemale = seat.isFemaleOnly;
    const isMale = seat.isMaleOnly;
    const isSleeper = seat.type === 'sleeper';

    const seatGenderDesc = isFemale ? '[Reserved for Women]' : isMale ? '[Reserved for Men]' : '';
    const seatTitle = `Seat ${seat.id} (${isSleeper ? 'Sleeper' : 'Seater'}) - ₹${seat.price} ${seatGenderDesc} ${isBooked ? '[Sold / Booked]' : '[Available]'}`;

    return (
      <div key={seat.id} className={`seat-cell-wrapper ${isSleeper ? 'sleeper-cell' : 'seater-cell'}`}>
        <button
          type="button"
          className={`seat-unit-btn ${isBooked ? 'is-booked' : 'is-available'} ${isSelected ? 'is-selected' : ''}`}
          onClick={() => handleSeatClick(seat)}
          disabled={isBooked}
          title={seatTitle}
          aria-label={`Seat ${seat.id}, ${isBooked ? 'Sold' : '₹' + seat.price}`}
        >
          <RedBusSeatSvg
            type={seat.type}
            isFemale={isFemale}
            isMale={isMale}
            isBooked={isBooked}
            isSelected={isSelected}
          />
        </button>
        {/* Price or Sold directly below the seat matching redBus screenshot */}
        <span
          className={`seat-price-caption ${isBooked ? 'is-sold' : isSelected ? 'is-selected' : 'is-price'}`}
        >
          {isBooked ? 'Sold' : `₹${seat.price}`}
        </span>
      </div>
    );
  };

  return (
    <div className="seat-selection-view animate-fade-in">
      <div className="seat-selection-grid">
        {/* Left Side: Authentic Bus Chassis & Schematic */}
        <div className="bus-schematic-card">
          {/* Deck Switcher Tabs if Upper Deck exists */}
          {hasUpperDeck && (
            <div className="deck-selector-row">
              <button
                type="button"
                className={`deck-choice-btn ${activeDeck === 'lower' ? 'active' : ''}`}
                onClick={() => setActiveDeck('lower')}
              >
                Lower Deck ({bus.lowerDeck.length} Berths)
              </button>
              <button
                type="button"
                className={`deck-choice-btn ${activeDeck === 'upper' ? 'active' : ''}`}
                onClick={() => setActiveDeck('upper')}
              >
                Upper Deck ({bus.upperDeck.length} Berths)
              </button>
            </div>
          )}

          {/* Authentic redBus Physical Bus Capsule */}
          <div className="bus-capsule-wrapper">
            {/* Bus Physical Shell */}
            <div className="bus-capsule-body">
              {/* Emergency Exit rotated on right outer edge around row 7-8 */}
              <div className="chassis-emergency-exit" title="Emergency Exit">
                <span className="exit-arrow">▲</span>
                <span className="exit-label">Emergency Exit</span>
              </div>

              {/* Front of Bus with Driver Steering Position on Right */}
              <div className="bus-front-bar">
                <span className="front-windshield-text">FRONT OF BUS</span>
                <div className="bus-steering-wrapper" title="Driver Cabin (Right Side)">
                  <SteeringWheelSvg size={28} />
                </div>
              </div>

              {/* Structured Rows with Realistic Aisle */}
              <div className="bus-rows-layout">
                {bus.category === 'sleeper' ? (
                  // 2+1 Sleeper Layout: Left 1 Sleeper | Aisle Gap | Right 2 Sleepers (10 rows)
                  rowNumbers.map(rowNum => {
                    const seatsInRow = rowsMap[rowNum] || [];
                    const leftSeat = seatsInRow.find(s => s.col === 'left');
                    const rightInnerSeat = seatsInRow.find(s => s.col === 'right-inner');
                    const rightWindowSeat = seatsInRow.find(s => s.col === 'right-window');

                    return (
                      <div key={rowNum} className="sleeper-row-container">
                        <div className="sleeper-col-single">
                          {renderSeatItem(leftSeat)}
                        </div>
                        <div className="bus-aisle-path">
                          <span className="aisle-label">AISLE</span>
                        </div>
                        <div className="sleeper-col-double">
                          {renderSeatItem(rightInnerSeat)}
                          {renderSeatItem(rightWindowSeat)}
                        </div>
                      </div>
                    );
                  })
                ) : (
                  // 2+2 Seater Layout (Rows 1-10) + Row 11 Rear Bench (5 seats)
                  rowNumbers.map(rowNum => {
                    const seatsInRow = rowsMap[rowNum] || [];

                    if (parseInt(rowNum, 10) === 11) {
                      // Row 11: Real redBus back bench with 5 continuous seats
                      return (
                        <div key={rowNum} className="seater-rear-bench-row">
                          {seatsInRow.map(seat => renderSeatItem(seat))}
                        </div>
                      );
                    }

                    const leftWindow = seatsInRow.find(s => s.col === 'left-window');
                    const leftAisle = seatsInRow.find(s => s.col === 'left-aisle');
                    const rightAisle = seatsInRow.find(s => s.col === 'right-aisle');
                    const rightWindow = seatsInRow.find(s => s.col === 'right-window');

                    return (
                      <div key={rowNum} className="seater-row-container">
                        <div className="seater-col-pair">
                          {renderSeatItem(leftWindow)}
                          {renderSeatItem(leftAisle)}
                        </div>

                        <div className="bus-aisle-path">
                          <span className="aisle-label">AISLE</span>
                        </div>

                        <div className="seater-col-pair">
                          {renderSeatItem(rightAisle)}
                          {renderSeatItem(rightWindow)}
                        </div>
                      </div>
                    );
                  })
                )}
              </div>

              {/* Rear of Bus */}
              <div className="bus-rear-bar">
                <span>REAR • BACK ROW</span>
              </div>
            </div>

            {/* "Know your seat types" button and collapsible info from screenshot */}
            <div className="know-seat-types-wrap">
              <button
                type="button"
                className="know-seat-types-btn"
                onClick={() => setShowSeatTypesInfo(!showSeatTypesInfo)}
              >
                <span>Know your seat types</span>
                <ChevronDown size={17} className={`chevron-indicator ${showSeatTypesInfo ? 'rotated' : ''}`} />
              </button>

              {showSeatTypesInfo && (
                <div className="seat-types-popover animate-fade-in">
                  <div className="seat-type-item">
                    <RedBusSeatSvg type="seater" isFemale={true} isBooked={false} />
                    <div className="type-desc">
                      <div className="type-title female">Women Only</div>
                      <div className="type-note">Reserved for female passengers traveling alone or next to women.</div>
                    </div>
                  </div>
                  <div className="seat-type-item">
                    <RedBusSeatSvg type="seater" isMale={true} isBooked={false} />
                    <div className="type-desc">
                      <div className="type-title male">Men Only</div>
                      <div className="type-note">Reserved for male passengers traveling solo or next to men.</div>
                    </div>
                  </div>
                  <div className="seat-type-item">
                    <RedBusSeatSvg type="seater" isBooked={false} />
                    <div className="type-desc">
                      <div className="type-title general">Available</div>
                      <div className="type-note">Open for any passenger to book.</div>
                    </div>
                  </div>
                  <div className="seat-type-item">
                    <RedBusSeatSvg type="seater" isFemale={true} isBooked={true} />
                    <div className="type-desc">
                      <div className="type-title sold">Sold / Booked</div>
                      <div className="type-note">Already booked by another passenger.</div>
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Authentic redBus Seat Legend */}
            <div className="seat-status-legend">
              <div className="legend-entry">
                <span className="legend-box box-available"></span>
                <span>Available</span>
              </div>
              <div className="legend-entry">
                <span className="legend-box box-selected"></span>
                <span>Selected</span>
              </div>
              <div className="legend-entry">
                <span className="legend-box box-female" title="Reserved for Women Only">
                  <FemalePersonIcon size={12} />
                </span>
                <span>Women Only</span>
              </div>
              <div className="legend-entry">
                <span className="legend-box box-male" title="Reserved for Men Only">
                  <MalePersonIcon size={12} />
                </span>
                <span>Men Only</span>
              </div>
              <div className="legend-entry">
                <span className="legend-box box-booked"></span>
                <span>Sold</span>
              </div>
            </div>
          </div>
        </div>

        {/* Right Side: Boarding & Dropping Points + Fare Summary */}
        <div className="bus-booking-action-panel">
          {/* Pickup and Drop Point Selector */}
          <div className="points-selection-card">
            <h4 className="action-card-header">
              <MapPin size={16} className="text-red" />
              <span>Select Boarding & Dropping Points</span>
            </h4>

            {/* Boarding Point */}
            <div className="form-dropdown-group">
              <label className="dropdown-label" htmlFor="select-boarding-point">BOARDING POINT</label>
              <select
                id="select-boarding-point"
                className="point-select-input"
                value={selectedBoardingPoint ? selectedBoardingPoint.id : ''}
                onChange={(e) => {
                  const pt = bus.boardingPoints.find(p => p.id === e.target.value);
                  setSelectedBoardingPoint(pt);
                }}
              >
                {bus.boardingPoints.map(bp => (
                  <option key={bp.id} value={bp.id}>
                    {bp.time} — {bp.name}
                  </option>
                ))}
              </select>
              {selectedBoardingPoint && (
                <div className="point-subinfo">
                  📍 Landmark: <strong>{selectedBoardingPoint.landmark}</strong>
                </div>
              )}
            </div>

            {/* Dropping Point */}
            <div className="form-dropdown-group mt-3">
              <label className="dropdown-label" htmlFor="select-dropping-point">DROPPING POINT</label>
              <select
                id="select-dropping-point"
                className="point-select-input"
                value={selectedDroppingPoint ? selectedDroppingPoint.id : ''}
                onChange={(e) => {
                  const pt = bus.droppingPoints.find(p => p.id === e.target.value);
                  setSelectedDroppingPoint(pt);
                }}
              >
                {bus.droppingPoints.map(dp => (
                  <option key={dp.id} value={dp.id}>
                    {dp.time} — {dp.name}
                  </option>
                ))}
              </select>
              {selectedDroppingPoint && (
                <div className="point-subinfo">
                  🏁 Landmark: <strong>{selectedDroppingPoint.landmark}</strong>
                </div>
              )}
            </div>
          </div>

          {/* Selected Seats Fare Card */}
          <div className="selected-seats-fare-card">
            <div className="fare-card-heading-row">
              <span className="fare-heading-title">Seats Selected ({selectedSeats.length})</span>
              <span className="badge-instant">Guaranteed Lock</span>
            </div>

            {selectedSeats.length === 0 ? (
              <div className="no-seats-prompt">
                <AlertCircle size={24} className="text-muted" />
                <p>Click on any white berth to choose your seat.</p>
              </div>
            ) : (
              <div className="selected-chips-container">
                {selectedSeats.map(seat => (
                  <div key={seat.id} className="seat-badge-chip">
                    <span className="chip-seat-num">
                      {seat.id}
                      {seat.isFemaleOnly && (
                        <span className="chip-gender-tag female" title="Women Only Seat">
                          <FemalePersonIcon size={11} />
                        </span>
                      )}
                      {seat.isMaleOnly && (
                        <span className="chip-gender-tag male" title="Men Only Seat">
                          <MalePersonIcon size={11} />
                        </span>
                      )}
                    </span>
                    <span className="chip-seat-cost">₹{seat.price}</span>
                    <button
                      type="button"
                      className="chip-close-btn"
                      onClick={() => handleSeatClick(seat)}
                      aria-label={`Remove seat ${seat.id}`}
                    >
                      <X size={12} />
                    </button>
                  </div>
                ))}
              </div>
            )}

            <div className="fare-tally-line"></div>

            <div className="fare-math-row">
              <span>Base Ticket Price:</span>
              <span>₹{totalPrice}</span>
            </div>

            <div className="fare-math-row text-muted-sm">
              <span>GST & Safe Passenger Cess (5%):</span>
              <span>₹{Math.round(totalPrice * 0.05)}</span>
            </div>

            <div className="fare-final-payable-row">
              <span>Total Payable Amount:</span>
              <span className="final-price-num">₹{Math.round(totalPrice * 1.05)}</span>
            </div>

            <button
              type="button"
              className="btn-continue-checkout"
              disabled={selectedSeats.length === 0}
              onClick={onProceedToBooking}
              id="btn-continue-checkout"
            >
              <span>PROCEED TO BOOK</span>
              <ArrowRight size={17} />
            </button>

            <div className="free-cancellation-banner">
              <ShieldCheck size={14} className="text-emerald" />
              <span>Free cancellation up to 6 hours before departure</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
