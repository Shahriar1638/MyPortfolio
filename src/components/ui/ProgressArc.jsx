import { useEffect, useRef, useState } from 'react';

export function ProgressArc({ progress = 0.75, size = 80 }) {
  const ref = useRef(null);
  const [active, setActive] = useState(false);
  const r = (size / 2) - 4;
  const circumference = 2 * Math.PI * r;

  useEffect(() => {
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) { setActive(true); obs.disconnect(); } },
      { threshold: 0.5 }
    );
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);

  return (
    <svg viewBox={`0 0 ${size} ${size}`} width={size} height={size} aria-hidden="true">
      <circle
        cx={size/2} cy={size/2} r={r}
        fill="none" stroke="var(--color-border)" strokeWidth={1.5}
      />
      <circle
        ref={ref}
        cx={size/2} cy={size/2} r={r}
        fill="none" stroke="var(--color-accent)" strokeWidth={1.5}
        strokeLinecap="square"
        strokeDasharray={circumference}
        strokeDashoffset={active ? circumference * (1 - progress) : circumference}
        transform={`rotate(-90, ${size/2}, ${size/2})`}
        style={{ transition: 'stroke-dashoffset 1.4s cubic-bezier(0.77,0,0.175,1)' }}
      />
    </svg>
  );
}
