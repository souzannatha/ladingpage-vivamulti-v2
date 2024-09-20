import Image from "next/image";

export function FinalCall() {
  return (
    <div className="m-auto mt-20 w-80 h-52">
      <div className="flex flex-col justify-center items-center">
        <h2 className="font-semibold text-xl text-blueCustom-blue05">
          Ainda tem dúvidas? <br /> Vamos conversar.
        </h2>
        <p className="font-medium text-base text-blueCustom-blue05 ml-14 mt-2">
          Se você tem alguma dúvida, sugestão ou até mesmo uma reclamação, entre
          em contato. Queremos te ouvir.
        </p>
        <button className="mt-10 px-4 py-2 bg-blueCustom-blue01 text-white rounded-lg">
          Mandar mensagem
        </button>
      </div>
      <div className="relative mt-20">
        <div className="absolute -left-12 w-screen h-full">
          <Image
            src="/symbols-top-finalcall.svg"
            alt="Simbolos juntos do viva multi"
            width={400}
            height={150}
          />
        </div>
        <div className="relative top-56">
          <p className="text-sm text-blueCustom-blue05 mb-4 ml-24">
            Quero fazer parte
          </p>
          <div>
            <h2 className="text-3xl text-blueCustom-blue01 font-bold">
              Prepare-se para uma nova experiência em saúde!
            </h2>
            <div className="flex justify-center mt-10">
              <button className="mt-4 px-4 py-2 bg-blueCustom-blue01 text-white rounded-lg ">
                Quero me cadastrar
              </button>
            </div>
            <div className="absolute -left-12 w-screen h-full mt-8">
              <Image
                src="/symbols-bottom-finalcall.svg"
                alt="Simbolos juntos do viva multi"
                width={530}
                height={230}
                className="relative top-28"
              />
              <Image
                src="/person-3.svg"
                alt="Simbolos juntos do viva multi"
                width={260}
                height={350}
                className="relative bottom-52 left-20"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
