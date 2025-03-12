import SpeakerCard from "../speaker-card/speaker-card";

function Speakers() {
    return ( 
        <div className="py-10">
                    <div className="flex flex-col justify-start pl-[60px]">
                        <h2 className="text-[64px] font-normal text-white">Palestrantes</h2>
                        <p className="text-[15px] text-white">Sed diam consectetur non non Morbi massa Praesent ex Ut nec ex. vitae Ut Vestibulum</p>
                    </div>
                    <div className="mt-10 flex gap-8 justify-center">
                        <SpeakerCard image="/images/ranoya.png" name="Christiano Ranoya" />
                <SpeakerCard image="/images/ranoya.png" name="Christiano Ranoya" />
                <SpeakerCard image="/images/ranoya.png" name="Christiano Ranoya" />
                    </div>
                </div>
        
    );
}

export default Speakers;