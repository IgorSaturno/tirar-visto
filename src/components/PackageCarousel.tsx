import passport from "../assets/images-packages/passport.png";
import passportVisto from "../assets/images-packages/passpor-visto.png";
import consult from "../assets/images-packages/consult.png";
import { useEffect, useRef, useState } from "react";
import { PackageCard } from "./PackageCard";
import { ArrowLeft, ArrowRight } from "lucide-react";

interface Package {
  id: number;
  imageSrc: string;
  title: string;
  attendanceType: string;
  time: string;
  price: string;
}

const packages: Package[] = [
  {
    id: 1,
    imageSrc: passport,
    title: "Passaporte",
    attendanceType: "On-line",
    time: "45 dias",
    price: "R$ 890,00",
  },
  {
    id: 2,
    imageSrc: passportVisto,
    title: "Passaporte + Visto",
    attendanceType: "On-line + Presencial",
    time: "25 dias",
    price: "R$ 1.290,00",
  },
  {
    id: 3,
    imageSrc: consult,
    title: "Consultoria Completa",
    attendanceType: "Presencial Completo",
    time: "10 dias",
    price: "R$ 1.890,00",
  },
];

export function PackageCarousel() {
  const carouselRef = useRef<HTMLDivElement | null>(null);

  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(false);

  function handleScroll(direction: "left" | "right") {
    const container = carouselRef.current;
    if (!container) return;

    // Lê a largura do primeiro card (considerando padding/border)
    const firstChild = container.firstElementChild as HTMLElement | null;
    const cardWidth = firstChild ? firstChild.getBoundingClientRect().width : 0;
    // Gap horizontal entre cards: usamos space-x-4 → 1rem = 16px
    const gap = 24;

    const scrollAmount =
      direction === "left" ? -(cardWidth + gap) : cardWidth + gap;

    container.scrollBy({
      left: scrollAmount,
      behavior: "smooth",
    });
  }

  function checkScroll() {
    const container = carouselRef.current;
    if (!container) return;

    setCanScrollLeft(container.scrollLeft > 0);
    setCanScrollRight(
      container.scrollLeft + container.clientWidth < container.scrollWidth
    );
  }

  useEffect(() => {
    const container = carouselRef.current;
    if (!container) return;

    container.addEventListener("scroll", checkScroll);

    checkScroll();

    return () => {
      container.removeEventListener("scroll", checkScroll);
    };
  }, []);

  return (
    <section className="px-4 py-8 md:py-16 md:px-16 bg-white">
      <div className="container mx-auto">
        <div className="flex items-center justify-between mb-16">
          <div>
            <span className="font-medium bg-amber-400 rounded-full py-2.5 px-5">
              Pacotes
            </span>
            <h2 className="mt-4 text-4xl md:text-5xl font-medium text-gray-900">
              Confira nossos pacotes
            </h2>
          </div>

          <div className="flex space-x-2">
            <button
              onClick={() => handleScroll("left")}
              disabled={!canScrollLeft}
              className={`
                h-10 w-10 cursor-pointer flex items-center justify-center rounded-full border border-gray-300 text-gray-600 
                ${!canScrollLeft ? "opacity-40 cursor-not-allowed" : "hover:bg-gray-100"} 
                transition
              `}
              aria-label="Scroll Left"
            >
              <ArrowLeft size={24} />
            </button>

            <button
              onClick={() => handleScroll("right")}
              disabled={!canScrollRight}
              className={`
                h-10 w-10 flex items-center justify-center rounded-full bg-[#1B2543] text-white 
                ${!canScrollRight ? "opacity-40 cursor-not-allowed" : "hover:bg-[#131A34]"} 
                transition
              `}
              aria-label="Scroll Right"
            >
              <ArrowRight size={24} />
            </button>
          </div>
        </div>

        <div
          ref={carouselRef}
          className="flex space-x-4 overflow-x-auto no-scrollbar pb-2"
        >
          {packages.map((pacote) => (
            <PackageCard
              key={pacote.id}
              imageSrc={pacote.imageSrc}
              title={pacote.title}
              attendanceType={pacote.attendanceType}
              time={pacote.time}
              price={pacote.price}
              onContractClick={() => {
                alert(`Você clicou em Contratar: ${pacote.title}`);
              }}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
