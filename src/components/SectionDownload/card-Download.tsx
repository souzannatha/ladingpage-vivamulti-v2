import Image from "next/image";

interface CardDownloadProps {
  plataform: string;
  icon: string;
}

export function CardDownload({ plataform, icon }: CardDownloadProps) {
  return (
    <div className="w-32 h-12 bg-blueCustom-blue01 rounded-sm flex justify-center items-center z-10">
      <div className="flex gap-2 items-center">
        <Image
          src={icon}
          width={20}
          height={20}
          alt="ícone da plataforme de download"
        />
        <div className="flex flex-col items-start">
          <span className="text-xs text-white">Download via</span>
          <p className="font-bold text-sm text-white">{plataform}</p>
        </div>
      </div>
    </div>
  );
}
