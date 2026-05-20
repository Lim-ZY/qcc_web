import SectionHeader from "@/components/cards/SectionHeader";
import InitiativeCard from "@/components/cards/IntiativeCard";

export default function Initiatives() {
  const Initiatives = [
    {
      title: "Quantum Coffee Chat Series",
      description: "A series of informal conversations with experts in the field of quantum computing - designed to inspire and educate the community.",
      imagePath: "/images/initiatives/QuantumCoffeeChatSeries.jpg",
      tags: ["Series"],
    },
    {
      title: "Foundational Learning Series",
      description: "A rolling series discussing foundational concepts in quantum — designed to demystify core ideas in quantum, engage the community, and help beginners take their first steps.",
      tags: ["Series"],
    },
    {
      title: "Quantum Notes Repository",
      description: "A collaborative resource for sharing and learning about quantum computing.",
      link: "/notes",
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
          tags={["Event"]}
          orientation="vertical" // Changes structural layout
          className="md:w-1/2 mx-auto border-rose-500/30" // Overrides width and border color
        />
      </div>
    </section>
  );
}
