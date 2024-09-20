import Image from "next/image";

export function FinalCall() {
  return (
    <div className="m-auto mt-20 w-80 h-auto">
      <div className="flex flex-col justify-center items-center">
        <h2 className="font-semibold text-xl text-blueCustom-blue05 text-center">
          Ainda tem dúvidas? <br /> Vamos conversar.
        </h2>
        <p className="font-medium text-base text-blueCustom-blue05 mt-2 text-center">
          Se você tem alguma dúvida, sugestão ou até mesmo uma reclamação, entre
          em contato. Queremos te ouvir.
        </p>
        <button className="mt-10 px-4 py-2 bg-blueCustom-blue01 text-white rounded-lg">
          Mandar mensagem
        </button>
      </div>

      {/* Símbolos pegando a largura total da tela */}
      <div className="w-screen mt-16 flex justify-center ">
        <Image
          src="/symbols-top-finalcall.svg"
          alt="Símbolos juntos do Viva Multi"
          width={1440}
          height={150}
          className="object-cover mr-24"
        />
      </div>

      <div className="mt-10 text-center">
        <p className="text-sm text-blueCustom-blue05 mb-4">Quero fazer parte</p>
        <h2 className="text-3xl text-blueCustom-blue01 font-bold">
          Prepare-se para uma nova experiência em saúde!
        </h2>
        <button className="mt-6 px-4 py-2 bg-blueCustom-blue01 text-white rounded-lg">
          Quero me cadastrar
        </button>
      </div>

      <div className="w-screen flex justify-center items-center mt-28 relative">
        <Image
          src="/symbols-bottom-finalcall.svg"
          alt="Símbolos juntos do Viva Multi"
          width={1440}
          height={230}
          className="object-cover mr-24"
        />

        <Image
          src="/person-3.svg"
          alt="Pessoa Viva Multi"
          width={260}
          height={350}
          className="absolute -top-20 mr-24"
        />
      </div>
    </div>
  );
}
