"use client";

import { Playfair_Display, Plus_Jakarta_Sans } from "next/font/google";
import { useState } from "react";
import Image from "next/image";
import cocina from "../images/cocina.jpg";
import chicharron from "../images/chicharron.jpg";
import picadillo from "../images/gorditas-de-maiz-rellenas.jpg"
import des_roja from "../images/des_roja.jpg"
import des_verde from "../images/desheb_verde.webp"
import flautas from "../images/flautas.jpg"
import burro from "../images/burrito.webp"
import Link from "next/link";

const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  style: ["normal", "italic"],
  variable: "--font-display",
});

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-body",
});

const guisos = [
  {
    numero: "01",
    nombre: "Picadillo",
    descripcion:
      "Carne de res molida guisada lentamente con papa, zanahoria y jitomate, sazonada con las especias de la casa.",
    etiqueta: "DE LA CASA",
  },
  {
    numero: "02",
    nombre: "Deshebrada Verde",
    descripcion:
      "Res deshebrada a mano en salsa de tomatillo, chile serrano y cilantro fresco.",
    etiqueta: "TRADICIONAL",
  },
  {
    numero: "03",
    nombre: "Deshebrada Roja",
    descripcion:
      "Res deshebrada bañada en salsa de chile guajillo y jitomate asado, con un ligero toque ahumado.",
    etiqueta: "ESPECIALIDAD",
  },
  {
    numero: "04",
    nombre: "Chicharrón Prensado",
    descripcion:
      "Chicharrón prensado guisado en salsa roja de la casa, preparado lentamente para concentrar todo su sabor.",
    etiqueta: "CLÁSICO",
  },
];

const platillos = [
  {
    numero: "01",
    categoria: "DEL COMAL",
    nombre: "Gorditas de Maíz",
    precio: "$130",
    descripcion:
      "Gorditas gruesas de maíz, cocidas al momento en el comal y rellenas con el guiso que tú elijas.",
    detalles: [
      "Maíz blanco o azul de temporada",
      "Masa nixtamalizada en casa",
      "Frijoles refritos con queso fresco",
      "Salsa verde o roja",
    ],
    imagenIzquierda: true,
    imagen: picadillo
  },
  {
    numero: "02",
    categoria: "PARA COMPARTIR",
    nombre: "Flautas Doradas",
    precio: "$138",
    descripcion:
      "Flautas enrolladas a mano y doradas hasta conseguir una textura crujiente por fuera y suave por dentro.",
    detalles: [
      "Deshebrada, pollo o picadillo",
      "Crema y queso fresco",
      "Lechuga y aguacate",
      "Rábano y salsa de la casa",
    ],
    imagenIzquierda: false,
    imagen: flautas
  },
  {
    numero: "03",
    categoria: "ESPECIALIDAD",
    nombre: "Burritos de la Casa",
    precio: "$145",
    descripcion:
      "Tortilla de harina hecha a mano, calentada en el comal y rellena con cualquiera de nuestros guisos.",
    detalles: [
      "Tortilla de harina artesanal",
      "Guiso a elección",
      "Frijoles refritos",
      "Nopales y salsa taquera",
    ],
    imagenIzquierda: true,
    imagen: burro
  },
];

function PhotoPlaceholder({ label, className = "" }) {
  return (
    <div
      className={`relative flex items-center justify-center overflow-hidden border border-[#E8DFD3] bg-[#F3ECE2] ${className}`}
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(194,94,62,0.15),transparent_35%),radial-gradient(circle_at_80%_80%,rgba(217,119,6,0.12),transparent_35%)]" />

      <div className="relative text-center">
        <span className="font-[family-name:var(--font-display)] text-2xl italic text-[#9D4225]">
          {label}
        </span>

        <p className="mt-2 text-[10px] font-bold uppercase tracking-[0.15em] text-[#8F6F6C]">
          Fotografía de platillo
        </p>
      </div>
    </div>
  );
}

function DetailItem({ children }) {
  return (
    <li className="flex items-start gap-3 text-sm leading-6 text-[#5B403D]">
      <span className="mt-[9px] h-1.5 w-1.5 shrink-0 rounded-full bg-[#B91C1C]" />
      <span>{children}</span>
    </li>
  );
}

