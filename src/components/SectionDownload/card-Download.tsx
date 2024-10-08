import Image from "next/image";

interface CardDownloadProps {
  plataform: string;
  icon: string;
  variant?: "default" | "outline";
}

export function CardDownload({
  plataform,
  icon,
  variant = "default",
}: CardDownloadProps) {
  return (
    <div
      className={`w-32 h-12 rounded-lg flex justify-center items-center z-10 ${
        variant === "outline"
          ? "border-2 border-blueCustom-blue06 bg-white"
          : "bg-blueCustom-blue01"
      }`}
    >
      <div className="flex gap-2 items-center">
        <Image
          src={icon}
          width={20}
          height={20}
          alt="ícone da plataforme de download"
        />
        <div className="flex flex-col items-start">
          <span
            className={`text-xs ${
              variant === "outline" ? "text-blueCustom-blue06" : "text-white"
            }`}
          >
            Download via
          </span>
          <p
            className={`font-bold text-sm ${
              variant === "outline" ? "text-blueCustom-blue06" : "text-white"
            }`}
          >
            {plataform}
          </p>
        </div>
      </div>
    </div>
  );
}
