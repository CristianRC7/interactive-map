import { useState } from 'react'
import './InteractiveMap.css'

const events = [
  { id: 1, name: 'Main Stage', x: 20, y: 30, video: 'xf9Ejt4OmWQ', preview: 'https://img.youtube.com/vi/xf9Ejt4OmWQ/0.jpg' },
  { id: 2, name: 'Techno Arena', x: 60, y: 50, video: 'i3f6H_uLnEY', preview: 'https://img.youtube.com/vi/dQw4w9WgXcQ/0.jpg' },
  { id: 3, name: 'Chill Zone', x: 40, y: 70, video: 'jfKfPfyJRdk', preview: 'https://img.youtube.com/vi/jfKfPfyJRdk/0.jpg' },
]

export default function InteractiveMap() {
  const [activeEvent, setActiveEvent] = useState(null)
  const [showVideo, setShowVideo] = useState(false)
  const [hoveredEvent, setHoveredEvent] = useState(null)

  const handleMouseEnter = (event) => {
    setHoveredEvent(event)
  }

  const handleMouseLeave = () => {
    setHoveredEvent(null)
  }

  const handleClick = (event) => {
    setActiveEvent(event)
    setShowVideo(true)
  }

  const closeVideo = () => {
    setShowVideo(false)
  }

  return (
    <div className="interactive-map">
      <svg className="map" viewBox="0 0 100 100">
        <image href="/placeholder.svg?height=1000&width=1000" width="100" height="100" />
        {events.map((event) => (
          <circle
            key={event.id}
            cx={event.x}
            cy={event.y}
            r="5"
            className={`event-marker ${activeEvent === event ? 'active' : ''}`}
            onMouseEnter={() => handleMouseEnter(event)}
            onMouseLeave={handleMouseLeave}
            onClick={() => handleClick(event)}
          />
        ))}
      </svg>
      
      {hoveredEvent && (
        <div
          className="preview"
          style={{ left: `${hoveredEvent.x}%`, top: `${hoveredEvent.y}%` }}
        >
          <h2>{hoveredEvent.name}</h2>
          <img src={hoveredEvent.preview} alt={`Preview of ${hoveredEvent.name}`} />
        </div>
      )}
      
      {showVideo && (
        <div className="modal">
          <div className="modal-content">
            <button className="close-button" onClick={closeVideo}>×</button>
            <h2>{activeEvent.name}</h2>
            <iframe
              width="560"
              height="315"
              src={`https://www.youtube.com/embed/${activeEvent.video}?controls=0&autoplay=1&modestbranding=1&fs=1&showinfo=0&rel=0`}
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      )}
    </div>
  );
}