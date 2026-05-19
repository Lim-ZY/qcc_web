import BlurText from "@/components/ui/BlurText";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowUpRightIcon } from "lucide-react";

export default function Hero() {
  return (
    <section id="home" className="flex min-h-screen w-full flex-col justify-center items-center max-w-5xl mx-auto">
      <BlurText
        text="Hi there!"
        delay={100}
        animateBy="words"
        direction="top"
        className="text-5xl mb-4 text-white"
      />
      <BlurText
        text="Discover the world of quantum with us."
        delay={300}
        animateBy="words"
        direction="top"
        className="text-5xl mb-8 text-white text-center"
      />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-10 w-full max-w-md">
        <Button variant="link" className="p-6 gap-2 bg-white text-black text-xl hover:bg-gray-200 rounded-full tracking-tight pointer-events-auto" size="lg" asChild>
          <a
            href={`https://t.me/+rZapiaInhiYzZmI1`}
            target="_blank"
            referrerPolicy="no-referrer"
            rel="noopener noreferrer"
          >
            <ArrowUpRightIcon className="h-4 w-4" />
            Join our community!
          </a>
        </Button>
        <Button variant="link" className="p-6 gap-2 border-white/20 text-white text-xl bg-transparent hover:bg-white/10 rounded-full tracking-tight pointer-events-auto" size="lg" asChild>
          <Link href="/notes">
            <ArrowUpRightIcon className="h-4 w-4" />
            Explore Notes
          </Link>
        </Button>
      </div>
    </section>
  );
}
