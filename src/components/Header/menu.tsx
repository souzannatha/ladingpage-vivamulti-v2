import { Button } from "../Button.tsx/Button";

type MenuProps = {
  isOpen: boolean;
};

export function Menu({ isOpen }: MenuProps) {
  return (
    <div>
      <div
        className={`fixed inset-0 bg-white transform ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        } transition-transform duration-300 ease-in-out z-40 xl:hidden`}
      >
        <div className="flex flex-col h-screen items-center space-y-4 mt-36">
          <a href="#" className="text-indigo-600 text-sm font-semibold">
            Quem Somos
          </a>
          <a href="#" className="text-indigo-600 text-sm font-semibold">
            Dúvidas Frequentes
          </a>
          <a href="#" className="text-indigo-600 text-sm font-semibold">
            Rede de Parceiros
          </a>
          <div className="flex flex-col mt-16">
            <Button>Quero ser parceiro</Button>
            <Button variant="secondary">Quero meu cartão</Button>
          </div>
        </div>
      </div>
    </div>
  );
}
