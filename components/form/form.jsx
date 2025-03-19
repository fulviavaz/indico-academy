import { useEffect } from "react";

function Form() {

      useEffect(() => {
    // Garante que o script do Dinamize seja carregado
    const script = document.createElement("script");
    script.src = "/lib/form.js; ";
    script.async = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);
    return ( 
        <div className="pb-20">
                    <div className="flex flex-col justify-start 2xl:px-[60px] lg:px-[60px] md:px-[30px] px-[30px]">
                        <h2 className="2xl:text-[64px] lg:text-[64px] md:text-[45px] text-[35px] font-normal text-white font-display">CONTATO</h2>
                <div className="w-full h-[1px] bg-[#FF1234]"></div>
                <p className="w-ful 2xl:text-[24px] xl:text-[24px] lg:text-[24px] md:text-[24px] text-[18px] text-white font-body mt-6">Sed diam consectetur non non Morbi massa Praesent ex Ut nec ex.
                    vitae Ut Vestibulum</p>
        </div>
        <div className="flex justify-center items-center gap-10 mt-10 flex-wrap">
      <div className="bg-[url('/images/tel.jpg')] bg-cover bg-bottom no-repeat 2xl:w-[500px] xl:w-[500px] lg:w-[500px] md:w-[500px] w-[300px] h-[430px] p-10 rounded-lg">
                        
                    </div>

            <div className="flex flex-col items-center mt-10">
              <iframe
        src="/form.html"
        className="2xl:w-[500px] xl:w-[500px] lg:w-[500px] md:w-[500px] w-[300px] h-[300px] border-none"
      />
          </div> 
          
          </div>
                    
                </div>
    );
}

export default Form;