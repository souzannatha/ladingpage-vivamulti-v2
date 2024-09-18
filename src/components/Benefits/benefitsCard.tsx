import Image from "next/image";

interface BenefitsCardProps {
  title: string;
  description: string;
  icon: string;
  alt: string;
}

export function BenefitsCard({
  title,
  description,
  icon,
  alt,
}: BenefitsCardProps) {
  return (
    <div className="w-56 h-56 p-8 bg-gradient-to-t from-white to-blueCustom-blue04 rounded-md flex flex-col items-start justify-start">
      <div className="mt-1">
        <Image
          src={icon}
          width={55}
          height={55}
          alt={alt}
          className="object-contain"
        />
      </div>
      <h3 className="font-bold text-xl text-blueCustom-blue01 text-left mt-2">
        {title}
      </h3>
      <p className="font-medium text-sm text-blueCustom-blue05 text-left mt-3">
        {description}
      </p>
    </div>
  );
}
