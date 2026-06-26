import { useEffect, useRef } from "react";
import gsap from "gsap";
import { OrbitalRing } from "../OrbitalRing";

export function Hero() {
  const ref = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: "power2.out" } });

      // White scan wipe — not dark, matches light theme
      tl.fromTo(
        ".boot-wipe",
        {
          scaleY: 0,
          transformOrigin: "top center",
          backgroundColor: "#FFFFFF",
        },
        { scaleY: 1, duration: 0.4, ease: "none" },
      )
        .to(".boot-wipe", { opacity: 0, duration: 0.35, delay: 0.08 })

        // Sidebar slides in
        .fromTo(
          ".side-nav-inner",
          { x: -56, opacity: 0 },
          { x: 0, opacity: 1, duration: 0.4 },
          "-=0.2",
        )

        // Grid pattern background fades in
        .fromTo(
          ".hero-grid",
          { opacity: 0 },
          { opacity: 1, duration: 0.6 },
          "-=0.3",
        )

        // Ghost text
        .fromTo(
          ".hero-ghost",
          { opacity: 0 },
          { opacity: 1, duration: 0.5 },
          "-=0.3",
        )

        // System init typewriter
        .call(() =>
          typewriter(".hero-init", "// PORTFOLIO LOADED — v1.0", 25),
        )

        // Name letter flicker
        .call(() => letterFlicker(".hero-name"), [], "+=0.3")

        // Yellow underline under name (draws in)
        .fromTo(
          ".hero-name-line",
          { scaleX: 0, transformOrigin: "left" },
          { scaleX: 1, duration: 0.5, ease: "power2.inOut" },
          "-=0.2",
        )

        // Subtitle wipe
        .fromTo(
          ".hero-subtitle",
          { clipPath: "inset(0 100% 0 0)" },
          { clipPath: "inset(0 0% 0 0)", duration: 0.6, ease: "power2.out" },
          "-=0.4",
        )

        // Data row + CTA fade up
        .fromTo(
          [".hero-data", ".hero-cta"],
          { opacity: 0, y: 12 },
          { opacity: 1, y: 0, duration: 0.4, stagger: 0.1 },
          "-=0.3",
        );
    }, ref);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="hero"
      ref={ref}
      className="relative min-h-[100dvh] bg-(--color-bg) grid-pattern flex items-center"
    >
      {/* Boot wipe overlay */}
      <div className="boot-wipe fixed inset-0 z-[100] pointer-events-none" />

      {/* Ghost text */}
      <div
        className="hero-ghost absolute right-[10%] top-1/2 -translate-y-1/2
                      overflow-hidden pointer-events-none select-none"
        aria-hidden="true"
      >
        <span
          className="font-display font-bold text-[80px] md:text-[140px] leading-none
                         tracking-[-0.04em] uppercase"
          style={{ color: "rgba(49,55,57,0.05)" }}
        >
          DEVELOPER
        </span>
      </div>

      <div className="hero-grid absolute inset-0 dot-pattern pointer-events-none" />

      {/* Content */}
      <div className="relative z-10 max-w-screen-xl mx-auto px-6 md:px-12 py-24 w-full">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
          <div className="md:col-span-12 lg:col-span-7">
            {/* Init text */}
            <p
              className="hero-init font-mono text-[11px] tracking-[0.1em]
                          text-(--color-ink-muted) mb-6 blink h-5"
            />

            {/* Name */}
            <h1
              className="hero-name font-display font-bold text-5xl md:text-6xl lg:text-[80px]
                           leading-none tracking-[-0.02em] uppercase text-(--color-ink) mb-0"
            >
              MD SHAHRIAR
              <br />
              HOSSAIN
            </h1>

            {/* Yellow underline under name */}
            <div className="hero-name-line h-[3px] bg-(--color-accent) w-full mb-4 mt-4" />

            {/* Subtitle */}
            <p
              className="hero-subtitle font-display font-light text-[15px]
                          text-(--color-ink-secondary) mb-2"
            >
              Software Engineer | Backend • Full-Stack • Database
            </p>

            {/* Coordinate */}
            <p className="font-mono text-[11px] text-(--color-ink-muted) mb-8">
              [ 23'48'25"N, 90°22'06"E — DHAKA, BD ]
            </p>

            {/* Data row */}
            <div
              className="hero-data flex flex-wrap md:flex-nowrap items-center gap-0 mb-10 border border-(--color-border)
                            w-fit divide-y md:divide-y-0 md:divide-x divide-(--color-border) bg-(--color-bg)"
            >
              {[
                ["GRAD (EXPECTED)", "JUN 2026"],
                ["MAJOR", "C.S."],
                ["LOCATION", "DHAKA"],
              ].map(([k, v]) => (
                <div key={k} className="px-6 py-2 w-full md:w-auto">
                  <span
                    className="font-mono text-[9px] tracking-[0.2em] text-(--color-ink-muted)
                                   uppercase block"
                  >
                    {k}
                  </span>
                  <span className="font-display font-medium text-[13px] text-(--color-ink)">
                    {v}
                  </span>
                </div>
              ))}
            </div>

            {/* CTA */}
            <a
              href="#projects"
              className="hero-cta inline-flex items-center gap-3 px-6 py-3
                          bg-(--color-ink) text-white font-mono text-[11px] tracking-[0.15em]
                          uppercase border border-(--color-ink) outline-none
                          hover:bg-(--color-accent) hover:text-(--color-on-accent) hover:border-(--color-accent)
                          transition-colors duration-200"
            >
              // VIEW PROJECTS →
            </a>
          </div>

          {/* Right decorative column */}
          <div
            className="lg:col-span-5 relative hidden lg:flex flex-col items-end
                          justify-center gap-8"
            aria-hidden="true"
          >
            <OrbitalRing size={240} color="#313739" opacity={0.12} />
            <span
              className="font-mono text-[10px] tracking-[0.2em] text-(--color-ink-muted) uppercase"
              style={{
                writingMode: "vertical-rl",
                transform: "rotate(180deg)",
              }}
            >
              PORTFOLIO_2025
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}

function typewriter(selector, text, speed = 25) {
  const els = document.querySelectorAll(selector);
  els.forEach((el) => {
    el.textContent = "";
    let i = 0;
    const id = setInterval(() => {
      el.textContent += text[i++];
      if (i >= text.length) clearInterval(id);
    }, speed);
  });
}

function letterFlicker(selector) {
  const els = document.querySelectorAll(selector);
  els.forEach((el) => {
    const chars = el.textContent.trim().split("");
    el.innerHTML = chars
      .map(
        (c) =>
          `<span style="opacity:0;display:inline-block">${c === " " ? "&nbsp;" : c}</span>`,
      )
      .join("");
    gsap.to(`${selector} span`, {
      opacity: 1,
      duration: 0.06,
      stagger: { each: 0.045, ease: "none" },
      ease: "steps(2)",
    });
  });
}
