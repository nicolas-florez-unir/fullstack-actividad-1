const HeroSection = () => {
  return (
    <section className="text-gray-600 body-font">
      <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
        <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
          <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900 dark:text-white">
            Descubre tu próximo libro favorito
          </h1>
          <p className="mb-8 leading-relaxed dark:text-gray-300">
            Ya sea que busques una novela de suspense, un libro de autoayuda o
            un clásico literario, en nuestra tienda tenemos una amplia selección
            para satisfacer todas tus preferencias. Navega fácilmente, realiza
            tu compra en pocos clics y disfruta de un servicio rápido y seguro.
            ¡Haz tu pedido hoy mismo y empieza a disfrutar de nuevas historias!
          </p>
          <div className="flex justify-center">
            <button className="inline-flex text-white bg-violet-600 dark:bg-violet-500 rounded-full py-2 px-6 focus:outline-none hover:bg-violet-700 text-lg">
              Buscar
            </button>
          </div>
        </div>
        <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
          <img
            className="object-cover object-center rounded"
            alt="hero"
            src="https://www.pngall.com/wp-content/uploads/2018/05/Books-PNG-Image-File.png"
          />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
