interface PackageCardProps {
  imageSrc: string;
  title: string;
  attendanceType: string;
  time: string;
  price: string;

  onContractClick?: () => void;
}

export function PackageCard({
  imageSrc,
  title,
  attendanceType,
  time,
  price,
  onContractClick,
}: PackageCardProps) {
  return (
    <div className="flex-shrink-0 w-72 sm:w-80 md:w-[424px] p-3 md:p-4 border border-gray-200 rounded-3xl shadow-md overflow-hidden">
      <div className="overflow-hidden mb-8">
        <img
          src={imageSrc}
          alt={title}
          className="w-full h-full object-cover rounded-3xl"
        />
      </div>
      <div className="flex gap-4">
        <span className="px-4 md:px-5 py-1 md:py-1.5 font-semibold border rounded-full border-slate-900 text-slate-900">
          Basic
        </span>
        <span className="px-4 md:px-5 py-1 md:py-1.5 font-semibold border rounded-full border-gray-300 text-gray-300">
          Premium
        </span>
      </div>
      <div>
        <h6 className="font-semibold text-2xl md:text-[28px]  pt-5 pb-4">
          {title}
        </h6>
        <div className="pb-4 grid grid-cols-2 border-b border-gray-200">
          <div>
            <p className="font-medium mb-2">Atendimento</p>
            <p className="text-gray-400">{attendanceType}</p>
          </div>
          <div>
            <p className="font-medium mb-2">Tempo</p>
            <p className="text-gray-400">{time}</p>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 mt-5">
          <div className="flex flex-col">
            <span className="text-gray-400">A partir de</span>
            <p className="font-semibold text-2xl md:text-3xl text-gray-900">
              {price}
            </p>
          </div>
          <div className="flex md:items-center justify-end p-1.5">
            <button
              onClick={onContractClick}
              className="text-white font-semibold rounded-full cursor-pointer bg-[#1B2543] w-full md:w-auto px-4 py-3 md:px-5 md:py-4"
            >
              Contratar
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
