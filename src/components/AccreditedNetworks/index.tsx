import Image from "next/image";
import { EmblaCarousel } from "../Benefits/carousel";
import { PlansCardFamily } from "./plansCardFamily";
import { PlansCardIndividual } from "./plansCardIndividual";

export function AccreditedNetworks() {
  const images = [
    "/hospital-icon.svg",
    "ultramed-icon.svg",
    "alphasonic-icon.svg",
  ];

  return (
    <div className="mt-20 bg-blueCustom-blue06">
      <div className="px-4 py-5">
        <div className="flex flex-col w-64 mt-16">
          <p className="text-sm text-white">Parceiros</p>
          <div className="flex items-end">
            <h2 className="text-3xl text-white font-bold">
              Redes credenciadas
            </h2>
          </div>
        </div>
        <EmblaCarousel options={{}}>
          {images.map((imageSrc, index) => (
            <div className="embla__slide flex-none w-64 h-28" key={index}>
              <Image
                className="w-full h-full object-cover rounded-lg"
                src={imageSrc}
                alt={`Slide ${index}`}
                width={80}
                height={80}
              />
            </div>
          ))}
        </EmblaCarousel>
      </div>
      <div className="bg-gradient-to-b from-blueCustom-blue01 to-blueCustom-blue06 py-10 px-4">
        <div className="flex flex-col w-72 mt-16">
          <p className="text-sm text-white">Nossos Planos</p>
          <div className="flex items-end">
            <h2 className="text-3xl text-white font-bold">
              Planos que cabem no seu bolso
            </h2>
          </div>
        </div>
        <PlansCardFamily />
        <PlansCardIndividual />
      </div>
    </div>
  );
}
