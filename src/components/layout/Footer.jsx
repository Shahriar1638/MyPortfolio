export function Footer() {
  return (
    <footer className="mt-32 w-full border-t border-(--color-border) bg-(--color-bg-alt)">
       <div className="max-w-screen-xl mx-auto px-6 lg:px-12 py-6 flex justify-between items-center">
          <p className="font-display font-light text-[12px] text-(--color-ink-muted)">
             MD SHAHRIAR HOSSAIN — {new Date().getFullYear()}
          </p>
          <p className="font-mono text-[10px] text-(--color-ink) tracking-widest uppercase">
              // BUILT WITH CARE <span className="blink" />
          </p>
       </div>
    </footer>
  );
}
