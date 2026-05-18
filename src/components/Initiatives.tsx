import InitiativeCard from "@/components/cards/IntiativeCard";

export default function Initiatives() {
  const Initiatives = [
    {
      title: "Quantum Coffee Chat Series",
      description: "A rolling series introducing foundational concepts in quantum computing—designed to demystify core ideas like superposition, entanglement, and the Bloch sphere to help beginners take their first steps.",
      imageLabel: "WORKSHOP_IMG",
      tags: [
        { label: "Theoretical", colorClass: "bg-cyan-400/10 text-cyan-400 border-cyan-400/20" },
        { label: "Hands-on Coding", colorClass: "bg-blue-400/10 text-blue-400 border-blue-400/20" },
      ],
    },
    {
      title: "Interdisciplinary Quantum Projects",
      description: "Collaborative, semester-long projects pushing the boundaries of Quantum Machine Learning (QML) and optimization algorithms. Teams work on executing research-grade deliverables from problem formulation to implementation.",
      imageLabel: "PROJECT_IMG",
      tags: [
        { label: "Research", colorClass: "bg-indigo-400/10 text-indigo-400 border-indigo-400/20" },
        { label: "Mentorship", colorClass: "bg-purple-400/10 text-purple-400 border-purple-400/20" },
      ],
    },
  ];

  return (
    <section id="initiatives" className="flex min-h-screen w-full flex-col justify-center items-center py-24 px-6 max-w-6xl mx-auto scroll-mt-10">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">Current & Future Initiatives</h2>
        <p className="text-gray-400 max-w-2xl mx-auto text-lg">A curated snapshot of our key programmes focused on bridging theoretical foundations with real-world quantum applications.</p>
      </div>

      <div className="space-y-6">
        {Initiatives.map((initiative, i) => (
          <InitiativeCard
            key={i} {...initiative}
          />
        ))}

        <InitiativeCard
          title="Upcoming: Hackathon 2026"
          description="A special 48-hour intensive building phase."
          imageLabel="HACKATHON_IMG"
          tags={[{ label: "Event", colorClass: "bg-rose-400/10 text-rose-400 border-rose-400/20" }]}
          orientation="vertical" // Changes structural layout
          className="md:w-1/2 mx-auto border-rose-500/30" // Overrides width and border color
        />
      </div>
    </section>
  );
}
