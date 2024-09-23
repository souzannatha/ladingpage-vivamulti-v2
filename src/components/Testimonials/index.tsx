import { TestimonialPerson } from "./testimonialsPerson";

export function Testimonials() {
  return (
    <section className="px-4 py-5 mt-20 xl:px-32">
      <div className="flex flex-col w-72 mt-16 relative xl:w-[1500px] xl:[750px]">
        <p className="text-sm text-blueCustom-blue05 xl:font-medium xl:text-xl">
          Depoimentos
        </p>
        <div className="flex items-end justify-between">
          <h2 className="text-3xl text-blueCustom-blue01 font-bold xl:text-5xl xl:mb-10">
            O que nossos clientes dizem
          </h2>
        </div>
        <div className="flex flex-col space-y-4 mt-8 xl:flex-row xl:space-y-0 xl:space-x-4 xl:justify-between xl:items-center ">
          <TestimonialPerson
            name="Maria Silva"
            retired="Aposentada - Londrina"
            description="O Cartão Viva Multi mudou a minha vida! Agora tenho acesso a saúde de qualidade sem gastar muito."
            photo="/person-1.svg"
          />
          <TestimonialPerson
            name="João Paulo"
            retired="Aposentado - Londrina"
            description="A rede de especialistas é incrível e o atendimento é sempre muito acolhedor."
            photo="/person-2.svg"
          />
        </div>
      </div>
    </section>
  );
}
