function Hero() {
  return (
    <section className="relative overflow-hidden bg-[url('/hero.jpg')] bg-cover bg-center">
      {" "}
      <div className="mx-auto grid min-h-[calc(100vh-80px)] items-center gap-12 bg-white/80 px-5 py-16 md:grid-cols-2 md:gap-20 lg:py-24">
        {/* Contenido principal */}{" "}
        <div className="max-w-2xl">
          {" "}
          <span className="mb-5 inline-block text-sm font-extrabold tracking-[0.2em] text-red-600">
            PARNAIBA ACADEMY{" "}
          </span>
          <h1 className="text-5xl font-extrabold leading-[1.05] tracking-tight text-blue-950 sm:text-6xl lg:text-7xl">
            El mundo tiene mucho que decirte.
            <span className="block text-red-600">Aprendé a hablarlo.</span>
          </h1>
          <p className="mt-6 max-w-xl text-base leading-7 text-gray-600 sm:text-lg">
            Aprendé inglés y portugués con clases online, profesores capacitados
            y una metodología pensada para ayudarte a avanzar hacia tus
            objetivos.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <a
              href="#cursos"
              className="rounded-lg bg-red-600 px-6 py-3.5 text-sm font-bold text-white shadow-lg shadow-red-600/20 transition duration-200 hover:-translate-y-1 hover:bg-red-700">
              Explorar cursos
            </a>

            <a
              href="#como-funciona"
              className="rounded-lg border-2 border-blue-900 bg-blue-900 px-6 py-3.5 text-sm font-bold text-white transition duration-200 hover:-translate-y-1 hover:bg-blue-950">
              Cómo funciona
            </a>
          </div>
        </div>
        {/* Tarjeta visual */}
        <div className="relative mx-auto w-full max-w-md">
          <div className="absolute -right-5 -top-5 h-32 w-32 rounded-full bg-red-600/10" />
          <div className="absolute -bottom-5 -left-5 h-40 w-40 rounded-full bg-blue-950/10" />

          <div className="relative overflow-hidden rounded-2xl border-2 border-red-600 bg-white shadow-2xl">
            {/* Cabecera */}
            <div className="flex items-center justify-between bg-red-600 px-6 py-5 text-white">
              <span className="text-sm font-extrabold tracking-wider">
                NUESTROS IDIOMAS
              </span>

              <span className="text-sm font-extrabold tracking-wider">
                ONLINE
              </span>
            </div>

            {/* Contenido */}
            <div className="p-8 sm:p-10">
              <p className="text-sm font-bold uppercase tracking-widest text-red-600">
                Parnaiba Academy
              </p>

              <h2 className="mt-3 text-3xl font-extrabold text-blue-950 sm:text-4xl">
                Nuevos idiomas.
                <br />
                Nuevas oportunidades.
              </h2>

              <p className="mt-4 leading-7 text-gray-600">
                Elegí tu próximo idioma y empezá a construir nuevas
                oportunidades para tu futuro.
              </p>

              <div className="mt-8 space-y-3">
                <div className="flex items-center gap-4 rounded-lg bg-gray-50 p-4">
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-red-600 text-xl text-white">
                    EN
                  </span>

                  <div>
                    <p className="font-bold text-blue-950">Inglés</p>
                    <p className="text-sm text-gray-500">English</p>
                  </div>
                </div>

                <div className="flex items-center gap-4 rounded-lg bg-gray-50 p-4">
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-blue-950 text-xl text-white">
                    PT
                  </span>

                  <div>
                    <p className="font-bold text-blue-950">Portugués</p>
                    <p className="text-sm text-gray-500">Português</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Pie de tarjeta */}
            <div className="border-t border-gray-100 px-8 py-5">
              <p className="text-center text-xs font-semibold uppercase tracking-widest text-gray-400">
                Tu viaje lingüístico comienza aquí.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
