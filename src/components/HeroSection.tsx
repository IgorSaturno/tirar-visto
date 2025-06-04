import { ArrowRight } from "lucide-react";
import { Navbar } from "./Navbar";
import videoImg from "../assets/clean-shot.png";
import heroImg from "../assets/hero.png";

export function HeroSection() {
  return (
    <section className="relative grid grid-cols-1 md:grid-cols-[1fr_1.5fr] gap-4 py-4 mx-4 md:mx-0 md:pl-16">
      <div>
        <Navbar />
        <div className="flex flex-col">
          <h1 className="text-4xl md:text-5xl font-medium leading-tight">
            Tire seu Visto conosco e não tenha nenhuma surpresa negativa!
          </h1>
          <hr className="border-gray-300 md:w-lg mt-8 mb-16" />

          <div className="grid grid-cols-1 md:grid-cols-[1.5fr_1fr]">
            <div className="space-y-8">
              <p className="text-gray-400">
                Com uma equipe altamente treinada, nós temos todos os
                procedimentos para que seu processo seja o mais tranquilo e
                rápido. Uma consultoria completa para você e sua família não ter
                nenhuma preocupação na sua viagem.
              </p>

              <button className="flex cursor-pointer gap-2 px-5  py-2.5 rounded-3xl bg-[#1B2543] text-white font-semibold">
                Saiba mais <ArrowRight size={24} />
              </button>
            </div>
            <div className="flex items-center justify-center ">
              <div className="flex flex-col gap-4 mt-24">
                <img src={videoImg} alt="CleanShot" className="w-auto" />

                <div className="flex gap-7 items-center">
                  <div>
                    <p className="text-base font-semibold">Conheça a Bruna</p>
                    <span className="text-gray-400 text-xs mt-1">
                      Ver vídeo
                    </span>
                  </div>
                  <div>
                    <button className="rounded-full bg-[#1B2543] cursor-pointer p-2 text-white">
                      <ArrowRight size={24} />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-24">
            <div className="text-start border-r border-gray-300 ">
              <p className="text-3xl font-medium text-gray-900">509</p>
              <p className="text-gray-400 text-base">Vistos Tirados</p>
            </div>
            <div className="text-start border-r border-gray-300 ">
              <p className="text-3xl font-medium text-gray-900">602</p>
              <p className="text-gray-400 text-base">Passaportes Tirados</p>
            </div>
            <div className="text-start">
              <p className="text-3xl font-medium text-gray-900">634</p>
              <p className="text-gray-400 text-base">Famílias Felizes</p>
            </div>
          </div>
        </div>
      </div>
      <div className="relative rounded-xl  flex items-center justify-center">
        <a href="#">
          <img
            src={heroImg}
            alt="Roda gigante"
            className="object-cover w-full max-w-[762px] h-full max-h-[900px]"
          />
        </a>
      </div>
    </section>
  );
}
