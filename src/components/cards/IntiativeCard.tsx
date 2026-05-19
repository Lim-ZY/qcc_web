import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { ArrowUpRightIcon } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

export interface InitiativeCardProps {
  title: string;
  description: string;
  imagePath?: string;
  tags?: string[];
  link?: string;
  className?: string;
  orientation?: "horizontal" | "vertical";
}

export default function InitiativeCard({
  title,
  description,
  imagePath,
  tags,
  link,
  className,
  orientation = "horizontal",
}: InitiativeCardProps) {
  return (
    <div
      className={cn(
        // Base styles that apply to every card
        "flex gap-8 p-8 rounded-3xl bg-gradient-to-br from-white/[0.05] to-transparent border border-white/10 backdrop-blur-sm transition-colors",
        // Conditional structural styles based on orientation prop
        orientation === "vertical" ? "flex-col" : "flex-col md:flex-row",
        // merges parent classes, resolves any Tailwind conflicts
        className
      )}
    >
      {/* Image / Graphic Container */}
      <div className={cn("flex-shrink-0", orientation === "vertical" ? "w-full" : "md:w-1/3")}>
        <div
          className={cn(
            "w-full rounded-2xl bg-[#0a0c14] border border-white/10 flex items-center justify-center relative overflow-hidden",
            orientation === "vertical" ? "h-64" : "h-48"
          )}
        >
          {imagePath ? (
            <Image
              src={imagePath}
              alt={title}
              fill
              sizes="(max-width: 768px) 100vw, 96px"
              className="object-cover" />
          ) : (
            <span className="text-gray-600 font-mono text-sm tracking-widest">
              [Coming Soon]
            </span>
          )}
        </div>
      </div>

      {/* Text Content */}
      <div className={cn("flex flex-col justify-center", orientation === "vertical" ? "w-full mt-2" : "md:w-2/3")}>
        <h3 className="text-2xl font-semibold text-white mb-3">{title}</h3>
        <p className="text-xl text-white/90 text-justify mb-6">{description}</p>

        {tags && (
          <div className="flex flex-wrap gap-2 text-lg font-mono">
            {tags.map((tag, i) => (
              <span
                key={i}
                className="px-3 py-1.5 gap-2 rounded-full bg-white/[0.03] backdrop-blur-md border border-white/[0.08] shadow-[inset_0_1px_0_0_rgba(255,255,255,0.1)] text-blue-500 font-bold hover:bg-white/[0.08] hover:border-white/[0.15] transition-all duration-300"
              >
                {tag}
              </span>
            ))}
          </div>
        )}

        {link && (
          <div className="flex flex-wrap gap-2 text-lg font-mono">
            <Button
              variant="ghost"
              size="lg"
              className="p-6 gap-2 rounded-full bg-white/[0.03] backdrop-blur-md border border-white/[0.08] shadow-[inset_0_1px_0_0_rgba(255,255,255,0.1)] text-lg text-orange-500/90 font-bold hover:text-orange-500 hover:bg-white/[0.08] hover:border-white/[0.15] transition-all duration-300 pointer-events-auto"
              asChild
            >
              <Link href={link}>
                <ArrowUpRightIcon className="h-4 w-4" />
                Explore Notes
              </Link>
            </Button>
          </div>
        )}
      </div>
    </div>
  );
}
