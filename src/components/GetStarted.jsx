export default function GetStarted() {
  return (
    <section
      id="comenzar"
      className="relative overflow-hidden bg-blue-950 px-6 py-20 md:px-12 lg:px-20">
      {/* Detalles decorativos */}
      <div className="absolute -right-20 -top-20 h-64 w-64 rounded-full bg-red-600/10" />
      <div className="absolute -bottom-24 -left-20 h-72 w-72 rounded-full bg-white/5" />

      <div className="relative mx-auto max-w-4xl text-center">
        <span className="mb-5 inline-block rounded-full border border-red-500/40 bg-red-600/10 px-4 py-2 text-sm font-semibold tracking-wide text-red-400">
          TU PRÓXIMO PASO
        </span>

        <h2 className="text-3xl font-extrabold leading-tight tracking-tight text-white md:text-5xl lg:text-6xl">
          Tu próximo idioma
          <span className="block text-red-500">empieza hoy.</span>
        </h2>

        <p className="mx-auto mt-6 max-w-2xl text-base leading-7 text-slate-300 md:text-lg md:leading-8">
          Ya sea que quieras aprender inglés o portugués, estamos acá para
          acompañarte. Descubrí nuestros cursos y encontrá el camino que mejor
          se adapte a tus objetivos.
        </p>

        {/* Beneficios */}
        <div className="mt-8 flex flex-wrap justify-center gap-x-8 gap-y-4 text-sm font-medium text-slate-200">
          <span className="flex items-center gap-2">
            <span className="text-red-500">✓</span>
            Inglés y portugués
          </span>

          <span className="flex items-center gap-2">
            <span className="text-red-500">✓</span>
            Clases online
          </span>

          <span className="flex items-center gap-2">
            <span className="text-red-500">✓</span>
            Diferentes niveles
          </span>
        </div>

        {/* Botones */}
        <div className="mt-10 flex flex-wrap justify-center gap-4">
          <a
            href="#contacto"
            className="inline-flex items-center justify-center gap-2 rounded-xl bg-red-600 px-8 py-4 font-bold text-white shadow-lg shadow-red-600/20 transition duration-300 hover:-translate-y-1 hover:bg-red-700">
            Quiero comenzar
            <span aria-hidden="true">→</span>
          </a>

          <a
            href="#curso"
            className="inline-flex items-center justify-center rounded-xl border border-white/30 px-8 py-4 font-semibold text-white transition duration-300 hover:border-white hover:bg-white/10">
            Explorar cursos
          </a>
        </div>
      </div>
    </section>
  );
}
