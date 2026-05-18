"use client";

export default function Footer() {
  return (
    <footer className="py-6 text-center text-gray-600 text-sm border-t border-white/10 bg-[#07080f]/50 backdrop-blur-sm">
      <p>© {new Date().getFullYear()} NUS Quantum Computing Club. Built by students for students.</p>
    </footer>
  );
}
