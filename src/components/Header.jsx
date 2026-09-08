import { useState } from "react";

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="header">
      <div className="header-container">
        {/* Logo */}
        <a href="#" className="logo">
          <img
            src="https://placehold.co/220x70/ff0000/ffffff?text=LOGO"
            alt="Logo del curso"
          />
        </a>

        {/* Navegación desktop */}
        <nav className="desktop-nav">
          <a href="#curso">El curso</a>
          <a href="#como-funciona">Cómo funciona</a>
          <a href="#comenzar">Comenzar</a>
          <a href="#contacto">Contáctanos</a>
        </nav>

        {/* Botón iniciar sesión */}
        <button className="login-button">Iniciar sesión</button>

        {/* Hamburguesa */}
        <button
          className="menu-button"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Abrir menú">
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>

      {/* Menú mobile */}
      {menuOpen && (
        <nav className="mobile-nav">
          <a href="#curso" onClick={() => setMenuOpen(false)}>
            El curso
          </a>

          <a href="#como-funciona" onClick={() => setMenuOpen(false)}>
            Cómo funciona
          </a>

          <a href="#comenzar" onClick={() => setMenuOpen(false)}>
            Comenzar
          </a>

          <a href="#contacto" onClick={() => setMenuOpen(false)}>
            Contáctanos
          </a>

          <button className="mobile-login-button">Iniciar sesión</button>
        </nav>
      )}
    </header>
  );
}

export default Header;
