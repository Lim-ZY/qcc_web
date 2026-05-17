"use client";

import Link from "next/link";

export default function Navbar() {
  return (
    <header className="fixed top-0 z-50 inset-x-0 flex items-center justify-between backdrop-blur-md w-full px-6 py-4 pointer-events-auto border-b border-white/10">
      <div className="flex items-center">
        <Link href="/" className="text-xl font-bold text-white">
          NUS QCC
        </Link>
      </div>
      <nav className="hidden md:flex items-center gap-x-10 text-xl font-bold text-white">
        <Link href="#mission" className="">Mission</Link>
        <Link href="#initiatives" className="">Initiatives</Link>
        <Link href="#people" className="">People</Link>
        <Link href="#contact" className="">Contact</Link>
        <Link href="/notes" className="">Notes Database</Link>
      </nav>
    </header>
  );
}
