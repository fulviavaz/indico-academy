import Image from 'next/image'

function Nav() {
    return ( 
        <div className="flex items-center justify-center py-8">
            <Image
      src="/images/logo-branco.png"
      width={300}
      height={500}
      alt="logo cademy"
    />
        </div>
     );
}

export default Nav;