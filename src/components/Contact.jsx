export default function Contact() {
  return (
    <section id="contacto" className="bg-slate-50 px-6 py-20 md:px-12 lg:px-20">
      <div className="mx-auto max-w-7xl">
        {/* Encabezado */}
        <div className="mx-auto mb-14 max-w-3xl text-center">
          <span className="mb-4 inline-block rounded-full bg-red-100 px-4 py-2 text-sm font-semibold text-red-600">
            CONTACTANOS
          </span>

          <h2 className="text-3xl font-extrabold tracking-tight text-blue-950 md:text-5xl">
            Estamos acá para ayudarte.
          </h2>

          <p className="mt-5 text-base leading-7 text-slate-600 md:text-lg">
            ¿Tenés alguna consulta sobre nuestros cursos? Completá el formulario
            y nos pondremos en contacto con vos.
          </p>
        </div>

        <div className="mx-auto grid max-w-6xl gap-12 lg:grid-cols-5 lg:gap-16">
          {/* Información de contacto */}
          <div className="lg:col-span-2">
            <h3 className="text-2xl font-bold text-blue-950">
              Empecemos una conversación.
            </h3>

            <p className="mt-4 leading-7 text-slate-600">
              Contanos qué idioma te interesa aprender y cuáles son tus
              objetivos. Te ayudaremos a encontrar una opción adecuada para vos.
            </p>

            <div className="mt-8 space-y-6">
              <div className="flex items-start gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-red-100 text-xl">
                  🌎
                </div>

                <div>
                  <h4 className="font-bold text-blue-950">Clases online</h4>

                  <p className="mt-1 text-sm leading-6 text-slate-600">
                    Aprendé desde donde estés.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-red-100 text-xl">
                  📚
                </div>

                <div>
                  <h4 className="font-bold text-blue-950">
                    Inglés y portugués
                  </h4>

                  <p className="mt-1 text-sm leading-6 text-slate-600">
                    Contanos cuál es tu idioma de interés.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-red-100 text-xl">
                  💬
                </div>

                <div>
                  <h4 className="font-bold text-blue-950">
                    Atención personalizada
                  </h4>

                  <p className="mt-1 text-sm leading-6 text-slate-600">
                    Estamos para responder tus consultas.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Formulario de contacto */}
          <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-lg sm:p-8 lg:col-span-3">
            <form
              action="https://formspree.io/f/xgvzwerr"
              method="POST"
              className="space-y-5">
              {/* Nombre */}
              <div>
                <label
                  htmlFor="nombre"
                  className="mb-2 block text-sm font-semibold text-blue-950">
                  Nombre completo
                </label>

                <input
                  type="text"
                  id="nombre"
                  name="nombre"
                  autoComplete="name"
                  placeholder="Tu nombre"
                  required
                  className="w-full rounded-lg border border-slate-300 px-4 py-3 text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-red-600 focus:ring-2 focus:ring-red-600/20"
                />
              </div>

              {/* Correo */}
              <div>
                <label
                  htmlFor="email"
                  className="mb-2 block text-sm font-semibold text-blue-950">
                  Correo electrónico
                </label>

                <input
                  type="email"
                  id="email"
                  name="email"
                  autoComplete="email"
                  placeholder="nombre@ejemplo.com"
                  required
                  className="w-full rounded-lg border border-slate-300 px-4 py-3 text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-red-600 focus:ring-2 focus:ring-red-600/20"
                />
              </div>
              {/* Numero de Telefono */}
              <div>
                <label
                  htmlFor="number"
                  className="mb-2 block text-sm font-semibold text-blue-950">
                  Numero de Telefono
                </label>

                <input
                  type="tel"
                  id="number"
                  name="number"
                  autoComplete="number"
                  placeholder="+54 9 11 8080-8080"
                  required
                  className="w-full rounded-lg border border-slate-300 px-4 py-3 text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-red-600 focus:ring-2 focus:ring-red-600/20"
                />
              </div>

              {/* Idioma */}
              <div>
                <label
                  htmlFor="idioma"
                  className="mb-2 block text-sm font-semibold text-blue-950">
                  ¿Qué idioma querés aprender?
                </label>

                <select
                  id="idioma"
                  name="idioma"
                  defaultValue=""
                  required
                  className="w-full rounded-lg border border-slate-300 bg-white px-4 py-3 text-slate-900 outline-none transition focus:border-red-600 focus:ring-2 focus:ring-red-600/20">
                  <option value="" disabled>
                    Seleccioná un idioma
                  </option>

                  <option value="Inglés">Inglés</option>
                  <option value="Portugués">Portugués</option>
                  <option value="Ambos">Ambos idiomas</option>
                </select>
              </div>

              {/* Nivel */}
              <div>
                <label
                  htmlFor="nivel"
                  className="mb-2 block text-sm font-semibold text-blue-950">
                  ¿Cuál es tu nivel actual?
                </label>

                <select
                  id="nivel"
                  name="nivel"
                  defaultValue=""
                  required
                  className="w-full rounded-lg border border-slate-300 bg-white px-4 py-3 text-slate-900 outline-none transition focus:border-red-600 focus:ring-2 focus:ring-red-600/20">
                  <option value="" disabled>
                    Seleccioná tu nivel
                  </option>

                  <option value="No lo sé">No conozco mi nivel</option>
                  <option value="A1">A1 - Principiante</option>
                  <option value="A2">A2 - Básico</option>
                  <option value="B1">B1 - Intermedio</option>
                  <option value="B2">B2 - Intermedio alto</option>
                  <option value="C1">C1 - Avanzado</option>
                  <option value="C2">C2 - Dominio avanzado</option>
                </select>
              </div>

              {/* Mensaje */}
              <div>
                <label
                  htmlFor="mensaje"
                  className="mb-2 block text-sm font-semibold text-blue-950">
                  Contanos un poco más
                </label>

                <textarea
                  id="mensaje"
                  name="mensaje"
                  rows="4"
                  placeholder="¿Cuál es tu objetivo al aprender este idioma?"
                  required
                  className="w-full resize-y rounded-lg border border-slate-300 px-4 py-3 text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-red-600 focus:ring-2 focus:ring-red-600/20"
                />
              </div>

              {/* Asunto del correo */}
              <input
                type="hidden"
                name="_subject"
                value="Nueva consulta - Parnaiba Academy"
              />

              {/* Botón de envío */}
              <button
                type="submit"
                className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-red-600 px-6 py-4 font-bold text-white transition duration-300 hover:bg-red-700 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-600">
                Enviar consulta
                <span aria-hidden="true">→</span>
              </button>

              <p className="text-center text-xs leading-5 text-slate-500">
                Usaremos tus datos para responder a tu consulta.
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
