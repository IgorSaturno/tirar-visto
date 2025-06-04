import arrowUp from "../assets/arrow-up.png";

export function DoYouHaveAnQuestionSection() {
  return (
    <section className="pt-[70px] pb-[40px] px-4 md:px-16">
      <div className="grid grid-cols-1 md:grid-cols-2">
        <div className="mb-8 md:m-0">
          <p className="font-medium text-4xl md:text-5xl">
            Está com alguma dúvida?
          </p>
          <p className="text-gray-400 mt-3">
            Entre em contato através do nosso canal direto ao cliente através do
            botão abaixo
          </p>
          <button className="cursor-pointer w-full md:w-auto mt-10 text-white bg-[#1B2543] rounded-full px-5 py-4">
            Central de Atendimento
          </button>
        </div>
        <div className="flex items-center justify-end">
          <div className="flex justify-between w-full md:w-md md:h-16 border-b">
            <a href="#" className="text-3xl md:text-4xl pb-3.5">
              Receba novidades
            </a>
            <div>
              <img src={arrowUp} className="w-10" alt="seta para cima" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
