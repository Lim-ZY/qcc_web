import { Button } from "@/components/ui/button";

export default function Contact() {
  return (
    <section id="contact" className="flex min-h-screen w-ful flex-col justify-center items-center py-24 px-6 max-w-3xl mx-auto text-center scroll-mt-10">
      <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 tracking-tight">Get in Touch</h2>
      <p className="text-gray-400 mb-10 text-lg leading-relaxed">
        Interested in collaborating, attending a session, or just want to chat about the future of quantum? We would love to hear from you.
      </p>
      <div className="flex flex-col sm:flex-row justify-center gap-4 pointer-events-auto">
        <Button className="gap-2 bg-white text-black hover:bg-gray-200 rounded-full" size="lg">
          Email the Club
        </Button>
        <Button variant="outline" className="gap-2 border-white/20 text-white bg-transparent hover:bg-white/10 rounded-full" size="lg">
          Join Members Channel
        </Button>
      </div>
    </section>
  );
}
