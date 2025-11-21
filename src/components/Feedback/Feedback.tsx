import { useState, useRef, useCallback, useEffect } from 'react';
import { feedbackData, dummyAvatars, dummyTexts } from './data';
import FeedbackAvatar from './FeedbackAvatar';
import './Feedback.css';

export default function Feedback() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [dummyTextIndices, setDummyTextIndices] = useState<number[]>(() =>
    dummyAvatars.map(() => Math.floor(Math.random() * dummyTexts.length))
  );
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    const interval = setInterval(() => {
      setDummyTextIndices((prev) =>
        prev.map(() => Math.floor(Math.random() * dummyTexts.length))
      );
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  const handleTypingComplete = useCallback(() => {
    timeoutRef.current = setTimeout(() => {
      setActiveIndex((prev) => (prev + 1) % feedbackData.length);
    }, 1000);
  }, []);

  const handleActivate = (index: number) => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
      timeoutRef.current = null;
    }
    setActiveIndex(index);
  };

  return (
    <section id="feedback" className="feedback-section">
      <h2 className="section-title">Colleague Feedback</h2>
      <div className="feedback-container">
        {dummyAvatars.map((dummy, index) => (
          <div
            key={`dummy-${index}`}
            className="dummy-avatar-wrapper"
            style={{
              left: `${dummy.position.left}%`,
              top: `${dummy.position.top}%`,
              animationDelay: `${index * 0.3}s`,
            }}
          >
            <div className="dummy-bubble">
              {dummyTexts[dummyTextIndices[index]]}
            </div>
            <div className="dummy-avatar">
              <span className="avatar-emoji">{dummy.avatar}</span>
            </div>
          </div>
        ))}
        {feedbackData.map((item, index) => (
          <FeedbackAvatar
            key={item.name}
            item={item}
            index={index}
            isActive={activeIndex === index}
            onActivate={() => handleActivate(index)}
            onTypingComplete={handleTypingComplete}
          />
        ))}
      </div>
    </section>
  );
}
