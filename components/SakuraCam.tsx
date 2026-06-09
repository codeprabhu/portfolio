"use client";

import PanoramaViewer from "./PanoramaViewer";
import LiveClock from "./LiveClock";

export default function SakuraCam({
  open,
}: {
  open: boolean;
}) {
  return (
      <div
  className={`
    fixed
    right-6
    top-1/2
    -translate-y-1/2

    h-[92vh]
    w-[30vw]

    overflow-hidden
    rounded-lg

    border
    border-[#45475a]

    bg-[#11111b]

    shadow-[0_0_40px_rgba(137,180,250,0.15)]

    z-50

    transition-all
    duration-300

    ${
      open
        ? "opacity-100 scale-100"
        : "opacity-0 scale-95 pointer-events-none"
    }
  `}
>
      {/* Title Bar */}
      <div
        className="
          absolute
          top-0
          left-0
          right-0

          h-10

          flex
          items-center
          justify-between

          px-3

          bg-black/60
          backdrop-blur-md

          border-b
          border-[#45475a]

          z-30
        "
      >

        <span
          className="
            text-xs
            text-[#a6e3a1]
            font-mono
            tracking-wider
          "
        >
          ● LIVE
        </span>
      </div>

      {/* Panorama */}
      <div
        className="
          absolute
          inset-0

          brightness-125
          contrast-110
          saturate-115
        "
      >
        <PanoramaViewer />
      </div>

      {/* Live Clock */}
      <LiveClock />

      {/* Glass Overlay */}
      <div
        className="
          absolute
          inset-0

          pointer-events-none

          opacity-10

          z-10
        "
        style={{
          backgroundImage: "url('/glass.png')",
          backgroundRepeat: "repeat",
          backgroundSize: "50% 33.333%",
        }}
      />

      {/* Light Tint */}
      <div
        className="
          absolute
          inset-0

          bg-black/5

          pointer-events-none
        "
      />

      {/* Top HUD */}
      <div
        className="
          absolute
          top-14
          left-4

          text-xs
          font-mono

          text-cyan-100/70

          z-20
        "
      >
        SIGNAL: GOOD
      </div>

      {/* Top Right HUD */}
      <div
        className="
          absolute
          top-14
          right-4

          text-xs
          font-mono

          text-cyan-100/70

          z-20
        "
      >
        FPS: 60
      </div>

      {/* Bottom Left */}
      <div
        className="
          absolute
          bottom-4
          left-4

          text-xs
          font-mono

          text-cyan-100/70
          tracking-wider

          z-20
        "
      >
        CHERRY GROVE
      </div>

      {/* Bottom Center */}
      <div
        className="
          absolute
          bottom-4
          left-1/2
          -translate-x-1/2

          text-xs
          font-mono

          text-cyan-100/70
          tracking-wider

          z-20
        "
      >
        CAM-01
      </div>

      {/* Bottom Right */}
      <div
        className="
          absolute
          bottom-4
          right-4

          text-xs
          font-mono

          text-cyan-100/70
          tracking-wider

          z-20
        "
      >
        CLEAR
      </div>
    </div>
  );
}