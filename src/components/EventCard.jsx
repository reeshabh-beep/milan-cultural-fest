import { useState } from 'react'

export default function EventCard({ event, onViewDetails, onRegister }) {
  const [imageError, setImageError] = useState(false)

  // Map category to a decorative icon for fallback
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
    <article className="event-card">
      {/* Event Media / Fallback */}
      <div className="event-media">
        {!imageError && event.image ? (
          <img
            src={event.image}
            alt={event.title}
            className="event-image"
            loading="lazy"
            onError={() => setImageError(true)}
          />
        ) : (
          <div className="event-image-fallback">
            <span className="fallback-icon">{getCategoryIcon(event.category)}</span>
            <span className="fallback-text">{event.category}</span>
          </div>
        )}
        <div className="event-media-overlay" />

        {/* Category Pill Tag */}
        <span className="category-badge">{event.category}</span>

        {event.tag && <span className="event-feature-tag">{event.tag}</span>}
      </div>

      {/* Card Body */}
      <div className="event-body">
        <h3 className="event-title">{event.title}</h3>
        <p className="event-description">{event.description}</p>

        {/* Demo Logistics Meta */}
        <div className="event-meta-group">
          <div className="event-meta-item">
            <svg
              className="meta-icon"
              width="15"
              height="15"
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
            <span>{event.date}</span>
          </div>

          <div className="event-meta-item">
            <svg
              className="meta-icon"
              width="15"
              height="15"
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
            <span>{event.venue}</span>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="event-card-footer">
          <button
            type="button"
            className="btn btn-outline card-btn"
            onClick={() => onViewDetails && onViewDetails(event)}
            aria-label={`View details for ${event.title}`}
          >
            <span>View Details</span>
            <svg
              className="btn-icon"
              width="14"
              height="14"
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

          {onRegister && (
            <button
              type="button"
              className="btn btn-secondary card-quick-reg-btn"
              onClick={() => onRegister(event)}
              aria-label={`Register for ${event.title}`}
            >
              Register
            </button>
          )}
        </div>
      </div>
    </article>
  )
}
