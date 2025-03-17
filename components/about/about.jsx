function About() {
    return (<div className="py-16">
        <div className="flex flex-col justify-start 2xl:pl-[60px] lg:pl-[60px] md:pl-[30px] pl-[30px]">
            <h2 className="2xl:text-[64px] lg:text-[64px] md:text-[45px] text-[35px] font-normal text-white font-display">O QUE SOMOS?</h2>
            <div className="w-full h-[1px] bg-[#FF1234]"></div>
            <p className="text-[24px] text-white font-body mt-6">A Indico é especialista em programas de fidelidade e, com isso,
                lançamos a Indico Academy. Nosso foco é oferecer palestras que exploram o mundo da fidelização, clientes
                e estratégias de loyalty.</p>
        </div>
        
        <div className=" mt-16 w-full 2xl:h-[394px] lg:h-[450px] md:h-[450px] h-[450px] bg-[url('/images/img_second.png')] bg-cover bg-center no-repeat bg-fixed">
            <div className="flex flex-col items-start justify-center 2xl:pl-[60px] lg:pl-[60px] md:pl-[30px] pl-[30px] pt-6  lg:w-full md:w-full w-full">
                <h2 className="2xl:text-[64px] lg:text-[64px] md:text-[45px] text-[35px] font-normal text-white font-display">O QUE NOS MOTIVA?</h2>
                        
                <p className="mt-8 2xl:text-[24px] text-[18px] text-white 2xl:w-[583px] lg:w-full md:w-full w-full font-body">
                    Acreditamos que a verdadeira fidelização se baseia no entendimento profundo das necessidades e desejos dos consumidores,
                    na criação de conexões significativas e na oferta de experiências enriquecedoras para as empresas.
                        </p>
                        
                    </div>
                </div>
    </div>);
}

export default About;