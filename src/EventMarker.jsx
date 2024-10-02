import { useState } from 'react'

export default function EventMarker({ event, onClick }) {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <div
      className="absolute cursor-pointer"
      style={{ left: `${event.x}%`, top: `${event.y}%` }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={onClick}
    >
      <div className="w-4 h-4 bg-red-500 rounded-full" />
      {isHovered && (
        <div className="absolute z-10 p-2 bg-white rounded shadow-lg">
          <h3 className="text-sm font-bold">{event.title}</h3>
          <div className="mt-2">
            <iframe
              width="200"
              height="113"
              src={`https://www.youtube.com/embed/${event.videoId}?autoplay=1&mute=1&controls=0`}
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      )}
    </div>
  )
}