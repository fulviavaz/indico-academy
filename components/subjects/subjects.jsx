import BentoGrid from "../bento-grid/bento-grid";

function Subjects() {
    return (
        <div className="pb-10">
            <div className="flex flex-col justify-start pl-[60px]">
                <h2 className="text-[64px] font-normal text-white">Temas</h2>
                <p className="text-[15px] text-white">Sed diam consectetur non non Morbi massa Praesent ex Ut nec ex. vitae Ut Vestibulum</p>
            </div>
            <div className="mt-10">
                <BentoGrid />
            </div>
        </div>
      );
}

export default Subjects;