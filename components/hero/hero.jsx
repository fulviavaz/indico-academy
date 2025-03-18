import { Button } from "../ui/button";

function Hero() {
    return ( 
        <div className="w-full 2xl:h-[612px] lg:h-[450px] md:h-[450px] h-[450px] bg-[url('/images/hero-academy.png')] bg-cover bg-center no-repeat bg-fixed">
            <div className="flex flex-col items-start justify-center 2xl:pl-[60px] lg:pl-[60px] md:pl-[30px] pl-[30px] 2xl:py-24 lg:py-24 md:py-24 py-10 2xl:w-[985px] lg:w-full md:w-full w-full">
                <h1 className="2xl:text-[64px] lg:text-[45px] md:text-[35px] text-[28px] font-bold text-white leading-tight font-display 2xl:w-[1000px] lg:w-full md:w-full w-full">
                    Transforme o relacionamento com os seus clientes criando uma conexão legítima</h1>
                <p className="mt-14 2xl:text-[24px] text-[18px] text-white 2xl:w-[1000px] lg:w-full md:w-full w-full font-body">Com palestras e workshops práticos, a Indico Academy prepara sua empresa para
                    construir um relacionamento mais profundo e duradouro com seus consumidores.
                </p>
                <Button className="mt-8 bg-[#FF1234]">Saiba mais</Button>
            </div>
        </div>
    );
}

export default Hero;