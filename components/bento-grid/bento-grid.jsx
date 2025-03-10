import Image from "next/image";

// const items = [
//   { title: "Loyalty", image: "/images/loyalty.png", cols: "col-span-2", rows: "row-span-1" },
//   { title: "Engenharia Financeira", image: "/images/eng_finan.png", cols: "col-span-1", rows: "row-span-1" },
//   { title: "Planejamento", image: "/images/planejamento.png", cols: "col-span-1", rows: "row-span-1" },
//   { title: "Tendências", image: "/images/tendencias.png", cols: "col-span-1", rows: "row-span-2" },
//   { title: "Benchmark", image: "/images/bench.png", cols: "col-span-1", rows: "row-span-1" },
//   { title: "Propósito", image: "/images/proposito.png", cols: "col-span-2", rows: "row-span-1" },
// ];

export default function BentoGrid() {
  return (
      <div className="flex gap-3 items-center justify-center">
          <div className="h-[593px] w-[379px] bg-[url('/images/loyalty.png')] bg-cover bg-center no-repeat flex items-end pl-6 pb-6">
              <p className="text-[26px] font-medium text-white leading-tight">Loyalty</p></div>
          <div className="flex flex-col gap-3">
              <div className="h-[291px] w-[379px] bg-[url('/images/eng_finan.png')] bg-cover bg-center no-repeat flex items-end pl-6 pb-6">
                  <p className="text-[26px] font-medium text-white leading-tight">Engenharia Financeira</p></div>
               <div className="h-[291px] w-[379px] bg-[url('/images/bench.png')] bg-cover bg-center no-repeat flex items-end pl-6 pb-6">
              <p className="text-[26px] font-medium text-white leading-tight">Benchmark</p></div>
          </div>
          <div className="flex flex-col gap-3">
              <div className="flex gap-3">
                  <div className="h-[291px] w-[185px] bg-[url('/images/planejamento.png')] bg-cover bg-center no-repeat flex items-end pl-2 pb-6">
                      <p className="text-[26px] font-medium text-white leading-tight">Planejamento</p></div>
                   <div className="h-[291px] w-[185px] bg-[url('/images/tendencias.png')] bg-cover bg-center no-repeat flex items-end pl-4 pb-6">
                  <p className="text-[26px] font-medium text-white leading-tight">Tendências</p></div>
              </div>
              <div className="h-[291px] w-[379px] bg-[url('/images/proposito.png')] bg-cover bg-center no-repeat flex items-end pl-4 pb-6">
                  <p className="text-[26px] font-medium text-white leading-tight">Propósito</p></div>
          </div>
          
    </div>
  );
}
