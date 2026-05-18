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

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
        {people.map((person, i) => (
          <div key={i} className="p-6 rounded-2xl bg-white/[0.02] border border-white/5 text-center backdrop-blur-sm pointer-events-auto">
            <div className="w-24 h-24 rounded-full bg-white/10 mx-auto mb-4 overflow-hidden"></div>
            <h4 className="text-lg font-semibold text-white">{person.name}</h4>
            <p className="text-sm text-cyan-400 mb-3">{person.role}</p>
            <a href={`mailto:${person.email}`} className="text-xs text-gray-500 hover:text-white transition-colors">
              {person.email}
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}
