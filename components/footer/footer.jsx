import Image from "next/image";

function Footer() {
    return ( 
        <footer className="flex flex-col items-center justify-center w-full  py-10 gap-10 bg-[#FF1234]">
            <Image
                  src="/images/logo-branco.png"
                  width={200}
                  height={500}
                  alt="logo cademy"
                />
            <p className="text-sm  text-white ">
                &copy; 2025 Academy. Todos os direitos reservados.
            </p>
            </footer>
     );
}

export default Footer;