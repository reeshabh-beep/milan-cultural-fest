import { useState } from 'react'
import Navbar from './components/Navbar.jsx'
import Hero from './components/Hero.jsx'
import EventsSection from './components/EventsSection.jsx'
import AboutSection from './components/AboutSection.jsx'
import Footer from './components/Footer.jsx'
import EventDetailsModal from './components/EventDetailsModal.jsx'
import RegistrationModal from './components/RegistrationModal.jsx'
import { sampleEvents } from './data/events.js'
import './App.css'

function App() {
  const [selectedEvent, setSelectedEvent] = useState(null)
  const [isDetailsOpen, setIsDetailsOpen] = useState(false)
  const [isRegisterOpen, setIsRegisterOpen] = useState(false)
  const [preselectedEventId, setPreselectedEventId] = useState('')
  const [selectedCategory, setSelectedCategory] = useState('All')

  // Open the event details modal
  const handleViewDetails = (event) => {
    setSelectedEvent(event)
    setIsDetailsOpen(true)
  }

  const handleCloseDetails = () => {
    setIsDetailsOpen(false)
  }

  // Open the registration form modal with an optional preselected event
  const handleOpenRegister = (event) => {
    // If coming from details modal, close it first
    setIsDetailsOpen(false)
    const eventId = event?.id || ''
    setPreselectedEventId(eventId)
    setIsRegisterOpen(true)
  }

  const handleCloseRegister = () => {
    setIsRegisterOpen(false)
  }

  const handleSelectCategory = (category) => {
    setSelectedCategory(category)
  }

  return (
    <div className="site-wrapper">
      <Navbar onRegisterClick={() => handleOpenRegister(null)} />
      <main>
        <Hero
          onRegisterClick={() => handleOpenRegister(null)}
          onSelectCategory={handleSelectCategory}
        />
        <EventsSection
          onViewDetails={handleViewDetails}
          onRegister={handleOpenRegister}
          selectedCategory={selectedCategory}
          onSelectCategory={handleSelectCategory}
        />
        <AboutSection />
      </main>
      <Footer onRegisterClick={() => handleOpenRegister(null)} />

      {/* Feature 2: Event Details Modal */}
      <EventDetailsModal
        event={selectedEvent}
        isOpen={isDetailsOpen}
        onClose={handleCloseDetails}
        onRegister={handleOpenRegister}
      />

      {/* Feature 3: Registration Modal */}
      <RegistrationModal
        isOpen={isRegisterOpen}
        onClose={handleCloseRegister}
        events={sampleEvents}
        preselectedEventId={preselectedEventId}
      />
    </div>
  )
}

export default App
