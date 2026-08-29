import { useState } from 'react'
import { BrowserRouter, Navigate, Route, Routes, useNavigate } from 'react-router-dom'
import { MapContainer, Marker, TileLayer } from 'react-leaflet'
import L from 'leaflet'
import 'leaflet/dist/leaflet.css'
import attractionsData from '../mumbai_attractions_updated.json'
import './App.css'

const flattenDetails = (value) => {
  if (value == null) return []
  if (Array.isArray(value)) {
    return value.flatMap((item) => flattenDetails(item))
  }
  if (typeof value === 'object') {
    return Object.entries(value).flatMap(([key, nestedValue]) => {
      if (nestedValue == null) return []
      if (typeof nestedValue === 'object' && !Array.isArray(nestedValue)) {
        return flattenDetails(nestedValue).map((entry) => `${key.replace(/_/g, ' ')}: ${entry}`)
      }
      return [`${key.replace(/_/g, ' ')}: ${String(nestedValue)}`]
    })
  }
  return [String(value)]
}

const buildDetailSections = (location) => {
  const sections = []

  if (location.summary && typeof location.summary === 'object') {
    const summaryItems = []
    if (location.summary.area) summaryItems.push(`Area: ${location.summary.area}`)
    if (location.summary.city) summaryItems.push(`City: ${location.summary.city}`)
    if (location.summary.category) summaryItems.push(`Category: ${location.summary.category}`)
    if (location.summary.best_time) summaryItems.push(`Best time: ${location.summary.best_time}`)
    if (location.summary.time_required) summaryItems.push(`Time required: ${location.summary.time_required}`)
    if (location.summary.entry_fee) summaryItems.push(`Entry fee: ${location.summary.entry_fee}`)
    if (summaryItems.length) {
      sections.push({ title: 'Quick overview', items: summaryItems })
    }
  }

  const standardSections = [
    { title: 'Why visit', items: location.why_visit },
    { title: 'What to see or do', items: location.what_to_see_or_do },
    { title: 'Visitor notes', items: location.visitor_notes },
    { title: 'History notes', items: location.history_notes },
    { title: 'Local legend', items: location.local_legend ? [location.local_legend] : [] },
  ]

  standardSections.forEach((section) => {
    const items = Array.isArray(section.items) ? section.items.filter(Boolean) : []
    if (items.length) sections.push({ title: section.title, items })
  })

  if (location.history) {
    sections.push({ title: 'History', items: [location.history] })
  }

  if (location.practical_details && typeof location.practical_details === 'object') {
    const practicalItems = flattenDetails(location.practical_details)
    if (practicalItems.length) {
      sections.push({ title: 'Practical details', items: practicalItems })
    }
  }

  if (location.enginering_notes || location.engineering_notes) {
    sections.push({ title: 'Engineering notes', items: [location.enginering_notes || location.engineering_notes] })
  }

  if (location.description) {
    sections.unshift({ title: 'Overview', items: [location.description] })
  }

  return sections
}

const locations = (Array.isArray(attractionsData) ? attractionsData : []).map((location, index) => ({
  id: location.id || `location-${index}`,
  name: location.name || 'Mumbai attraction',
  type: location.category || 'Place',
  coordinates: Array.isArray(location.coordinates) && location.coordinates.length === 2 ? location.coordinates : [19.076, 72.8777],
  description: location.description || 'A notable Mumbai destination with cultural and historical significance.',
  detail: (() => {
    if (location.summary && location.summary.time_required) {
      return location.summary.time_required
    }
    if (location.practical_details && typeof location.practical_details === 'object') {
      return location.practical_details.time_required || Object.values(location.practical_details)[0] || location.location?.area || 'Mumbai'
    }
    return location.location?.area || 'Mumbai'
  })(),
  summary: location.summary || {
    area: location.location?.area,
    city: location.location?.city,
    category: location.category,
    time_required: location.practical_details?.time_required,
    best_time: location.practical_details?.best_time,
    entry_fee: location.practical_details?.entry_fee,
  },
  detailSections: buildDetailSections(location),
  images: Array.isArray(location.images) ? location.images.filter(Boolean) : [],
}))

const squareIcon = L.divIcon({
  className: 'marker-square',
  iconSize: [18, 18],
  iconAnchor: [9, 9],
})

