"use client";

import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { ArrowUpRightIcon } from "lucide-react";
import { Separator } from "@/components/ui/separator";

export default function Navbar() {
  return (
    <header className="fixed top-0 z-50 inset-x-0 flex items-center justify-between backdrop-blur-md w-full px-6 py-2 pointer-events-auto border-b border-white/10">
      <Link href="/" className="flex items-center gap-1 px-4">
        <Image src="/icon.png" alt="NUS QCC Logo" width={100} height={50} className="bg-white/[0.1] rounded-lg p-2" />
        <Separator className="mx-2" orientation="vertical" />
        <h1 className="text-xl font-bold text-white">
          NUS QCC
        </h1>
      </Link>
      <nav className="hidden md:flex items-center gap-x-4 text-xl font-bold text-white">
        <Button variant="link" className="p-2 text-white text-xl"><Link href="#mission" className="">Mission</Link></Button>
        <Button variant="link" className="p-2 text-white text-xl"><Link href="#initiatives" className="">Initiatives</Link></Button>
        <Button variant="link" className="p-2 text-white text-xl"><Link href="#people" className="">People</Link></Button>
        <Button variant="link" className="p-2 text-white text-xl"><Link href="#contact" className="">Contact</Link></Button>
        <Button variant="link" className="p-2 text-white text-xl" asChild>
          <Link href="/notes" target="_blank">
            Notes Database
            <ArrowUpRightIcon className="h-4 w-4" />
          </Link>
        </Button>
      </nav>
    </header>
  );
}
