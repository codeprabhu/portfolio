"use client";

import Image from "next/image";

export default function SideBar() {
  return (
      <div
  className="
    fixed

    left-0
    top-0

    h-screen
    w-20

    bg-[#11111b]/75
    backdrop-blur-xl

    border-r
    border-[#313244]

    z-40

    hidden
    lg:flex

    flex-col
    items-center
    justify-center

    gap-8
  "
>
      {/* Vertical Line */}
      <div
        className="
          h-32
          w-px

          mt-2

          bg-gradient-to-b
          from-[#cba6f7]
          to-[#6c7086]
        "
      />
    
      {/* GitHub */}
      <a
        href="https://github.com/codeprabhu"
        target="_blank"
        rel="noopener noreferrer"
      >
        <Image
          src="/github.png"
          alt="GitHub"
          width={24}
          height={24}
          className="
            brightness-[3]
  opacity-90

  hover:opacity-100
  hover:scale-110

  hover:drop-shadow-[0_0_10px_rgba(203,166,247,0.8)]

  transition-all
  duration-300
          "
        />
      </a>

      {/* LinkedIn */}
      <a
        href="https://linkedin.com/in/shrivathsp"
        target="_blank"
        rel="noopener noreferrer"
      >
        <Image
          src="/linkedin.png"
          alt="LinkedIn"
          width={24}
          height={24}
          className="
            brightness-[3]
  opacity-90

  hover:opacity-100
  hover:scale-110

  hover:drop-shadow-[0_0_10px_rgba(203,166,247,0.8)]

  transition-all
  duration-300
          "
        />
      </a>

      {/* Itch.io */}
      <a
        href="https://swiftblaze69.itch.io"
        target="_blank"
        rel="noopener noreferrer"
      >
        <Image
          src="/itch.png"
          alt="Itch.io"
          width={24}
          height={24}
          className="
            opacity-60
brightness-[3]
  opacity-90

  hover:opacity-100
  hover:scale-110

  hover:drop-shadow-[0_0_10px_rgba(203,166,247,0.8)]

  transition-all
  duration-300
          "
        />
      </a>

      {/* Resume */}
      <a
        href="/resume.pdf"
        target="_blank"
        rel="noopener noreferrer"
      >
        <Image
          src="/resume.png"
          alt="Resume"
          width={24}
          height={24}
          className="
            brightness-[3]
  opacity-90

  hover:opacity-100
  hover:scale-110

  hover:drop-shadow-[0_0_10px_rgba(203,166,247,0.8)]

  transition-all
  duration-300
          "
        />
      </a>

      {/* Mail */}
      <a
        href="mailto:shrivathssprabhu@gmail.com"
      >
        <Image
          src="/mail.png"
          alt="Email"
          width={24}
          height={24}
          className="
            brightness-[3]
  opacity-90

  hover:opacity-100
  hover:scale-110

  hover:drop-shadow-[0_0_10px_rgba(203,166,247,0.8)]

  transition-all
  duration-300
          "
        />
      </a>

      {/* Vertical Line */}
      <div
        className="
          h-32
          w-px

          mt-2

          bg-gradient-to-b
          from-[#cba6f7]
          to-[#6c7086]
        "
      />
    </div>
  );
}