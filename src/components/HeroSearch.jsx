import React, { useState, useEffect, useRef } from 'react';
import { Bus, Calendar, ArrowRightLeft, Search, ShieldCheck, Award, Zap, HeartHandshake } from 'lucide-react';
import { POPULAR_CITIES, POPULAR_ROUTES } from '../data/mockBusData';

export default function HeroSearch({
  fromCity,
  setFromCity,
  toCity,
  setToCity,
  travelDate,
  setTravelDate,
  onSearch
}) {
  const [fromDropdownOpen, setFromDropdownOpen] = useState(false);
  const [toDropdownOpen, setToDropdownOpen] = useState(false);
  const [fromSearchFilter, setFromSearchFilter] = useState('');
  const [toSearchFilter, setToSearchFilter] = useState('');

  const fromRef = useRef(null);
  const toRef = useRef(null);

  // Close dropdowns when clicking outside
  useEffect(() => {
    function handleClickOutside(event) {
      if (fromRef.current && !fromRef.current.contains(event.target)) {
        setFromDropdownOpen(false);
      }
      if (toRef.current && !toRef.current.contains(event.target)) {
        setToDropdownOpen(false);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleSwap = () => {
    const temp = fromCity;
    setFromCity(toCity);
    setToCity(temp);
  };

  const handleSelectQuickDate = (daysFromToday) => {
    const d = new Date();
    d.setDate(d.getDate() + daysFromToday);
    setTravelDate(d.toISOString().split('T')[0]);
  };

  const [todayStr] = useState(() => new Date().toISOString().split('T')[0]);
  const [tomorrowStr] = useState(() => {
    const d = new Date();
    d.setDate(d.getDate() + 1);
    return d.toISOString().split('T')[0];
  });

  const handleQuickRoute = (route) => {
    setFromCity(route.from);
    setToCity(route.to);
    onSearch();
  };

  // Filter cities: show all on initial focus or filter by input
  const displayFromCities = fromSearchFilter.trim()
    ? POPULAR_CITIES.filter(c =>
        c.name.toLowerCase().includes(fromSearchFilter.toLowerCase()) ||
        c.state.toLowerCase().includes(fromSearchFilter.toLowerCase()) ||
        c.terminal.toLowerCase().includes(fromSearchFilter.toLowerCase())
      )
    : POPULAR_CITIES;

  const displayToCities = toSearchFilter.trim()
    ? POPULAR_CITIES.filter(c =>
        c.name.toLowerCase().includes(toSearchFilter.toLowerCase()) ||
        c.state.toLowerCase().includes(toSearchFilter.toLowerCase()) ||
        c.terminal.toLowerCase().includes(toSearchFilter.toLowerCase())
      )
    : POPULAR_CITIES;

  return (
    <section className="redbus-hero-wrap">
      <div className="container">
        {/* Banner Title */}
        <div className="redbus-hero-header">
          <h1 className="hero-heading">
            India's No. 1 Online Bus Ticket Booking Site
          </h1>
          <p className="hero-subtext">
            Search 30+ Major Cities • Over 5,200+ Bus Operators • 73,000+ Routes
          </p>
        </div>

        {/* The Authentic redBus Search Widget */}
        <div className="redbus-search-widget">
          <form
            className="search-bar-unified"
            onSubmit={(e) => {
              e.preventDefault();
              if (fromCity.toLowerCase() === toCity.toLowerCase()) {
                alert('Departure and Destination cannot be the same city. Please select different cities.');
                return;
              }
              onSearch();
            }}
          >
            {/* FROM Compartment */}
            <div className="search-compartment compartment-from" ref={fromRef}>
              <Bus size={20} className="compartment-icon text-muted" />
              <div className="compartment-input-wrap">
                <label className="compartment-label" htmlFor="input-from-city">FROM</label>
                <input
                  id="input-from-city"
                  type="text"
                  className="compartment-input"
                  placeholder="Enter departure city"
                  value={fromCity}
                  onChange={(e) => {
                    setFromCity(e.target.value);
                    setFromSearchFilter(e.target.value);
                    setFromDropdownOpen(true);
                  }}
                  onFocus={(e) => {
                    e.target.select();
                    setFromSearchFilter('');
                    setFromDropdownOpen(true);
                  }}
                  autoComplete="off"
                  required
                />
              </div>

              {/* City Autocomplete Dropdown */}
              {fromDropdownOpen && (
                <div className="redbus-city-dropdown animate-fade-in">
                  <div className="dropdown-title">
                    <span>SELECT DEPARTURE CITY ({displayFromCities.length} AVAILABLE)</span>
                  </div>
                  {displayFromCities.length === 0 ? (
                    <div className="no-cities-msg">No cities found matching "{fromSearchFilter}"</div>
                  ) : (
                    displayFromCities.map((city) => (
                      <div
                        key={city.id}
                        className={`dropdown-city-row ${city.name.toLowerCase() === fromCity.toLowerCase() ? 'selected-city' : ''}`}
                        onClick={() => {
                          setFromCity(city.name);
                          setFromSearchFilter('');
                          setFromDropdownOpen(false);
                        }}
                      >
                        <Bus size={15} className="city-bus-icon text-red" />
                        <div>
                          <div className="city-title-bold">
                            {city.name} <span className="city-state-badge">({city.state})</span>
                          </div>
                          <div className="city-terminal-sub">{city.terminal}</div>
                        </div>
                      </div>
                    ))
                  )}
                </div>
              )}
            </div>

            {/* Middle Swap Button precisely anchored on the border */}
            <div className="swap-button-container">
              <button
                type="button"
                className="search-swap-btn"
                onClick={handleSwap}
                title="Swap Departure and Destination"
                aria-label="Swap Cities"
                id="btn-swap-cities"
              >
                <ArrowRightLeft size={16} />
              </button>
            </div>

            {/* TO Compartment */}
            <div className="search-compartment compartment-to" ref={toRef}>
              <Bus size={20} className="compartment-icon text-muted" />
              <div className="compartment-input-wrap">
                <label className="compartment-label" htmlFor="input-to-city">TO</label>
                <input
                  id="input-to-city"
                  type="text"
                  className="compartment-input"
                  placeholder="Enter destination city"
                  value={toCity}
                  onChange={(e) => {
                    setToCity(e.target.value);
                    setToSearchFilter(e.target.value);
                    setToDropdownOpen(true);
                  }}
                  onFocus={(e) => {
                    e.target.select();
                    setToSearchFilter('');
                    setToDropdownOpen(true);
                  }}
                  autoComplete="off"
                  required
                />
              </div>

              {/* City Autocomplete Dropdown */}
              {toDropdownOpen && (
                <div className="redbus-city-dropdown animate-fade-in">
                  <div className="dropdown-title">
                    <span>SELECT DESTINATION CITY ({displayToCities.length} AVAILABLE)</span>
                  </div>
                  {displayToCities.length === 0 ? (
                    <div className="no-cities-msg">No cities found matching "{toSearchFilter}"</div>
                  ) : (
                    displayToCities.map((city) => (
                      <div
                        key={city.id}
                        className={`dropdown-city-row ${city.name.toLowerCase() === toCity.toLowerCase() ? 'selected-city' : ''}`}
                        onClick={() => {
                          setToCity(city.name);
                          setToSearchFilter('');
                          setToDropdownOpen(false);
                        }}
                      >
                        <Bus size={15} className="city-bus-icon text-red" />
                        <div>
                          <div className="city-title-bold">
                            {city.name} <span className="city-state-badge">({city.state})</span>
                          </div>
                          <div className="city-terminal-sub">{city.terminal}</div>
                        </div>
                      </div>
                    ))
                  )}
                </div>
              )}
            </div>

            {/* DATE Compartment */}
            <div
              className="search-compartment compartment-date"
              onClick={() => {
                const el = document.getElementById('input-travel-date');
                if (el && typeof el.showPicker === 'function') {
                  try { el.showPicker(); } catch {}
                }
              }}
            >
              <Calendar
                size={20}
                className="compartment-icon calendar-icon"
                title="Click to select journey date"
              />
              <div className="compartment-input-wrap">
                <label className="compartment-label" htmlFor="input-travel-date">DATE OF JOURNEY</label>
                <input
                  id="input-travel-date"
                  type="date"
                  className="compartment-input date-picker-input"
                  value={travelDate}
                  min={todayStr}
                  onChange={(e) => setTravelDate(e.target.value)}
                  onClick={(e) => {
                    if (typeof e.target.showPicker === 'function') {
                      try { e.target.showPicker(); } catch {}
                    }
                  }}
                  required
                />
              </div>
              <div className="date-quick-chips" onClick={(e) => e.stopPropagation()}>
                <button
                  type="button"
                  className={`btn-date-chip ${travelDate === todayStr ? 'active' : ''}`}
                  onClick={() => handleSelectQuickDate(0)}
                >
                  Today
                </button>
                <button
                  type="button"
                  className={`btn-date-chip ${travelDate === tomorrowStr ? 'active' : ''}`}
                  onClick={() => handleSelectQuickDate(1)}
                >
                  Tomorrow
                </button>
              </div>
            </div>

            {/* RedBus Red Search Button */}
            <button
              type="submit"
              className="redbus-search-cta"
              id="btn-redbus-search"
            >
              <Search size={18} />
              <span>SEARCH BUSES</span>
            </button>
          </form>

          {/* Quick Route Shortcut Chips */}
          <div className="redbus-quick-routes">
            <span className="quick-label">Trending Routes:</span>
            <div className="quick-routes-list">
              {POPULAR_ROUTES.map((route, i) => (
                <button
                  key={i}
                  type="button"
                  className={`quick-route-pill ${fromCity === route.from && toCity === route.to ? 'active-pill' : ''}`}
                  onClick={() => handleQuickRoute(route)}
                >
                  <span>{route.from} → {route.to}</span>
                  <span className="route-fare">from ₹{route.startingPrice}</span>
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* redBus Value Assurances Banner */}
        <div className="redbus-value-strip">
          <div className="value-item">
            <ShieldCheck size={20} className="text-red" />
            <div>
              <strong>Free Cancellation</strong>
              <span>100% refund on select buses</span>
            </div>
          </div>

          <div className="value-item">
            <Award size={20} className="text-amber" />
            <div>
              <strong>Primo Bus Operators</strong>
              <span>Top-rated on-time guaranteed rides</span>
            </div>
          </div>

          <div className="value-item">
            <Zap size={20} className="text-emerald" />
            <div>
              <strong>Live Bus Tracking</strong>
              <span>GPS updates on mobile & WhatsApp</span>
            </div>
          </div>

          <div className="value-item">
            <HeartHandshake size={20} className="text-blue" />
            <div>
              <strong>Women-Safe Travel</strong>
              <span>Dedicated female reserved seating</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
