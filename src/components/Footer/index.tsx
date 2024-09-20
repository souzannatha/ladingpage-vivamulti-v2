import { Mail, Phone } from "lucide-react";
import { SymbolFooter } from "./symbolFooter";
import {} from "@radix-ui/react-icons";
import { Instagram } from "./instagram";
import { Linkedin } from "./linkedin";
import { Facebook } from "./facebook";
import { CardDownload } from "../SectionDownload/card-Download";

export function Footer() {
  return (
    <footer className="relative">
      {/* Linha separadora superior */}
      <div className="absolute top-0 left-0 w-screen h-[2px] bg-blueCustom-blue04"></div>

      <div className="w-64 h-36 px-4 py-5 mt-10 relative z-10">
        <SymbolFooter />
        <p className="font-regular text-blueCustom-blueBlack text-base mt-6">
          <span className="font-bold">VIVA MULTI</span> é um cartão
          assistencial, um jeito moderno, digital e acessível de verdade para
          fazer consultas, exames e outros procedimentos.
        </p>

        <h2 className="font-semibold text-xl text-blueCustom-blue01 mt-14">
          Institucional
        </h2>
        <ul className="mt-4 text-blueCustom-blueBlack font-semibold text-base">
          <li className="mb-3">Sobre Nós</li>
          <li className="mb-3">Planos</li>
          <li className="mb-3">Contato</li>
          <li className="mb-3">FAQ</li>
        </ul>

        <h2 className="font-semibold text-xl text-blueCustom-blue01 mt-10">
          Contato
        </h2>
        <ul className="mt-4 text-blueCustom-blueBlack font-semibold text-base">
          <li className="flex items-center mb-4">
            <div className="mr-2">
              <Mail size={20} color="#522AF9" />
            </div>
            contato@vivamultisaude.com.br
          </li>
          <li className="flex items-center">
            <div className="mr-2">
              <Phone size={20} color="#522AF9" />
            </div>
            SAC: (43) 3772-1333
          </li>
        </ul>

        <div className="flex items-center gap-8 mt-8">
          <Instagram />
          <Linkedin />
          <Facebook />
        </div>

        <h2 className="font-semibold text-xl text-blueCustom-blue01 mt-10">
          Baixe o nosso App
        </h2>
        <div className="flex items-center justify-between">
          <div className="mt-10 flex flex-col gap-3">
            <CardDownload
              variant="outline"
              icon="/apple-icon-purple.svg"
              plataform="Apple Store"
            />
            <CardDownload
              variant="outline"
              icon="/googleplay-icon-purple.svg"
              plataform="Google Play"
            />
          </div>
        </div>

        <div className="absolute">
          <div className="relative -left-4 top-0 w-screen h-[2px] mt-10 bg-blueCustom-blue04"></div>
          <p className="font-medium text-sm text-blueCustom-blueBlack whitespace-nowrap text-center mt-8 mb-5">
            Viva Multi ® 2024 • Todos os direitos reservados
          </p>
        </div>
      </div>
    </footer>
  );
}
