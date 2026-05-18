import PersonCard from "@/components/cards/PersonCard";

export default function People() {
  const people = [
    { role: "President", name: "Student Name", email: "email@university.edu" },
    { role: "Academic Lead", name: "Student Name", email: "email@university.edu" },
    { role: "Projects Lead", name: "Student Name", email: "email@university.edu" },
    { role: "Outreach Lead", name: "Student Name", email: "email@university.edu" },
  ];

  return (
    <section id="people" className="flex min-h-screen w-full flex-col justify-center items-center py-24 px-6 max-w-6xl mx-auto scroll-mt-10">
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">Our People</h2>
        <p className="text-gray-400 max-w-2xl mx-auto text-lg">Meet the leadership team organizing the events, maintaining the knowledge base, and driving the quantum community forward.</p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 pointer-events-auto">
        {people.map((person, i) => (
          <PersonCard
            key={i} {...person}
          />
        ))}
      </div>
    </section>
  );
}
