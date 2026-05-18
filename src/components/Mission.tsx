import SectionHeader from "@/components/cards/SectionHeader";
import MissionCard from "@/components/cards/MissionCard";

export default function Mission() {
  const Missions = [
    {
      title: "Bond",
      description: "Cultivate an inclusive and vibrant community of like-minded individuals, through mentorship, education, and collaboration.",
    },
    {
      title: "Research",
      description: "Explore the latest developments in quantum computing, and communicate results to the world.",
    },
    {
      title: "Share",
      description: "Accelerate the collective understanding of quantum computing, through community engagement and a living open-source knowledge base.",
    },
  ];

  return (
    <section id="mission" className="flex min-h-screen w-full flex-col justify-center items-center py-24 px-6 max-w-6xl mx-auto scroll-mt-10">
      <SectionHeader
        title="Our Mission"
        description="NUS QCC exists to democratize and demystify quantum computing. We exist to connect like-minded individuals, and to accelerate the collective understanding of quantum computing."
      />

      <div className="grid md:grid-cols-3 gap-8">
        {Missions.map((mission, i) => (
          <MissionCard
            key={i} {...mission}
          />
        ))}
      </div>
    </section>
  );
}
