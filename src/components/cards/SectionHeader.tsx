import { cn } from "@/lib/utils";

export interface SectionHeaderProps {
  title: string;
  description: string;
  className?: string;
}

export default function SectionHeader({
  title,
  description,
  className,
}: SectionHeaderProps) {
  return (
    <div
      className={cn(
        "text-center mb-16",
        className
      )}
    >
      <h2 className="text-xl md:text-5xl font-bold text-white mb-4">{title}</h2>
      <p className="text-lg max-w-3xl text-white/90 mx-auto">{description}</p>
    </div>
  );
}
