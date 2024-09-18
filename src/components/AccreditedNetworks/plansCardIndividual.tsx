import { SymbolCard } from "./symbol-card";

export function PlansCardIndividual() {
  return (
    <div className="relative bg-white w-80 h-96 border-2 border-blueCustom-blue05 rounded-lg mt-4 px-4 py-5 overflow-hidden">
      <div className="absolute top-4 right-4 z-20">
        <SymbolCard className="relative z-30 -top-8 -right-12" />
      </div>

      <h3 className="text-xl font-medium text-blueCustom-blue01 mt-2">Plano</h3>
      <h2 className="text-4xl font-bold text-blueCustom-blue01">Individual</h2>
      <p className="text-xl font-medium text-blueCustom-blue05 mt-6">
        A partir de <span className="font-bold">R$0,49</span> por dia. Consultas
        a <span className="font-bold">R$59,90</span>,<span>concierge 24h</span>,
        teleconsultas e muito mais.
      </p>
      <div className="flex justify-center mt-8">
        <button className="mt-4 px-4 py-2 bg-blueCustom-blue01 text-white rounded-lg ">
          Comprar
        </button>
      </div>
    </div>
  );
}
