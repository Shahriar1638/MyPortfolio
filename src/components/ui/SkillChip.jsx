export function SkillChip({ label, size = "default" }) {
  const isFeatured = false; // Could pass via prop for accent coloring if needed

  return (
    <div
      className={`font-mono transition-colors duration-200 uppercase whitespace-nowrap
                border border-(--color-border) bg-(--color-bg) text-(--color-ink-secondary)
                hover:border-(--color-ink) hover:text-(--color-ink) border-l-[2px]
                ${size === "sm" ? "px-2 py-1 text-[9px]" : "px-3 py-1.5 text-[11px]"}
                ${isFeatured ? "bg-(--color-accent) text-(--color-on-accent) border-none" : ""}`}
      style={{
        borderLeftColor: isFeatured ? "transparent" : "var(--color-ink)",
      }}
    >
      {label}
    </div>
  );
}
