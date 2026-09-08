function Hero() {
  return (
    <main className="hero">
      <div className="hero-container">
        <div className="hero-content">
          <span className="hero-tag">ENGLISH - SPANISH</span>

          <h1>
            Aprendé inglés de una manera
            <span> diferente.</span>
          </h1>

          <p>
            Un curso intensivo de inglés diseñado para que avances paso a paso,
            combinando gramática, lectura, traducción y conversación.
          </p>

          <div className="hero-buttons">
            <a href="#comenzar" className="primary-button">
              Comenzar ahora
            </a>

            <a href="#como-funciona" className="secondary-button">
              Conocer el curso
            </a>
          </div>
        </div>

        <div className="hero-card">
          <div className="hero-card-top">
            <span>ENGLISH</span>
            <span>ESPAÑOL</span>
          </div>

          <div className="hero-card-content">
            <h2>Intensive Course</h2>

            <p>From basic to advanced</p>

            <div className="grammar-example">
              <strong>Grammar</strong>
              <span>Reading</span>
              <span>Translation</span>
              <span>Conversation</span>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

export default Hero;
