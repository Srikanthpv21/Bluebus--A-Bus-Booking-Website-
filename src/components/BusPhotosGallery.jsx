import React, { useState } from 'react';
import { Camera, CheckCircle2, X } from 'lucide-react';

export default function BusPhotosGallery({ bus }) {
  const [selectedPhoto, setSelectedPhoto] = useState(null);

  const isSleeper = bus.category === 'sleeper';

  // High-resolution photography assets tailored for Sleeper vs Seater
  const photos = isSleeper ? [
    {
      id: 'photo-1',
      title: 'AC Sleeper Berths (Double & Single Berths)',
      caption: 'Sanitized hotel-grade linen, soft pillows, privacy curtains, and reading lamps.',
      tag: 'Interior',
      url: 'https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=1000&q=80'
    },
    {
      id: 'photo-2',
      title: 'Volvo 9600 Multi-Axle Luxury Exterior',
      caption: 'Aerodynamic low-noise chassis with air-suspension for bump-free sleep.',
      tag: 'Exterior',
      url: 'https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?auto=format&fit=crop&w=1000&q=80'
    },
    {
      id: 'photo-3',
      title: 'Clean In-Bus Vacuum Lavatory',
      caption: 'Hygienic onboard washroom with contactless sensor faucet and hand sanitizer.',
      tag: 'Washroom',
      url: 'https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&w=1000&q=80'
    },
    {
      id: 'photo-4',
      title: 'Ambient Night Lighting & Privacy Cabin',
      caption: 'Warm low-glare LED night lights and individual USB quick-charge slots.',
      tag: 'Cabin',
      url: 'https://images.unsplash.com/photo-1509749837427-ac94a2553d0e?auto=format&fit=crop&w=1000&q=80'
    }
  ] : [
    {
      id: 'photo-1',
      title: 'Ergonomic 140° Recliner Seater Chairs',
      caption: 'High-density memory foam cushioning with extendable calf-rest support.',
      tag: 'Seating',
      url: 'https://images.unsplash.com/photo-1570125909232-eb263c188f7e?auto=format&fit=crop&w=1000&q=80'
    },
    {
      id: 'photo-2',
      title: 'Electric & Multi-Axle Coach Exterior',
      caption: 'Ultra-silent Euro 6 / EV propulsion system with regenerative braking.',
      tag: 'Exterior',
      url: 'https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?auto=format&fit=crop&w=1000&q=80'
    },
    {
      id: 'photo-3',
      title: 'Clean Sanitized Cabin & AC Vents',
      caption: 'HEPA air filtration system delivering fresh air circulation every 3 minutes.',
      tag: 'Interior',
      url: 'https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=1000&q=80'
    },
    {
      id: 'photo-4',
      title: 'Express Highway Travel Comfort',
      caption: 'Speed governor fitted (Max 80 km/h) for guaranteed highway passenger safety.',
      tag: 'Safety',
      url: 'https://images.unsplash.com/photo-1509749837427-ac94a2553d0e?auto=format&fit=crop&w=1000&q=80'
    }
  ];

  return (
    <div className="bus-photos-gallery-tab animate-fade-in">
      {/* Captain & Vehicle Verification Banner */}
      <div className="fleet-verification-banner">
        <div className="fleet-info-unit">
          <div className="unit-label">VEHICLE NUMBER</div>
          <div className="unit-val font-mono">{bus.vehicleReg || 'KA 01 AK 9842'}</div>
        </div>
        <div className="fleet-divider"></div>
        <div className="fleet-info-unit">
          <div className="unit-label">DESIGNATED CAPTAIN</div>
          <div className="unit-val">{bus.captain || 'Ramesh Kumar'}</div>
        </div>
        <div className="fleet-divider"></div>
        <div className="fleet-info-unit">
          <div className="unit-label">SAFETY STATUS</div>
          <div className="unit-val text-emerald font-bold">
            <CheckCircle2 size={14} className="inline mr-1" /> GPS Monitored & Alcohol Checked
          </div>
        </div>
      </div>

      {/* Photos Grid */}
      <div className="photos-grid-layout">
        {photos.map(p => (
          <div
            key={p.id}
            className="photo-card-item"
            onClick={() => setSelectedPhoto(p)}
            role="button"
            tabIndex={0}
            title="Click to view full photo"
          >
            <div className="photo-image-wrap">
              <img src={p.url} alt={p.title} className="gallery-photo-img" loading="lazy" />
              <span className="photo-tag-badge">{p.tag}</span>
              <span className="photo-zoom-hint">
                <Camera size={14} /> View
              </span>
            </div>
            <div className="photo-caption-block">
              <h5 className="photo-title">{p.title}</h5>
              <p className="photo-sub">{p.caption}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Lightbox Modal when a photo is clicked */}
      {selectedPhoto && (
        <div className="photo-lightbox-backdrop animate-fade-in" onClick={() => setSelectedPhoto(null)}>
          <div className="photo-lightbox-modal" onClick={(e) => e.stopPropagation()}>
            <button className="lightbox-close-btn" onClick={() => setSelectedPhoto(null)} aria-label="Close Lightbox">
              <X size={20} />
            </button>
            <img src={selectedPhoto.url} alt={selectedPhoto.title} className="lightbox-full-img" />
            <div className="lightbox-footer">
              <h4>{selectedPhoto.title}</h4>
              <p>{selectedPhoto.caption}</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
