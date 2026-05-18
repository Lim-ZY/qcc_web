import { cn } from "@/lib/utils";

export interface PersonCardProps {
  name: string;
  role: string;
  email: string;
  imageUrl?: string; // Optional image
  className?: string;
}

export default function PersonCard({
  name,
  role,
  email,
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

      <h4 className="text-lg font-semibold text-white">{name}</h4>
      <p className="text-sm text-cyan-400 mb-3">{role}</p>
      <a
        href={`mailto:${email}`}
        className="text-xs text-gray-500 hover:text-white transition-colors"
      >
        {email}
      </a>
    </div>
  );
}
