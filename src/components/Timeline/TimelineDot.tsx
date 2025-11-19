interface TimelineDotProps {
  isActive: boolean;
  year: string;
  company: string;
  onMouseEnter: (e: React.MouseEvent<HTMLButtonElement>) => void;
  onMouseLeave: () => void;
  onFocus: (e: React.FocusEvent<HTMLButtonElement>) => void;
  onBlur: () => void;
}

export default function TimelineDot({
  isActive,
  year,
  company,
  onMouseEnter,
  onMouseLeave,
  onFocus,
  onBlur,
}: TimelineDotProps) {
  return (
    <>
      <button
        className={`timeline-dot ${isActive ? 'active' : ''}`}
        onMouseEnter={onMouseEnter}
        onMouseLeave={onMouseLeave}
        onFocus={onFocus}
        onBlur={onBlur}
        aria-label={`View experience at ${company}`}
      >
        <span className="dot-inner"></span>
      </button>
      <span className="timeline-year">{year}</span>
    </>
  );
}
