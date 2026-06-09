"use client";

import { useEffect, useState } from "react";
import SideBar from "@/components/SideBar";
import BootScreen from "@/components/BootScreen";
import SakuraCam from "@/components/SakuraCam";
import Image from "next/image";
import NyanCat from "@/components/NyanCat";
export default function Home() {
  const [booted, setBooted] = useState(() => {
    if (typeof window === "undefined") {
      return false;
    }

    return sessionStorage.getItem("booted") === "true";
  });

  const [cameraOpen, setCameraOpen] = useState(true);
  const [selectedExperience, setSelectedExperience] =
  useState("flairx");
  const [selectedProject, setSelectedProject] =
  useState("glitchhoppers");
  const [mobileCamMode, setMobileCamMode] =
  useState(false);
  const [isMobile, setIsMobile] =
  useState(false);

useEffect(() => {
  const checkMobile = () => {
    setIsMobile(window.innerWidth < 768);
  };

  checkMobile();

  window.addEventListener(
    "resize",
    checkMobile
  );

  return () =>
    window.removeEventListener(
      "resize",
      checkMobile
    );
}, []);
  useEffect(() => {
    if (!booted) return;
  const sections = Array.from(
    document.querySelectorAll<HTMLElement>(
      ".terminal-section"
    )
  );

  const updateActiveSection = () => {
    let closestSection:
      | HTMLElement
      | null = null;

    let closestDistance =
      Number.POSITIVE_INFINITY;

    sections.forEach((section) => {
      const rect =
        section.getBoundingClientRect();

      const sectionCenter =
        rect.top + rect.height / 2;

      const viewportCenter =
        window.innerHeight / 2;

      const distance = Math.abs(
        sectionCenter -
          viewportCenter
      );

      if (
        distance <
        closestDistance
      ) {
        closestDistance =
          distance;

        closestSection =
          section;
      }
    });

    sections.forEach((section) =>
      section.classList.remove(
        "active"
      )
    );

    if (closestSection !== null) {
      (closestSection as HTMLElement)
  .classList.add("active");
    }
  };

  updateActiveSection();

  window.addEventListener(
    "scroll",
    updateActiveSection
  );

  return () =>
    window.removeEventListener(
      "scroll",
      updateActiveSection,
    );
}, [booted]);

  if (!booted) {
    return (
      <BootScreen
        onComplete={() => {
          sessionStorage.setItem(
            "booted",
            "true"
          );

          setBooted(true);
        }}
      />
    );
  }

  return (
    <main className="min-h-screen overflow-x-hidden">
      {/* Cyberpunk Wallpaper */}
      <div
        className="fixed inset-0 -z-30"
        style={{
          backgroundImage: "url('/cyberpunk.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      />

      {/* Catppuccin Overlay */}
      <div
        className="
          fixed
          inset-0
          -z-20
          bg-[#11111b]/85
        "
      />

      {/* Ambient Glow */}
      <div
        className="
          fixed
          inset-0
          -z-10
          pointer-events-none
        "
        style={{
          background: `
            radial-gradient(
              circle at 20% 20%,
              rgba(203,166,247,0.12),
              transparent 35%
            ),
            radial-gradient(
              circle at 80% 70%,
              rgba(137,180,250,0.08),
              transparent 40%
            )
          `,
        }}
      />
      {/* Left Social Bar */}
      <SideBar />
      {/* Nyan Cat my goat*/}
      <NyanCat />
      {/* SakuraCam */}
      {(!isMobile) && (
  <SakuraCam open={cameraOpen} />
)}

      {/* Camera Toggle */}
      {!isMobile && (
  <button
    onClick={() =>
      setCameraOpen(!cameraOpen)
    }
    className="
      fixed
      bottom-6
      right-6
      z-[999]
      h-14
      w-14
      rounded-full
      bg-[#181825]
      border
      border-[#45475a]
      shadow-lg
      hover:scale-110
      transition
      flex
      items-center
      justify-center
    "
  >
    <Image
      src="/camera.png"
      alt="SakuraCam"
      width={28}
      height={28}
      className="
        brightness-110
        drop-shadow-[0_0_6px_rgba(203,166,247,0.5)]
      "
    />
  </button>
)}

      {/* Terminal */}
      {(!isMobile || !mobileCamMode) && (
      <div
        className="
          relative
          z-10
          ml-4 md:ml-28
          max-w-[95vw] md:max-w-[60vw]

          p-8

          text-[#cdd6f4]
          font-mono
        "
      >
        {/* Navigation */}
        <div
          className="
            sticky
            top-0

            z-30

            mb-24

            bg-[#11111b]/70
            backdrop-blur-md

            border-b
            border-[#313244]

            py-4

            flex
            gap-8
            flex-wrap

            text-[#89b4fa]
          "
        >
          <a href="#whoami">$ whoami</a>
<a href="#projects">$ projects</a>
<a href="#experience">$ journey</a>
<a href="#contact">$ contact</a>
        </div>

        <div className="space-y-64 pb-96">
          {/* WHOAMI */}
          <section
  id="whoami"
  className="terminal-section"
>
  <h2
    className="
      text-5xl
      mb-8
      text-[#89b4fa]
    "
  >
    $ cat about_me.txt
  </h2>

  <div
    className="
      text-xl
      leading-9
      whitespace-pre-line
      pl-8
    "
  >
{`Hey.

I'm Shrivaths.

I like making stuff.

Sometimes it's games.
Sometimes it's AI.
Sometimes it's a project that
should have taken two hours
but somehow became a two-week adventure.

Most days you'll find me:

> Writing code
> Playing around with Linux
> Solving programming problems
> Building things nobody asked for
> Losing track of time

Nothing too serious.
Just a guy having fun with computers.`}
  </div>
</section>

          {/* PROJECTS */}
          <section
            id="projects"
            className="terminal-section"
            >
            <h2
              className="
                text-5xl
                mb-8
                text-[#89b4fa]
              "
            >
              $ ls projects/
            </h2>
  <div
  className="
    grid
    grid-cols-1
    md:grid-cols-[260px_1fr]
    gap-6
    md:gap-12
  "
>
  {/* LEFT FILE LIST */}

  <div
    className="
      border-l
      border-[#313244]
      pl-4
      space-y-2
    "
  >
    <button
      onMouseEnter={() =>
        setSelectedProject("glitchhoppers")
      }
      className={`w-full text-left px-4 py-3 transition ${
        selectedProject === "glitchhoppers"
          ? "bg-[#1e1e2e] border-l-2 border-[#89b4fa] text-[#89b4fa]"
          : "text-[#a6adc8]"
      }`}
    >
      glitchhoppers.exe
    </button>

    <button
      onMouseEnter={() =>
        setSelectedProject("vision")
      }
      className={`w-full text-left px-4 py-3 transition ${
        selectedProject === "vision"
          ? "bg-[#1e1e2e] border-l-2 border-[#89b4fa] text-[#89b4fa]"
          : "text-[#a6adc8]"
      }`}
    >
      vision_pipeline.py
    </button>

    <button
      onMouseEnter={() =>
        setSelectedProject("finance")
      }
      className={`w-full text-left px-4 py-3 transition ${
        selectedProject === "finance"
          ? "bg-[#1e1e2e] border-l-2 border-[#89b4fa] text-[#89b4fa]"
          : "text-[#a6adc8]"
      }`}
    >
      smart_finance.jar
    </button>

    <button
      onMouseEnter={() =>
        setSelectedProject("hospital")
      }
      className={`w-full text-left px-4 py-3 transition ${
        selectedProject === "hospital"
          ? "bg-[#1e1e2e] border-l-2 border-[#89b4fa] text-[#89b4fa]"
          : "text-[#a6adc8]"
      }`}
    >
      hospital_system.sql
    </button>
  </div>
        </div>
  {/* RIGHT PREVIEW */}

  <div
  className="
    border
    border-[#313244]
    bg-[#11111b]/40
    p-6
    min-h-[350px]
  "
>
  <p className="text-[#89b4fa] mb-6">
    {`> open ${selectedProject}`}
  </p>

  {selectedProject === "glitchhoppers" && (
    <>
      <h3 className="text-3xl text-[#cdd6f4] mb-2">
        GlitchHoppers
      </h3>

      <p className="text-[#89b4fa] mb-6">
        2D Puzzle Platformer
      </p>

      <div className="space-y-4 text-xl leading-8">
        <p>
          ▸ Developed a 2D Unity platformer featuring dual-world switching.
        </p>

        <p>
          ▸ Implemented modular enemy AI, boss phases and hitbox combat.
        </p>

        <p>
          ▸ Designed and built 10+ puzzle-driven levels.
        </p>
      </div>
    </>
  )}

  {selectedProject === "vision" && (
    <>
      <h3 className="text-3xl text-[#cdd6f4] mb-2">
        Robust Vision Pipeline
      </h3>

      <p className="text-[#89b4fa] mb-6">
        Computer Vision Research
      </p>

      <div className="space-y-4 text-xl leading-8">
        <p>
          ▸ Built a pipeline for noisy-label learning.
        </p>

        <p>
          ▸ Implemented label-shift correction.
        </p>

        <p>
          ▸ Added test-time adaptation techniques.
        </p>
      </div>
    </>
  )}

  {selectedProject === "finance" && (
    <>
      <h3 className="text-3xl text-[#cdd6f4] mb-2">
        Smart Finance Planner
      </h3>

      <p className="text-[#89b4fa] mb-6">
        Full Stack Application
      </p>

      <div className="space-y-4 text-xl leading-8">
        <p>
          ▸ Credit card management and expense tracking.
        </p>

        <p>
          ▸ Spending analytics dashboard.
        </p>

        <p>
          ▸ Reward optimization recommendation engine.
        </p>
      </div>
    </>
  )}

  {selectedProject === "hospital" && (
    <>
      <h3 className="text-3xl text-[#cdd6f4] mb-2">
        Hospital Management System
      </h3>

      <p className="text-[#89b4fa] mb-6">
        Backend Development
      </p>

      <div className="space-y-4 text-xl leading-8">
        <p>
          ▸ Patient record management APIs.
        </p>

        <p>
          ▸ Appointment scheduling system.
        </p>

        <p>
          ▸ Spring Boot backend with SQL database.
        </p>
      </div>
    </>
  )}
</div>
            
          </section>

          {/* STUFF I'VE BEEN PART OF */}
          
<section
  id="experience"
  className="terminal-section"
>
  
  <h2
    className="
      text-5xl
      mb-12
      text-[#89b4fa]
    "
  >
    $ cat journey.txt
  </h2>

   <div
  className="
    grid
    grid-cols-1
    md:grid-cols-[260px_1fr]
    gap-6
    md:gap-12
  "
>
    <div
  className="
    flex
    md:block

    overflow-x-auto

    gap-2
    md:gap-0

    md:border-l
    border-[#313244]

    md:pl-4

    pb-2
  "
>
  <button
    onClick={() => setSelectedExperience("flairx")}
    className={`shrink-0 md:w-full text-left px-4 py-3 transition ${
      selectedExperience === "flairx"
        ? "bg-[#1e1e2e] border-l-2 border-[#89b4fa] text-[#89b4fa]"
        : "text-[#a6adc8]"
    }`}
  >
    FlairX Networks
  </button>

  <button
    onClick={() => setSelectedExperience("confluence")}
    className={`shrink-0 md:w-full text-left px-4 py-3 transition ${
      selectedExperience === "confluence"
        ? "bg-[#1e1e2e] border-l-2 border-[#89b4fa] text-[#89b4fa]"
        : "text-[#a6adc8]"
    }`}
  >
    Confluence Lab
  </button>

  <button
    onClick={() => setSelectedExperience("devsoc")}
    className={`shrink-0 md:w-full text-left px-4 py-3 transition ${
      selectedExperience === "devsoc"
        ? "bg-[#1e1e2e] border-l-2 border-[#89b4fa] text-[#89b4fa]"
        : "text-[#a6adc8]"
    }`}
  >
    Developers Society
  </button>

  <button
    onClick={() => setSelectedExperience("bitskrieg")}
    className={`shrink-0 md:w-full text-left px-4 py-3 transition ${
      selectedExperience === "bitskrieg"
        ? "bg-[#1e1e2e] border-l-2 border-[#89b4fa] text-[#89b4fa]"
        : "text-[#a6adc8]"
    }`}
  >
    BITSKrieg
  </button>
</div>

    <div>
  {selectedExperience === "flairx" && (
    <>
      <h3 className="text-3xl mb-2 text-[#cdd6f4]">
        Software Engineering Intern
        <span className="text-[#89b4fa]">
          {" "}@ FlairX Networks
        </span>
      </h3>

      <p className="text-[#a6adc8] mb-8">
        May 2026 — Jul 2026
      </p>

      <div className="space-y-4 text-xl leading-8">
        <p>▸ Developed full-stack applications using Flutter, Spring Boot, and PostgreSQL.</p>
        <p>▸ Contributed to finance and enterprise software solutions in a production environment.</p>
        <p>▸ Collaborated with engineers on backend APIs, database design, and application features.</p>
      </div>
    </>
  )}

  {selectedExperience === "confluence" && (
    <>
      <h3 className="text-3xl mb-2 text-[#cdd6f4]">
        Undergraduate Research Assistant
        <span className="text-[#89b4fa]">
          {" "}@ Confluence Lab
        </span>
      </h3>

      <p className="text-[#a6adc8] mb-8">
        Nov 2025 — Present
      </p>

      <div className="space-y-4 text-xl leading-8">
        <p>▸ Conducting research under Prof. Kunal Kurgaonkar on LLM-assisted RTL hardware generation.</p>
        <p>▸ Exploring automated generation of multi-module Verilog designs using large language models.</p>
        <p>▸ Evaluating design correctness, scalability, and hardware synthesis workflows.</p>
      </div>
    </>
  )}

  {selectedExperience === "devsoc" && (
    <>
      <h3 className="text-3xl mb-2 text-[#cdd6f4]">
        Core Member — Game Development Vertical
        <span className="text-[#89b4fa]">
          {" "}@ Developers Society
        </span>
      </h3>

      <p className="text-[#a6adc8] mb-8">
        Aug 2024 — Dec 2025
      </p>

      <div className="space-y-4 text-xl leading-8">
        <p>▸ Built 10+ games using Unity, including GlitchHoppers, a dual-world puzzle platformer.</p>
        <p>▸ Developed gameplay systems, enemy AI, boss mechanics, and modular game architectures.</p>
        <p>▸ Participated in multiple game jams, rapidly prototyping complete games under strict deadlines.</p>
      </div>
    </>
  )}

  {selectedExperience === "bitskrieg" && (
    <>
      <h3 className="text-3xl mb-2 text-[#cdd6f4]">
        Core Member
        <span className="text-[#89b4fa]">
          {" "}@ BITSkrieg
        </span>
      </h3>

      <p className="text-[#a6adc8] mb-8">
        Aug 2024 — Present
      </p>

      <div className="space-y-4 text-xl leading-8">
        <p>▸ Contributed to a world-ranked top CTF team, solving reverse engineering and cryptography challenges.</p>
        <p>▸ Authored cybersecurity challenges and participated in national and international CTF competitions.</p>
        <p>▸ Organized major cybersecurity events including BITSCTF, Vendetta, and Nullcon Goa.</p>
      </div>
    </>
  )}
</div>
  </div>
</section>

        {/* CONTACT */}
<section
  id="contact"
  className="terminal-section"
>
  <h2
    className="
      text-5xl
      mb-8
      text-[#89b4fa]
    "
  >
    $ cat contact.txt
  </h2>

  <div
    className="
      max-w-3xl
      bg-black/20
      border border-[#89b4fa]/20
      backdrop-blur-sm
      p-6
      rounded-sm
    "
  >
    <p className="text-xl text-[#cdd6f4] leading-8 mb-6">
      Thanks for stopping by.
      <br />
      Im always excited to talk about software, cybersecurity,
      game development, research, or just interesting ideas.
      <br />
      If you would like to collaborate, discuss a project, or simply say
      hello, my inbox is always open.
    </p>

    <div className="flex flex-wrap gap-4">
      <a
        href="https://github.com/codeprabhu"
        target="_blank"
        rel="noopener noreferrer"
        className="
          px-5 py-3
          border border-[#89b4fa]
          text-[#89b4fa]
          hover:bg-[#89b4fa]
          hover:text-black
          transition-all
        "
      >
        GitHub ↗
      </a>

      <a
        href="https://linkedin.com/in/shrivathsp"
        target="_blank"
        rel="noopener noreferrer"
        className="
          px-5 py-3
          border border-[#89b4fa]
          text-[#89b4fa]
          hover:bg-[#89b4fa]
          hover:text-black
          transition-all
        "
      >
        LinkedIn ↗
      </a>

      <a
        href="mailto:shrivathssprabhu@gmail.com"
        className="
          px-5 py-3
          border border-[#89b4fa]
          text-[#89b4fa]
          hover:bg-[#89b4fa]
          hover:text-black
          transition-all
        "
      >
        Email ↗
      </a>
    </div>
  </div>
</section>

        </div>
      </div>
  )}
    </main>
  );
}
