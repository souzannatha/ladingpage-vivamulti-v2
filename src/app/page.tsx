import { AccreditedNetworks } from "@/components/AccreditedNetworks";
import { Benefits } from "@/components/Benefits";
import { FaqSection } from "@/components/FaqSection";
import { SectionDownload } from "@/components/SectionDownload";
import { Testimonials } from "@/components/Testimonials";

export default function Home() {
  return (
    <div>
      <Benefits />
      <AccreditedNetworks />
      <SectionDownload />
      <Testimonials />
      <FaqSection />
    </div>
  );
}
