"use client";

import Image from "next/image";
import { useState } from "react";
import cocina from "../images/cocina.jpg";
import picadillo from "../images/gorditas-de-maiz-rellenas.jpg";
import flautas from "../images/flautas.jpg";
import burro from "../images/burrito.webp";
import Link from "next/link";

export default function QuienesSomos() {
const [menuOpen, setMenuOpen] = useState(false);

  return (
    <main className="about-page">
      {/* Navegación */}
    <header className="sticky top-0 z-50 border-b border-[#E8DFD3] bg-[#FEF8F4]/95 backdrop-blur">
  <div className="mx-auto flex max-w-[1280px] items-center justify-between px-4 py-4 md:px-6 lg:px-12">

    {/* LOGO */}
    <Link href="./" className="flex items-center gap-3">
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
    </Link>

    {/* MENÚ DESKTOP */}
    <nav className="hidden items-center gap-8 text-xs font-semibold uppercase tracking-[0.08em] text-[#5B403D] md:flex">

      <Link
        href="./"
        className="transition hover:text-[#B91C1C]"
      >
        Inicio
      </Link>

      <Link
        href="./Menu"
        className="transition hover:text-[#B91C1C]"
      >
        Menú
      </Link>

      <Link
        href="./QS"
        className="transition hover:text-[#B91C1C]"
      >
        Quiénes somos
      </Link>

      <Link
        href="./#ubicacion"
        className="transition hover:text-[#B91C1C]"
      >
        Ubicación
      </Link>

    </nav>

    {/* BOTÓN MÓVIL */}
    <button
      onClick={() => setMenuOpen(!menuOpen)}
      className="flex h-10 w-10 items-center justify-center rounded-lg border border-[#E8DFD3] text-2xl text-[#93000B] md:hidden"
      aria-label="Abrir menú"
    >
      {menuOpen ? "✕" : "☰"}
    </button>

  </div>

  {/* MENÚ MÓVIL */}
  {menuOpen && (
    <nav className="border-t border-[#E8DFD3] bg-[#FEF8F4] px-4 py-4 md:hidden">

      <div className="flex flex-col gap-1">

        <Link
          href="./"
          onClick={() => setMenuOpen(false)}
          className="rounded-lg px-4 py-3 text-sm font-semibold uppercase tracking-wide text-[#5B403D] transition hover:bg-[#F3ECE2] hover:text-[#B91C1C]"
        >
          Inicio
        </Link>

        <Link
          href="./Menu"
          onClick={() => setMenuOpen(false)}
          className="rounded-lg px-4 py-3 text-sm font-semibold uppercase tracking-wide text-[#5B403D] transition hover:bg-[#F3ECE2] hover:text-[#B91C1C]"
        >
          Menú
        </Link>

        <Link
          href="./QS"
          onClick={() => setMenuOpen(false)}
          className="rounded-lg px-4 py-3 text-sm font-semibold uppercase tracking-wide text-[#5B403D] transition hover:bg-[#F3ECE2] hover:text-[#B91C1C]"
        >
          Quiénes somos
        </Link>

        <Link
          href="./#ubicacion"
          onClick={() => setMenuOpen(false)}
          className="rounded-lg px-4 py-3 text-sm font-semibold uppercase tracking-wide text-[#5B403D] transition hover:bg-[#F3ECE2] hover:text-[#B91C1C]"
        >
          Ubicación
        </Link>

      </div>

    </nav>
  )}

</header>

      {/* Encabezado de historia */}
      <section className="about-intro">
        <div className="section-container about-intro-grid">
          <div>
            <span className="section-label">
              ✦ Nuestra historia
            </span>

            <h1>
              El alma de nuestra cocina:
              <em> sabor que alegra</em> cada momento
            </h1>
          </div>

          <p>
            En Fonda Doña Carmen celebramos el sabor
            tradicional mexicano, los ingredientes
            frescos y la alegría de compartir una buena
            comida.
          </p>
        </div>

        <div className="section-container about-stats">
          <div className="about-stat">
            <strong>100%</strong>
            <span>Sazón de casa</span>
            <p>
              Platillos preparados con cariño y
              dedicación.
            </p>
          </div>

          <div className="about-stat">
            <strong>3</strong>
            <span>Especialidades</span>
            <p>
              Gorditas, flautas y burros para disfrutar.
            </p>
          </div>

          <div className="about-stat">
            <strong>1</strong>
            <span>Gran tradición</span>
            <p>
              El gusto de compartir la comida mexicana.
            </p>
          </div>

          <div className="about-stat">
            <strong>∞</strong>
            <span>Momentos felices</span>
            <p>
              Una mesa llena de sabor y alegría.
            </p>
          </div>
        </div>
      </section>

      {/* Historia de Doña Carmen */}
      <section className="about-story section-container">
        <div className="story-image">
          <Image
            src={cocina}
            alt="Preparación de comida tradicional en Fonda Doña Carmen"
            fill
            sizes="(max-width: 1024px) 100vw, 50vw"
            style={{ objectFit: "cover" }}
          />

          <div className="story-quote">
            <span>“</span>
            <p>
              Donde su sazón da alegría.
            </p>
            <small>— Fonda Doña Carmen</small>
          </div>
        </div>

        <div className="story-content">
          <span className="section-label">
            ✦ El corazón de nuestra fonda
          </span>

          <h2>
            El sabor que nace
            <br />
            del hogar
          </h2>

          <p>
            En Fonda Doña Carmen creemos que una buena
            comida es mucho más que un platillo: es una
            forma de compartir, convivir y crear recuerdos.
          </p>

          <p>
            Cada una de nuestras especialidades busca
            ofrecer ese sabor tradicional que nos recuerda
            a la cocina de casa. Desde las gorditas de maíz
            hasta nuestras flautas y burros, preparamos cada
            platillo con dedicación.
          </p>

          <p>
            Queremos que cada persona que nos visite
            encuentre un lugar agradable, comida rica y
            una atención que le haga sentirse en casa.
          </p>

          <div className="story-signature">
            <span>✦</span>
            <div>
              <strong>Fonda Doña Carmen</strong>
              <small>Donde su sazón da alegría</small>
            </div>
          </div>
        </div>
      </section>

      {/* Especialidades */}

      {/* Galería */}
      <section className="about-gallery section-container">
        <div className="section-heading">
          <div>
            <span className="section-label">
              ✦ Sabor, tradición y alegría
            </span>

            <h2>
              Momentos de nuestra fonda
            </h2>

            <p>
              Un espacio para disfrutar de la comida,
              la convivencia y el auténtico sabor de casa.
            </p>
          </div>
        </div>

        <div className="gallery-grid">
  <div className="gallery-item gallery-large">
    <Image
      src={cocina}
      alt="Preparación de comida tradicional en Fonda Doña Carmen"
      fill
      sizes="(max-width: 1024px) 100vw, 50vw"
      style={{ objectFit: "cover" }}
      priority
    />
  </div>

  <div className="gallery-item">
    <Image
      src={picadillo}
      alt="Gorditas de maíz rellenas"
      fill
      sizes="(max-width: 768px) 50vw, 25vw"
      style={{ objectFit: "cover" }}
    />
  </div>

  <div className="gallery-item">
    <Image
      src={flautas}
      alt="Flautas mexicanas"
      fill
      sizes="(max-width: 768px) 50vw, 25vw"
      style={{ objectFit: "cover" }}
    />
  </div>

  <div className="gallery-item">
    <Image
      src={burro}
      alt="Burritos de la casa"
      fill
      sizes="(max-width: 768px) 50vw, 25vw"
      style={{ objectFit: "cover" }}
    />
  </div>
</div>
      </section>

      {/* Invitación a visitar */}
      <section className="about-visit">
        <div className="section-container about-visit-inner">
          <div>
            <span className="section-label light-label">
              ✦ Una mesa llena de sabor
            </span>

            <h2>
              Ven a disfrutar
              <br />
              de nuestra fonda
            </h2>

            <p>
              Te esperamos en Fonda Doña Carmen para
              compartir una comida deliciosa y momentos
              especiales.
            </p>
          </div>

          <div className="visit-info">
            <div>
              <strong>⌖ Nuestra ubicación</strong>
              <p>
                J. Berlanga 2424, Quinta Valle,
                <br />
                25060 Saltillo, Coahuila.
              </p>
            </div>

            <div>
              <strong>◷ Horario de atención</strong>
              <p>
                Viernes a domingo
                <br />
                7:00 PM a 12:00 AM
              </p>
            </div>

            <Link href="/#ubicacion" className="visit-button">
              Cómo llegar ↗
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="footer-top">
          <Link href="/" className="footer-logo">
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
            <Link href="/">Inicio</Link>
            <Link href="/Menu">Menú</Link>
            <Link href="/QS">Quiénes somos</Link>
            <Link href="/">Ubicación</Link>
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