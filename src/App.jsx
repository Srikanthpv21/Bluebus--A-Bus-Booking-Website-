import React, { useState, useEffect, useMemo } from 'react';
import Navbar from './components/Navbar';
import HeroSearch from './components/HeroSearch';
import DiwaliCarouselBanner from './components/DiwaliCarouselBanner';
import BusFilters from './components/BusFilters';
import BusCard from './components/BusCard';
import BookingModal from './components/BookingModal';
import TicketSuccessModal from './components/TicketSuccessModal';
import LiveTrackingModal from './components/LiveTrackingModal';
import MyBookingsModal from './components/MyBookingsModal';
import FAQSection from './components/FAQSection';
import Footer from './components/Footer';
import { getBusesForRoute } from './data/mockBusData';
import { ArrowUpDown, AlertCircle } from 'lucide-react';
import './App.css';
import './RealisticRedBus.css';

export default function App() {
  // Theme state
  const [theme, setTheme] = useState(() => {
    return localStorage.getItem('bluebus_theme') || localStorage.getItem('redvoyage_theme') || 'light';
  });

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('bluebus_theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(prev => (prev === 'light' ? 'dark' : 'light'));
  };

  // Search parameters
  const [tomorrowStr] = useState(() => {
    const d = new Date();
    d.setDate(d.getDate() + 1);
    return d.toISOString().split('T')[0];
  });

  const [fromCity, setFromCity] = useState('Bangalore');
  const [toCity, setToCity] = useState('Hyderabad');
  const [travelDate, setTravelDate] = useState(tomorrowStr);

  // Dynamic route buses
  const routeBuses = useMemo(() => {
    return getBusesForRoute(fromCity, toCity);
  }, [fromCity, toCity]);

  // Sorting
  const [activeSort, setActiveSort] = useState('recommended'); // 'recommended' | 'cheapest' | 'fastest' | 'rating' | 'departure'

  // Filters
  const initialFilters = {
    maxPrice: 2000,
    busTypes: [],
    timeSlots: [],
    amenities: []
  };
  const [filters, setFilters] = useState(initialFilters);

  // Seat selection state
  const [activeBusId, setActiveBusId] = useState(null);
  const [selectedSeats, setSelectedSeats] = useState([]);
  const [selectedBoardingPoint, setSelectedBoardingPoint] = useState(null);
  const [selectedDroppingPoint, setSelectedDroppingPoint] = useState(null);

  // Modals state
  const [isBookingModalOpen, setIsBookingModalOpen] = useState(false);
  const [bookingBusTarget, setBookingBusTarget] = useState(null);
  const [confirmedTicket, setConfirmedTicket] = useState(null);
  const [isMyBookingsOpen, setIsMyBookingsOpen] = useState(false);
  const [isLiveTrackingOpen, setIsLiveTrackingOpen] = useState(false);
  const [trackingTargetBooking, setTrackingTargetBooking] = useState(null);

  // Active festive coupon & sleek toast state
  const [activeCouponCode, setActiveCouponCode] = useState('DIWALI10');
  const [toastMessage, setToastMessage] = useState(null);

  const triggerToast = (msg) => {
    setToastMessage(msg);
  };

  useEffect(() => {
    if (!toastMessage) return;
    const timer = setTimeout(() => {
      setToastMessage(null);
    }, 3800);
    return () => clearTimeout(timer);
  }, [toastMessage]);

  // Stored Bookings list
  const [bookingsList, setBookingsList] = useState(() => {
    try {
      const saved = localStorage.getItem('bluebus_bookings') || localStorage.getItem('redvoyage_bookings');
      if (saved) return JSON.parse(saved);
    } catch (e) {
      console.error(e);
    }
    // Default initial mock booking for user to play with right away!
    return [
      {
        bookingId: 'BK-89421',
        pnrNumber: 'BLB-729401-BLR',
        bookingDate: new Date().toISOString(),
        travelDate: tomorrowStr,
        fromCity: 'Bangalore',
        toCity: 'Hyderabad',
        operator: 'IntrCity SmartBus',
        busType: 'AC Sleeper (2+1) Multi-Axle with Washroom',
        departureTime: '21:30',
        arrivalTime: '06:00',
        duration: '8h 30m',
        boardingPoint: { name: 'Madiwala (Near Police Station)', time: '21:30', landmark: 'Opp. Total Mall' },
        droppingPoint: { name: 'Gachibowli Outer Ring Road', time: '05:15', landmark: 'Near DLF Cybercity' },
        passengers: [{ name: 'Alex Johnson', age: '28', gender: 'Male', seatId: 'L1', seatType: 'sleeper' }],
        selectedSeats: [{ id: 'L1', type: 'sleeper', price: 1250 }],
        paymentMethod: 'upi',
        finalPayable: 1312,
        status: 'CONFIRMED'
      }
    ];
  });

  const handleSearch = () => {
    // Scroll to results section smoothly
    const resultsElement = document.getElementById('buses-results-anchor');
    if (resultsElement) {
      resultsElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Filter & Sort Logic
  const filteredAndSortedBuses = useMemo(() => {
    let result = [...routeBuses];

    // Filter by Max Price
    result = result.filter(bus => bus.baseFare <= filters.maxPrice);

    // Filter by Bus Types (sleeper, seater, electric)
    if (filters.busTypes.length > 0) {
      result = result.filter(bus => {
        return filters.busTypes.some(type => {
          if (type === 'electric') return bus.isElectric;
          if (type === 'sleeper') return bus.category === 'sleeper';
          if (type === 'seater') return bus.category === 'seater';
          return false;
        });
      });
    }

    // Filter by Departure Time Slots
    if (filters.timeSlots.length > 0) {
      result = result.filter(bus => {
        const hour = parseInt(bus.departureTime.split(':')[0], 10);
        return filters.timeSlots.some(slot => {
          if (slot === 'morning') return hour >= 6 && hour < 12;
          if (slot === 'afternoon') return hour >= 12 && hour < 18;
          if (slot === 'evening') return hour >= 18 && hour < 23;
          if (slot === 'night') return hour >= 23 || hour < 6;
          return false;
        });
      });
    }

    // Filter by Amenities
    if (filters.amenities.length > 0) {
      result = result.filter(bus => {
        return filters.amenities.every(amenity => bus.features.includes(amenity));
      });
    }

    // Sorting
    if (activeSort === 'cheapest') {
      result.sort((a, b) => a.baseFare - b.baseFare);
    } else if (activeSort === 'fastest') {
      result.sort((a, b) => parseFloat(a.duration) - parseFloat(b.duration));
    } else if (activeSort === 'rating') {
      result.sort((a, b) => b.rating - a.rating);
    } else if (activeSort === 'departure') {
      result.sort((a, b) => a.departureTime.localeCompare(b.departureTime));
    }

    return result;
  }, [routeBuses, filters, activeSort]);

  // Handle proceed to checkout
  const handleProceedToBooking = (bus) => {
    if (selectedSeats.length === 0) {
      alert('Please select at least one seat to continue.');
      return;
    }
    setBookingBusTarget(bus);
    setIsBookingModalOpen(true);
  };

  const handleBookingSuccess = (newBooking) => {
    setIsBookingModalOpen(false);
    setSelectedSeats([]);
    setBookingsList(prev => [newBooking, ...prev]);
    setConfirmedTicket(newBooking);
  };

  const handleCancelBooking = (bookingId) => {
    const updated = bookingsList.filter(b => b.bookingId !== bookingId);
    setBookingsList(updated);
    try {
      localStorage.setItem('bluebus_bookings', JSON.stringify(updated));
    } catch (err) {
      console.warn('Could not update localStorage bookings:', err);
    }
  };

  const handleOpenLiveTracking = (booking = null) => {
    setTrackingTargetBooking(booking || bookingsList[0] || null);
    setIsLiveTrackingOpen(true);
  };

  return (
    <div className="app-wrapper">
      {/* Navigation Header */}
      <Navbar
        theme={theme}
        toggleTheme={toggleTheme}
        onOpenBookings={() => setIsMyBookingsOpen(true)}
        bookingCount={bookingsList.length}
        onOpenOffers={() => {
          const el = document.querySelector('.diwali-carousel-section');
          if (el) el.scrollIntoView({ behavior: 'smooth' });
        }}
        onOpenTracking={() => handleOpenLiveTracking()}
        onNavigateHome={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      />

      <main>
        {/* Hero & Search Section */}
        <HeroSearch
          fromCity={fromCity}
          setFromCity={setFromCity}
          toCity={toCity}
          setToCity={setToCity}
          travelDate={travelDate}
          setTravelDate={setTravelDate}
          onSearch={handleSearch}
        />

        {/* Moving Diwali Offer Carousel Banner (Right-to-Left Auto-Advance & Marquee Ticker) */}
        <DiwaliCarouselBanner
          onApplyCoupon={(code) => {
            setActiveCouponCode(code);
            triggerToast(`🪔 Deepavali Offer "${code}" copied! 10% extra discount ready at checkout.`);
          }}
          onBookClick={(code) => {
            setActiveCouponCode(code);
            triggerToast(`✨ Deepavali Offer "${code}" activated! Select your bus below.`);
            handleSearch();
          }}
        />

        {/* Search Results & Bus Listing Section */}
        <section className="bus-results-section" id="buses-results-anchor">
          <div className="container">
            {/* Results Title & Sorting Bar */}
            <div className="results-header-bar">
              <div>
                <h2 className="results-main-heading">
                  Available Buses from <span className="text-red">{fromCity}</span> to <span className="text-red">{toCity}</span>
                </h2>
                <div className="results-sub-meta">
                  Journey Date: <strong>{travelDate}</strong> • <strong>{filteredAndSortedBuses.length}</strong> Buses Found
                </div>
              </div>

              {/* Sorting Chips */}
              <div className="sort-controls-group">
                <span className="sort-label">
                  <ArrowUpDown size={15} />
                  <span>Sort By:</span>
                </span>
                <div className="sort-buttons-row">
                  <button
                    type="button"
                    className={`sort-btn ${activeSort === 'recommended' ? 'active' : ''}`}
                    onClick={() => setActiveSort('recommended')}
                  >
                    Recommended
                  </button>
                  <button
                    type="button"
                    className={`sort-btn ${activeSort === 'cheapest' ? 'active' : ''}`}
                    onClick={() => setActiveSort('cheapest')}
                  >
                    Cheapest First
                  </button>
                  <button
                    type="button"
                    className={`sort-btn ${activeSort === 'rating' ? 'active' : ''}`}
                    onClick={() => setActiveSort('rating')}
                  >
                    Top Rated
                  </button>
                  <button
                    type="button"
                    className={`sort-btn ${activeSort === 'fastest' ? 'active' : ''}`}
                    onClick={() => setActiveSort('fastest')}
                  >
                    Fastest
                  </button>
                  <button
                    type="button"
                    className={`sort-btn ${activeSort === 'departure' ? 'active' : ''}`}
                    onClick={() => setActiveSort('departure')}
                  >
                    Departure Time
                  </button>
                </div>
              </div>
            </div>

            {/* Content Layout: Filters Sidebar on Left, Bus Cards on Right */}
            <div className="results-grid-layout">
              {/* Left Column: Filters */}
              <div className="results-sidebar-col">
                <BusFilters
                  filters={filters}
                  setFilters={setFilters}
                  onResetFilters={() => setFilters(initialFilters)}
                  maxPriceLimit={2000}
                  totalBusesCount={routeBuses.length}
                  filteredBusesCount={filteredAndSortedBuses.length}
                />
              </div>

              {/* Right Column: Bus Cards List */}
              <div className="results-cards-col">
                {filteredAndSortedBuses.length === 0 ? (
                  <div className="no-buses-found-card animate-fade-in">
                    <AlertCircle size={48} className="text-muted" />
                    <h3>No Buses Matched Your Filters</h3>
                    <p>Try broadening your price range or clearing some amenity filters to see more results.</p>
                    <button
                      type="button"
                      className="btn-clear-filters-cta"
                      onClick={() => setFilters(initialFilters)}
                    >
                      Reset All Filters
                    </button>
                  </div>
                ) : (
                  filteredAndSortedBuses.map((bus) => (
                    <BusCard
                      key={bus.id}
                      bus={bus}
                      selectedSeats={activeBusId === bus.id ? selectedSeats : []}
                      setSelectedSeats={(seats) => {
                        setActiveBusId(bus.id);
                        setSelectedSeats(seats);
                        if (!selectedBoardingPoint) setSelectedBoardingPoint(bus.boardingPoints[0]);
                        if (!selectedDroppingPoint) setSelectedDroppingPoint(bus.droppingPoints[0]);
                      }}
                      selectedBoardingPoint={selectedBoardingPoint || bus.boardingPoints[0]}
                      setSelectedBoardingPoint={setSelectedBoardingPoint}
                      selectedDroppingPoint={selectedDroppingPoint || bus.droppingPoints[0]}
                      setSelectedDroppingPoint={setSelectedDroppingPoint}
                      onProceedToBooking={() => handleProceedToBooking(bus)}
                    />
                  ))
                )}
              </div>
            </div>
          </div>
        </section>

        {/* Customer Testimonials & FAQ Section */}
        <FAQSection />
      </main>

      {/* Footer */}
      <Footer />

      {/* Checkout / Passenger Details Modal */}
      {isBookingModalOpen && bookingBusTarget && (
        <BookingModal
          isOpen={isBookingModalOpen}
          onClose={() => setIsBookingModalOpen(false)}
          bus={bookingBusTarget}
          selectedSeats={selectedSeats}
          selectedBoardingPoint={selectedBoardingPoint || bookingBusTarget.boardingPoints[0]}
          selectedDroppingPoint={selectedDroppingPoint || bookingBusTarget.droppingPoints[0]}
          travelDate={travelDate}
          fromCity={fromCity}
          toCity={toCity}
          onBookingSuccess={handleBookingSuccess}
          initialCoupon={activeCouponCode}
        />
      )}

      {/* Confirmed E-Ticket Modal */}
      {confirmedTicket && (
        <TicketSuccessModal
          booking={confirmedTicket}
          onClose={() => setConfirmedTicket(null)}
          onOpenLiveTracking={(b) => {
            setConfirmedTicket(null);
            handleOpenLiveTracking(b);
          }}
        />
      )}

      {/* My Bookings Drawer / Modal */}
      {isMyBookingsOpen && (
        <MyBookingsModal
          isOpen={isMyBookingsOpen}
          onClose={() => setIsMyBookingsOpen(false)}
          bookings={bookingsList}
          onViewTicket={(b) => {
            setIsMyBookingsOpen(false);
            setConfirmedTicket(b);
          }}
          onTrackBus={(b) => {
            setIsMyBookingsOpen(false);
            handleOpenLiveTracking(b);
          }}
          onCancelBooking={handleCancelBooking}
        />
      )}

      {/* Live Satellite GPS Tracker Modal */}
      {isLiveTrackingOpen && (
        <LiveTrackingModal
          isOpen={isLiveTrackingOpen}
          onClose={() => setIsLiveTrackingOpen(false)}
          booking={trackingTargetBooking}
        />
      )}


      {/* Festive Floating Toast Notification */}
      {toastMessage && (
        <div className="festive-floating-toast animate-slide-up" role="status" aria-live="polite">
          <div className="toast-sparkle-badge">🪔</div>
          <span className="toast-message-text">{toastMessage}</span>
          <button
            type="button"
            className="toast-dismiss-btn"
            onClick={() => setToastMessage(null)}
            aria-label="Dismiss toast"
          >
            ×
          </button>
        </div>
      )}
    </div>
  );
}
