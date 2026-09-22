
import Link from "next/link";
import Image from "next/image";
import promo1 from "./images/promo1.png";
import promo2 from "./images/promo2.png";
import promo3 from "./images/promo3.png";
import exper from "./images/exp.png";

const especialidades = [
  {
    nombre: "3 Gordas de maiz con una cocacola de 600ml",
    descripcion:
      "Deliciosas gorditas hechas al momento, con el auténtico sabor de casa, acompañadas de una cocacola bien fria de 600ml.",
    precio: "60",
    imagen: promo1,
    etiqueta: "Favorito de la casa",
  },
  {
    nombre: "Flautas y Burrito",
    descripcion:
      "Crujientes, doraditas flautas acompañadas de un delicioso burrito con el guiso que desee.",
    precio: "100",
    imagen: promo2,
    etiqueta: "Sabor tradicional",
  },
  {
    nombre: "1 Burroo con 2 gorditas de maiz y una cocacola de 600ml",
    descripcion:
      "Un delicioso burroo acompañado de 2 gorditas de maiz y una cocacola bien fria de 600ml.",
    precio: "150",
    imagen: promo3,
    etiqueta: "Mejor opción",
  },
];

export default function Home() {
  return (
    <main>
      {/* Navegación principal */}
      {/* NAVIGATION */}
<header className="sticky top-0 z-50 border-b border-[#E8DFD3] bg-[#FEF8F4]/95 backdrop-blur">
  <div className="mx-auto flex max-w-[1280px] items-center justify-between px-4 py-4 md:px-6 lg:px-12">

    {/* LOGO */}
    <a
      href="./"
      className="flex items-center gap-3"
    >
      <span className="flex h-10 w-10 items-center justify-center rounded-full bg-[#F3ECE2] text-xl">
        🍲
      </span>

      <div className="flex flex-col leading-none">
        <span className="font-[family-name:var(--font-body)] text-[10px] font-semibold uppercase tracking-[0.15em] text-[#8F6F6C]">
          Fonda
        </span>

        <span className="mt-1 font-[family-name:var(--font-display)] text-xl font-semibold text-[#93000B]">
          Doña Carmen
        </span>
      </div>
    </a>

    {/* MENU */}
    <nav className="hidden items-center gap-8 text-xs font-semibold uppercase tracking-[0.08em] text-[#5B403D] md:flex">

      <a
        href="./"
        className="transition hover:text-[#B91C1C]"
      >
        Inicio
      </a>

      <a
        href="./Menu"
        className="text-[#B91C1C]"
      >
        Menú
      </a>

      <a
        href="./QS"
        className="transition hover:text-[#B91C1C]"
      >
        Quiénes somos
      </a>

      <a
        href="./#ubicacion"
        className="transition hover:text-[#B91C1C]"
      >
        Ubicación
      </a>

    </nav>
  </div>
</header>

      {/* Hero principal */}
      <section id="inicio" className="hero">
        <div className="hero-overlay">
          <div className="hero-content">
            <span className="eyebrow">
              ✦ Cocina tradicional mexicana
            </span>

            <h1>
              El auténtico
              <br />
              sabor del hogar
            </h1>

            <p className="hero-slogan">
              en cada cazuela
            </p>

            <p className="hero-description">
              En Fonda Doña Carmen, cada platillo se prepara
              con cariño y el sazón de la cocina mexicana.
              Un lugar para disfrutar, compartir y sentirse
              como en casa.
            </p>

            <div className="hero-actions">
              <Link href="#menu" className="primary-button">
                Explorar menú <span>↗</span>
              </Link>

              <Link href="#ubicacion" className="secondary-button">
                Cómo llegar <span>⌖</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Franja de características */}
      <section className="features">
        <div className="feature">
          <span className="feature-icon">✿</span>
          <div>
            <strong>Sazón de casa</strong>
            <p>Hecho con cariño</p>
          </div>
        </div>

        <div className="feature">
          <span className="feature-icon">♨</span>
          <div>
            <strong>Recién preparado</strong>
            <p>Platillos al momento</p>
          </div>
        </div>

        <div className="feature">
          <span className="feature-icon">♡</span>
          <div>
            <strong>Tradición mexicana</strong>
            <p>Recetas con sabor</p>
          </div>
        </div>

        <div className="feature">
          <span className="feature-icon">☀</span>
          <div>
            <strong>Ambiente familiar</strong>
            <p>Siéntete como en casa</p>
          </div>
        </div>
      </section>

      {/* Especialidades */}
      <section id="menu" className="specialties section-container">
        <div className="section-heading">
          <div>
            <span className="section-label">✦ El sabor de la casa</span>
            <h2>Promociones del dia</h2>
            <p>
            Descubre nuestras promociones especiales del día.
            </p>
          </div>

          <Link href="#menu-completo" className="text-link">
            Ver nuestro menú <span>→</span>
          </Link>
        </div>

        <div className="food-grid">
          {especialidades.map((platillo) => (
            <article className="food-card" key={platillo.nombre}>
              <div className="food-image">
                <Image
                  src={platillo.imagen}
                  alt={platillo.nombre}
                  width={400}
                  height={300}
                />
                  <span className="food-tag">{platillo.etiqueta}</span>
                
                <span className="food-tag">
                  {platillo.etiqueta}
                </span>
              </div>

              <div className="food-card-body">
                <h3>{platillo.nombre}</h3>
                <p>{platillo.descripcion}</p>

                <div className="food-footer">
                  <span className="food-price">
                    {platillo.precio === "Por definir"
                      ? platillo.precio
                      : `$${platillo.precio}`}
                  </span>
                  <span className="food-arrow">↗</span>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* Sección de experiencia */}
      <section id="quienes-somos" className="experience">
        <div className="experience-image">
          <Image
            src={exper}
            alt="Preparación de comida tradicional en Fonda Doña Carmen"
            width={600}
            height={400}
          />
        </div>

        <div className="experience-content">
          <span className="section-label">✦ El alma de la fonda</span>

          <h2>
            El sabor que reúne
            <br />
            a la familia
          </h2>

          <p>
            En Fonda Doña Carmen creemos que la comida
            sabe mejor cuando se prepara con cariño.
          </p>

          <p>
            Nuestro objetivo es ofrecerte platillos
            tradicionales, un ambiente agradable y ese
            sazón casero que nos hace sentir en casa.
          </p>

          <div className="quote">
            <span>“</span>
            <p>
              Donde su sazón da alegría.
            </p>
          </div>
        </div>
      </section>

      <br></br>

      {/* Ubicación */}
      <section id="ubicacion" className="location-section">
        <div className="location-info">
          <span className="section-label">✦ Ven a visitarnos</span>

          <h2>Encuentra tu nuevo lugar favorito</h2>

          <p>
            Ven a disfrutar de nuestros platillos y
            descubre el sabor de Fonda Doña Carmen.
          </p>

          <div className="location-detail">
            <span className="detail-icon">⌖</span>
            <div>
              <strong>Dirección</strong>
              <p>
                J. Berlanga 2424, Quinta Valle,
                <br />
                25060 Saltillo, Coahuila.
              </p>
            </div>
          </div>

          <div className="location-detail">
            <span className="detail-icon">◷</span>
            <div>
              <strong>Horario de atención</strong>
              <p>
                Viernes a domingo
                <br />
                7:00 PM a 12:00 AM
              </p>
            </div>
          </div>

          <a
            href="https://www.google.com/maps/search/?api=1&query=J.%20Berlanga%202424%2C%20Quinta%20Valle%2C%2025060%20Saltillo%2C%20Coahuila"
            target="_blank"
            rel="noopener noreferrer"
            className="primary-button"
          >
            Ver ubicación en Google Maps ↗
          </a>
        </div>

        
          <div className="map-placeholder">
                <iframe
                src="https://maps.google.com/maps?q=J.%20Berlanga%202424%2C%20Quinta%20Valle%2C%2025060%20Saltillo%2C%20Coahuila&output=embed"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Ubicación de Fonda Doña Carmen"
                ></iframe>
          </div>
      </section>

      {/* Footer / segunda navegación */}
      <footer className="footer">
        <div className="footer-top">
          <Link href="#inicio" className="footer-logo">
            <span className="logo-icon">🍲</span>
            <div>
              <small>Fonda</small>
              <strong>Doña Carmen</strong>
            </div>
          </Link>

          <p>
            Donde su sazón da alegría.
          </p>

          <nav className="footer-nav">
            <Link href="#inicio">Inicio</Link>
            <Link href="./Menu">Menú</Link>
            <Link href="./QS">Quiénes somos</Link>
            <Link href="#ubicacion">Ubicación</Link>
          </nav>
        </div>

        <div className="footer-bottom">
          <span>© 2026 Fonda Doña Carmen</span>
          <span>Hecho con cariño y sazón mexicano.</span>
        </div>
      </footer>
    </main>
  );
}