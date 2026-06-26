export function CornerBrackets({ color = 'var(--color-ink)', size = 12, weight = 2, isVisible }) {
  const common = `absolute w-[${size}px] h-[${size}px] transition-all duration-300 ease-out z-20 pointer-events-none`;
  const thickness = `${weight}px`;

  return (
    <>
      {/* Top Left */}
      <div
        className={common}
        style={{
          top: isVisible ? '0px' : '-4px',
          left: isVisible ? '0px' : '-4px',
          borderTop: `${thickness} solid ${color}`,
          borderLeft: `${thickness} solid ${color}`,
          opacity: isVisible ? 1 : 0
        }}
      />
      {/* Top Right */}
      <div
        className={common}
        style={{
          top: isVisible ? '0px' : '-4px',
          right: isVisible ? '0px' : '-4px',
          borderTop: `${thickness} solid ${color}`,
          borderRight: `${thickness} solid ${color}`,
          opacity: isVisible ? 1 : 0
        }}
      />
      {/* Bottom Left */}
      <div
        className={common}
        style={{
          bottom: isVisible ? '0px' : '-4px',
          left: isVisible ? '0px' : '-4px',
          borderBottom: `${thickness} solid ${color}`,
          borderLeft: `${thickness} solid ${color}`,
          opacity: isVisible ? 1 : 0
        }}
      />
      {/* Bottom Right */}
      <div
        className={common}
        style={{
          bottom: isVisible ? '0px' : '-4px',
          right: isVisible ? '0px' : '-4px',
          borderBottom: `${thickness} solid ${color}`,
          borderRight: `${thickness} solid ${color}`,
          opacity: isVisible ? 1 : 0
        }}
      />
    </>
  );
}
