import SectionHeader from "@/components/cards/SectionHeader";
import PersonCard from "@/components/cards/PersonCard";
import { Button } from "@/components/ui/button";

export default function People() {
  const people = [
    { role: "President", name: "Anthony Liu", email: "e1484135@u.nus.edu" },
    { role: "Vice President", name: "Sai Sudarshan Srikanth", email: "e1538932@u.nus.edu" },
    { role: "General Secretary", name: "Yang Xinjian", email: "e1710532@u.nus.edu" },
    { role: "Head of Operations", name: "Lim Zi Yang", email: "lim_zy@u.nus.edu", linkedin: "ziyanglim" },
  ];

  const advisor_desc = [
    "Principal Investigator at CQT & Professor at NUS",
    "Former Chief Scientific Officer for the National Quantum Office",
    "Distinguished International Associate of the UK Royal Academy of Engineering (2024)",
  ];

  return (
    <section id="people" className="flex min-h-screen w-full flex-col justify-center items-center py-24 px-6 max-w-6xl mx-auto scroll-mt-10">
      <SectionHeader
        title="Our People"
        description="Meet the leadership team organizing the events, maintaining the knowledge base, and driving the quantum community forward."
      />

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 p-6 rounded-2xl bg-white/[0.02] border border-white/5 text-center backdrop-blur-sm transition-all">
        <div className="md:col-span-1 md:row-span-2 flex">
          <PersonCard
            role="Club Advisor"
            name="Prof. Alexander Ling Euk Jin"
            desc={advisor_desc}
            className="mr-6"
          />
        </div>

        {people.map((person, i) => (
          <PersonCard
            key={i} {...person}
          />
        ))}
      </div>

      <div className="flex flex-col items-center justify-center mt-4">
        <p className="text-center text-lg text-white mt-6">
          For general enquiries, please contact us using the club email in the Contact section.
        </p>
      </div>
    </section>
  );
}
