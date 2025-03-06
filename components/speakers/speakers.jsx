import SpeakerCard from "../speaker-card/speaker-card";

function Speakers() {
    return ( 
        <div className="py-20">
            <div className="flex flex-col justify-start pl-[60px]">
                <h2 className="text-[64px] font-normal">Palestrantes</h2>
                <p className="text-[15px]">Sed diam consectetur non non Morbi massa Praesent ex Ut nec ex. vitae Ut Vestibulum</p>
            </div>
            <div className="flex justify-between mt-10">
                <SpeakerCard image="/images/ranoya.png" name="Christiano Ranoya" />
                <SpeakerCard image="/images/ranoya.png" name="Christiano Ranoya" />
                <SpeakerCard image="/images/ranoya.png" name="Christiano Ranoya" />
            </div>
        </div>
     );
}

export default Speakers;