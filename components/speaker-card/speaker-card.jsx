const SpeakerCard = ({ image, name }) => {
  return (
    <div
      className="relative 2xl:w-[367px] lg:w-[367px] md:w-[367px] w-[300px] h-[552px] rounded-lg bg-cover bg-center shadow-lg overflow-hidden transition-transform duration-300 hover:scale-105"
      style={{ backgroundImage: `url(${image})` }}
    >
      {/* Gradiente escuro na parte inferior */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent from-40% to-black to-90%"></div>

      {/* Nome do palestrante */}
      <div className="absolute bottom-6 left-6 text-white text-lg font-semibold">
        {name}
      </div>
    </div>
  );
};

export default SpeakerCard;
