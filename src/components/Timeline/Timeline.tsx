import { useState, useRef, useEffect } from 'react'
import { timelineData } from './data'
import TimelineDot from './TimelineDot'
import TimelineCard from './TimelineCard'
import './Timeline.css'

export default function Timeline() {
  const [activeIndex, setActiveIndex] = useState<number>(timelineData.length - 1)
  const [rocketIndex, setRocketIndex] = useState<number>(timelineData.length - 1)
  const [isHovering, setIsHovering] = useState<boolean>(false)
  const timelineRef = useRef<HTMLDivElement>(null)

  // Auto-run rocket animation when not hovering (bottom to top)
  useEffect(() => {
    if (isHovering) return

    const interval = setInterval(() => {
      setRocketIndex(prev => {
        const nextIndex = prev === 0 ? timelineData.length - 1 : prev - 1
        setActiveIndex(nextIndex)
        return nextIndex
      })
    }, 3000) // Move every 3 seconds

    return () => clearInterval(interval)
  }, [isHovering])

  const handleMouseEnter = (index: number) => {
    setIsHovering(true)
    setRocketIndex(index) // Jump rocket to hovered position
    setActiveIndex(index)
  }

  const handleMouseLeave = () => {
    setIsHovering(false)
  }

  // Calculate rocket position based on current index (vertical, bottom to top)
  // Account for the 40px padding on the timeline-container
  const getRocketStyle = () => {
    const itemCount = timelineData.length
    const containerPadding = 40 // matches padding in Timeline.css
    const containerHeight = 500 - (containerPadding * 2) // timeline-wrapper height minus padding

    // Calculate position within the padded area
    const positionInItems = rocketIndex / (itemCount - 1)
    const pixelOffset = containerPadding + (positionInItems * containerHeight)

    return {
      top: `${pixelOffset}px`,
    }
  }

  // Show initial card on mount (start from bottom)
  useEffect(() => {
    setActiveIndex(timelineData.length - 1)
  }, [])

  return (
    <section id="experience" className="timeline-section">
      <h2 className="section-title">Experience</h2>
      <div className="timeline-wrapper">
        <div className="timeline-container" ref={timelineRef}>
          <div className="timeline-line">
            <div
              className="timeline-rocket"
              style={getRocketStyle()}
            >
              <svg
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="rocket-icon"
              >
                <path
                  d="M12 2C12 2 8 6 8 10C8 12 9 14 10 15L9 19L12 17L15 19L14 15C15 14 16 12 16 10C16 6 12 2 12 2Z"
                  fill="currentColor"
                />
                <circle cx="12" cy="9" r="2" fill="var(--bg-primary)" />
                <path
                  d="M8 10C6 11 5 13 5 13L8 12"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                />
                <path
                  d="M16 10C18 11 19 13 19 13L16 12"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                />
              </svg>
              <div className="rocket-flame"></div>
            </div>
          </div>
          <div className="timeline-items">
            {timelineData.map((item, index) => (
              <div
                key={item.year}
                className="timeline-item"
              >
                <TimelineDot
                  isActive={rocketIndex === index}
                  year={item.year}
                  company={item.company}
                  onMouseEnter={() => handleMouseEnter(index)}
                  onMouseLeave={handleMouseLeave}
                  onFocus={() => handleMouseEnter(index)}
                  onBlur={handleMouseLeave}
                />
              </div>
            ))}
          </div>
        </div>
        <div className="timeline-detail">
          {activeIndex !== null && (
            <TimelineCard item={timelineData[activeIndex]} position="right" />
          )}
        </div>
      </div>
    </section>
  )
}
