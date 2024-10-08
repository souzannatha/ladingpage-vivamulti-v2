import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "../Button.tsx/Button";

export function FaqSection() {
  return (
    <section className="px-4 py-5 mt-20">
      <div className="flex flex-col xl:flex-row w-full xl:items-center xl:justify-center">
        <div className="flex flex-col w-72 mt-16">
          <p className="text-sm text-blueCustom-blue05 xl:text-xl">FAQ</p>
          <div className="flex items-end justify-between">
            <h2 className="text-3xl text-blueCustom-blue01 font-bold xl:text-6xl">
              Dúvidas <br /> frequentes
            </h2>
          </div>
          <div className="mt-6">
            <h2 className="font-semibold text-xl text-blueCustom-blue05 xl:mt-2 xl:mb-4">
              Ainda tem Dúvidas? <br /> Vamos Conversar.
            </h2>
            <p className="font-medium text-base text-blueCustom-blue05 mb-4">
              Se você tem alguma dúvida, sugestão ou até mesmo uma reclamação,
              entre em contato. Queremos te ouvir.
            </p>
            <Button variant="secondary">Mandar Mensagem</Button>
          </div>
        </div>

        <div className="mt-6 xl:ml-16 xl:flex-1 xl:w-full xl:max-w-[1000px]">
          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="item-1">
              <AccordionTrigger>
                Como funciona o Cartão Viva Multi?
              </AccordionTrigger>
              <AccordionContent>
                O cartão oferece acesso a uma rede de clínicas e hospitais, além
                de descontos em consultas e exames.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2">
              <AccordionTrigger>
                Quais são os planos disponíveis?
              </AccordionTrigger>
              <AccordionContent>
                Oferecemos dois planos: o Plano Individual, destinado a uma
                única pessoa, e o Plano Familiar, que permite a inclusão de até
                3 dependentes, sejam eles cônjuges, filhos, pais ou sogros.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-3">
              <AccordionTrigger>Como faço para me cadastrar?</AccordionTrigger>
              <AccordionContent>
                Instale nosso aplicativo na App Store ou na Google Play
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-4">
              <AccordionTrigger>
                Existe um limite de uso do cartão?
              </AccordionTrigger>
              <AccordionContent>
                Não há um limite de uso para o cartão Viva Multi + Saúde. Os
                titulares podem usufruir dos descontos em serviços de saúde
                quantas vezes precisarem, respeitando as condições de cada
                serviço ou prestador credenciado.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-5">
              <AccordionTrigger>
                Posso usar o cartão após a adesão?
              </AccordionTrigger>
              <AccordionContent>
                Após a confirmação da adesão e processamento do seu pagamento,
                você receberá uma confirmação que permite começar a usar o
                cartão Viva Multi + Saúde imediatamente em nossa rede
                credenciada.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </div>
    </section>
  );
}
