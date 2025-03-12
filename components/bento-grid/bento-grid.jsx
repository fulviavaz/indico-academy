

export default function BentoGrid() {
  return (
      <div className="flex gap-3 items-center justify-center flex-wrap">
          <div className="h-[593px] 2xl:w-[379px] lg:w-[379px] md:w-[379px] w-[310px] rounded-xl bg-[url('/images/loyalty.png')] bg-cover bg-center no-repeat flex items-end pl-6 pb-6 transition-transform duration-300 hover:scale-105">
              <p className="text-[26px] font-medium text-white leading-tight">Loyalty</p></div>
          <div className="flex flex-col gap-3">
              <div className="h-[291px] 2xl:w-[379px] lg:w-[379px] md:w-[379px] w-[310px] rounded-xl bg-[url('/images/eng_finan.png')] bg-cover bg-center no-repeat flex items-end pl-6 pb-6 transition-transform duration-300 hover:scale-105">
                  <p className="text-[26px] font-medium text-white leading-tight">Engenharia Financeira</p></div>
               <div className="h-[291px] 2xl:w-[379px] lg:w-[379px] md:w-[379px] w-[310px] rounded-xl  bg-[url('/images/bench.png')] bg-cover bg-center no-repeat flex items-end pl-6 pb-6 transition-transform duration-300 hover:scale-105">
              <p className="text-[26px] font-medium text-white leading-tight">Benchmark</p></div>
          </div>
          <div className="flex flex-col gap-3 items-center justify-center">
              <div className="flex gap-3 items-center justify-center flex-wrap">
                  <div className="h-[291px] 2xl:w-[185px] lg:w-[185px] md:w-[185px] w-[310px] rounded-xl  bg-[url('/images/planejamento.png')] bg-cover bg-center no-repeat flex items-end pl-2 pb-6 transition-transform duration-300 hover:scale-105">
                      <p className="text-[26px] font-medium text-white leading-tight">Planejamento</p></div>
                   <div className="h-[291px] 2xl:w-[185px] lg:w-[185px] md:w-[185px] w-[310px] rounded-xl bg-[url('/images/tendencias.png')] bg-cover bg-center no-repeat flex items-end pl-4 pb-6 transition-transform duration-300 hover:scale-105">
                  <p className="text-[26px] font-medium text-white leading-tight">Tendências</p></div>
              </div>
              <div className="h-[291px] 2xl:w-[379px] lg:w-[379px] md:w-[379px] w-[310px] rounded-xl  bg-[url('/images/proposito.png')] bg-cover bg-center no-repeat flex items-end pl-4 pb-6 transition-transform duration-300 hover:scale-105">
                  <p className="text-[26px] font-medium text-white leading-tight">Propósito</p></div>
          </div>
          
    </div>
  );
}
