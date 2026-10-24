import React from 'react';
import { SlidersHorizontal, RotateCcw, Zap, Sun, Sunset, Moon, Sunrise } from 'lucide-react';

export default function BusFilters({
  filters,
  setFilters,
  onResetFilters,
  maxPriceLimit,
  totalBusesCount,
  filteredBusesCount
}) {
  const handleBusTypeToggle = (type) => {
    if (filters.busTypes.includes(type)) {
      setFilters({
        ...filters,
        busTypes: filters.busTypes.filter(t => t !== type)
      });
    } else {
      setFilters({
        ...filters,
        busTypes: [...filters.busTypes, type]
      });
    }
  };

  const handleTimeSlotToggle = (slot) => {
    if (filters.timeSlots.includes(slot)) {
      setFilters({
        ...filters,
        timeSlots: filters.timeSlots.filter(s => s !== slot)
      });
    } else {
      setFilters({
        ...filters,
        timeSlots: [...filters.timeSlots, slot]
      });
    }
  };

  const handleAmenityToggle = (amenity) => {
    if (filters.amenities.includes(amenity)) {
      setFilters({
        ...filters,
        amenities: filters.amenities.filter(a => a !== amenity)
      });
    } else {
      setFilters({
        ...filters,
        amenities: [...filters.amenities, amenity]
      });
    }
  };

  return (
    <aside className="filters-sidebar-card">
      <div className="filters-header">
        <div className="filters-title-wrap">
          <SlidersHorizontal size={18} className="text-red" />
          <h3 className="filters-title">Filter Buses</h3>
        </div>
        <button
          type="button"
          className="btn-reset-filters"
          onClick={onResetFilters}
          title="Reset all filters to default"
        >
          <RotateCcw size={14} />
          <span>Clear All</span>
        </button>
      </div>

      <div className="filter-results-counter">
        Showing <strong>{filteredBusesCount}</strong> of {totalBusesCount} Buses
      </div>

      {/* Price Range Filter */}
      <div className="filter-section">
        <label className="filter-section-title">
          <span>Max Price:</span>
          <span className="price-value-highlight">₹{filters.maxPrice}</span>
        </label>
        <input
          type="range"
          min="500"
          max={maxPriceLimit || 2000}
          step="50"
          value={filters.maxPrice}
          onChange={(e) => setFilters({ ...filters, maxPrice: Number(e.target.value) })}
          className="price-range-slider"
        />
        <div className="range-labels">
          <span>₹500</span>
          <span>₹{maxPriceLimit || 2000}</span>
        </div>
      </div>

      {/* Bus Types Filter */}
      <div className="filter-section">
        <div className="filter-section-title">BUS TYPE</div>
        <div className="filter-checkbox-list">
          <label className="checkbox-item">
            <input
              type="checkbox"
              checked={filters.busTypes.includes('sleeper')}
              onChange={() => handleBusTypeToggle('sleeper')}
            />
            <span className="custom-checkbox"></span>
            <span>AC Sleeper</span>
          </label>

          <label className="checkbox-item">
            <input
              type="checkbox"
              checked={filters.busTypes.includes('seater')}
              onChange={() => handleBusTypeToggle('seater')}
            />
            <span className="custom-checkbox"></span>
            <span>AC Seater / Semi-Sleeper</span>
          </label>

          <label className="checkbox-item">
            <input
              type="checkbox"
              checked={filters.busTypes.includes('electric')}
              onChange={() => handleBusTypeToggle('electric')}
            />
            <span className="custom-checkbox"></span>
            <span className="flex-center-gap">
              <Zap size={14} className="text-emerald" />
              <span>Electric EV (Eco)</span>
            </span>
          </label>
        </div>
      </div>

      {/* Departure Time Slots */}
      <div className="filter-section">
        <div className="filter-section-title">DEPARTURE TIME</div>
        <div className="time-slots-grid">
          <button
            type="button"
            className={`time-slot-btn ${filters.timeSlots.includes('morning') ? 'active' : ''}`}
            onClick={() => handleTimeSlotToggle('morning')}
          >
            <Sunrise size={16} />
            <span className="slot-name">Morning</span>
            <span className="slot-hours">6 AM - 12 PM</span>
          </button>

          <button
            type="button"
            className={`time-slot-btn ${filters.timeSlots.includes('afternoon') ? 'active' : ''}`}
            onClick={() => handleTimeSlotToggle('afternoon')}
          >
            <Sun size={16} />
            <span className="slot-name">Afternoon</span>
            <span className="slot-hours">12 PM - 6 PM</span>
          </button>

          <button
            type="button"
            className={`time-slot-btn ${filters.timeSlots.includes('evening') ? 'active' : ''}`}
            onClick={() => handleTimeSlotToggle('evening')}
          >
            <Sunset size={16} />
            <span className="slot-name">Evening</span>
            <span className="slot-hours">6 PM - 11 PM</span>
          </button>

          <button
            type="button"
            className={`time-slot-btn ${filters.timeSlots.includes('night') ? 'active' : ''}`}
            onClick={() => handleTimeSlotToggle('night')}
          >
            <Moon size={16} />
            <span className="slot-name">Night</span>
            <span className="slot-hours">After 11 PM</span>
          </button>
        </div>
      </div>

      {/* Popular Amenities */}
      <div className="filter-section">
        <div className="filter-section-title">POPULAR AMENITIES</div>
        <div className="filter-checkbox-list">
          <label className="checkbox-item">
            <input
              type="checkbox"
              checked={filters.amenities.includes('In-bus Washroom')}
              onChange={() => handleAmenityToggle('In-bus Washroom')}
            />
            <span className="custom-checkbox"></span>
            <span>In-bus Washroom</span>
          </label>

          <label className="checkbox-item">
            <input
              type="checkbox"
              checked={filters.amenities.includes('Free High-speed WiFi')}
              onChange={() => handleAmenityToggle('Free High-speed WiFi')}
            />
            <span className="custom-checkbox"></span>
            <span>Free WiFi</span>
          </label>

          <label className="checkbox-item">
            <input
              type="checkbox"
              checked={filters.amenities.includes('Live GPS Tracking')}
              onChange={() => handleAmenityToggle('Live GPS Tracking')}
            />
            <span className="custom-checkbox"></span>
            <span>Live GPS Tracking</span>
          </label>

          <label className="checkbox-item">
            <input
              type="checkbox"
              checked={filters.amenities.includes('Charging Ports')}
              onChange={() => handleAmenityToggle('Charging Ports')}
            />
            <span className="custom-checkbox"></span>
            <span>Charging Ports</span>
          </label>
        </div>
      </div>
    </aside>
  );
}
