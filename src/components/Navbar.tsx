"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Menu, ArrowUpRightIcon } from "lucide-react";
import { Separator } from "@/components/ui/separator";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetTitle,
  SheetClose,
} from "@/components/ui/sheet";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const navLinks = [
    { name: "Mission", href: "#mission" },
    { name: "Initiatives", href: "#initiatives" },
    { name: "People", href: "#people" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <header className="fixed top-0 z-50 inset-x-0 flex items-center justify-between backdrop-blur-md w-full px-6 py-2 pointer-events-auto border-b border-white/10">
      <Link href="/" className="flex items-center gap-1 px-2 md:px-4">
        <Image src="/icon.png" alt="NUS QCC Logo" width={100} height={50} className="bg-white/[0.1] rounded-lg p-2" />
        <Separator className="mx-2" orientation="vertical" />
        <h1 className="text-xl font-bold text-white">
          NUS QCC
        </h1>
      </Link>

      {/* Desktop Navbar */}
      <nav className="hidden md:flex items-center gap-x-4 text-xl font-bold text-white">
        {navLinks.map((link) => (
          <Button variant="link" key={link.name} className="p-2 text-white text-xl">
            <Link href={link.href} className="">
              {link.name}
            </Link>
          </Button>
        ))}
        <Button variant="link" className="p-2 text-white text-xl" asChild>
          <Link href="/notes" target="_blank">
            Notes Database
            <ArrowUpRightIcon className="h-4 w-4" />
          </Link>
        </Button>
      </nav>

      {/* Mobile Navbar */}
      <div className="md:hidden flex items-center">
        <Sheet open={isOpen} onOpenChange={setIsOpen}>
          <SheetTrigger asChild>
            <Button variant="ghost" size="icon" className="text-white hover:bg-white/10">
              <Menu className="h-6 w-6" />
              <span className="sr-only">Toggle menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="right" className="bg-[#0a0c14] border-l border-white/10 pt-16">
            <SheetTitle className="sr-only">Navigation Menu</SheetTitle>
            <div className="flex flex-col gap-6 mt-4">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="text-2xl font-bold text-white/90 hover:text-white border-b border-white/5 pb-4"
                >
                  {link.name}
                </Link>
              ))}

              <Link
                href="/notes"
                target="_blank"
                onClick={() => setIsOpen(false)}
                className="flex items-center justify-between text-2xl font-bold text-white/90 hover:text-white border-b border-white/5 pb-4"
              >
                Notes Database
                <ArrowUpRightIcon className="h-6 w-6" />
              </Link>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
}
