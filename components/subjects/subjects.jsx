import BentoGrid from "../bento-grid/bento-grid";

function Subjects() {
    return (
        <div className="pb-20">
            <div className="flex flex-col justify-start 2xl:px-[60px] lg:px-[60px] md:px-[30px] px-[30px]">
                <h2 className="2xl:text-[64px] lg:text-[64px] md:text-[45px] text-[35px] font-normal text-white font-display">TEMAS</h2>
                <div className="w-full h-[1px] bg-[#FF1234]"></div>
                <p className="w-ful 2xl:text-[24px] xl:text-[24px] lg:text-[24px] md:text-[24px] text-[18px] text-white font-body mt-6">
                    Veja alguns de nossos conteúdos a seguir:</p>
            </div>
            <div className="mt-10">
                <BentoGrid />
            </div>
        </div>
      );
}

export default Subjects;