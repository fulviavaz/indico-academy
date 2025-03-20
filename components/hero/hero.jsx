import Image from "next/image";
import { Button } from "../ui/button";

function Hero() {
    return ( 
        <div className="w-full 2xl:h-[612px] xl:h-[612px] lg:h-[612px] md:h-[450px] h-[450px] bg-[url('/images/hero.jpg')] bg-cover bg-center no-repeat bg-fixed flex items-center">
            <div className="flex flex-col items-start justify-center 2xl:pl-[60px] lg:pl-[60px] md:pl-[30px] pl-[30px] 2xl:w-[985px] lg:w-full md:w-full w-full">
                {/* <h1 className="2xl:text-[64px] lg:text-[64px] md:text-[45px] text-[40px] font-normal text-white font-display">
                    Palestras & Workshops</h1> */}
                <Image 
                    src="/images/logo.png" 
                    width={1000} 
                    height={500} 
                    alt="logo cademy" 
                    className="w-full max-w-[320px] sm:max-w-[400px] md:max-w-[600px] lg:max-w-[800px] xl:max-w-[1000px] h-auto mb-2"
                />
                <p className="2xl:text-[34px] xl:text-[44px] lg:text-[44px] md:text-[18px] text-[18px] text-white font-body mb-2 2xl:w-full xl:w-full lg:w-full md:w-full w-[90%]">Porque o cliente não tem sempre a razão, <span className="bg-[#FF1234]">ele é a razão.</span></p>
            <div className=" h-[1px] bg-[#FF1234] 2xl:w-[1000px] xl:w-[1000px] lg:w-[900px] md:w-[700px] w-[90%]"></div>
                <p className="2xl:mt-14 xl:mt-14 lg:mt-14 md:mt-10 mt-5 2xl:text-[24px] xl:text-[24px] lg:text-[24px] md:text-[18px] text-[18px] text-white 2xl:w-[1000px] xl:w-[1000px] lg:w-[900px] md:w-[700px] w-[90%] font-body">
                    Transforme o relacionamento com os seus clientes criando uma conexão legítima. Com palestras e workshops práticos,
                    a Indico Academy prepara sua empresa para construir uma relação mais profunda e duradoura com seus consumidores.

                </p>
                <Button className="mt-8 bg-[#FF1234] font-body 2xl:text-lg xl:text-lg lg:text-lg md:text-base text-base">Saiba mais</Button>
            </div>
        </div>
    );
}

export default Hero;