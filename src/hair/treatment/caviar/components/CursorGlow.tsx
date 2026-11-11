import { useEffect, useRef } from "react";

/** soft rose-gold aura that trails the pointer on desktop */
export default function CursorGlow() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!window.matchMedia("(pointer: fine)").matches) return;
    let x = window.innerWidth / 2;
    let y = window.innerHeight / 2;
    let tx = x;
    let ty = y;
    let raf = 0;

    const move = (e: PointerEvent) => {
      tx = e.clientX;
      ty = e.clientY;
    };
    const loop = () => {
      x += (tx - x) * 0.075;
      y += (ty - y) * 0.075;
      if (ref.current) {
        ref.current.style.transform = `translate(${x - 250}px, ${y - 250}px)`;
      }
      raf = requestAnimationFrame(loop);
    };

    window.addEventListener("pointermove", move, { passive: true });
    raf = requestAnimationFrame(loop);
    return () => {
      window.removeEventListener("pointermove", move);
      cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <div
      ref={ref}
      aria-hidden="true"
      className="pointer-events-none fixed left-0 top-0 z-[4] hidden h-[500px] w-[500px] rounded-full opacity-50 mix-blend-multiply md:block"
      style={{
        background:
          "radial-gradient(circle, rgba(236,192,180,0.4), rgba(238,191,202,0.22) 42%, transparent 68%)",
      }}
    />
  );
}
