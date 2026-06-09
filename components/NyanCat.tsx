"use client";

import { useEffect, useState } from "react";
import type { CSSProperties } from "react";

export default function NyanCat() {
  const [active, setActive] = useState(false);
  const [spawnId, setSpawnId] = useState(0);

  const [cat, setCat] = useState({
    startX: -350,
    startY: 200,
    endX: 0,
    endY: 200,
    angle: 0,
  });

  useEffect(() => {
    const spawn = () => {
      const width = window.innerWidth;
      const height = window.innerHeight;

      // Always fly left -> right
      const sx = -350;
      const ex = width + 350;

      // Spawn somewhere in middle 80% of screen
      const sy =
        height * 0.1 +
        Math.random() * height * 0.8;

      // Small vertical variation
      const ey =
        sy +
        (Math.random() * 120 - 60);

      const angle =
        (Math.atan2(
          ey - sy,
          ex - sx
        ) *
          180) /
        Math.PI;

      setCat({
        startX: sx,
        startY: sy,
        endX: ex,
        endY: ey,
        angle,
      });

      setSpawnId((id) => id + 1);

      setActive(true);

      setTimeout(() => {
        setActive(false);
      }, 8000);
    };

    spawn();

    const interval = setInterval(() => {
      spawn();
    }, 15000);

    return () => clearInterval(interval);
  }, []);

  if (!active) return null;

  return (
    <div
      key={spawnId}
      className="nyan-fly"
      style={
        {
          left: cat.startX,
          top: cat.startY,
          "--endX": `${cat.endX - cat.startX}px`,
          "--endY": `${cat.endY - cat.startY}px`,
        } as CSSProperties
      }
    >
      <div
        className="nyan-sprite"
        style={{
          transform: `rotate(${cat.angle}deg)`,
        }}
      />
    </div>
  );
}