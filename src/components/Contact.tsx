import Link from "next/link";
import SectionHeader from "@/components/cards/SectionHeader";
import { Button } from "@/components/ui/button";
import { MailIcon, SendIcon } from "lucide-react";

export default function Contact() {
  return (
    <section id="contact" className="flex min-h-screen w-ful flex-col justify-center items-center py-24 px-6 max-w-3xl mx-auto text-center scroll-mt-10">
      <SectionHeader
        title="Contact"
        description="Interested in collaborating, attending a session, or just want to chat about the future of quantum? We would love to hear from you."
      />

      <div className="flex flex-col sm:flex-row justify-center gap-4 ">
        <Button variant="link" className="p-6 gap-2 bg-white text-black text-xl hover:bg-gray-200 rounded-full tracking-tight pointer-events-auto" size="lg" asChild>
          <Link href={`mailto:nus.qcc@gmail.com`}><MailIcon />Email: nus.qcc@gmail.com</Link>
        </Button>
        <Button variant="link" className="p-6 gap-2 border-white/20 text-white text-xl bg-transparent hover:bg-white/10 rounded-full tracking-tight pointer-events-auto" size="lg" asChild>
          <Link href={`https://t.me/+rZapiaInhiYzZmI1`}>
            <SendIcon />
            Join Telegram Channel
          </Link>
        </Button>
      </div>
    </section>
  );
}
