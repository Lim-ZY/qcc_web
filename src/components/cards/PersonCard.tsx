import { Separator } from "@/components/ui/separator";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export interface PersonCardProps {
  name: string;
  role: string;
  email?: string;
  linkedin?: string;
  desc?: string[];
  imageUrl?: string; // Optional image
  className?: string;
}

export default function PersonCard({
  name,
  role,
  email,
  linkedin,
  desc,
  imageUrl,
  className,
}: PersonCardProps) {
  return (
    <div
      className={cn(
        "p-6 rounded-2xl bg-white/[0.02] border border-white/5 text-center backdrop-blur-sm transition-all hover:bg-white/[0.04]",
        className
      )}
    >
      <div className="w-24 h-24 mx-auto mb-4 overflow-hidden rounded-full bg-[#0a0c14] border border-white/10 flex items-center justify-center">
        {imageUrl ? (
          <img src={imageUrl} alt={name} className="w-full h-full object-cover" />
        ) : (
          <span className="text-gray-600 font-mono text-xs">IMG</span>
        )}
      </div>

      <h4 className="text-xl font-bold text-white">{name}</h4>
      <p className="text-xl font-semibold text-cyan-400 mb-2">{role}</p>
      <Separator className="mb-2" />

      <div className="flex flex-col sm:flex-row justify-center items-center gap-2 mt-2 px-4 w-full">
        {email && (
          <Button variant="link" className="p-4 gap-2 flex-1 border-white/20 text-white text-xl bg-transparent hover:bg-white/10 rounded-full tracking-tight pointer-events-auto" size="lg">
            <a href={`mailto:${email}`}>Email</a>
          </Button>
        )}

        {linkedin && (
          <Button variant="link" className="p-4 gap-2 flex-1 border-white/20 text-white text-xl bg-transparent hover:bg-white/10 rounded-full tracking-tight pointer-events-auto" size="lg">
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

      {desc && (
        <>
          <ul className="text-left text-md max-w-3xl text-white">
            {desc.map((item, i) => (
              <li key={i}>&bull; {item}</li>
            ))}
          </ul>
        </>
      )}
    </div>
  );
}
