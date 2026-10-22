const teachers = [
  {
    name: "Profesor de inglés",
    language: "Inglés",
    description:
      "Conocé al profesor y descubrí su experiencia, formación y enfoque de enseñanza.",
    image: null,
  },
  {
    name: "Profesor de portugués",
    language: "Portugués",
    description:
      "Conocé al profesor y descubrí su experiencia, formación y enfoque de enseñanza.",
    image: null,
  },
];

export default function AboutUs() {
  return (
    <section
      id="sobre-nosotros"
      className="bg-slate-50 px-6 py-20 md:px-12 lg:px-20">
      <div className="mx-auto max-w-7xl">
        {/* Presentación de la academia */}
        <div className="grid items-center gap-12 md:grid-cols-2 md:gap-16">
          {/* Imagen principal */}
          <div className="relative mx-auto w-full max-w-md">
            <div className="absolute -left-4 -top-4 h-full w-full rounded-3xl bg-red-600" />

            <div className="relative flex aspect-4/5 items-center justify-center overflow-hidden rounded-3xl border-4 border-white bg-slate-200 shadow-xl">
              <div className="px-6 text-center">
                <span
                  className="text-6xl"
                  role="img"
                  aria-label="Aprendizaje de idiomas">
                  🌎
                </span>

                <p className="mt-4 text-sm font-medium text-slate-500">
                  Un mundo de posibilidades
                </p>
              </div>
            </div>

            <div className="absolute -bottom-5 -right-4 rounded-2xl bg-blue-950 px-6 py-4 text-white shadow-lg">
              <p className="text-sm font-medium text-slate-300">
                Parnaiba Academy
              </p>
              <p className="text-lg font-bold">Idiomas sin fronteras</p>
            </div>
          </div>

          {/* Historia y misión */}
          <div className="pt-4 md:pt-0">
            <span className="mb-4 inline-block rounded-full bg-red-100 px-4 py-2 text-sm font-semibold text-red-600">
              CONOCÉ NUESTRA ACADEMIA
            </span>

            <h2 className="mb-6 text-3xl font-bold leading-tight tracking-tight text-blue-950 md:text-5xl">
              Más que aprender un idioma, es descubrir un mundo nuevo.
            </h2>

            <p className="mb-5 text-lg leading-8 text-slate-600">
              En Parnaiba Academy creemos que aprender un idioma es una
              oportunidad para conectar con nuevas culturas, ampliar horizontes
              y alcanzar objetivos personales y profesionales.
            </p>

            <p className="mb-8 leading-7 text-slate-600">
              Nuestro propósito es ofrecer una experiencia de aprendizaje
              accesible y de calidad, con una metodología organizada y un
              acompañamiento que ayude a cada estudiante a avanzar hacia sus
              objetivos.
            </p>

            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-red-100 text-sm font-bold text-red-600">
                  ✓
                </span>
                <p className="text-slate-700">
                  Cursos para distintos niveles, desde A1 hasta C2.
                </p>
              </div>

              <div className="flex items-start gap-3">
                <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-red-100 text-sm font-bold text-red-600">
                  ✓
                </span>
                <p className="text-slate-700">
                  Clases online con acompañamiento personalizado.
                </p>
              </div>

              <div className="flex items-start gap-3">
                <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-red-100 text-sm font-bold text-red-600">
                  ✓
                </span>
                <p className="text-slate-700">
                  Aprendizaje orientado a la comunicación y a objetivos reales.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Presentación del equipo docente */}
        <div className="mt-28">
          <div className="mx-auto mb-14 max-w-3xl text-center">
            <span className="mb-4 inline-block rounded-full bg-red-100 px-4 py-2 text-sm font-semibold text-red-600">
              NUESTRO EQUIPO
            </span>

            <h2 className="mb-5 text-3xl font-bold tracking-tight text-blue-950 md:text-5xl">
              Personas que te acompañan en tu aprendizaje.
            </h2>

            <p className="text-base leading-7 text-slate-600 md:text-lg">
              Detrás de cada clase hay una persona que te guía, resuelve tus
              dudas y te ayuda a avanzar en tu camino hacia un nuevo idioma.
            </p>
          </div>

          <div className="mx-auto grid max-w-5xl gap-8 md:grid-cols-2">
            {teachers.map((teacher) => (
              <article
                key={teacher.language}
                className="group overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition duration-300 hover:-translate-y-2 hover:shadow-xl">
                {/* Fotografía del profesor */}
                <div className="flex aspect-video items-center justify-center overflow-hidden bg-slate-200">
                  {teacher.image ? (
                    <img
                      src={teacher.image}
                      alt={teacher.name}
                      className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                    />
                  ) : (
                    <div className="text-center">
                      <span
                        className="text-6xl"
                        role="img"
                        aria-label="Profesor">
                        👨‍🏫
                      </span>

                      <p className="mt-3 text-sm font-medium text-slate-500">
                        Foto del profesor
                      </p>
                    </div>
                  )}
                </div>

                {/* Información del profesor */}
                <div className="p-8">
                  <span className="inline-block rounded-full bg-red-100 px-3 py-1 text-xs font-bold uppercase tracking-wider text-red-600">
                    {teacher.language}
                  </span>

                  <h3 className="mt-4 text-2xl font-bold text-blue-950">
                    {teacher.name}
                  </h3>

                  <p className="mt-3 leading-7 text-slate-600">
                    {teacher.description}
                  </p>

                  <a
                    href="#contacto"
                    className="mt-6 inline-flex items-center font-semibold text-red-600 transition hover:text-red-700">
                    Consultar por las clases
                    <span className="ml-2" aria-hidden="true">
                      →
                    </span>
                  </a>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
