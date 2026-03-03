import React, { useEffect, useState } from "react";

export default function CursorGlow() {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const move = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", move);
    return () => window.removeEventListener("mousemove", move);
  }, []);

  return (
    <div
      className="fixed pointer-events-none z-[9999] w-40 h-40 rounded-full blur-3xl opacity-40 transition-transform duration-75 ease-out"
      style={{
        left: position.x - 80,
        top: position.y - 80,
        background: "radial-gradient(circle, #facc15, transparent)"
      }}
    />
  );
}
