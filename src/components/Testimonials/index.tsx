import { TestimonialPerson } from "./testimonialsPerson";

export function Testimonials() {
  return (
    <section className="px-4 py-5 mt-20">
      <div className="flex flex-col w-72 mt-16 relative">
        <p className="text-sm text-blueCustom-blue05">Nossos Planos</p>
        <div className="flex items-end justify-between">
          <h2 className="text-3xl text-blueCustom-blue01 font-bold">
            Planos que cabem no seu bolso
          </h2>
        </div>
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
    </section>
  );
}
