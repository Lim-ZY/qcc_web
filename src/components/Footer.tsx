"use client";

export default function Footer() {
  return (
    <footer className="py-6 text-center text-white text-md border-t border-white/10 bg-[#07080f]/50 backdrop-blur-sm">
      <p>© {new Date().getFullYear()} &bull; NUS Quantum Computing Club &bull; Built by students for students </p>
    </footer>
  );
}
