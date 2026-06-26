export function StatusChip({ status }) {
  return (
    <span className="font-mono text-[10px] tracking-[0.1em] flex items-center gap-1.5 text-(--color-ink-secondary) uppercase">
      <span style={{
        width: 6, height: 6, borderRadius: '50%', display: 'inline-block',
        background: status === 'live' ? 'var(--color-accent)' : 'var(--color-ink-muted)',
      }} />
      {status}
    </span>
  );
}
