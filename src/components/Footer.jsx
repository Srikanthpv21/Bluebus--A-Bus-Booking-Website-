import React from 'react';
import { Bus, Heart, Phone, Mail, ShieldCheck, Award } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="main-footer">
      <div className="container">
        {/* Top Feature Highlights Bar */}
        <div className="footer-top-strip">
          <div className="footer-strip-item">
            <ShieldCheck size={20} className="text-red" />
            <div>
              <div className="strip-title">Safe & Hygienic Travel</div>
              <div className="strip-desc">Sanitized buses & thermal checks</div>
            </div>
          </div>

          <div className="footer-strip-item">
            <Award size={20} className="text-amber" />
            <div>
              <div className="strip-title">Best Price Guarantee</div>
              <div className="strip-desc">Zero hidden charges & instant refunds</div>
            </div>
          </div>

          <div className="footer-strip-item">
            <Phone size={20} className="text-emerald" />
            <div>
              <div className="strip-title">24x7 Customer Support</div>
              <div className="strip-desc">Dedicated emergency helpline</div>
            </div>
          </div>
        </div>

        {/* Links Grid */}
        <div className="footer-links-grid">
          {/* Brand Info */}
          <div className="footer-col brand-col">
            <div className="footer-logo">
              <Bus size={24} className="text-red" />
              <div className="brand-title">
                <span className="text-red">Blue</span>
                <span>Bus</span>
              </div>
            </div>
            <p className="footer-brand-desc">
              BlueBus is India's most trusted online bus ticketing platform, connecting 4,500+ private and state bus operators with millions of daily commuters.
            </p>
            <div className="footer-contact-details">
              <div><Phone size={14} /> 1800-209-8899 (Toll-Free 24x7)</div>
              <div><Mail size={14} /> support@bluebus.in</div>
            </div>
          </div>

          {/* Top Bus Routes */}
          <div className="footer-col">
            <h4 className="footer-heading">Top Bus Routes</h4>
            <ul className="footer-links-list">
              <li><a href="#from-city-input">Bangalore to Hyderabad Bus</a></li>
              <li><a href="#from-city-input">Mumbai to Pune Volvo Bus</a></li>
              <li><a href="#from-city-input">Chennai to Bangalore Sleeper</a></li>
              <li><a href="#from-city-input">Delhi to Jaipur Luxury Bus</a></li>
              <li><a href="#from-city-input">Bangalore to Goa AC Sleeper</a></li>
              <li><a href="#from-city-input">Hyderabad to Vijayawada Bus</a></li>
            </ul>
          </div>

          {/* Top Bus Operators */}
          <div className="footer-col">
            <h4 className="footer-heading">Popular Operators</h4>
            <ul className="footer-links-list">
              <li><a href="#from-city-input">IntrCity SmartBus</a></li>
              <li><a href="#from-city-input">NueGo Electric Buses</a></li>
              <li><a href="#from-city-input">VRL Travels Multi-Axle</a></li>
              <li><a href="#from-city-input">Orange Tours & Travels</a></li>
              <li><a href="#from-city-input">Zingbus Premium Lounge</a></li>
              <li><a href="#from-city-input">KSRTC Airavat Club Class</a></li>
            </ul>
          </div>

          {/* About & Trust */}
          <div className="footer-col">
            <h4 className="footer-heading">About BlueBus</h4>
            <ul className="footer-links-list">
              <li><a href="#root">About Us</a></li>
              <li><a href="#root">Contact Us</a></li>
              <li><a href="#root">Terms & Conditions</a></li>
              <li><a href="#root">Privacy Policy</a></li>
              <li><a href="#root">Bus Operator Registration</a></li>
              <li><a href="#root">Careers at BlueBus</a></li>
            </ul>
          </div>
        </div>

        {/* Bottom Copyright & Payment Methods */}
        <div className="footer-bottom-bar">
          <div className="copyright-text">
            © 2026 BlueBus Technologies Ltd. All rights reserved. Built with <Heart size={13} className="text-red inline-icon" /> for comfortable bus journeys.
          </div>
          <div className="payment-badges-list">
            <span className="pay-tag">UPI</span>
            <span className="pay-tag">PhonePe</span>
            <span className="pay-tag">Google Pay</span>
            <span className="pay-tag">VISA</span>
            <span className="pay-tag">MasterCard</span>
            <span className="pay-tag">RuPay</span>
            <span className="pay-tag">NetBanking</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
