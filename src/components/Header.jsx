import { useState } from "react";

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <header
      className="sticky top-0 z-50 border-b border-gray-200  bg-blue-900
    ">
      <div className="mx-auto flex min-h-20 max-w-7xl items-center justify-between px-5">
        {/* Logo */}
        <a href="/" className="shrink-0">
          <img
            src="/logo2.jpg"
            alt="Logo del curso"
            className="h-auto w-50 rounded-2xl p-0.5 object-contain "
          />
        </a>

        {/* Navegación desktop */}
        <nav className="hidden items-center gap-8 md:flex">
          <a
            href="#curso"
            className="font-semibold text-white transition hover:text-gray-300">
            El curso
          </a>

          <a
            href="#como-funciona"
            className="font-semibold text-white transition hover:text-gray-300">
            Cómo funciona
          </a>

          <a
            href="#comenzar"
            className="font-semibold text-white transition hover:text-gray-300">
            Comenzar
          </a>

          <a
            href="#contacto"
            className="font-semibold text-white transition hover:text-gray-300">
            Contáctanos
          </a>
        </nav>

        {/* Botón iniciar sesión desktop */}
        <button className="hidden rounded-md bg-red-600 px-5 py-3 font-bold text-white transition hover:bg-red-700 md:block">
          Iniciar sesión
        </button>

        {/* Botón hamburguesa mobile */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="flex flex-col gap-1.5 md:hidden"
          aria-label="Abrir menú"
          aria-expanded={menuOpen}>
          <span
            className={`h-0.5 w-7 bg-white transition ${
              menuOpen ? "translate-y-2 rotate-45" : ""
            }`}
          />

          <span
            className={`h-0.5 w-7 bg-white transition ${
              menuOpen ? "opacity-0" : ""
            }`}
          />

          <span
            className={`h-0.5 w-7 bg-white transition ${
              menuOpen ? "-translate-y-2 -rotate-45" : ""
            }`}
          />
        </button>
      </div>

      {/* Menú mobile */}
      <div
        className={`overflow-hidden border-t border-gray-100 bg-white transition-all duration-300 md:hidden ${
          menuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        }`}>
        <nav className="mx-auto flex max-w-7xl flex-col px-5 pb-5 ">
          <a
            href="#curso"
            onClick={closeMenu}
            className="border-b border-gray-100 py-4 font-semibold text-blue-900 hover:text-red-600">
            El curso
          </a>

          <a
            href="#como-funciona"
            onClick={closeMenu}
            className="border-b border-gray-100 py-4 font-semibold text-blue-900 hover:text-red-600">
            Cómo funciona
          </a>

          <a
            href="#comenzar"
            onClick={closeMenu}
            className="border-b border-gray-100 py-4 font-semibold text-blue-900 hover:text-red-600">
            Comenzar
          </a>

          <a
            href="#contacto"
            onClick={closeMenu}
            className="border-b border-gray-100 py-4 font-semibold text-blue-900 hover:text-red-600">
            Contáctanos
          </a>

          <button
            onClick={closeMenu}
            className="mt-4 rounded-md bg-red-600 px-5 py-3 font-bold text-white transition hover:bg-red-700">
            Iniciar sesión
          </button>
        </nav>
      </div>
    </header>
  );
}

export default Header;
