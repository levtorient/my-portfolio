import { FeedbackItem } from './types'

interface FeedbackAvatarProps {
  item: FeedbackItem
  index: number
  isActive: boolean
  onMouseEnter: () => void
  onMouseLeave: () => void
  onClick: () => void
}

export default function FeedbackAvatar({
  item,
  index,
  isActive,
  onMouseEnter,
  onMouseLeave,
  onClick,
}: FeedbackAvatarProps) {
  return (
    <div
      className="feedback-avatar-wrapper"
      style={{
        left: `${item.position.left}%`,
        top: `${item.position.top}%`,
        animationDelay: `${index * 0.5}s`,
      }}
    >
      <button
        className={`feedback-avatar ${isActive ? 'active' : ''}`}
        onMouseEnter={onMouseEnter}
        onMouseLeave={onMouseLeave}
        onClick={onClick}
        aria-label={`View feedback from ${item.name}`}
      >
        <span className="avatar-emoji">{item.avatar}</span>
      </button>

      {isActive && (
        <div className="feedback-card">
          <h3>{item.name}</h3>
          <p className="role">{item.role}</p>
          <blockquote>"{item.feedback}"</blockquote>
        </div>
      )}
    </div>
  )
}
