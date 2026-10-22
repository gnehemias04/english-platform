export default function HowItWorks() {
  const steps = [
    {
      number: "01",
      title: "Aprendé las bases",
      description:
        "Construí una base sólida en el idioma con materiales de aprendizaje y actividades diseñadas para ayudarte a comprender y aplicar lo que aprendés.",
      icon: "📘",
    },
    {
      number: "02",
      title: "Practicá lo aprendido",
      description:
        "Mejorá tu comprensión a través de lecturas, ejercicios y actividades prácticas que te ayuden a incorporar el idioma de manera progresiva.",
      icon: "📖",
    },
    {
      number: "03",
      title: "Comunicá con confianza",
      description:
        "Desarrollá tus habilidades de comunicación y aprendé a expresar tus ideas con mayor seguridad en situaciones de la vida real.",
      icon: "💬",
    },
  ];

  return (
    <section
      id="como-funciona"
      className="relative isolate overflow-hidden bg-blue-950 px-6 py-20 md:px-12 lg:px-20">
      {/* Detalles decorativos */}{" "}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-20 -top-20 -z-10 h-64 w-64 rounded-full bg-red-600/15"
      />{" "}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-24 -left-20 -z-10 h-72 w-72 rounded-full bg-white/5"
      />
      <div className="mx-auto max-w-7xl">
        {/* Encabezado de la sección */}
        <div className="mx-auto mb-14 max-w-3xl text-center">
          <span className="mb-4 inline-block rounded-full bg-red-600 px-4 py-2 text-sm font-bold text-white">
            NUESTRA METODOLOGÍA
          </span>

          <h2 className="mb-5 text-3xl font-bold tracking-tight text-white md:text-5xl">
            Un camino para aprender nuevos idiomas
          </h2>

          <p className="text-base leading-7 text-slate-200 md:text-lg">
            Aprender un idioma es mucho más que memorizar palabras. Combinamos
            conocimientos, práctica y comunicación para ayudarte a desarrollar
            habilidades que puedas utilizar en tu vida diaria.
          </p>
        </div>

        {/* Etapas del aprendizaje */}
        <div className="grid gap-8 md:grid-cols-3">
          {steps.map((step) => (
            <article
              key={step.number}
              className="group relative rounded-2xl border border-slate-200 bg-white p-8 transition duration-300 hover:-translate-y-2 hover:border-red-400 hover:shadow-xl">
              <div className="mb-6 flex items-center justify-between">
                <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-blue-950 text-2xl transition duration-300 group-hover:bg-red-600">
                  {step.icon}
                </div>

                <span className="text-4xl font-bold text-slate-300 transition duration-300 group-hover:text-red-500">
                  {step.number}
                </span>
              </div>

              <h3 className="mb-4 text-xl font-bold text-blue-950">
                {step.title}
              </h3>

              <p className="leading-7 text-slate-700">{step.description}</p>

              <div className="mt-6 h-1 w-12 rounded-full bg-red-600 transition-all duration-300 group-hover:w-20" />
            </article>
          ))}
        </div>

        {/* Mensaje final */}
        <div className="mt-14 text-center">
          <p className="text-slate-200">
            Cada persona aprende a su manera.{" "}
            <span className="font-bold text-white">
              Nosotros te acompañamos en cada paso.
            </span>
          </p>
        </div>
      </div>
    </section>
  );
}
