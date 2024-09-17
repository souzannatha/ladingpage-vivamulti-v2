"use client";

import Image from "next/image";
import { CurvedFace } from "./curvedFace";
import { Hearth } from "./hearth";
import { Logo } from "./logo";
import { Menu } from "./menu";

import { useState } from "react";

export function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header
      className="bg-sky-700 h-[800px] relative"
      style={{ backgroundImage: `url("/background-image.svg")` }}
    >
      <nav className="flex items-center justify-between px-4 py-5 mb-10">
        <Logo />
        <button className="relative z-50 block p-2 " onClick={toggleMenu}>
          <div className="space-y-2">
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
      <div className="w-80 h-56 px-4 py-5 ml-4 relative">
        <div className="flex">
          <div className="absolute top-6 left-0">
            <Hearth />
          </div>
          <h2 className="font-bold text-blue-400 ml-1 ">
            Transforme sua saúde <br />
            com o Cartão Viva Multi
          </h2>
        </div>
        <div className="w-[350px] h-56 mt-1">
          <h1 className="text-3xl font-bold text-white">
            O futuro da saúde <br /> está aqui!
          </h1>
          <p className="text-sm text-white mt-2">
            Descubra um novo jeito de cuidar da sua saúde com valores acessíveis
            e atendimento humanizado.
          </p>
          <div className="flex items-center w-60 h-14 p-3 rounded-lg bg-white mt-6">
            <CurvedFace />
            <div className="ml-3">
              <p className="text-sm text-blueCustom-blue01">
                Cadastre-se agora
              </p>
              <p className="text-sm font-bold text-blueCustom-blue01">
                e seja o primeiro a saber!
              </p>
            </div>
          </div>
        </div>
      </div>
      <Image
        className="mt-[75px]"
        src="/family-header.svg"
        width={800}
        height={800}
        alt="Imagem de uma familia"
      />
    </header>
  );
}
