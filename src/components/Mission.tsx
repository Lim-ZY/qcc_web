export default function Mission() {
  return (
    <section id="mission" className="flex min-h-screen w-full flex-col justify-center items-center py-24 px-6 max-w-6xl mx-auto scroll-mt-10">
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Our Mission</h2>
        <p className="text-gray-400 max-w-2xl mx-auto text-lg">
          Democratizing and demystifying quantum computing. We exist to lower the barrier to entry and create a credible pathway from curiosity to capability.
        </p>
      </div>
      <div className="grid md:grid-cols-3 gap-8">
        <div className="p-8 rounded-3xl bg-white/[0.03] border border-white/10 hover:bg-white/[0.05] transition-colors">
          <h3 className="text-xl font-semibold text-white mb-3">Learn</h3>
          <p className="text-gray-400 leading-relaxed">Build strong fundamentals through structured workshops and curated learning resources designed for students by students.</p>
        </div>
        <div className="p-8 rounded-3xl bg-white/[0.03] border border-white/10 hover:bg-white/[0.05] transition-colors">
          <h3 className="text-xl font-semibold text-white mb-3">Build</h3>
          <p className="text-gray-400 leading-relaxed">Practice with real tools and practical exercises—quantum circuits, algorithms, and NISQ-era workflows—without assuming prior exposure.</p>
        </div>
        <div className="p-8 rounded-3xl bg-white/[0.03] border border-white/10 hover:bg-white/[0.05] transition-colors">
          <h3 className="text-xl font-semibold text-white mb-3">Research</h3>
          <p className="text-gray-400 leading-relaxed">Join mentored projects that train students to execute research-grade work and communicate results with professional standards.</p>
        </div>
      </div>
    </section>
  );
}
