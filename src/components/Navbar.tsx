"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowUpRightIcon } from "lucide-react";

export default function Navbar() {
  return (
    <header className="fixed top-0 z-50 inset-x-0 flex items-center justify-between backdrop-blur-md w-full px-6 py-4 pointer-events-auto border-b border-white/10">
      <div className="flex items-center">
        <Link href="/" className="text-xl font-bold text-white">
          NUS QCC
        </Link>
      </div>
      <nav className="hidden md:flex items-center gap-x-4 text-xl font-bold text-white">
        <Button variant="link" className="p-2 text-white text-xl"><Link href="#mission" className="">Mission</Link></Button>
        <Button variant="link" className="p-2 text-white text-xl"><Link href="#initiatives" className="">Initiatives</Link></Button>
        <Button variant="link" className="p-2 text-white text-xl"><Link href="#people" className="">People</Link></Button>
        <Button variant="link" className="p-2 text-white text-xl"><Link href="#contact" className="">Contact</Link></Button>
        <Button variant="link" className="p-2 text-white text-xl"><Link href="/notes" className="">Notes Database</Link><ArrowUpRightIcon /></Button>
      </nav>
    </header>
  );
}
