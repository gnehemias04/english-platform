function Footer() {
  return (
    <footer className="bg-blue-950 text-white">
      <div className="mx-auto max-w-7xl px-5 py-14">
        <div className="grid gap-10 md:grid-cols-2">
          {/* Información */}
          <div>
            <h2 className="text-2xl font-extrabold">English Course</h2>

            <p className="mt-3 max-w-md text-sm leading-6 text-blue-100">
              Un método práctico para aprender inglés, desarrollar tus
              habilidades y ganar confianza para comunicarte.
            </p>
          </div>

          {/* Links */}
          <div className="flex flex-col gap-3 md:items-end">
            <a
              href="#curso"
              className="text-sm font-semibold text-white transition hover:text-red-500">
              El curso
            </a>

            <a
              href="#como-funciona"
              className="text-sm font-semibold text-white transition hover:text-red-500">
              Cómo funciona
            </a>

            <a
              href="#comenzar"
              className="text-sm font-semibold text-white transition hover:text-red-500">
              Comenzar
            </a>

            <a
              href="#contacto"
              className="text-sm font-semibold text-white transition hover:text-red-500">
              Contáctanos
            </a>
          </div>
        </div>

        {/* Separador */}
        <div className="my-10 h-px bg-white/15"></div>

        {/* Copyright */}
        <div className="flex flex-col gap-3 text-xs text-blue-200 sm:flex-row sm:items-center sm:justify-between">
          <p>© 2026 English Course. Todos los derechos reservados.</p>

          <p>Desarrollado por Gabriel Rengifo</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
