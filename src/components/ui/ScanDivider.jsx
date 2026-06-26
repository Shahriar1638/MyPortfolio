export function ScanDivider({ delay = '0s' }) {
  return (
    <div className="w-full h-px bg-(--color-ink) bg-opacity-15 relative overflow-hidden my-4 z-10">
      <div 
        className="scan-sweep"
        style={{ '--scan-delay': delay }}
      />
    </div>
  );
}
