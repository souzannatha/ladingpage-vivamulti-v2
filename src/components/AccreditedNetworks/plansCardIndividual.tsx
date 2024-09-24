import { Button } from "../Button.tsx/Button";
import { SymbolCard } from "./symbol-card";

export function PlansCardIndividual() {
  return (
    <div className="relative bg-white w-80 h-96 border-2 border-blueCustom-blue05 rounded-lg mt-4 px-4 py-5 overflow-hidden xl:w-[350px] xl:h-[400px]">
      <div className="absolute top-4 right-4 z-20">
        <SymbolCard className="relative z-30 -top-8 -right-12" />
      </div>

      <h3 className="text-xl font-medium text-blueCustom-blue01 mt-2">Plano</h3>
      <h2 className="text-4xl font-bold text-blueCustom-blue01">Individual</h2>
      <p className="text-xl font-medium text-blueCustom-blue05 mt-16">
        A partir de <span className="font-bold">29,90 </span> por mês. Consultas
        a <span className="font-bold">R$59,90</span>,
        <span className="font-bold">hospitais 24h</span> teleconsultas e muito
        mais.
      </p>
      <div className="flex justify-center mt-8">
        <a href="https://api.whatsapp.com/send?phone=554337721333">
          <Button variant="primary">Assinar Agora</Button>
        </a>
      </div>
    </div>
  );
}
