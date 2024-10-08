"use client";

import Image from "next/image";
import { CurvedFace } from "./curvedFace";
import { Hearth } from "./hearth";
import { Logo } from "./logo";
import { Menu } from "./menu";

import { useState } from "react";
import { Button } from "../Button.tsx/Button";

export function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header
      className="h-[800px] relative overflow-hidden xl"
      style={{ backgroundImage: `url("/background-image.svg")` }}
    >
      <nav className="grid grid-cols-3 items-center xl:px-10 px-4 py-5 mb-10">
        <div className="flex justify-start">
          <Logo />
        </div>
        <div className="hidden xl:flex xl:items-center xl:gap-12 justify-center">
          <a href="#" className="text-white text-sm font-semibold xl:text-base">
            Quem Somos
          </a>
          <a href="#" className="text-white text-sm font-semibold xl:text-base">
            Dúvidas Frequentes
          </a>
          <a href="#" className="text-white text-sm font-semibold xl:text-base">
            Rede de Parceiros
          </a>
        </div>

        <div className="hidden xl:flex justify-end space-x-4">
          <a href="https://api.whatsapp.com/send?phone=554399244494">
            <Button variant="primary">Quero ser parceiro</Button>
          </a>
          <a href="https://api.whatsapp.com/send?phone=554337721333">
            <Button variant="outline">Quero meu Cartão</Button>
          </a>
        </div>
        <button
          className="relative z-50 block p-2 xl:hidden justify-end "
          onClick={toggleMenu}
        >
          <div className="hidden space-y-2">
            <span
              className={`block w-4 h-0.5 transition-transform ${
                isOpen
                  ? "rotate-45 translate-y-2 bg-indigo-600 w-8 -translate-x-0"
                  : "bg-white"
              }`}
            />
            <span
              className={`block w-8 h-0.5 transition-opacity ${
                isOpen ? "opacity-0" : "bg-white"
              }`}
            />
            <span
              className={`block w-8 h-0.5 transition-transform ${
                isOpen
                  ? "-rotate-45 -translate-y-3 -translate-x-0 bg-indigo-600"
                  : "bg-white"
              }`}
            />
          </div>
        </button>

        <Menu isOpen={isOpen} />
      </nav>

      <div className="w-80 h-56 px-4 py-5 ml-4 relative xl:w-[525px] xl:h-[355px] xl:px-40">
        <div className="flex w-64 h-">
          <div className="absolute top-6 left-0 xl:left-36">
            <Hearth />
          </div>
          <h2 className="font-bold text-blue-400 ml-1 xl:text-xl xl:ml-2">
            Transforme sua saúde com o Cartão Viva Multi
          </h2>
        </div>
        <div className="w-[350px] h-60 mt-1 xl:w-[720px]">
          <h1 className="text-3xl font-bold text-white xl:text-6xl">
            O futuro da saúde <br /> está aqui!
          </h1>
          <p className="text-sm text-white mt-2 xl:text-lg">
            Descubra um novo jeito de cuidar da sua saúde com valores acessíveis
            e atendimento humanizado.
          </p>
          <a
            href="https://app.vivamultisaude.com.br/mobile-app"
            target="_blank"
          >
            <div className="flex items-center w-60 h-14 p-3 rounded-lg bg-white mt-6 xl:w-72 xl:h-16">
              <CurvedFace />
              <div className="ml-3">
                <p className="text-sm text-blueCustom-blue01 xl:text-base">
                  Cadastre-se agora
                </p>
                <p className="text-sm font-bold text-blueCustom-blue01 xl:text-lg">
                  e seja o primeiro a saber!
                </p>
              </div>
            </div>
          </a>
        </div>
      </div>
      <div className="relative w-full h-full ">
        <Image
          className="absolute mt-[75px] w-[350px] h-auto object-cover z-50 xl:-top-[464px] xl:left-[900px] xl:w-[600px] xl:h-[800px]"
          src="/family-header.svg"
          alt="Imagem de uma familia"
          width={350}
          height={475}
        />
        <Image
          className="absolute  mt-[75px] w-full h-auto object-cover xl:w-[1250px] xl:h-[1300px]  xl:-top-[450px] xl:left-[650px] "
          src="/symbol-header.svg"
          alt="Imagem de uma familia"
          width={530}
          height={530}
        />
        <a
          href="https://api.whatsapp.com/send?phone=554337721333"
          target="_blank"
        >
          <Image
            src="/icon-wpp.svg"
            alt="Imagem do whatsapp"
            width={60}
            height={60}
            className="absolute right-2 top-72 z-50 xl:right-20 xl:top-8"
          />
        </a>
      </div>
    </header>
  );
}
