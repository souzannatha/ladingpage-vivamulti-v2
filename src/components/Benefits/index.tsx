import { ArrowLeft } from "lucide-react";
import { ArrowRight } from "lucide-react";
import { EmblaCarousel } from "./carousel";
import { BenefitsCard } from "./benefitsCard";

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
      <div className="flex mt-4 gap-2 overflow-x-scroll">
        <BenefitsCard
          icon="/person-icon.svg"
          title="Atendimento Humanizado"
          description="Receba atendimento personalizado e acolhedor, sempre."
          alt="icone"
        />
        <BenefitsCard
          icon="/plans-icon.svg"
          title="Planos Acessíveis"
          description="Escolha entre planos gratuitos e premium, a partir de R$0,19 por dia."
          alt="icone"
        />
        <BenefitsCard
          icon="/networking-icon.svg"
          title="Rede Credenciada"
          description="Acesse uma ampla rede de clínicas, hospitais e especialistas."
          alt="icone"
        />
        <BenefitsCard
          icon="/percent-icon.svg"
          title=" Descontos Exclusivos"
          description="Aproveite descontos em exames, consultas e medicamentos."
          alt="icone"
        />
      </div>
    </section>
  );
}
