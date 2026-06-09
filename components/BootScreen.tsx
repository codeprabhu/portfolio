"use client";

import { useEffect, useRef, useState } from "react";

const messages = [
  "Mounting filesystems...",
  "Loading Catppuccin theme...",
  "Starting sakura particle daemon...",
  "Compiling questionable C++ code...",
  "Feeding campus cats...",
  "Pretending to understand pointers...",
  "Walking dog...",
  "Losing ELO in CS2...",
  "Reinstalling Arch for no reason...",
  "Opening 37 browser tabs...",
  "Solving Codeforces at 2 AM...",
  "Ignoring sleep schedule...",
  "Making coffee...",
  "Debugging code that worked yesterday...",
  "Touching grass...",
  "Retrying touch grass...",
  "Installing yet another Linux distro...",
  "Breaking Arch...",
  "Fixing Arch...",
  "Breaking Arch again...",
  "Recovering from snapshots...",
  "Starting social interaction daemon...",
  "Initializing SakuraCam...",
  "Connecting to cyberspace...",
  "Optimizing website for the 14th time...",
  "Watching compiler errors multiply...",
  "Loading Minecraft panorama...",
  "Generating unnecessary abstractions...",
  "Preparing terminal environment...",
  "Checking StackOverflow...",
  "Opening 97 browser tabs...",
  "Accidentally deleting production...",
  "Restoring from backup...",
  "Forgetting semicolon...",
  "Remembering semicolon...",
  "Attempting to touch grass...",
  "Loading caffeine drivers...",
  "Starting procrastination service...",
  "Deploying vibes...",
];

type LogEntry = {
  status: string;
  message: string;
  timestamp: string;
};

export default function BootScreen({
  onComplete,
}: {
  onComplete: () => void;
}) {
  const [logs, setLogs] = useState<LogEntry[]>([]);
  const [fadeOut, setFadeOut] = useState(false);

  const counter = useRef(0);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const interval = setInterval(() => {
      counter.current++;

      const timestamp = (
        counter.current * 0.013
      )
        .toFixed(3)
        .padStart(7);

      const status =
        Math.random() < 0.96
          ? "[  OK  ]"
          : "[FAILED]";

      const message =
        messages[
          Math.floor(
            Math.random() * messages.length
          )
        ];

      setLogs((prev) => [
        ...prev,
        {
          status,
          message,
          timestamp,
        },
      ]);
    }, 5);

    const finishTimer = setTimeout(() => {
      clearInterval(interval);

      const timestamp = (
        counter.current * 0.013
      )
        .toFixed(3)
        .padStart(7);

      setLogs((prev) => [
        ...prev,
        {
          status: "[  OK  ]",
          message:
            "Reached Graphical Interface.",
          timestamp,
        },
        {
          status: "[  OK  ]",
          message: "Welcome, Shrivaths.",
          timestamp,
        },
        {
          status: "[  OK  ]",
          message:
            "Starting portfolio environment.",
          timestamp,
        },
      ]);

      setTimeout(() => {
        setFadeOut(true);

        setTimeout(() => {
          onComplete();
        }, 500);
      }, 500);
    }, 2000);

    return () => {
      clearInterval(interval);
      clearTimeout(finishTimer);
    };
  }, [onComplete]);

  useEffect(() => {
    if (!scrollRef.current) return;

    scrollRef.current.scrollTop =
      scrollRef.current.scrollHeight;
  }, [logs]);

  return (
    <div
      className={`
        fixed inset-0
        bg-[#11111b]
        z-[9999]
        transition-opacity
        duration-500
        ${
          fadeOut
            ? "opacity-0"
            : "opacity-100"
        }
      `}
    >
      <div
        ref={scrollRef}
        className="
          h-full
          overflow-y-auto
          p-8
          text-xl
          leading-7
          font-mono
        "
        style={{
          scrollbarWidth: "none",
          msOverflowStyle: "none",
        }}
      >
        {logs.map((log, i) => (
          <div
            key={i}
            className="whitespace-nowrap"
          >
            <span className="text-[#585b70]">
              [{log.timestamp}]
            </span>

            {" "}

            <span
              className={
                log.status === "[FAILED]"
                  ? "text-[#f38ba8]"
                  : "text-[#a6e3a1]"
              }
            >
              {log.status}
            </span>

            {" "}

            <span className="text-[#cdd6f4]">
              {log.message}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}