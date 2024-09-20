import Image from "next/image";
import { CardDownload } from "./card-Download";
import { Celphone } from "./celphone";

export function SectionDownload() {
  return (
    <div className="w-80 h-[510px] mt-24 m-auto py-4 px-6 bg-cyan-500 rounded-3xl">
      <h2 className="font-medium text-2xl text-white mt-6 w-64">
        Baixe o nosso app agora e seja o primeiro a aproveitar todos os
        benefícios do Cartão Viva Multi!
      </h2>
      <div className="flex justify-between items-center mt-4 w-64 gap-2">
        <CardDownload
          plataform="Apple Store"
          icon="/apple-icon.svg"
          variant="default"
        />
        <CardDownload
          plataform="Google Play"
          icon="/googleplay-icon.svg"
          variant="default"
        />
      </div>
      <div className="relative mt-8">
        <div className="flex justify-center items-center">
          <Image
            width={320}
            height={320}
            src="/vivamuti-icon-blue.svg"
            alt="ícone do viva multi"
            className="absolute top-[7px] w-80 object-contain z-0"
          />
        </div>
        <div className="absolute top-[-90px] w-full flex justify-center z-10">
          <Celphone />
        </div>
      </div>
    </div>
  );
}
