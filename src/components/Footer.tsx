"use client";

export default function Footer() {
  return (
    <footer className="py-6 text-center text-white text-md border-t border-white/10 bg-[#07080f]/50 backdrop-blur-sm">
      <p>NUS Quantum Computing Club &bull; Built by students for students &bull; © {new Date().getFullYear()} </p>
    </footer>
  );
}
