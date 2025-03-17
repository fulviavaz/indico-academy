import SpeakerCard from "../speaker-card/speaker-card";

function Speakers() {
    return ( 
        <div className="py-10">
                    <div className="flex flex-col justify-start 2xl:pl-[60px] lg:pl-[60px] md:pl-[30px] pl-[30px]">
                        <h2 className="2xl:text-[64px] lg:text-[64px] md:text-[45px] text-[35px] font-normal text-white font-display">PALESTRANTES</h2>
                <div className="w-full h-[1px] bg-[#FF1234]"></div>
                <p className="text-[24px] text-white font-body mt-6">Sed diam consectetur non non Morbi massa Praesent ex Ut nec ex. vitae Ut Vestibulum 



</p>
                    </div>
                    <div className="mt-10 flex gap-8 justify-center flex-wrap">
                        <SpeakerCard image="/images/ranoya.png" name="Christiano Ranoya" />
                <SpeakerCard image="/images/ranoya.png" name="Christiano Ranoya" />
                <SpeakerCard image="/images/ranoya.png" name="Christiano Ranoya" />
                    </div>
                </div>
        
    );
}

export default Speakers;