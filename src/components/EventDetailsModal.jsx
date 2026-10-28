import { useEffect, useState } from 'react'

export default function EventDetailsModal({ event, isOpen, onClose, onRegister }) {
  const [imageError, setImageError] = useState(false)

  // Reset image error state when a new event is selected
  useEffect(() => {
    setImageError(false)
  }, [event])

  // Lock body scroll and handle Escape key press
  useEffect(() => {
    if (!isOpen) return

    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        onClose()
      }
    }

    document.addEventListener('keydown', handleKeyDown)
    const originalOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'

    return () => {
      document.removeEventListener('keydown', handleKeyDown)
      document.body.style.overflow = originalOverflow
    }
  }, [isOpen, onClose])

  if (!isOpen || !event) return null

  const getCategoryIcon = (category) => {
    switch (category) {
      case 'Dance':
        return '⚡'
      case 'Music':
        return '♬'
      case 'Drama':
        return '🎭'
      case 'Fashion':
        return '✦'
      case 'Technical':
        return '⌘'
      default:
        return '★'
    }
  }

  return (
    <div
      className="modal-backdrop"
      onClick={onClose}
      role="presentation"
    >
      <div
        className="modal-container event-details-modal"
        onClick={(e) => e.stopPropagation()}
        role="dialog"
        aria-modal="true"
        aria-labelledby="modal-event-title"
      >
        {/* Modal Close Button */}
        <button
          type="button"
          className="modal-close-btn"
          onClick={onClose}
          aria-label="Close event details"
        >
          <svg
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <line x1="18" y1="6" x2="6" y2="18" />
            <line x1="6" y1="6" x2="18" y2="18" />
          </svg>
        </button>

        {/* Modal Image / Fallback Banner */}
        <div className="modal-banner">
          {!imageError && event.image ? (
            <img
              src={event.image}
              alt={event.title}
              className="modal-banner-img"
              onError={() => setImageError(true)}
            />
          ) : (
            <div className="modal-banner-fallback">
              <span className="fallback-icon">{getCategoryIcon(event.category)}</span>
              <span className="fallback-text">{event.category}</span>
            </div>
          )}
          <div className="modal-banner-gradient" />

          {/* Badges */}
          <div className="modal-badge-group">
            <span className="category-badge">{event.category}</span>
            {event.tag && <span className="event-feature-tag">{event.tag}</span>}
          </div>
        </div>

        {/* Modal Content */}
        <div className="modal-body">
          <h2 id="modal-event-title" className="modal-title">
            {event.title}
          </h2>

          <p className="modal-description">{event.description}</p>

          {/* Schedule & Venue Card */}
          <div className="modal-info-panel">
            <h4 className="info-panel-title">Event Logistics</h4>
            <div className="info-panel-grid">
              <div className="info-item">
                <svg
                  className="info-icon"
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                >
                  <rect width="18" height="18" x="3" y="4" rx="2" ry="2" />
                  <line x1="16" x2="16" y1="2" y2="6" />
                  <line x1="8" x2="8" y1="2" y2="6" />
                  <line x1="3" x2="21" y1="10" y2="10" />
                </svg>
                <div>
                  <span className="info-label">Date & Time</span>
                  <span className="info-val">{event.date}</span>
                </div>
              </div>

              <div className="info-item">
                <svg
                  className="info-icon"
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                >
                  <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
                  <circle cx="12" cy="10" r="3" />
                </svg>
                <div>
                  <span className="info-label">Location</span>
                  <span className="info-val">{event.venue}</span>
                </div>
              </div>
            </div>

            <div className="demo-notice">
              <span className="demo-notice-dot"></span>
              <span>Demo Notice: Event timings and venues are for recruitment preview.</span>
            </div>
          </div>

          {/* Modal Footer Actions */}
          <div className="modal-actions">
            <button type="button" className="btn btn-secondary" onClick={onClose}>
              Close
            </button>
            <button
              type="button"
              className="btn btn-primary register-btn"
              onClick={() => onRegister(event)}
            >
              <span>Register Now</span>
              <svg
                className="btn-icon"
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <path d="M5 12h14" />
                <path d="m12 5 7 7-7 7" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
