import { useState, useEffect } from 'react'

export default function RegistrationModal({
  isOpen,
  onClose,
  events = [],
  preselectedEventId = '',
}) {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    studentId: '',
    eventId: preselectedEventId || '',
  })

  const [errors, setErrors] = useState({})
  const [touched, setTouched] = useState({})
  const [isSuccess, setIsSuccess] = useState(false)
  const [registrationRef, setRegistrationRef] = useState('')

  // Sync preselected event whenever modal opens or preselectedEventId changes
  useEffect(() => {
    if (isOpen) {
      setFormData({
        fullName: '',
        email: '',
        studentId: '',
        eventId: preselectedEventId || '',
      })
      setErrors({})
      setTouched({})
      setIsSuccess(false)
    }
  }, [isOpen, preselectedEventId])

  // Scroll lock & Escape key
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

  if (!isOpen) return null

  // Email format validation regex
  const validateEmail = (email) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    return re.test(String(email).trim().toLowerCase())
  }

  // Field validation function
  const validateField = (name, value) => {
    switch (name) {
      case 'fullName':
        if (!value || !value.trim()) {
          return 'Full name is required.'
        }
        if (value.trim().length < 2) {
          return 'Name must be at least 2 characters.'
        }
        return ''
      case 'email':
        if (!value || !value.trim()) {
          return 'Email address is required.'
        }
        if (!validateEmail(value)) {
          return 'Please enter a valid email address (e.g. user@domain.com).'
        }
        return ''
      case 'eventId':
        if (!value) {
          return 'Please select an event.'
        }
        return ''
      default:
        return ''
    }
  }

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))

    // Clear or update validation error on change if already touched
    if (touched[name]) {
      const error = validateField(name, value)
      setErrors((prev) => ({ ...prev, [name]: error }))
    }
  }

  const handleBlur = (e) => {
    const { name, value } = e.target
    setTouched((prev) => ({ ...prev, [name]: true }))
    const error = validateField(name, value)
    setErrors((prev) => ({ ...prev, [name]: error }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    // Validate all fields
    const newErrors = {
      fullName: validateField('fullName', formData.fullName),
      email: validateField('email', formData.email),
      eventId: validateField('eventId', formData.eventId),
    }

    setErrors(newErrors)
    setTouched({
      fullName: true,
      email: true,
      eventId: true,
    })

    const hasErrors = Object.values(newErrors).some((err) => Boolean(err))

    if (!hasErrors) {
      // Generate a mock confirmation reference
      const randomCode = Math.floor(1000 + Math.random() * 9000)
      setRegistrationRef(`MILAN-2026-${randomCode}`)
      setIsSuccess(true)
    }
  }

  const handleResetForAnother = () => {
    setFormData({
      fullName: '',
      email: '',
      studentId: '',
      eventId: '',
    })
    setErrors({})
    setTouched({})
    setIsSuccess(false)
    setRegistrationRef('')
  }

  const selectedEvent = events.find((ev) => ev.id === formData.eventId)

  return (
    <div
      className="modal-backdrop"
      onClick={onClose}
      role="presentation"
    >
      <div
        className="modal-container registration-modal"
        onClick={(e) => e.stopPropagation()}
        role="dialog"
        aria-modal="true"
        aria-labelledby="registration-title"
      >
        {/* Close Button */}
        <button
          type="button"
          className="modal-close-btn"
          onClick={onClose}
          aria-label="Close registration dialog"
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

        {isSuccess ? (
          /* Success Screen */
          <div className="registration-success-content">
            <div className="success-icon-wrapper">
              <svg
                width="40"
                height="40"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="success-check"
              >
                <path d="M20 6 9 17l-5-5" />
              </svg>
            </div>

            <h2 className="success-title">Registration Confirmed!</h2>
            <p className="success-subtitle">
              Your demo registration pass for Milan has been successfully generated.
            </p>

            <div className="pass-card">
              <div className="pass-header">
                <span className="pass-brand">MILAN • SRMIST</span>
                <span className="pass-ref">{registrationRef}</span>
              </div>
              <div className="pass-details">
                <div className="pass-row">
                  <span className="pass-label">Participant:</span>
                  <span className="pass-val">{formData.fullName.trim()}</span>
                </div>
                <div className="pass-row">
                  <span className="pass-label">Email:</span>
                  <span className="pass-val">{formData.email.trim()}</span>
                </div>
                {formData.studentId && formData.studentId.trim() && (
                  <div className="pass-row">
                    <span className="pass-label">Participant ID:</span>
                    <span className="pass-val">{formData.studentId.trim()}</span>
                  </div>
                )}
                <div className="pass-row pass-highlight">
                  <span className="pass-label">Event:</span>
                  <span className="pass-val">{selectedEvent?.title || 'Selected Event'}</span>
                </div>
                {selectedEvent && (
                  <div className="pass-row pass-meta">
                    <span className="pass-label">Venue:</span>
                    <span className="pass-val">{selectedEvent.venue}</span>
                  </div>
                )}
              </div>
            </div>

            <div className="success-actions">
              <button
                type="button"
                className="btn btn-secondary"
                onClick={handleResetForAnother}
              >
                Register Another Event
              </button>
              <button type="button" className="btn btn-primary" onClick={onClose}>
                Done
              </button>
            </div>
          </div>
        ) : (
          /* Registration Form Screen */
          <div className="registration-form-content">
            <div className="form-header">
              <div className="section-kicker">FESTIVAL PARTICIPATION</div>
              <h2 id="registration-title" className="form-title">
                Register for <span className="gradient-text">Milan</span>
              </h2>
              <p className="form-subtitle">
                Reserve your spot in SRMIST&apos;s cultural stage competitions and showcases.
              </p>
            </div>

            <form onSubmit={handleSubmit} noValidate className="registration-form">
              {/* Event Selection */}
              <div className="form-group">
                <label htmlFor="reg-event" className="form-label">
                  Event Selection <span className="required-star">*</span>
                </label>
                <div className="select-wrapper">
                  <select
                    id="reg-event"
                    name="eventId"
                    value={formData.eventId}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    className={`form-select ${errors.eventId && touched.eventId ? 'input-error' : ''}`}
                    aria-describedby={errors.eventId && touched.eventId ? 'event-error' : undefined}
                    aria-invalid={Boolean(errors.eventId && touched.eventId)}
                  >
                    <option value="">
                      -- Choose an Event --
                    </option>
                    {events.map((ev) => (
                      <option key={ev.id} value={ev.id}>
                        [{ev.category}] {ev.title}
                      </option>
                    ))}
                  </select>
                </div>
                {errors.eventId && touched.eventId && (
                  <p id="event-error" className="error-message">
                    {errors.eventId}
                  </p>
                )}
              </div>

              {/* Full Name */}
              <div className="form-group">
                <label htmlFor="reg-name" className="form-label">
                  Full Name <span className="required-star">*</span>
                </label>
                <input
                  id="reg-name"
                  type="text"
                  name="fullName"
                  placeholder="e.g. Priya Sharma"
                  value={formData.fullName}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  autoComplete="name"
                  className={`form-input ${errors.fullName && touched.fullName ? 'input-error' : ''}`}
                  aria-describedby={errors.fullName && touched.fullName ? 'name-error' : undefined}
                  aria-invalid={Boolean(errors.fullName && touched.fullName)}
                />
                {errors.fullName && touched.fullName && (
                  <p id="name-error" className="error-message">
                    {errors.fullName}
                  </p>
                )}
              </div>

              {/* Email */}
              <div className="form-group">
                <label htmlFor="reg-email" className="form-label">
                  Email Address <span className="required-star">*</span>
                </label>
                <input
                  id="reg-email"
                  type="email"
                  name="email"
                  placeholder="e.g. priya@srmist.edu.in"
                  value={formData.email}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  autoComplete="email"
                  className={`form-input ${errors.email && touched.email ? 'input-error' : ''}`}
                  aria-describedby={errors.email && touched.email ? 'email-error' : undefined}
                  aria-invalid={Boolean(errors.email && touched.email)}
                />
                {errors.email && touched.email && (
                  <p id="email-error" className="error-message">
                    {errors.email}
                  </p>
                )}
              </div>

              {/* Student / Participant ID */}
              <div className="form-group">
                <div className="form-label-row">
                  <label htmlFor="reg-student-id" className="form-label">
                    Student / Participant ID
                  </label>
                  <span className="optional-tag">Optional</span>
                </div>
                <input
                  id="reg-student-id"
                  type="text"
                  name="studentId"
                  placeholder="e.g. RA2311003010123"
                  value={formData.studentId}
                  onChange={handleChange}
                  autoComplete="off"
                  className="form-input"
                />
                <span className="form-helper">
                  SRMIST register number or external college roll number if applicable.
                </span>
              </div>

              {/* Submit CTA */}
              <div className="form-actions">
                <button type="button" className="btn btn-secondary" onClick={onClose}>
                  Cancel
                </button>
                <button type="submit" className="btn btn-primary submit-btn">
                  <span>Confirm Registration</span>
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
                  >
                    <path d="M5 12h14" />
                    <path d="m12 5 7 7-7 7" />
                  </svg>
                </button>
              </div>
            </form>
          </div>
        )}
      </div>
    </div>
  )
}
