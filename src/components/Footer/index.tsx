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
      <div className="w-full h-[2px] bg-blueCustom-blue04"></div>
      <div className="w-full px-4 py-5 mt-10 relative z-10 xl:flex xl:flex-row xl:justify-between xl:items-start xl:mt-36">
        <div className="flex-1 xl:mr-10">
          <SymbolFooter />
          <p className="font-regular text-blueCustom-blueBlack text-base mt-6">
            <span className="font-bold">VIVA MULTI</span> é um cartão
            assistencial, um jeito moderno, digital e acessível de verdade para
            fazer consultas, exames e outros procedimentos.
          </p>
        </div>

        <div className="flex-1 xl:mr-10">
          <h2 className="font-semibold text-xl text-blueCustom-blue01 mt-14 xl:mt-0">
            Institucional
          </h2>
          <ul className="mt-4 text-blueCustom-blueBlack font-semibold text-base">
            <li className="mb-3">Sobre Nós</li>
            <li className="mb-3">Planos</li>
            <li className="mb-3">Contato</li>
            <li className="mb-3">FAQ</li>
          </ul>
        </div>

        <div className="flex-1 xl:mr-10">
          <h2 className="font-semibold text-xl text-blueCustom-blue01 mt-10 xl:mt-0">
            Contato
          </h2>
          <ul className="mt-4 text-blueCustom-blueBlack font-semibold text-base">
            <li className="flex items-center mb-4">
              <Mail size={20} color="#522AF9" className="mr-2" />
              contato@vivamultisaude.com.br
            </li>
            <li className="flex items-center">
              <Phone size={20} color="#522AF9" className="mr-2" />
              SAC: (43) 3772-1333
            </li>
          </ul>
          <div className="flex items-center gap-8 mt-8">
            <a href="https://www.instagram.com/cartaovivamulti/">
              <Instagram />
            </a>
            <a href="https://www.linkedin.com/company/cart%C3%A3o-viva-multi/mycompany/">
              <Linkedin />
            </a>
            <Facebook />
          </div>
        </div>

        <div className="flex-1">
          <h2 className="font-semibold text-xl text-blueCustom-blue01 mt-10 xl:mt-0">
            Baixe o nosso App
          </h2>
          <div className="mt-10 flex flex-col gap-3">
            <a href="https://apps.apple.com/br/app/cart%C3%A3o-viva-multi/id6479454545">
              <CardDownload
                plataform="Apple Store"
                icon="/icon-apple-purple.svg"
                variant="outline"
              />
            </a>
            <a href="https://play.google.com/store/apps/details?id=com.app.vivamultisaude&hl=pt&gl=US">
              <CardDownload
                plataform="Google Play"
                icon="/icon-googleplay-purple.svg"
                variant="outline"
              />
            </a>
          </div>
        </div>
      </div>

      <div className="absolute w-full left-0 mt-10">
        <div className="w-full h-[2px] bg-blueCustom-blue04"></div>
        <p className="font-medium text-sm text-blueCustom-blueBlack whitespace-nowrap text-center mt-8 mb-5">
          Viva Multi ® 2024 • Todos os direitos reservados
        </p>
      </div>
    </footer>
  );
}
