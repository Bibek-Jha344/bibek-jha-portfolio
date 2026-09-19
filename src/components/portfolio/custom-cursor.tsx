import { useEffect, useState } from "react";

export function CustomCursor() {
  const [position, setPosition] = useState({ x: -100, y: -100 });
  const [active, setActive] = useState(false);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (!window.matchMedia("(pointer: fine)").matches) return;

    const move = (event: PointerEvent) => {
      setPosition({ x: event.clientX, y: event.clientY });
      if (!visible) setVisible(true);
    };

    const over = (event: PointerEvent) => {
      const target = event.target as Element | null;
      setActive(Boolean(target?.closest("a, button, input, textarea, [role='button'], [tabindex='0']")));
    };

    const leave = () => setVisible(false);
    const enter = () => setVisible(true);

    window.addEventListener("pointermove", move);
    window.addEventListener("pointerover", over);
    document.addEventListener("mouseleave", leave);
    document.addEventListener("mouseenter", enter);

    return () => {
      window.removeEventListener("pointermove", move);
      window.removeEventListener("pointerover", over);
      document.removeEventListener("mouseleave", leave);
      document.removeEventListener("mouseenter", enter);
    };
  }, [visible]);

  if (!visible) return null;

  return (
    <>
      <div
        className={`custom-cursor ${active ? "is-active" : ""}`}
        style={{
          transform: `translate3d(${position.x - (active ? 22 : 11)}px, ${position.y - (active ? 22 : 11)}px, 0)`,
        }}
        aria-hidden="true"
      />
      <div
        className="pointer-events-none fixed top-0 left-0 z-[9999] h-1.5 w-1.5 rounded-full bg-emerald-400 shadow-[0_0_8px_#10b981]"
        style={{
          transform: `translate3d(${position.x - 3}px, ${position.y - 3}px, 0)`,
        }}
        aria-hidden="true"
      />
    </>
  );
}