import bali from "../assets/images-places/bali.png";
import novaYork from "../assets/images-places/nova-york.png";
import santorini from "../assets/images-places/santorini.png";
import paris from "../assets/images-places/paris.png";
import cidadeDoCabo from "../assets/images-places/cidade-do-cabo.png";
import munbai from "../assets/images-places/mumbai.png";

export function TopDestinationSection() {
  return (
    <section className="relative overflow-hidden py-20   md:bg-[url('/images/bg-top-destination.png')] md:bg-no-repeat">
      <div className=" flex flex-col items-center text-center mb-[60px]">
        <span className="font-medium bg-amber-400 rounded-full py-2.5 px-5  mb-2">
          Top Destinos
        </span>
        <h4 className="text-4xl md:text-5xl font-medium mb-3">
          Destinos mais procurados{" "}
        </h4>
        <p className="text-gray-400 mb-10">
          Confira os destinos mais procurados por nossos clientes nos últimos
          meses, <br /> qual seria o seu novo destino?
        </p>
        <span className="font-semibold text-white bg-[#1B2543] rounded-4xl py-4 px-5 max-w-[169px] mb-2 cursor-pointer">
          Conheça mais
        </span>
      </div>
      <div className="flex items-center justify-center ">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          <div className="flex items-end">
            <img src={bali} alt="Bali, Indonesia" className="bottom-0" />
          </div>
          <div>
            <img src={novaYork} alt="Nova York, Estados Unidos" />
          </div>
          <div className="flex items-end">
            <img src={santorini} alt="Santorini, Grecia" />
          </div>

          <div>
            <img src={paris} alt="Paris, França" />
          </div>
          <div>
            <img src={cidadeDoCabo} alt="Cidade do Cabo, Africa do Sul" />
          </div>
          <div>
            <img src={munbai} alt="Munbai, India" />
          </div>
        </div>
      </div>
    </section>
  );
}
