import { useEffect, useRef } from 'react';

export function CursorCrosshair() {
  const cursorRef = useRef(null);
  const mouse = useRef({ x: 0, y: 0 });
  const pos = useRef({ x: 0, y: 0 });
  const raf = useRef(0);

  useEffect(() => {
    // Determine if it is a touch device early
    const isTouch = window.matchMedia('(pointer: coarse)').matches;
    if (isTouch) return;

    const onMove = (e) => {
      mouse.current = { x: e.clientX, y: e.clientY };
    };

    const animate = () => {
      // Lerp for smooth lag
      pos.current.x += (mouse.current.x - pos.current.x) * 0.12;
      pos.current.y += (mouse.current.y - pos.current.y) * 0.12;

      if (cursorRef.current) {
        cursorRef.current.style.transform =
          `translate(${pos.current.x}px, ${pos.current.y}px)`;
      }
      raf.current = requestAnimationFrame(animate);
    };

    window.addEventListener('mousemove', onMove);
    raf.current = requestAnimationFrame(animate);

    // Expand on interactive hover
    const expand = () => cursorRef.current?.classList.add('scale-150');
    const contract = () => cursorRef.current?.classList.remove('scale-150');

    // Polling for elements to be present or attach global event listeners
    const onMouseOver = (e) => {
      let target = e.target;
      while (target && target !== document.documentElement) {
        if (target.tagName === 'A' || target.tagName === 'BUTTON' || target.getAttribute('data-cursor-expand')) {
          expand();
          return;
        }
        target = target.parentNode;
      }
      contract();
    };

    document.addEventListener('mouseover', onMouseOver);

    return () => {
      window.removeEventListener('mousemove', onMove);
      document.removeEventListener('mouseover', onMouseOver);
      cancelAnimationFrame(raf.current);
    };
  }, []);

  return (
    <div
      ref={cursorRef}
      className="fixed top-0 left-0 pointer-events-none z-[9999] transition-transform duration-200 ease-out"
      aria-hidden="true"
      style={{ marginLeft: '-16px', marginTop: '-16px' }}
    >
      {/* Outer ring */}
      <div className="absolute top-0 left-0 w-8 h-8 border border-(--color-accent) rounded-none" />
      {/* Dot */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-1 h-1 bg-(--color-accent)" />
      
      {/* Cross lines */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 h-2.5 w-[1px] bg-(--color-accent) opacity-60" />
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 h-2.5 w-[1px] bg-(--color-accent) opacity-60" />
      
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-2.5 h-[1px] bg-(--color-accent) opacity-60" />
      <div className="absolute top-1/2 right-0 -translate-y-1/2 w-2.5 h-[1px] bg-(--color-accent) opacity-60" />
    </div>
  );
}
