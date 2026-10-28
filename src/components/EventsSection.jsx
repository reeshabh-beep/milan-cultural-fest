import { useState } from 'react'
import EventCard from './EventCard.jsx'
import { sampleEvents } from '../data/events.js'

const CATEGORIES = ['All', 'Dance', 'Music', 'Drama', 'Fashion', 'Technical']

export default function EventsSection({
  onViewDetails,
  onRegister,
  selectedCategory = 'All',
  onSelectCategory,
}) {
  const [searchQuery, setSearchQuery] = useState('')
  const [internalCategory, setInternalCategory] = useState('All')

  // Support both controlled (from App) and uncontrolled category state
  const activeCategory = onSelectCategory ? selectedCategory : internalCategory
  const setCategory = onSelectCategory || setInternalCategory

  // Search by title and description (case-insensitive) & category filter combined
  const filteredEvents = sampleEvents.filter((event) => {
    const matchesCategory =
      activeCategory === 'All' ||
      event.category.toLowerCase() === activeCategory.toLowerCase()

    const q = searchQuery.trim().toLowerCase()
    const matchesSearch =
      !q ||
      event.title.toLowerCase().includes(q) ||
      event.description.toLowerCase().includes(q)

    return matchesCategory && matchesSearch
  })

  const hasActiveFilters = searchQuery.trim() !== '' || activeCategory !== 'All'

  const handleClearFilters = () => {
    setSearchQuery('')
    setCategory('All')
  }

  return (
    <section id="events" className="events-section">
      <div className="section-container">
        {/* Section Header */}
        <div className="section-header">
          <div className="section-kicker">FEATURED EVENTS</div>
          <h2 className="section-title">
            Curated Showcases of <span className="gradient-text">Art & Performance</span>
          </h2>
          <p className="section-subtitle">
            Explore premier competitions and cultural stages across music, dance, theatre, fashion,
            and creative technology.
          </p>
        </div>

        {/* Discovery Bar: Search Input & Category Filters */}
        <div className="discovery-toolbar">
          {/* Search Input Box */}
          <div className="search-box-wrapper">
            <svg
              className="search-input-icon"
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
            >
              <circle cx="11" cy="11" r="8" />
              <path d="m21 21-4.3-4.3" />
            </svg>
            <input
              type="text"
              className="search-input"
              placeholder="Search events by title, keyword, or description..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              aria-label="Search events by title or description"
            />
            {searchQuery && (
              <button
                type="button"
                className="search-clear-btn"
                onClick={() => setSearchQuery('')}
                aria-label="Clear search input"
              >
                ✕
              </button>
            )}
          </div>

          {/* Category Filter Pills & Clear Controls */}
          <div className="filter-row">
            <div className="category-pills" role="tablist" aria-label="Event Categories">
              {CATEGORIES.map((category) => {
                const isActive = activeCategory === category
                return (
                  <button
                    key={category}
                    type="button"
                    role="tab"
                    aria-selected={isActive}
                    className={`filter-pill ${isActive ? 'active' : ''}`}
                    onClick={() => setCategory(category)}
                  >
                    {category}
                  </button>
                )
              })}
            </div>

            {hasActiveFilters && (
              <button
                type="button"
                className="clear-filters-btn"
                onClick={handleClearFilters}
                aria-label="Clear all applied filters"
              >
                <svg
                  width="14"
                  height="14"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M18 6 6 18" />
                  <path d="m6 6 12 12" />
                </svg>
                <span>Clear Filters</span>
              </button>
            )}
          </div>

          {/* Results count bar */}
          <div className="results-count-bar">
            <span>
              Showing <strong>{filteredEvents.length}</strong> of{' '}
              <strong>{sampleEvents.length}</strong> events
            </span>
          </div>
        </div>

        {/* Events Grid or Friendly Empty State */}
        {filteredEvents.length > 0 ? (
          <div className="events-grid">
            {filteredEvents.map((event) => (
              <EventCard
                key={event.id}
                event={event}
                onViewDetails={onViewDetails}
                onRegister={onRegister}
              />
            ))}
          </div>
        ) : (
          <div className="empty-state-card" role="status">
            <div className="empty-state-icon">
              <svg
                width="36"
                height="36"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <circle cx="11" cy="11" r="8" />
                <path d="m21 21-4.3-4.3" />
                <line x1="8" x2="14" y1="11" y2="11" />
              </svg>
            </div>
            <h3 className="empty-state-title">No matching events found</h3>
            <p className="empty-state-description">
              We couldn&apos;t find any events matching{' '}
              {searchQuery ? `"${searchQuery}"` : 'your query'}{' '}
              {activeCategory !== 'All' ? `in category "${activeCategory}"` : ''}. Try searching
              for another keyword or reset your filters.
            </p>
            <button
              type="button"
              className="btn btn-secondary empty-reset-btn"
              onClick={handleClearFilters}
            >
              Reset All Filters
            </button>
          </div>
        )}
      </div>
    </section>
  )
}
