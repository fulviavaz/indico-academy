import { Button } from "../ui/button";

function Hero() {
    return ( 
        <div className="h-[612px] bg-[url('/images/hero-academy.png')] bg-cover bg-center no-repeat">
            <div className="flex flex-col items-start justify-center pl-[60px] py-24 w-[985px]">
                <h1 className="text-[64px] font-bold text-white">Transforme o relacionamento com os clientes criando uma
                    conexão legítima</h1>
                <p className="mt-4 text-[20px] text-white w-[891px]">Com palestras e workshops práticos, a Indico Academy prepara sua empresa para
                    construir um relacionamento mais profundo e duradouro com seus consumidores.
                </p>
                <Button className="mt-8 bg-[#FF0000]">Saiba mais</Button>
            </div>
        </div>
     );
}

export default Hero;