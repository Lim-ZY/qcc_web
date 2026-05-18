import { Separator } from "@/components/ui/separator";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export interface PersonCardProps {
  name: string;
  role: string;
  email?: string;
  desc?: string[];
  imageUrl?: string; // Optional image
  className?: string;
}

export default function PersonCard({
  name,
  role,
  email,
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
      {email && (
        <Button
          variant="link"
          className="text-md text-white/90 hover:text-white transition-colors tracking-tight pointer-events-auto"
          asChild
        >
          <a href={`mailto:${email}`}>{email}</a>
        </Button>
      )}
      {desc && (
        <>
          <Separator />
          <ul className="text-left text-md max-w-3xl text-white mt-6">
            {desc.map((item, i) => (
              <li key={i}>&bull; {item}</li>
            ))}
          </ul>
        </>
      )}
    </div>
  );
}
