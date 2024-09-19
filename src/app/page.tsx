import { AccreditedNetworks } from "@/components/AccreditedNetworks";
import { Benefits } from "@/components/Benefits";
import { SectionDownload } from "@/components/SectionDownload";
import { Testimonials } from "@/components/Testimonials";

export default function Home() {
  return (
    <div>
      <Benefits />
      <AccreditedNetworks />
      <SectionDownload />
      <Testimonials />
    </div>
  );
}
