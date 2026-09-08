function Hero() {
  return (
    <section className="relative overflow-hidden bg-[url('/hero.jpg')] bg-cover ">
      <div className="mx-auto grid min-h-[calc(100vh-80px)]  items-center gap-12 px-5 py-16 md:grid-cols-2 md:gap-20 lg:py-24 bg-white/70 ">
        {/* Contenido */}
        <div className="max-w-2xl">
          <span className="mb-5 inline-block text-sm font-extrabold tracking-[0.2em] text-red-600">
            ENGLISH · ESPAÑOL
          </span>

          <h1 className=" text-5xl font-extrabold leading-[1.05] tracking-tight text-blue-950 sm:text-6xl lg:text-7xl">
            Aprendé inglés de una manera
            <span className="block text-red-600">diferente.</span>
          </h1>

          <p className="mt-6 max-w-xl text-base leading-7 text-gray-600 sm:text-lg">
            Un método de aprendizaje pensado para avanzar paso a paso,
            combinando gramática, lectura, traducción y conversación.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <a
              href="#comenzar"
              className="rounded-lg bg-red-600 px-6 py-3.5 text-sm font-bold text-white shadow-lg shadow-red-600/20 transition duration-200 hover:-translate-y-1 hover:bg-red-700">
              Comenzar ahora
            </a>

            <a
              href="#como-funciona"
              className="rounded-lg border-2 border-blue-900 px-6 py-3.5 text-sm font-bold  transition duration-200 bg-blue-900 text-white  transition duration-200 hover:-translate-y-1 hover:bg-blue-950">
              Conocer el curso
            </a>
          </div>
        </div>

        {/* Tarjeta visual */}
        <div className="relative mx-auto w-full max-w-md">
          <div className="absolute -right-5 -top-5 h-32 w-32 rounded-full bg-red-600/10"></div>
          <div className="absolute -bottom-5 -left-5 h-40 w-40 rounded-full bg-blue-950/10"></div>

          <div className="relative overflow-hidden rounded-2xl bg-white shadow-2xl border-2 border-red-600">
            {/* Cabecera */}
            <div className="flex items-center justify-between bg-red-600 px-6 py-5 text-white">
              <span className="text-sm font-extrabold tracking-wider">
                ENGLISH
              </span>

              <span className="text-sm font-extrabold tracking-wider">
                ESPAÑOL
              </span>
            </div>

            {/* Contenido */}
            <div className="p-8 sm:p-10 ">
              <p className="text-sm font-bold uppercase tracking-widest text-red-600">
                Intensive English
              </p>

              <h2 className="mt-3 text-3xl font-extrabold text-blue-950 sm:text-4xl">
                Aprendé.
                <br />
                Practicá.
                <br />
                Conversá.
              </h2>

              <div className="mt-8 space-y-3">
                <div className="flex items-center gap-3 rounded-lg bg-gray-50 p-4">
                  <span className="flex h-9 w-9 items-center justify-center rounded-full bg-red-600 text-sm font-bold text-white">
                    1
                  </span>
                  <span className="font-semibold text-blue-950">Gramática</span>
                </div>

                <div className="flex items-center gap-3 rounded-lg bg-gray-50 p-4">
                  <span className="flex h-9 w-9 items-center justify-center rounded-full bg-blue-950 text-sm font-bold text-white">
                    2
                  </span>
                  <span className="font-semibold text-blue-950">
                    Lectura y traducción
                  </span>
                </div>

                <div className="flex items-center gap-3 rounded-lg bg-gray-50 p-4">
                  <span className="flex h-9 w-9 items-center justify-center rounded-full bg-red-600 text-sm font-bold text-white">
                    3
                  </span>
                  <span className="font-semibold text-blue-950">
                    Conversación
                  </span>
                </div>
              </div>
            </div>

            {/* Pie de tarjeta */}
            <div className="border-t border-gray-100 px-8 py-5">
              <p className="text-center text-xs font-semibold uppercase tracking-widest text-gray-400">
                Learn English with a method
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
