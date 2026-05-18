export default function Initiatives() {
  return (
    <section id="initiatives" className="flex min-h-screen w-full flex-col justify-center items-center py-24 px-6 max-w-6xl mx-auto scroll-mt-10">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">Current & Future Initiatives</h2>
        <p className="text-gray-400 max-w-2xl mx-auto text-lg">A curated snapshot of our key programmes focused on bridging theoretical foundations with real-world quantum applications.</p>
      </div>
      <div className="space-y-6">
        <div className="flex flex-col md:flex-row gap-8 p-8 rounded-3xl bg-gradient-to-br from-white/[0.05] to-transparent border border-white/10 backdrop-blur-sm">
          <div className="md:w-1/3 flex-shrink-0">
            <div className="w-full h-48 rounded-2xl bg-[#0a0c14] border border-white/10 flex items-center justify-center relative overflow-hidden">
              <span className="text-gray-600 font-mono text-sm tracking-widest">[ WORKSHOP_IMG ]</span>
            </div>
          </div>
          <div className="md:w-2/3 flex flex-col justify-center">
            <h3 className="text-2xl font-semibold text-white mb-3">Foundational Workshops</h3>
            <p className="text-gray-400 mb-6 leading-relaxed">A rolling series introducing foundational concepts in quantum computing—designed to demystify core ideas like superposition, entanglement, and the Bloch sphere to help beginners take their first steps.</p>
            <div className="flex flex-wrap gap-2 text-xs font-mono">
              <span className="px-3 py-1.5 rounded-full bg-cyan-400/10 text-cyan-400 border border-cyan-400/20">Theoretical</span>
              <span className="px-3 py-1.5 rounded-full bg-blue-400/10 text-blue-400 border border-blue-400/20">Hands-on Coding</span>
            </div>
          </div>
        </div>

        <div className="flex flex-col md:flex-row gap-8 p-8 rounded-3xl bg-gradient-to-br from-white/[0.05] to-transparent border border-white/10 backdrop-blur-sm">
          <div className="md:w-1/3 flex-shrink-0">
            <div className="w-full h-48 rounded-2xl bg-[#0a0c14] border border-white/10 flex items-center justify-center relative overflow-hidden">
              <span className="text-gray-600 font-mono text-sm tracking-widest">[ PROJECT_IMG ]</span>
            </div>
          </div>
          <div className="md:w-2/3 flex flex-col justify-center">
            <h3 className="text-2xl font-semibold text-white mb-3">Interdisciplinary Quantum Projects</h3>
            <p className="text-gray-400 mb-6 leading-relaxed">Collaborative, semester-long projects pushing the boundaries of Quantum Machine Learning (QML) and optimization algorithms. Teams work on executing research-grade deliverables from problem formulation to implementation.</p>
            <div className="flex flex-wrap gap-2 text-xs font-mono">
              <span className="px-3 py-1.5 rounded-full bg-indigo-400/10 text-indigo-400 border border-indigo-400/20">Research</span>
              <span className="px-3 py-1.5 rounded-full bg-purple-400/10 text-purple-400 border border-purple-400/20">Mentorship</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
