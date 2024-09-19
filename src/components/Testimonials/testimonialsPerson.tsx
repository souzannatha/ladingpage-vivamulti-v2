import Image from "next/image";

interface TestimonialPersonProps {
  name: string;
  photo: string;
  description: string;
  retired: string;
}

export function TestimonialPerson({
  name,
  photo,
  description,
  retired,
}: TestimonialPersonProps) {
  return (
    <div className="flex items-center mt-14">
      <div className="relative">
        <Image
          width={38}
          height={38}
          alt="ícone de aspas"
          src="/quotes.svg"
          className="absolute -top-4 -left-4"
        />
        <Image
          width={600}
          height={1000}
          alt={`foto de ${name}`}
          src={photo}
          className="block"
        />
      </div>
      <div className="ml-6">
        <h2 className="font-bold text-lg text-blueCustom-blue05">{name}</h2>
        <p className="text-xs font-semibold text-blueCustom-blueBlack">
          {retired}
        </p>
        <p className="text-sm font-normal text-blueCustom-blue05 mt-2">
          {description}
        </p>
      </div>
    </div>
  );
}
