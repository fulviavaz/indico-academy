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
        <div className="pb-10">
                    <div className="flex flex-col justify-start 2xl:pl-[60px] lg:pl-[60px] md:pl-[30px] pl-[30px]">
                        <h2 className="2xl:text-[64px] lg:text-[64px] md:text-[45px] text-[35px] font-normal text-white">Formulário</h2>
                        <p className="text-[15px] text-white">Sed diam consectetur non non Morbi massa Praesent ex Ut nec ex. vitae Ut Vestibulum</p>
            </div>
            <div className="flex flex-col items-center mt-10">

              <iframe
        src="/form.html"
        className="w-[500px] h-[300px] border-none"
      />
            </div>            
                    
                </div>
    );
}

export default Form;