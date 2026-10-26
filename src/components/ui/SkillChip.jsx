export function SkillChip({ label, size = "default" }) {
  const isFeatured = false; // Could pass via prop for accent coloring if needed

  // Outer span carries the border color + chamfer clip so the 1px edge
  // follows the 45-degree cuts (clip-path would slice a regular border).
  // Inner span carries the fill with the same clip, inset by p-px.
  return (
    <div
      className={`clip-chamfer-tech p-px transition-colors duration-200
                bg-(--color-border) hover:bg-(--color-ink)
                ${isFeatured ? "bg-(--color-accent)" : ""}`}
    >
      <div
        className={`clip-chamfer-tech font-mono uppercase whitespace-nowrap
                  bg-(--color-bg) text-(--color-ink-secondary)
                  hover:text-(--color-ink)
                  ${size === "sm" ? "px-2 py-1 text-[9px]" : "px-3 py-1.5 text-[11px]"}
                  ${isFeatured ? "bg-(--color-accent) text-(--color-on-accent)" : ""}`}
        style={{
          borderLeft: isFeatured ? "none" : "2px solid var(--color-ink)",
        }}
      >
        {label}
      </div>
    </div>
  );
}
