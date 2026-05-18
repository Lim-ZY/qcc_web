import MissionCard from "@/components/cards/MissionCard";

export default function Mission() {
  const Missions = [
    {
      title: "Learn",
      description: "Build strong fundamentals through structured workshops and curated learning resources designed for students by students.",
    },
    {
      title: "Build",
      description: "Practice with real tools and practical exercises—quantum circuits, algorithms, and NISQ-era workflows—without assuming prior exposure.",
    },
    {
      title: "Research",
      description: "Join mentored projects that train students to execute research-grade work and communicate results with professional standards.",
    },
  ];

  return (
    <section id="mission" className="flex min-h-screen w-full flex-col justify-center items-center py-24 px-6 max-w-6xl mx-auto scroll-mt-10">
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">Our Mission</h2>
        <p className="text-gray-400 max-w-2xl mx-auto text-lg">
          Democratizing and demystifying quantum computing. We exist to lower the barrier to entry and create a credible pathway from curiosity to capability.
        </p>
      </div>
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
