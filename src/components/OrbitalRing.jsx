export function OrbitalRing({
  size = 300,
  color = '#F8F546',
  opacity = 0.12,
}) {
  const cx = size / 2;
  const cy = size / 2;

  return (
    <svg
      className="orbital-svg"
      viewBox={`0 0 ${size} ${size}`}
      width={size} height={size}
      aria-hidden="true"
      style={{ opacity }}
    >
      {/* Core planet */}
      <circle cx={cx} cy={cy} r={6} fill={color} />

      {/* Inner ring */}
      <ellipse cx={cx} cy={cy} rx={55} ry={20}
               fill="none" stroke={color} strokeWidth={1}
               transform={`rotate(-18, ${cx}, ${cy})`} />

      {/* Outer ring — dashed */}
      <ellipse cx={cx} cy={cy} rx={100} ry={36}
               fill="none" stroke={color} strokeWidth={0.5}
               strokeDasharray="5 10"
               transform={`rotate(-18, ${cx}, ${cy})`} />

      {/* Orbiting dot — animated via CSS .orbit-dot */}
      <circle
        className="orbit-dot"
        cx={cx + 55} cy={cy}
        r={3} fill={color}
      />
    </svg>
  );
}
