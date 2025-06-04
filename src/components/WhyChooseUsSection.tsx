import { ClockIcon, PhoneCallIcon } from "lucide-react";

export function WhyChooseUsSection() {
  return (
    <section className="relative bg-gray-100 py-8 md:py-16 px-4 md:px-16 overflow-hidden">
      <div>
        <div className="flex flex-col  justify-between gap-8">
          <h2 className="text-4xl md:text-5xl font-medium uppercase leading-tight">
            Consultoria Completa para <br /> tirar seu visto
          </h2>

          <span className="text-4xl md:text-5xl italic font-medium uppercase text-gray-800 text-right">
            Você esta em boas mãos!
          </span>
        </div>
      </div>

      <div className="absolute bottom-1/5 left-70 transform -rotate-10 hidden md:block">
        <div className="bg-white p-4 rounded-xl shadow-lg">
          <ClockIcon />
        </div>
      </div>

      <div className="absolute top-1/6 right-72 transform rotate-10 hidden md:block">
        <div className="bg-white p-4 rounded-xl shadow-lg">
          <PhoneCallIcon />
        </div>
      </div>
    </section>
  );
}
