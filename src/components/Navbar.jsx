import React, { useState } from 'react';
import { Bus, PhoneCall, Ticket, User, ChevronDown, Moon, Sun, Menu, X } from 'lucide-react';

export default function Navbar({
  theme,
  toggleTheme,
  onOpenBookings,
  bookingCount,
  onOpenTracking,
  onNavigateHome
}) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [showAccountMenu, setShowAccountMenu] = useState(false);

  return (
    <header className="redbus-header">
      <div className="container redbus-header-container">
        {/* Left Section: Logo & Primary Services */}
        <div className="header-left">
          {/* Authentic BlueBus Logo */}
          <div className="redbus-logo-wrap" onClick={onNavigateHome} role="button" tabIndex={0}>
            <div className="logo-bus-shape">
              <Bus size={22} className="logo-icon-svg" />
            </div>
            <div className="logo-text">
              <span className="logo-blue">Blue</span>
              <span className="logo-bus">Bus</span>
            </div>
          </div>

          <div className="header-nav-divider"></div>

          {/* Service Links */}
          <nav className="header-services-nav">
            <button className="service-tab active" onClick={onNavigateHome}>
              <Bus size={18} />
              <span>Bus Tickets</span>
            </button>
          </nav>
        </div>

        {/* Right Section: Help, Bookings, Account */}
        <div className="header-right">
          {/* Live Bus Tracking Quick Link */}
          <button className="header-action-btn" onClick={onOpenTracking} title="Track your bus live on route">
            <span className="pulsing-gps-dot"></span>
            <span className="hide-mobile">Live Tracking</span>
          </button>

          {/* Help / BlueCare */}
          <button
            className="header-action-btn"
            onClick={() => alert('BlueCare 24x7 Customer Support Hotline: 1800-209-8899\nPriority support for ladies and emergency SOS available.')}
          >
            <PhoneCall size={16} />
            <span className="hide-mobile">Help</span>
          </button>

          {/* Manage Booking / My Trips */}
          <button
            className="header-action-btn btn-trips"
            onClick={onOpenBookings}
            id="btn-nav-bookings"
          >
            <Ticket size={16} />
            <span>Bookings</span>
            {bookingCount > 0 && (
              <span className="nav-booking-pill">{bookingCount}</span>
            )}
          </button>

          {/* Theme Toggle */}
          <button
            className="header-theme-btn"
            onClick={toggleTheme}
            title={`Switch to ${theme === 'dark' ? 'Light' : 'Dark'} Mode`}
            aria-label="Toggle Theme"
          >
            {theme === 'dark' ? <Sun size={17} className="text-amber" /> : <Moon size={17} />}
          </button>

          {/* Account Dropdown */}
          <div className="account-dropdown-wrapper">
            <button
              className="header-account-btn"
              onClick={() => setShowAccountMenu(!showAccountMenu)}
              aria-label="Account Profile"
            >
              <div className="avatar-circle">
                <User size={15} />
              </div>
              <span className="account-text hide-mobile">Account</span>
              <ChevronDown size={14} className="hide-mobile text-muted" />
            </button>

            {showAccountMenu && (
              <div className="account-menu-popover animate-fade-in">
                <div className="menu-user-header">
                  <strong>Welcome Traveler</strong>
                  <span className="user-email-tag">traveler@bluebus.in</span>
                </div>
                <div className="menu-divider"></div>
                <button
                  className="menu-item-row"
                  onClick={() => {
                    onOpenBookings();
                    setShowAccountMenu(false);
                  }}
                >
                  <Ticket size={15} />
                  <span>My Bookings ({bookingCount})</span>
                </button>
                <button
                  className="menu-item-row"
                  onClick={() => {
                    onOpenTracking();
                    setShowAccountMenu(false);
                  }}
                >
                  <Bus size={15} />
                  <span>Live Track My Bus</span>
                </button>
                <button
                  className="menu-item-row"
                  onClick={() => {
                    alert('Wallet Balance: ₹150 (Referral Cashback)');
                    setShowAccountMenu(false);
                  }}
                >
                  <span>BlueBus Wallet (₹150)</span>
                </button>
              </div>
            )}
          </div>

          {/* Mobile Menu Icon */}
          <button
            className="mobile-hamburger-btn"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Open Mobile Menu"
          >
            {mobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="mobile-nav-drawer animate-fade-in">
          <button className="mobile-drawer-btn active" onClick={() => { onNavigateHome(); setMobileMenuOpen(false); }}>
            <Bus size={18} />
            <span>Bus Tickets</span>
          </button>
          <button className="mobile-drawer-btn" onClick={() => { onOpenTracking(); setMobileMenuOpen(false); }}>
            <span className="pulsing-gps-dot"></span>
            <span>Live GPS Bus Tracking</span>
          </button>
          <button className="mobile-drawer-btn" onClick={() => { onOpenBookings(); setMobileMenuOpen(false); }}>
            <Ticket size={18} />
            <span>My Bookings ({bookingCount})</span>
          </button>
          <button className="mobile-drawer-btn" onClick={() => { alert('24x7 BlueCare: 1800-209-8899'); setMobileMenuOpen(false); }}>
            <PhoneCall size={18} />
            <span>24x7 Customer Care</span>
          </button>
        </div>
      )}
    </header>
  );
}
