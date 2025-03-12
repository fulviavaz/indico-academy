function Modalities() {
    return ( 
        <div className="pb-10">
                    <div className="flex flex-col justify-start  2xl:pl-[60px] lg:pl-[60px] md:pl-[30px] pl-[30px]">
                        <h2 className="2xl:text-[64px] lg:text-[64px] md:text-[45px] text-[35px]  font-normal text-white">Modalidades</h2>
                        <p className="text-[15px] text-white">Sed diam consectetur non non Morbi massa Praesent ex Ut nec ex. vitae Ut Vestibulum</p>
                    </div>
                    <div className="mt-10 flex flex-col items-center gap-6">
                <div className="h-[339px] 2xl:w-[1155px] lg:w-[900px] md:w-[700px] w-[300px] bg-[url('/images/palestra1.png')] bg-cover bg-center no-repeat transition-transform duration-300 hover:scale-105 rounded-lg"></div>
                <div className="h-[339px] 2xl:w-[1155px] lg:w-[900px] md:w-[700px] w-[300px] bg-[url('/images/palestra2.png')] bg-cover bg-center no-repeat transition-transform duration-300 hover:scale-105 rounded-lg"></div>
                    </div>
                </div>
    );
}

export default Modalities;