export default function MenuPage() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <main
      className={`${playfair.variable} ${jakarta.variable} min-h-screen bg-[#FEF8F4] text-[#1D1B19]`}
    >
      {/* NAVIGATION */}
      {/* NAVIGATION */}
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

      {/* HERO */}
      <section
        id="inicio"
        className="mx-auto grid max-w-[1280px] gap-10 px-4 py-12 md:px-6 md:py-20 lg:grid-cols-12 lg:px-12 lg:py-24"
      >
        <div className="flex flex-col justify-center lg:col-span-6">
          <p className="mb-5 text-xs font-bold uppercase tracking-[0.12em] text-[#B91C1C]">
            Cocina mexicana · Hecha en casa
          </p>

          <h1 className="font-[family-name:var(--font-display)] text-[38px] font-semibold leading-[46px] tracking-[-0.01em] md:text-[56px] md:leading-[64px] md:tracking-[-0.02em]">
            El sabor de casa,
            <br />
            <span className="italic text-[#93000B]">
              servido con tradición.
            </span>
          </h1>

          <p className="mt-6 max-w-xl text-[15px] leading-6 text-[#5B403D] md:text-lg md:leading-7">
            En Fonda Doña Carmen cocinamos con recetas que pasan de generación
            en generación. Maíz, comal, cazuelas y mucho cariño en cada
            platillo.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href="#menu"
              className="rounded bg-[#B91C1C] px-6 py-3 text-sm font-semibold text-white transition duration-150 hover:bg-[#991B1B]"
            >
              Ver el menú
            </a>

            <a
              href="#historia"
              className="rounded border border-[#C25E3E] bg-[#FBF7F0] px-6 py-3 text-sm font-semibold text-[#1F1D1B] transition duration-150 hover:bg-[#C25E3E]/10"
            >
              Nuestra historia
            </a>
          </div>

          <div className="mt-10 flex flex-wrap gap-6 border-t border-[#E8DFD3] pt-6">
            <div>
              <p className="font-[family-name:var(--font-display)] text-xl text-[#93000B]">
                100%
              </p>
              <p className="mt-1 text-[10px] font-bold uppercase tracking-[0.08em] text-[#8F6F6C]">
                Hecho en casa
              </p>
            </div>

            <div>
              <p className="font-[family-name:var(--font-display)] text-xl text-[#93000B]">
                Diario
              </p>
              <p className="mt-1 text-[10px] font-bold uppercase tracking-[0.08em] text-[#8F6F6C]">
                Comida fresca
              </p>
            </div>

            <div>
              <p className="font-[family-name:var(--font-display)] text-xl text-[#93000B]">
                Desde casa
              </p>
              <p className="mt-1 text-[10px] font-bold uppercase tracking-[0.08em] text-[#8F6F6C]">
                Recetas familiares
              </p>
            </div>
          </div>
        </div>

        <div className="lg:col-span-6">
          <div className="relative aspect-[4/3] w-full overflow-hidden border border-[#E8DFD3] md:aspect-[5/4]">
            <Image
              src={cocina}
              alt="La cocina de Doña Carmen"
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              style={{ objectFit: "cover" }}
              priority
            />
        </div>
        </div>
      </section>

      {/* INTRO */}
      <section className="border-y border-[#E8DFD3] bg-[#F3ECE2]">
        <div className="mx-auto max-w-[1280px] px-4 py-12 text-center md:px-6 md:py-16 lg:px-12">
          <p className="text-xs font-bold uppercase tracking-[0.12em] text-[#B91C1C]">
            EL CORAZÓN DE NUESTRA COCINA
          </p>

          <h2 className="mx-auto mt-3 max-w-3xl font-[family-name:var(--font-display)] text-[28px] font-semibold leading-9 md:text-4xl md:leading-[44px]">
            Guisos que empiezan en la cazuela y terminan en tu mesa.
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-sm leading-6 text-[#5B403D] md:text-base">
            Cada mañana preparamos nuestros guisos lentamente, respetando el
            tiempo que necesita cada ingrediente para conseguir ese sabor
            casero que nos distingue.
          </p>
        </div>
      </section>

      {/* GUISOS */}
      <section
        id="guisos"
        className="mx-auto max-w-[1280px] px-4 py-16 md:px-6 md:py-20 lg:px-12"
      >
        <div className="flex flex-col justify-between gap-5 md:flex-row md:items-end">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.12em] text-[#B91C1C]">
              De la cazuela
            </p>

            <h2 className="mt-2 font-[family-name:var(--font-display)] text-3xl font-semibold md:text-4xl">
              Los Guisos de Doña Carmen
            </h2>
          </div>

          <span className="w-fit border border-[#E4BEB9] bg-[#FBF7F0] px-3 py-2 text-[10px] font-bold uppercase tracking-[0.08em] text-[#93000B]">
            Preparados diariamente
          </span>
        </div>

        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {guisos.map((guiso) => (
            <article
              key={guiso.nombre}
              className="group overflow-hidden border border-[#E8DFD3] bg-[#FBF7F0]"
            >
              <div className="relative aspect-[4/3] w-full overflow-hidden md:aspect-[5/4]">
                <Image
                  src={guiso.nombre === "Picadillo" ? picadillo : guiso.nombre === "Deshebrada Verde" ? des_verde : guiso.nombre === "Deshebrada Roja" ? des_roja : chicharron}
                  alt={guiso.nombre}
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  style={{ objectFit: "cover" }}
                />
              </div>

              <div className="p-5">
                <div className="flex items-center justify-between">
                  <span className="text-[10px] font-bold tracking-[0.08em] text-[#B91C1C]">
                    {guiso.numero}
                  </span>

                  <span className="text-[10px] font-bold uppercase tracking-[0.08em] text-[#8F6F6C]">
                    {guiso.etiqueta}
                  </span>
                </div>

                <h3 className="mt-3 font-[family-name:var(--font-display)] text-xl font-semibold">
                  {guiso.nombre}
                </h3>

                <p className="mt-2 text-sm leading-6 text-[#5B403D]">
                  {guiso.descripcion}
                </p>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* MENU PRINCIPAL */}
      <section id="menu" className="bg-[#F3ECE2] py-16 md:py-20">
        <div className="mx-auto max-w-[1280px] px-4 md:px-6 lg:px-12">
          <div className="max-w-2xl">
            <p className="text-xs font-bold uppercase tracking-[0.12em] text-[#B91C1C]">
              Nuestra carta
            </p>

            <h2 className="mt-2 font-[family-name:var(--font-display)] text-3xl font-semibold md:text-4xl">
              Tres maneras de disfrutar nuestros guisos.
            </h2>

            <p className="mt-4 text-sm leading-6 text-[#5B403D] md:text-base">
              Elige tu favorito y acompáñalo con el sazón de nuestra cocina.
            </p>
          </div>

          <div className="mt-12 flex flex-col gap-8">
            {platillos.map((platillo) => (
              <article
                key={platillo.nombre}
                className="grid border border-[#E8DFD3] bg-[#FBF7F0] md:grid-cols-2"
              >
                <div
                  className={
                    platillo.imagenIzquierda
                      ? "order-1"
                      : "order-1 md:order-2"
                  }
                >
                 <div className="relative aspect-[4/3] w-full overflow-hidden md:aspect-[5/4]">
                    <Image
                      src={platillo.imagen}
                      alt={platillo.nombre}
                      fill
                      sizes="(max-width: 1024px) 100vw, 50vw"
                      style={{ objectFit: "cover" }}
                      priority
                    />
                </div>
                </div>

                <div
                  className={
                    platillo.imagenIzquierda
                      ? "order-2 p-6 md:p-10"
                      : "order-2 p-6 md:order-1 md:p-10"
                  }
                >
                  <div className="flex items-center justify-between border-b border-[#E8DFD3] pb-4">
                    <span className="text-[10px] font-bold uppercase tracking-[0.1em] text-[#B91C1C]">
                      {platillo.categoria}
                    </span>

                    <span className="font-[family-name:var(--font-display)] text-2xl font-semibold text-[#93000B]">
                      {platillo.precio}
                    </span>
                  </div>

                  <h3 className="mt-5 font-[family-name:var(--font-display)] text-2xl font-semibold md:text-3xl">
                    {platillo.nombre}
                  </h3>

                  <p className="mt-4 text-[15px] leading-6 text-[#5B403D]">
                    {platillo.descripcion}
                  </p>

                  <ul className="mt-6 grid gap-2 sm:grid-cols-2">
                    {platillo.detalles.map((detalle) => (
                      <DetailItem key={detalle}>{detalle}</DetailItem>
                    ))}
                  </ul>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* HISTORIA */}
      <section
        id="historia"
        className="mx-auto grid max-w-[1280px] gap-10 px-4 py-16 md:px-6 md:py-20 lg:grid-cols-12 lg:px-12"
      >
        <div className="lg:col-span-5">
          <p className="text-xs font-bold uppercase tracking-[0.12em] text-[#B91C1C]">
            Nuestra historia
          </p>

          <h2 className="mt-3 font-[family-name:var(--font-display)] text-3xl font-semibold leading-10 md:text-4xl">
            Una fonda hecha de recuerdos.
          </h2>
        </div>

        <div className="lg:col-span-7">
          <p className="text-base leading-7 text-[#5B403D]">
            Fonda Doña Carmen nace del gusto por cocinar para los demás y de
            mantener vivas las recetas que forman parte de nuestra familia.
          </p>

          <p className="mt-5 text-base leading-7 text-[#5B403D]">
            Aquí no buscamos complicar la comida. Creemos en el buen maíz, una
            tortilla recién hecha, una cazuela a fuego lento y en sentarse a
            comer sin prisas.
          </p>

          <div className="mt-8 grid gap-4 sm:grid-cols-3">
            <div className="border-l-2 border-[#B91C1C] pl-4">
              <p className="font-[family-name:var(--font-display)] text-xl">
                Maíz
              </p>
              <p className="mt-1 text-xs text-[#8F6F6C]">
                Preparado con respeto
              </p>
            </div>

            <div className="border-l-2 border-[#C25E3E] pl-4">
              <p className="font-[family-name:var(--font-display)] text-xl">
                Comal
              </p>
              <p className="mt-1 text-xs text-[#8F6F6C]">
                Hecho al momento
              </p>
            </div>

            <div className="border-l-2 border-[#D97706] pl-4">
              <p className="font-[family-name:var(--font-display)] text-xl">
                Familia
              </p>
              <p className="mt-1 text-xs text-[#8F6F6C]">
                Sazón de generaciones
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* RESERVATION CTA */}
      <section
        id="reservar"
        className="bg-[#93000B] px-4 py-16 text-center text-white md:py-20"
      >
        <div className="mx-auto max-w-2xl">
          <p className="text-xs font-bold uppercase tracking-[0.12em] text-[#FFCDC7]">
            Fonda Doña Carmen
          </p>

          <h2 className="mt-3 font-[family-name:var(--font-display)] text-3xl font-semibold md:text-4xl">
            La mesa está lista.
          </h2>

          <p className="mt-4 text-sm leading-6 text-[#FFCDC7] md:text-base">
            Ven a disfrutar comida hecha con calma, ingredientes sencillos y
            el sabor de una cocina verdaderamente casera.
          </p>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-[#1D1B19] text-[#F6F0EC]">
        <div className="mx-auto grid max-w-[1280px] gap-10 px-4 py-12 md:grid-cols-2 md:px-6 lg:grid-cols-4 lg:px-12">
          <div>
            <h3 className="font-[family-name:var(--font-display)] text-xl italic">
              Fonda Doña Carmen
            </h3>

            <p className="mt-3 text-sm leading-6 text-[#C9BFBB]">
              Cocina mexicana tradicional, hecha en casa y servida con cariño.
            </p>
          </div>

          <div>
            <p className="text-xs font-bold uppercase tracking-[0.08em]">
              Ubicación
            </p>

            <p className="mt-3 text-sm leading-6 text-[#C9BFBB]">
              Agrega aquí la dirección de la fonda.
            </p>
          </div>

          <div>
            <p className="text-xs font-bold uppercase tracking-[0.08em]">
              Horarios
            </p>

            <p className="mt-3 text-sm text-[#C9BFBB]">
              Lunes – Sábado
            </p>

            <p className="text-sm text-[#C9BFBB]">
              13:00 – 22:00
            </p>

            <p className="mt-1 text-sm text-[#C9BFBB]">
              Domingo · 12:00 – 19:00
            </p>
          </div>

          <div>
            <p className="text-xs font-bold uppercase tracking-[0.08em]">
              Contacto
            </p>

            <p className="mt-3 text-sm text-[#C9BFBB]">
              +52 (000) 0000-0000
            </p>

            <p className="text-sm text-[#C9BFBB]">
              contacto@fondadonacarmen.mx
            </p>
          </div>
        </div>

        <div className="border-t border-white/10">
          <div className="mx-auto max-w-[1280px] px-4 py-5 text-center text-[10px] font-semibold uppercase tracking-[0.08em] text-[#8F8581] md:px-6 lg:px-12">
            © 2026 Fonda Doña Carmen · Todos los derechos reservados
          </div>
        </div>
      </footer>
    </main>
  );
}
