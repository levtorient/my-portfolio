import { useState } from 'react'
import { feedbackData } from './data'
import FeedbackAvatar from './FeedbackAvatar'
import './Feedback.css'

export default function Feedback() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null)

  return (
    <section id="feedback" className="feedback-section">
      <h2 className="section-title">Colleague Feedback</h2>
      <div className="feedback-container">
        {feedbackData.map((item, index) => (
          <FeedbackAvatar
            key={item.name}
            item={item}
            index={index}
            isActive={activeIndex === index}
            onMouseEnter={() => setActiveIndex(index)}
            onMouseLeave={() => setActiveIndex(null)}
            onClick={() => setActiveIndex(activeIndex === index ? null : index)}
          />
        ))}
      </div>
    </section>
  )
}
