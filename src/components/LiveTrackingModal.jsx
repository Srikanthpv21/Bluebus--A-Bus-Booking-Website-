import React from 'react';
import { X, Bus, Phone, ShieldAlert, Share2, Check } from 'lucide-react';

export default function LiveTrackingModal({
  isOpen,
  onClose,
  booking
}) {
  if (!isOpen) return null;

  const busName = booking?.operator || 'IntrCity SmartBus';
  const vehicleReg = booking?.vehicleReg || 'KA 01 AK 9842';
  const fromCity = booking?.fromCity || 'Bangalore';
  const toCity = booking?.toCity || 'Hyderabad';
  const pnr = booking?.pnrNumber || 'RDV-729401-BLR';
  const captain = booking?.captain || 'Ramesh Kumar';
  const captainPhone = booking?.captainPhone || '+91 98450 12345';
  const travelDate = booking?.travelDate || 'Tomorrow';

  const milestones = [
    {
      title: `${fromCity} Central Boarding Terminal`,
      time: booking?.departureTime || '21:00',
      status: 'passed',
      desc: 'Bus departed on schedule'
    },
    {
      title: 'City Outskirts Highway Toll Plaza',
      time: '22:30',
      status: 'passed',
      desc: 'Crossed outer ring road checkpoint'
    },
    {
      title: 'Highway Milestone NH44 (Near Anantapur)',
      time: '01:15',
      status: 'current',
      desc: 'Current Location • Moving steadily at highway speed'
    },
    {
      title: 'Scheduled Highway Food & Rest Stop',
      time: '03:00',
      status: 'upcoming',
      desc: '30-minute scheduled dinner halt'
    },
    {
      title: `${toCity} Final Dropping Point`,
      time: booking?.arrivalTime || '06:00',
      status: 'upcoming',
      desc: 'Expected arrival on schedule'
    }
  ];

  const handleShareLink = () => {
    const text = `Live Tracking for ${busName} (${fromCity} to ${toCity}). Vehicle: ${vehicleReg}. PNR: ${pnr}`;
    if (navigator.clipboard) {
      navigator.clipboard.writeText(text);
      alert('Tracking details copied! You can share this with family via WhatsApp.');
    }
  };

  return (
    <div className="modal-backdrop animate-fade-in">
      <div className="tracking-modal-sheet">
        {/* Header */}
        <div className="tracking-modal-header">
          <div>
            <div className="tracking-live-tag">
              <span className="live-dot"></span>
              <span>LIVE GPS TRACKING ACTIVE</span>
            </div>
            <h2 className="tracking-title">{busName}</h2>
            <div className="tracking-subtext">
              {fromCity} → {toCity} • {travelDate} • PNR: <strong>{pnr}</strong>
            </div>
          </div>
          <button className="modal-close-btn" onClick={onClose} aria-label="Close Live Tracker">
            <X size={20} />
          </button>
        </div>

        {/* Bus Info Strip */}
        <div className="tracking-vehicle-strip">
          <div className="vehicle-detail-item">
            <span className="detail-label">VEHICLE REG NO</span>
            <span className="detail-value">{vehicleReg}</span>
          </div>
          <div className="vehicle-detail-item">
            <span className="detail-label">BUS CAPTAIN</span>
            <span className="detail-value">{captain}</span>
          </div>
          <div className="vehicle-detail-item">
            <span className="detail-label">GPS STATUS</span>
            <span className="detail-value text-emerald">Signal Strong (Updated 30s ago)</span>
          </div>
        </div>

        {/* Real Route Progress Checklist */}
        <div className="tracking-route-milestones">
          <h4 className="milestones-heading">JOURNEY ROUTE TIMELINE</h4>

          <div className="milestones-timeline-list">
            {milestones.map((m, idx) => (
              <div key={idx} className={`milestone-timeline-item status-${m.status}`}>
                <div className="timeline-node">
                  {m.status === 'passed' && <Check size={14} className="node-icon-passed" />}
                  {m.status === 'current' && <Bus size={14} className="node-icon-current" />}
                  {m.status === 'upcoming' && <span className="node-dot-upcoming"></span>}
                </div>

                <div className="milestone-content">
                  <div className="milestone-header">
                    <span className="milestone-title">{m.title}</span>
                    <span className="milestone-time">{m.time}</span>
                  </div>
                  <div className="milestone-desc">{m.desc}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Captain Contact and Emergency Actions */}
        <div className="tracking-action-bar">
          <button
            type="button"
            className="btn-call-captain"
            onClick={() => alert(`Dialing Bus Captain ${captain}: ${captainPhone}`)}
          >
            <Phone size={16} />
            <span>Call Bus Captain ({captainPhone})</span>
          </button>

          <button
            type="button"
            className="btn-share-tracking"
            onClick={handleShareLink}
          >
            <Share2 size={16} />
            <span>Share GPS Link</span>
          </button>

          <button
            type="button"
            className="btn-sos-support"
            onClick={() => alert('Emergency SOS Alert sent to BlueBus 24x7 Safety Helpline & Highway Patrol.')}
          >
            <ShieldAlert size={16} />
            <span>Emergency SOS</span>
          </button>
        </div>
      </div>
    </div>
  );
}
