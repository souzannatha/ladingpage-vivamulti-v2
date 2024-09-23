import Image from "next/image";
import { EmblaCarousel } from "../Benefits/carousel";
import { PlansCardFamily } from "./plansCardFamily";
import { PlansCardIndividual } from "./plansCardIndividual";

export function AccreditedNetworks() {
  const images = [
    "/hospital-icon.svg",
    "/hospital-icon.svg",
    "ultramed-icon.svg",
    "ultramed-icon.svg",
    "alphasonic-icon.svg",
    "alphasonic-icon.svg",
  ];

  return (
    <div className="mt-20 bg-blueCustom-blue06">
      <div className="px-4 py-5 xl:px-32">
        <div className="flex flex-col w-64 mt-16 ">
          <p className="text-sm text-white xl:text-xl">Parceiros</p>
          <div className="flex items-end">
            <h2 className="text-3xl text-white font-bold xl:text-5xl">
              Redes credenciadas
            </h2>
          </div>
        </div>
        <EmblaCarousel options={{}}>
          {images.map((imageSrc, index) => (
            <div
              className="embla__slide flex-none w-64 h-28 xl:w-96 xl:h-40"
              key={index}
            >
              <Image
                className="w-full h-full object-cover rounded-lg xl:w-96 xl:h-40"
                src={imageSrc}
                alt={`Slide ${index}`}
                width={80}
                height={80}
              />
            </div>
          ))}
        </EmblaCarousel>
      </div>
      <div className="bg-gradient-to-b from-blueCustom-blue01 to-blueCustom-blue06 py-10 px-4  xl:px-32">
        <div className="flex flex-col w-72 mt-16 xl:w-[800px]">
          <p className="text-sm text-white xl:font-medium xl:text-xl ">
            Nossos Planos
          </p>
          <div className="flex items-end">
            <h2 className="text-3xl text-white font-bold xl:text-5xl">
              Planos que cabem no seu bolso
            </h2>
          </div>
        </div>
        <div className="flex flex-row items-center">
          <Image
            src="women-1.svg"
            className="hidden xl:block xl:mr-8"
            width={550}
            height={630}
            alt="imagem de uma mulher segurando o celular"
          />
          <div className="flex flex-col gap-8 xl:flex-row">
            <PlansCardFamily />
            <PlansCardIndividual />
          </div>
        </div>
      </div>
    </div>
  );
}
