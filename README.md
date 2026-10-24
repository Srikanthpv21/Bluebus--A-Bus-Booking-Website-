# 🚌 BlueBus — Premium Online Bus Ticket Booking Platform

[![React](https://img.shields.io/badge/React-19.3.1-61DAFB?style=for-the-badge&logo=react&logoColor=black)](https://react.dev/)
[![Vite](https://img.shields.io/badge/Vite-8.3.5-646CFF?style=for-the-badge&logo=vite&logoColor=white)](https://vitejs.dev/)
[![Oxlint](https://img.shields.io/badge/Oxlint-Clean%20(0%20errors)-22c55e?style=for-the-badge)](https://oxc.rs/)
[![License](https://img.shields.io/badge/License-MIT-blue?style=for-the-badge)](LICENSE)

An authentic, ultra-smooth, full-featured **Online Bus Ticket Booking Web Application** inspired by redBus. Built with React 19, modern Vanilla CSS, and a rich component architecture featuring realistic seat selection, real-time GPS tracking simulation, festive Diwali offers, and instant printable boarding passes.

---

## ✨ Key Features

### 🔍 1. Intelligent Route & Date Search
* **City Auto-complete**: Fast, searchable dropdowns covering 30+ major Indian hubs (Bangalore, Hyderabad, Chennai, Mumbai, Pune, Delhi, Goa, etc.).
* **One-Click City Swap**: Reverses departure and destination instantly with smooth 180° rotation.
* **Quick Date Chips**: One-tap selection for *Today* and *Tomorrow*, with calendar integration and past-date validation.
* **Trending Routes**: Quick-launch buttons for high-demand corridors with starting fare previews.

### 🚌 2. Realistic Bus Listing & Filters
* **Detailed Bus Cards**: Displays departure/arrival times, journey duration, seat availability badges, and fares.
* **Verified Operator Profiles**: Features top operators (IntrCity SmartBus, NueGo Electric, Zingbus, Orange Travels, SRS, VRL).
* **Smart Filter Sidebar**: Filter by Bus Types (AC, Sleeper, Seater, Electric EV), Departure Time slots, Seat availability, and price sorting.
* **Rating Popover**: Breakdown of cleanliness, punctuality, staff behavior, and safety scores.
* **Bus Interior Photo Galleries**: Tabbed previews of exterior, seating, berths, and amenities.

### 💺 3. Interactive Multi-Deck Seat Layout
* **Dual Deck Architecture**: Interactive Lower Deck and Upper Deck toggle.
* **Sleeper Berths & Seater Chairs**: Real-dimension proportions with pillows and aisle indicators.
* **Gender-Specific Safety Reservations**:
  * 🌸 **Female-Only Seats**: Distinctive pink border and female avatar. Female travelers can book, while male traveler selection triggers an instant safety notification.
  * 🔷 **Male-Only Seats**: Reserved blue indicators for solo male travelers.
  * 🪑 **Available & Booked Seats**: Dynamic hover tooltips showing seat numbers and live fares.
* **Boarding & Dropping Points Selection**: Real pickup locations with exact timestamps and land marks.

### 🪔 4. Festive Diwali Dhamaka Carousel
* **Right-to-Left Auto-Advancing Banner**: Displays seasonal offers with pause-on-hover functionality.
* **Animated Diya Lamp**: Multi-stop glowing SVG flame with festive sparkles.
* **One-Click Coupon Copy**: Instant copy with celebration confetti burst animation.
* **Continuous Marquee Ticker**: Highlights top holiday discounts across festive routes.

### 📍 5. Simulated Real-Time GPS Bus Tracking
* **Live Route Milestones**: Visual timeline showing Passed, Current, and Upcoming stops with live ETAs.
* **Real-Time Telemetry**: Live speedometer simulation, traffic indicators, and bus captain contact.
* **SOS Emergency Assistance**: Quick helpline access and live location sharing.

### 🎟️ 6. Seamless Checkout & Boarding Pass Generator
* **Passenger Information Form**: Seat-by-seat passenger name, age, and gender verification.
* **Smart Promo Engine**: Validates discount coupons (`DIWALI10`, `FESTIVE15`, `FIRSTTRIP`, `EVGREEN`) with real-time bill breakdown.
* **E-Ticket Boarding Pass**: Generates official BlueBus boarding passes with unique PNR codes, barcode display, and print/download actions.
* **My Bookings Manager**: Cancel, view, or track past and upcoming journeys saved securely in `localStorage`.

### 🌓 7. Premium Dark & Light Mode
* **Universal Color-Scheme Adaptation**: Deep navy/slate palette for dark mode, crisp clean styling for light mode.
* **Persistent Preference**: Automatically saves theme choice to `localStorage`.
* **Crisp Icons**: All calendar, bus, and UI glyphs dynamically adapt for high contrast and readability.

---

## 🎟️ Active Promo Codes

| Promo Code | Discount | Condition |
| :--- | :--- | :--- |
| **`DIWALI10`** | **10% OFF** (up to ₹350) | Deepavali Festive Special |
| **`FESTIVE15`** | **15% OFF** (up to ₹400) | Festival Return Journeys |
| **`FIRSTTRIP`** | **20% OFF** (up to ₹300) | New User First Booking |
| **`EVGREEN`** | **Flat ₹150 OFF** | NueGo Electric Green Buses |

---

## 🛠️ Tech Stack

* **Frontend Framework**: [React 19](https://react.dev/)
* **Build Tool & Dev Server**: [Vite 8](https://vitejs.dev/)
* **Icons**: [Lucide React](https://lucide.dev/)
* **Visual Effects**: [Canvas Confetti](https://www.npmjs.com/package/canvas-confetti)
* **Styling**: Vanilla CSS (Custom Design System with CSS variables and responsive media queries)
* **Linting & Code Quality**: [Oxlint](https://oxc.rs/)

---

## 🚀 Quick Start & Installation

### Prerequisites
* [Node.js](https://nodejs.org/) (version 18.0.0 or higher recommended)
* `npm` or `yarn`

### 1. Clone the repository
```bash
git clone https://github.com/Srikanthpv21/Bluebus--A-Bus-Booking-Website-.git
cd Bluebus--A-Bus-Booking-Website-
```

### 2. Install dependencies
```bash
npm install
```

### 3. Start local development server
```bash
npm run dev
```
Open your browser and navigate to `http://localhost:5173/`.

### 4. Build for production
```bash
npm run build
```
The optimized production bundle will be generated in the `dist/` directory.

### 5. Run linter
```bash
npm run lint
```

---

## 📁 Project Architecture

```
Edugram/
├── public/                 # Static assets & favicon
├── src/
│   ├── assets/             # Brand logos & media assets
│   ├── components/
│   │   ├── BookingModal.jsx          # Checkout modal & passenger form
│   │   ├── BusCard.jsx               # Individual bus card with fare & specs
│   │   ├── BusFilters.jsx            # Filter sidebar (time, AC, EV, price)
│   │   ├── BusPhotosGallery.jsx      # Interior & exterior photo galleries
│   │   ├── DiwaliCarouselBanner.jsx  # Moving festive promo carousel & Diya
│   │   ├── FAQSection.jsx            # Accordion FAQ for travelers
│   │   ├── Footer.jsx                # Light grey footer with links & helpline
│   │   ├── GenderIcons.jsx           # Pink/Blue female & male seat glyphs
│   │   ├── HeroSearch.jsx            # Route search, city swap & date picker
│   │   ├── LiveTrackingModal.jsx     # GPS telemetry & route milestones
│   │   ├── MyBookingsModal.jsx       # Saved tickets & cancellation
│   │   ├── Navbar.jsx                # Brand navigation, theme toggle & help
│   │   ├── OffersBanner.jsx          # Offer cards component
│   │   ├── OperatorLogo.jsx          # SVG badges for verified bus fleets
│   │   ├── RatingBreakdownPopover.jsx# Sub-ratings tooltip popover
│   │   ├── RedBusSeat.jsx            # Interactive sleeper & seater seat component
│   │   ├── SeatLayout.jsx            # Lower & upper deck seat grid
│   │   └── TicketSuccessModal.jsx    # Printable boarding pass & PNR confirmation
│   ├── data/
│   │   └── mockBusData.js            # Bus routes, schedules, amenities & promo data
│   ├── App.css                       # Core component design tokens
│   ├── App.jsx                       # Main application state & view routing
│   ├── index.css                     # Global design tokens, dark mode & resets
│   ├── main.jsx                      # Vite React entry point
│   └── RealisticRedBus.css           # 1:1 redBus authentic layout styling
├── .gitignore
├── package.json
├── vite.config.js
└── README.md
```

---

## 🛡️ Security & Reliability

* **0 Vulnerabilities**: Fully verified against `npm audit`.
* **Zero XSS Risk**: Uses pure React text bindings with zero `dangerouslySetInnerHTML` or `eval()`.
* **Safe Local Storage**: All client storage operations (`bluebus_bookings`, `bluebus_theme`) are wrapped in `try/catch` handlers with default fallbacks.
* **Input Validation**: Strict client-side validation on passenger names, age constraints (1–110), seat gender rules, and phone numbers.

---

## 📄 License

This project is licensed under the MIT License - feel free to use and customize for your own projects!
