import { AccreditedNetworks } from "@/components/AccreditedNetworks";
import { Benefits } from "@/components/Benefits";
import { SectionDownload } from "@/components/SectionDownload";

export default function Home() {
  return (
    <div>
      <Benefits />
      <AccreditedNetworks />
      <SectionDownload />
    </div>
  );
}
