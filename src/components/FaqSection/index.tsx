import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export function FaqSection() {
  return (
    <section className="px-4 py-5 mt-20">
      <div className="flex flex-col w-72 mt-16 relative">
        <p className="text-sm text-blueCustom-blue05">FAQ</p>
        <div className="flex items-end justify-between">
          <h2 className="text-3xl text-blueCustom-blue01 font-bold">
            Dúvidas <br /> frequentes
          </h2>
        </div>
      </div>
      <Accordion type="single" collapsible>
        <AccordionItem value="item-1">
          <AccordionTrigger>
            Como funciona o Cartão Viva Multi?
          </AccordionTrigger>
          <AccordionContent>
            O cartão oferece acesso a uma rede de clínicas e hospitais, além de
            descontos em consultas e exames.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-2">
          <AccordionTrigger>Quais são os planos disponíveis?</AccordionTrigger>
          <AccordionContent>
            O cartão oferece acesso a uma rede de clínicas e hospitais, além de
            descontos em consultas e exames.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-3">
          <AccordionTrigger>Como faço para me cadastrar?</AccordionTrigger>
          <AccordionContent>
            O cartão oferece acesso a uma rede de clínicas e hospitais, além de
            descontos em consultas e exames.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-4">
          <AccordionTrigger>
            Existe um limite de uso do cartão?
          </AccordionTrigger>
          <AccordionContent>
            O cartão oferece acesso a uma rede de clínicas e hospitais, além de
            descontos em consultas e exames.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-5">
          <AccordionTrigger>
            Posso usar o cartão imediatamente após a adesão?
          </AccordionTrigger>
          <AccordionContent>
            O cartão oferece acesso a uma rede de clínicas e hospitais, além de
            descontos em consultas e exames.
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </section>
  );
}
