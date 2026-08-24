"use client";

import { Sparkles, Play, Check, Menu, X } from "lucide-react";
import { PhoneMockup } from "./ui/phone-mockup";
import Image from "next/image";
import { useState } from "react";

export default function Hero() {
  const [menuOpen, setMenuOpen] = useState(false);

  const navLinks = [
    {
      label: "Como funciona",
      href: "#how-it-works",
    },
    {
      label: "Benefícios",
      href: "#features",
    },
    // {
    //   label: "Depoimentos",
    //   href: "#testimonials",
    // },
  ];

  return (
    <div className="min-h-screen bg-white text-primary antialiased">
      {/* Navbar */}
      <header className="sticky top-0 z-50 border-b border-neutral-100 bg-white/80 backdrop-blur-md">
        <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
          <a href="#" className="flex items-center gap-2">
            <Image
              src="/logo-name.svg"
              alt="Mitig Hora"
              width={0}
              height={0}
              className="h-auto w-38"
            />
          </a>

          {/* Desktop */}
          <div className="hidden items-center gap-8 md:flex">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-sm font-medium text-neutral-600 transition-colors hover:text-neutral-900"
              >
                {link.label}
              </a>
            ))}
          </div>

          <div className="flex items-center gap-3">
            {/* Desktop CTA */}
            <a
              href="https://wa.me/5511975876658?text=Ol%C3%A1!%20Vim%20pelo%20site%20e%20gostaria%20de%20conhecer%20melhor%20o%20sistema%20de%20agendamentos%20pelo%20WhatsApp."
              target="_blank"
              rel="noopener noreferrer"
              className="hidden cursor-pointer rounded-xl bg-primary px-4 py-2 text-sm font-medium text-white shadow-sm transition-all hover:bg-green-wpp hover:shadow-md md:inline-flex"
            >
              Começar agora
            </a>

            {/* Mobile button */}
            <button
              type="button"
              aria-label={menuOpen ? "Fechar menu" : "Abrir menu"}
              onClick={() => setMenuOpen((prev) => !prev)}
              className="inline-flex h-9 w-9 items-center justify-center rounded-xl border border-neutral-200 text-neutral-700 md:hidden"
            >
              {menuOpen ? (
                <X className="h-5 w-5" aria-hidden="true" />
              ) : (
                <Menu className="h-5 w-5" aria-hidden="true" />
              )}
            </button>
          </div>
        </nav>

        {/* Mobile menu */}
        {menuOpen && (
          <div className="border-t border-neutral-100 bg-white md:hidden">
            <div className="mx-auto flex max-w-6xl flex-col px-6 py-4">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                  className="border-b border-neutral-100 py-4 text-sm font-medium text-neutral-700 transition-colors hover:text-neutral-900"
                >
                  {link.label}
                </a>
              ))}

              <a
                href="https://wa.me/5511975876658?text=Ol%C3%A1!%20Vim%20pelo%20site%20e%20gostaria%20de%20conhecer%20melhor%20o%20sistema%20de%20agendamentos%20pelo%20WhatsApp."
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setMenuOpen(false)}
                className="mt-4 inline-flex justify-center rounded-xl bg-primary px-4 py-3 text-sm font-medium text-white shadow-sm transition-all hover:bg-green-wpp hover:shadow-md"
              >
                Começar agora
              </a>
            </div>
          </div>
        )}
      </header>

      {/* Hero */}
      <section className="mx-auto max-w-6xl px-6 py-16 md:py-24">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Left */}
          <div className="flex flex-col items-start">
            <span className="inline-flex items-center gap-2 rounded-full border border-neutral-200 bg-neutral-50 px-3 py-1 text-sm font-medium text-primary">
              <Sparkles
                className="h-4 w-4 text-neutral-500"
                aria-hidden="true"
              />
              Agendamento inteligente
            </span>

            <h1 className="mt-6 text-balance text-4xl font-semibold leading-[1.1] tracking-tight sm:text-5xl lg:text-6xl">
              Seu cliente agenda sozinho pelo{" "}
              <span className="text-green-wpp">WhatsApp</span>
            </h1>

            <p className="mt-6 max-w-xl text-pretty text-lg leading-relaxed text-neutral-600">
              Enquanto você atende um cliente, faço tudo para você, entendo
              áudios e confirmo agendamentos automaticamente.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a
                href="https://wa.me/5511975876658?text=Ol%C3%A1!%20Vim%20pelo%20site%20e%20gostaria%20de%20conhecer%20melhor%20o%20sistema%20de%20agendamentos%20pelo%20WhatsApp."
                target="_blank"
                rel="noopener noreferrer"
                className="cursor-pointer inline-flex items-center justify-center gap-2 rounded-xl bg-primary px-6 py-3 text-sm font-medium text-white shadow-sm transition-all hover:bg-green-wpp hover:shadow-md"
              >
                Quero testar gratuitamente
              </a>
              <button
                type="button"
                className="cursor-pointer inline-flex items-center justify-center gap-2 rounded-xl border border-neutral-200 bg-white px-6 py-3 text-sm font-medium text-neutral-800 shadow-sm transition-all hover:bg-neutral-50 hover:shadow-md"
              >
                <Play className="h-4 w-4" aria-hidden="true" />
                Ver demonstração
              </button>
            </div>

            <ul className="mt-8 flex flex-wrap gap-x-6 gap-y-3">
              {[
                "Sem aplicativo",
                "Funciona 24 horas",
                "Entende texto e áudio",
              ].map((feature) => (
                <li
                  key={feature}
                  className="flex items-center gap-2 text-sm text-neutral-600"
                >
                  <span className="flex h-5 w-5 items-center justify-center rounded-full bg-emerald-50 text-emerald-600">
                    <Check className="h-3 w-3" aria-hidden="true" />
                  </span>
                  {feature}
                </li>
              ))}
            </ul>
          </div>

          {/* Right — Floating phone */}
          <div className="flex justify-center lg:justify-end">
            <PhoneMockup />
          </div>
        </div>
      </section>
    </div>
  );
}
