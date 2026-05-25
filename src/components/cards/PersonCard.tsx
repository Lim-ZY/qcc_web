import { Separator } from "@/components/ui/separator";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import Image from "next/image";

export interface PersonCardProps {
  name: string;
  role: string;
  email?: string;
  linkedin?: string;
  desc?: string[];
  imagePath?: string;
  className?: string;
}

export default function PersonCard({
  name,
  role,
  email,
  linkedin,
  desc,
  imagePath,
  className,
}: PersonCardProps) {
  return (
    <div
      className={cn(
        "p-6 rounded-2xl bg-white/[0.02] border border-white/5 text-center backdrop-blur-sm transition-all",
        className
      )}
    >
      <div className="w-24 h-24 mx-auto mb-4 overflow-hidden rounded-full bg-[#0a0c14] border border-white/10 flex items-center justify-center relative">
        {imagePath ? (
          <Image
            src={imagePath}
            alt={name}
            fill
            sizes="(max-width: 768px) 100vw, 96px"
            className="object-cover" />
        ) : (
          <span className="text-gray-600 font-mono text-xs">IMG</span>
        )}
      </div>

      <div className="w-full overflow-x-auto custom-scrollbar pointer-events-auto">
        <h4 className="text-xl font-bold text-white w-max mx-auto whitespace-nowrap">{name}</h4>
      </div>
      <div className="w-full overflow-x-auto custom-scrollbar pointer-events-auto">
        <p className="text-xl font-semibold text-blue-500 w-max mb-2 mx-auto whitespace-nowrap">{role}</p>
      </div>
      <Separator className="mb-2" />

      {desc && (
        <>
          <ul className="text-left text-lg max-w-3xl text-white">
            {desc.map((item, i) => (
              <li key={i}>&bull; {item}</li>
            ))}
          </ul>
        </>
      )}

      <div className="flex flex-col sm:flex-row justify-center items-center gap-2 mt-2 px-4 w-full">
        {email && (
          <Button variant="link" className="px-3 py-1.5 rounded-full gap-2 flex-1 bg-blur-md border border-white/[0.1] shadow-[inset_0_1px_0_0_rgba(255,255,255,0.1)] hover:bg-white/[0.12] hover:border-white/[0.20] transition-all duration-300 tracking-tight pointer-events-auto text-lg text-bold text-white" size="lg" asChild>
            <a href={`mailto:${email}`}>
              Email
            </a>
          </Button>
        )}

        {linkedin && (
          <Button variant="link" className="px-3 py-1.5 rounded-full gap-2 flex-1 bg-blur-md border border-white/[0.1] shadow-[inset_0_1px_0_0_rgba(255,255,255,0.1)] hover:bg-white/[0.12] hover:border-white/[0.20] transition-all duration-300 tracking-tight pointer-events-auto text-lg text-bold text-white" size="lg" asChild>
            <a
              href={`https://www.linkedin.com/in/${linkedin}`}
              target="_blank"
              referrerPolicy="no-referrer"
              rel="noopener noreferrer"
            >
              LinkedIn
            </a>
          </Button>
        )}
      </div>
    </div>
  );
}
