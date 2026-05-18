import { cn } from "@/lib/utils";

export interface MissionCardProps {
  title: string;
  description: string;
  className?: string;
}

export default function MissionCard({
  title,
  description,
  className,
}: MissionCardProps) {
  return (
    <div
      className={cn(
        "p-8 rounded-3xl bg-white/[0.03] border border-white/10 hover:bg-white/[0.05] transition-colors backdrop-blur-sm",
        className
      )}
    >
      <h3 className="text-xl font-semibold text-white mb-3">{title}</h3>
      <p className="text-gray-400 leading-relaxed">{description}</p>
    </div>
  );
}
