import { ArrowLeft } from "lucide-react";
import { ArrowRight } from "lucide-react";
import { EmblaCarousel } from "./carousel";

const videoUrls = [
  "https://s3viva.s3.us-east-2.amazonaws.com/assets/video01.mp4",
  "https://s3viva.s3.us-east-2.amazonaws.com/assets/video02.mp4",
  "https://s3viva.s3.us-east-2.amazonaws.com/assets/video03.mp4",
  "https://s3viva.s3.us-east-2.amazonaws.com/assets/video04.mp4",
];

export function Benefits() {
  return (
    <section className="px-4 py-5 mt-20">
      <p className="text-sm text-blueCustom-blue05">Benefícios Exclusivos</p>
      <div className="flex items-end">
        <h2 className="text-3xl text-blueCustom-blue01 font-bold">
          Por que escolher o Cartão Viva Multi
        </h2>
        <div className="flex gap-1">
          <ArrowLeft className="text-blueCustom-blue04" />
          <span className="bg-blueCustom-blue02 w-3 h-1 mt-6"></span>
          <ArrowRight className="text-blueCustom-blue01" />
        </div>
      </div>
      <EmblaCarousel videos={videoUrls} />
    </section>
  );
}
