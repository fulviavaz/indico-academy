import BentoGrid from "../bento-grid/bento-grid";

function Subjects() {
    return (
        <div className="pb-10">
            <div className="flex flex-col justify-start 2xl:pl-[60px] lg:pl-[60px] md:pl-[30px] pl-[30px]">
                <h2 className="2xl:text-[64px] lg:text-[64px] md:text-[45px] text-[35px] font-normal text-white">Temas</h2>
                <p className="text-[15px] text-white">Sed diam consectetur non non Morbi massa Praesent ex Ut nec ex. vitae Ut Vestibulum</p>
            </div>
            <div className="mt-10">
                <BentoGrid />
            </div>
        </div>
      );
}

export default Subjects;