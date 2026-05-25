import SectionHeader from "@/components/cards/SectionHeader";
import PersonCard from "@/components/cards/PersonCard";
import { Separator } from "@/components/ui/separator";

export default function People() {
  const people = [
    { role: "President", name: "Anthony Liu", email: "e1484135@u.nus.edu", imagePath: "/images/people/Anthony.png" },
    { role: "Vice President", name: "Sai Sudarshan Srikanth", email: "e1538932@u.nus.edu", imagePath: "/images/people/Sai.png" },
    { role: "Treasurer", name: "Leina Tan", email: "leinat0102@gmail.com", imagePath: "/images/people/Leina.png" },
    { role: "General Secretary", name: "Yang Xinjian", email: "xinjian.yang@u.nus.edu", imagePath: "/images/people/XinJian.png" },
    { role: "Head of Operations", name: "Lim Zi Yang", email: "lim_zy@u.nus.edu", linkedin: "ziyanglim", imagePath: "/images/people/ZiYang.png" },
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

      <div className="grid grid-cols-1 md:grid-cols-[1fr_auto_1fr] gap-4 p-4 rounded-2xl bg-white/[0.02] border border-white/5 text-center backdrop-blur-sm transition-all">
        <div className="md:col-span-1">
          <PersonCard
            role="Club Advisor"
            name="Prof. Alexander Ling Euk Jin"
            desc={advisor_desc}
            imagePath="/images/people/alexander-ling.webp"
          />
        </div>

        <Separator
          orientation="vertical"
          className="hidden md:block h-full bg-white/10 min-h-[200px]"
        />

        <div className="grid grid-cols-2 sm:grid-cols-2 gap-4">
          {people.map((person, i) => (
            <PersonCard
              key={i} {...person}
            />
          ))}
        </div>
      </div>

      <div className="flex flex-col items-center justify-center mt-2">
        <p className="text-center text-lg text-white mt-6">
          For general enquiries, please contact us using the club email in the Contact section.
        </p>
      </div>
    </section>
  );
}