function Home() {
  const navigate = useNavigate()

  return (
    <main className="app-shell home-screen">
      <section className="home-content">
        <p className="home-placeholder">Bombae Square</p>
        <button className="home-button" type="button" onClick={() => navigate('/map')}>
          Explore map <span aria-hidden="true">-&gt;</span>
        </button>
      </section>
    </main>
  )
}

function MapPage() {
  const [selectedLocation, setSelectedLocation] = useState(null)
  const [showMoreInfo, setShowMoreInfo] = useState(false)
  const navigate = useNavigate()

  const galleryImages = selectedLocation?.images || []
  const visibleImages = showMoreInfo ? galleryImages : galleryImages.slice(0, 2)

  return (
    <main className="app-shell">
      <MapContainer
        center={[19.076, 72.8777]}
        zoom={11}
        zoomControl={false}
        scrollWheelZoom={false}
        doubleClickZoom={false}
        touchZoom={false}
        boxZoom={false}
        keyboard={false}
        className="map"
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        {locations.map((location) => (
          <Marker
            key={location.id}
            position={location.coordinates}
            icon={squareIcon}
            eventHandlers={{
              click: () => {
                setSelectedLocation(location)
                setShowMoreInfo(false)
              },
            }}
          />
        ))}
      </MapContainer>

      <span className="gconfetti confetti-one" style={{ '--r': '-12deg' }} aria-hidden="true" />
      <span className="gconfetti confetti-two" style={{ '--r': '24deg' }} aria-hidden="true" />
      <span className="gconfetti confetti-three" style={{ '--r': '8deg' }} aria-hidden="true" />

      <header className="topbar">
        <button className="brand-button" type="button" onClick={() => navigate('/')} aria-label="Back to Home">
          <img className="brand-logo" src="/Photos/bombaesquare.png" alt="Bombae Square logo" />
        </button>
        <div>
          <p className="eyebrow">City guide</p>
          <h1>BOMBAE SQUARE</h1>
        </div>
        <div className="status-dot" title="Map is live" aria-label="Map is live" />
      </header>

      {selectedLocation && (
        <aside className="bottom-sheet" aria-live="polite">
          <div className="sheet-handle" />
          <div className="sheet-header">
            <div>
              <p className="location-type">{selectedLocation.type}</p>
              <h2>{selectedLocation.name}</h2>
            </div>
            <button className="close-button" type="button" onClick={() => {
              setSelectedLocation(null)
              setShowMoreInfo(false)
            }} aria-label="Close location details">×</button>
          </div>

          {galleryImages.length > 0 && (
            <div className="sheet-gallery" aria-label={`${selectedLocation.name} photos`}>
              {visibleImages.map((image, index) => (
                <img key={`${selectedLocation.id}-${index}`} src={image} alt={`${selectedLocation.name} view ${index + 1}`} />
              ))}
            </div>
          )}

          {selectedLocation.detailSections?.length > 0 && (
            <button
              className={`details-toggle ${showMoreInfo ? 'is-open' : ''}`}
              type="button"
              onClick={() => setShowMoreInfo((previous) => !previous)}
              aria-expanded={showMoreInfo}
            >
              <span>Details</span>
              <span className="toggle-chevron" aria-hidden="true">{showMoreInfo ? '−' : '+'}</span>
            </button>
          )}

          {showMoreInfo && (
            <div className="info-panel">
              {selectedLocation.detailSections?.map((section) => (
                <section className="detail-section" key={section.title}>
                  <h3>{section.title}</h3>
                  {Array.isArray(section.items) ? (
                    <ul>
                      {section.items.map((item, index) => (
                        <li key={`${section.title}-${index}`}>{item}</li>
                      ))}
                    </ul>
                  ) : (
                    <p>{section.items}</p>
                  )}
                </section>
              ))}
            </div>
          )}

          <p className="description">{selectedLocation.description}</p>
          <div className="sheet-footer">
            <span className="detail-label">{selectedLocation.detail}</span>
            <a href={`https://www.google.com/maps/search/?api=1&query=${selectedLocation.coordinates[0]},${selectedLocation.coordinates[1]}`} target="_blank" rel="noreferrer">Open directions <span aria-hidden="true">↗</span></a>
          </div>
        </aside>
      )}
    </main>
  )
}

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/map" element={<MapPage />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
