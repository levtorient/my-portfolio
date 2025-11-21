import { useState, useEffect, useRef } from 'react';
import { FeedbackItem } from './types';

interface FeedbackAvatarProps {
  item: FeedbackItem;
  index: number;
  isActive: boolean;
  onActivate: () => void;
  onTypingComplete: () => void;
}

export default function FeedbackAvatar({
  item,
  index,
  isActive,
  onActivate,
  onTypingComplete,
}: FeedbackAvatarProps) {
  const [displayedText, setDisplayedText] = useState('');
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);

  useEffect(() => {
    if (!isActive) {
      setDisplayedText('');
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
        intervalRef.current = null;
      }
      return;
    }

    let currentIndex = 0;
    const text = item.feedback;
    const typingSpeed = 30;

    intervalRef.current = setInterval(() => {
      if (currentIndex < text.length) {
        setDisplayedText(text.slice(0, currentIndex + 1));
        currentIndex++;
      } else {
        if (intervalRef.current) {
          clearInterval(intervalRef.current);
          intervalRef.current = null;
        }
        onTypingComplete();
      }
    }, typingSpeed);

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
        intervalRef.current = null;
      }
    };
  }, [isActive, item.feedback, onTypingComplete]);

  return (
    <div
      className="feedback-avatar-wrapper"
      style={{
        left: `${item.position.left}%`,
        top: `${item.position.top}%`,
        animationDelay: `${index * 0.5}s`,
      }}
      onMouseEnter={onActivate}
    >
      {isActive && (
        <div className="speech-bubble bubble-right">
          <div className="bubble-header">
            <span className="bubble-name">{item.name}</span>
            <span className="bubble-role">{item.role}</span>
          </div>
          <p className="bubble-text">
            "{displayedText}"
            {displayedText.length < item.feedback.length && (
              <span className="typing-cursor">|</span>
            )}
          </p>
        </div>
      )}

      <div
        className={`feedback-avatar ${isActive ? 'active' : ''}`}
        aria-label={`Feedback from ${item.name}`}
      >
        <span className="avatar-emoji">{item.avatar}</span>
      </div>
    </div>
  );
}
