import type { Metadata } from "next";
import { DynamicHeader } from "@/components/layout/DynamicHeader";
import { ScrollProgressBar } from "@/components/ui/ScrollProgressBar";
import { ContactPageContent } from "@/components/sections/ContactPageContent";

export const metadata: Metadata = {
  title: "Contact Zafar | Let's Build Something",
  description:
    "Get in touch to discuss your project — web apps, AI systems, SaaS, automation, ML, or anything in between. I reply within 24 hours.",
};

export default function ContactPage() {
  return (
    <>
      <ScrollProgressBar />
      <DynamicHeader />
      <ContactPageContent />
    </>
  );
}
