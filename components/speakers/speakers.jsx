import SpeakerCard from "../speaker-card/speaker-card";

function Speakers() {
    return ( 
        <div className="pb-20">
                    <div className="flex flex-col justify-start 2xl:px-[60px] lg:px-[60px] md:px-[30px] px-[30px]">
                        <h2 className="2xl:text-[64px] lg:text-[64px] md:text-[45px] text-[35px] font-normal text-white font-display">PALESTRANTES</h2>
                <div className="w-full h-[1px] bg-[#FF1234]"></div>
                <p className="w-ful 2xl:text-[24px] xl:text-[24px] lg:text-[24px] md:text-[24px] text-[18px] text-white font-body mt-6">Conheça mais sobre nossos palestrantes:</p>
                    </div>
                    <div className="mt-10 flex gap-6 justify-center items-center flex-wrap">
                        <SpeakerCard image="/images/ranoya.png" name="Christiano Ranoya" />
                <SpeakerCard image="/images/andre.jpg" name="André Veloso" />
                <SpeakerCard image="/images/paulo.jpg" name="Paulo Raimo" />
                    </div>
                </div>
        
    );
}

export default Speakers;