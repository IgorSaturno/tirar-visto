import { PlusIcon } from "lucide-react";
import happyTourist from "../assets/happy-tourist-sightseeing-city-with-map.png";

export function HowWorksSection() {
  return (
    <section className="relative overflow-hidden px-4 py-8 md:px-16 md:py-16">
      <div className="mb-3">
        <span className="text-base font-medium bg-amber-400 rounded-3xl py-2.5 px-5 max-w-[169px]">
          Veja como funciona
        </span>
      </div>
      <div className=" grid grid-cols-1 md:grid-cols-[1fr_2fr]  mb-[60px]">
        <div>
          <h3 className="text-4xl md:text-5xl font-medium  py-2">
            Sua tranquilidade não tem preço!
          </h3>
        </div>
        <div className="py-6 text-gray-400">
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged.
          </p>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-[1.2fr_1fr]">
        <div>
          <img
            src={happyTourist}
            alt="Happy tourist sightseeing city with map"
            className="w-full max-w-[756px] h-full  max-h-[444px]"
          />
        </div>
        <div>
          <div className="py-5 px-3 border-b border-gray-300">
            <span className="text-4xl md:text-[44px] font-medium">
              Etapa Inicial
            </span>
            <p className="text-gray-400 mt-3">
              Lorem Ipsum is simply dummy text of the printing and typesetting{" "}
              <br />
              industry.{" "}
            </p>
          </div>
          <div className="py-5 px-3 border-b border-gray-300">
            <span className="text-4xl md:text-[44px] font-medium">
              Processo de Entrevista
            </span>
            <button className="flex cursor-pointer pt-2 gap-2 font-medium">
              <PlusIcon size={24} /> Leia mais
            </button>
          </div>
          <div className="py-5 px-3 border-b border-gray-300">
            <span className="text-4xl md:text-[44px] font-medium">
              Entrega de Documentos
            </span>
            <button className="flex cursor-pointer pt-2 gap-2 font-medium">
              <PlusIcon size={24} /> Leia mais
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
