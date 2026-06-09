"use client";

import { useEffect, useState } from "react";

export default function LiveClock() {
  const [time, setTime] = useState("");

  useEffect(() => {
    const updateClock = () => {
      const now = new Date();

      setTime(
        now.toLocaleTimeString([], {
          hour: "2-digit",
          minute: "2-digit",
          second: "2-digit",
          hour12: false,
        })
      );
    };

    updateClock();

    const interval = setInterval(
      updateClock,
      1000
    );

    return () => clearInterval(interval);
  }, []);

  return (
    <div
      className="
        absolute
        top-16
        left-1/2
        -translate-x-1/2

        z-20

        px-4
        py-2

        rounded-md

        bg-black/30
        backdrop-blur-sm

        text-cyan-100
        text-4xl
        font-mono
        font-bold

        tracking-[0.15em]
      "
    >
      {time}
    </div>
  );
}