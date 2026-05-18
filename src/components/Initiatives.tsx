import SectionHeader from "@/components/cards/SectionHeader";
import InitiativeCard from "@/components/cards/IntiativeCard";

export default function Initiatives() {
  const Initiatives = [
    {
      title: "Quantum Coffee Chat Series",
      description: "A series of informal conversations with experts in the field of quantum computing - designed to inspire and educate the community.",
      imageLabel: "WORKSHOP_IMG",
      tags: [
        { label: "Building Community", colorClass: "bg-cyan-400/10 text-cyan-400 border-cyan-400/20" },
        { label: "Building Connections", colorClass: "bg-blue-400/10 text-blue-400 border-blue-400/20" },
      ],
    },
    {
      title: "Foundational Learning Series",
      description: "A rolling series discussing foundational concepts in quantum — designed to demystify core ideas in quantum, engage the community, and help beginners take their first steps.",
      imageLabel: "PROJECT_IMG",
      tags: [
        { label: "Theoretical", colorClass: "bg-indigo-400/10 text-indigo-400 border-indigo-400/20" },
        { label: "Interactive", colorClass: "bg-purple-400/10 text-purple-400 border-purple-400/20" },
      ],
    },
  ];

  return (
    <section id="initiatives" className="flex min-h-screen w-full flex-col justify-center items-center py-24 px-6 max-w-6xl mx-auto scroll-mt-10">
      <SectionHeader
        title="Current and Future Initiatives"
        description="A curated snapshot of our key programmes focused on building our community and demystifying quantum."
      />

      <div className="space-y-6">
        {Initiatives.map((initiative, i) => (
          <InitiativeCard
            key={i} {...initiative}
          />
        ))}

        <InitiativeCard
          title="Upcoming: Quantum Fall Fest 2026"
          description="A flagship cross-campus programme."
          imageLabel="HACKATHON_IMG"
          tags={[{ label: "Event", colorClass: "bg-rose-400/10 text-rose-400 border-rose-400/20" }]}
          orientation="vertical" // Changes structural layout
          className="md:w-1/2 mx-auto border-rose-500/30" // Overrides width and border color
        />
      </div>
    </section>
  );
}
