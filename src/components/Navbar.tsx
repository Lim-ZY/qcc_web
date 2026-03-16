"use client";

import GooeyNav from "./GooeyNav";

export default function Navbar() {
  const elements = [
    { label: "QuantumNotes", href: "#" },
    { label: "About", href: "#" },
    { label: "Meetings", href: "#" },
    { label: "Members", href: "#" },
    { label: "Notes", href: "/notes" },
    { label: "Join Us", href: "#" },
  ];

  return (
    <nav className="flex items-center justify-center fixed inset-x-0 z-50 top-8">
      <GooeyNav
        items={elements}
        particleCount={15}
        particleDistances={[90, 10]}
        particleR={100}
        initialActiveIndex={0}
        animationTime={600}
        timeVariance={300}
        colors={[1, 2, 3, 1, 2, 3, 1, 4]}
      />
    </nav>
  );
}
