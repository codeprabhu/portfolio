"use client";

export default function TerminalNav() {
  const sections = [
    "whoami",
    "projects",
    "experience",
    "resume",
    "contact",
    "secrets",
  ];

  return (
    <div
      className="
        sticky
        top-0
        z-40

        backdrop-blur-md
        bg-[#11111b]/70

        border-b
        border-[#313244]

        py-4
        mb-12
      "
    >
      <div
        className="
          flex
          flex-wrap
          gap-6

          text-[#89b4fa]
          font-mono
          text-sm
        "
      >
        {sections.map((section) => (
          <button
            key={section}
            onClick={() =>
              document
                .getElementById(section)
                ?.scrollIntoView({
                  behavior: "smooth",
                  block: "center",
                })
            }
            className="
              hover:text-[#cba6f7]
              transition-colors
            "
          >
            $ cd {section}
          </button>
        ))}
      </div>
    </div>
  );
}