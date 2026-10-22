const courses = [
  {
    id: "ingles",
    name: "Inglés",
    nativeName: "English",
    icon: "🇬🇧",
    description:
      "Desarrollá tus habilidades para comunicarte en inglés, ya sea para estudiar, trabajar, viajar o alcanzar tus objetivos personales.",
    levels: "A1 – C2",
    color: "bg-red-600",
    buttonColor: "bg-red-600 hover:bg-red-700 focus-visible:outline-red-600",
  },
  {
    id: "portugues",
    name: "Portugués",
    nativeName: "Português",
    icon: "🇧🇷",
    description:
      "Aprendé portugués para conectar con nuevas culturas, comunicarte con hablantes nativos y descubrir oportunidades personales y profesionales.",
    levels: "A1 – C2",
    color: "bg-blue-950",
    buttonColor: "bg-blue-950 hover:bg-blue-900 focus-visible:outline-blue-950",
  },
];

export default function Courses() {
  return (
    <section id="curso" className="bg-slate-50 px-6 py-20 md:px-12 lg:px-20">
      <div className="mx-auto max-w-7xl">
        {/* Encabezado */}
        <div className="mx-auto mb-14 max-w-3xl text-center">
          <span className="mb-4 inline-block rounded-full bg-red-100 px-4 py-2 text-sm font-semibold text-red-600">
            NUESTROS CURSOS
          </span>

          <h2 className="mb-5 text-3xl font-bold tracking-tight text-blue-950 md:text-5xl">
            Tu próximo idioma empieza acá.
          </h2>

          <p className="text-base leading-7 text-slate-600 md:text-lg">
            No importa si estás empezando desde cero o si ya tenés experiencia.
            Encontrá el curso adecuado para tu nivel y avanzá hacia tus
            objetivos con Parnaiba Academy.
          </p>
        </div>

        {/* Tarjetas de idiomas */}
        <div className="mx-auto grid max-w-5xl gap-8 md:grid-cols-2">
          {courses.map((course) => (
            <article
              key={course.id}
              className="group overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition duration-300 hover:-translate-y-2 hover:shadow-xl">
              {/* Encabezado de la tarjeta */}
              <div
                className={`${course.color} flex items-center justify-between px-8 py-6 text-white`}>
                <div>
                  <p className="text-sm font-semibold uppercase tracking-widest text-white/80">
                    {course.nativeName}
                  </p>

                  <h3 className="mt-1 text-3xl font-extrabold">
                    {course.name}
                  </h3>
                </div>

                <span className="text-5xl" role="img" aria-label={course.name}>
                  {course.icon}
                </span>
              </div>

              {/* Contenido */}
              <div className="p-8">
                <p className="leading-7 text-slate-600">{course.description}</p>

                {/* Niveles disponibles */}
                <div className="mt-7 rounded-xl bg-slate-50 p-5">
                  <p className="text-sm font-semibold text-slate-500">
                    Niveles disponibles
                  </p>

                  <p className="mt-1 text-2xl font-extrabold text-blue-950">
                    A1 <span className="text-red-600">→</span> C2
                  </p>

                  <p className="mt-2 text-sm leading-6 text-slate-600">
                    Desde principiante hasta avanzado. Encontrá el nivel
                    adecuado para vos.
                  </p>
                </div>

                {/* Botón */}
                <a
                  href="#contacto"
                  className={`mt-7 inline-flex w-full items-center justify-center gap-2 rounded-xl px-6 py-3.5 font-bold text-white transition duration-300 hover:-translate-y-0.5 focus-visible:outline-2 focus-visible:outline-offset-2 ${course.buttonColor}`}>
                  Consultar por el curso
                  <span aria-hidden="true">→</span>
                </a>
              </div>
            </article>
          ))}
        </div>

        {/* Mensaje final */}
        <p className="mt-10 text-center text-sm leading-6 text-slate-500">
          ¿No sabés cuál es tu nivel? Contactanos y te ayudaremos a encontrar
          por dónde empezar.
        </p>
      </div>
    </section>
  );
}
