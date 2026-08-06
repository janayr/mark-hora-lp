import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Mariana Alves",
    role: "Salão de Beleza · São Paulo",
    initials: "MA",
    quote:
      "Parei de perder cliente por não responder no horário. A IA agenda sozinha até de madrugada e minha agenda amanhece cheia.",
  },
  {
    name: "Rafael Souza",
    role: "Barbearia · Belo Horizonte",
    initials: "RS",
    quote:
      "Antes eu respondia mensagem no meio do corte. Agora o AgendaZap cuida de tudo e eu foco no cliente que está na cadeira.",
  },
  {
    name: "Camila Ferreira",
    role: "Clínica de Estética · Curitiba",
    initials: "CF",
    quote:
      "As remarcações eram um caos. Hoje o cliente resolve tudo pelo WhatsApp e as faltas caíram muito.",
  },
  {
    name: "Diego Martins",
    role: "Studio de Tatuagem · Porto Alegre",
    initials: "DM",
    quote:
      "Achei que ia ser complicado, mas em 5 minutos estava funcionando. Parece que tenho uma recepcionista trabalhando 24h.",
  },
  {
    name: "Beatriz Lima",
    role: "Consultório Odontológico · Recife",
    initials: "BL",
    quote:
      "O que mais gosto é que ele entende áudio. Meus pacientes mandam voz e mesmo assim o agendamento sai certinho.",
  },
  {
    name: "Lucas Pereira",
    role: "Pet Shop · Salvador",
    initials: "LP",
    quote:
      "Economizo horas por semana. O retorno pagou a ferramenta logo no primeiro mês de uso.",
  },
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="bg-neutral-50 py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mx-auto max-w-2xl text-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-neutral-200 bg-white px-4 py-1.5 text-sm font-medium text-neutral-600">
            <Star
              className="h-4 w-4 fill-emerald-500 text-emerald-500"
              aria-hidden="true"
            />
            Mais de 1.200 negócios usando
          </span>
          <h2 className="mt-6 text-balance text-3xl font-semibold tracking-tight text-primary md:text-4xl">
            Quem usa, não volta mais para a agenda no papel.
          </h2>
          <p className="mt-4 text-pretty text-base leading-relaxed text-neutral-500 md:text-lg">
            Veja o que donos de negócio estão falando depois de automatizar os
            agendamentos com o AgendaZap.
          </p>
        </div>

        <div className="mt-14 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((t) => (
            <figure
              key={t.name}
              className="group flex flex-col rounded-3xl border border-neutral-200/80 bg-white p-8 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
            >
              <Quote
                className="h-8 w-8 text-emerald-200 transition-colors group-hover:text-emerald-300"
                aria-hidden="true"
              />
              <div
                className="mt-4 flex gap-0.5"
                aria-label="Avaliação 5 de 5 estrelas"
              >
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star
                    key={i}
                    className="h-4 w-4 fill-amber-400 text-amber-400"
                    aria-hidden="true"
                  />
                ))}
              </div>
              <blockquote className="mt-4 flex-1 text-pretty text-base leading-relaxed text-neutral-700">
                {`"${t.quote}"`}
              </blockquote>
              <figcaption className="mt-6 flex items-center gap-3 border-t border-neutral-100 pt-6">
                <div className="flex h-11 w-11 items-center justify-center rounded-full bg-emerald-50 text-sm font-semibold text-emerald-600">
                  {t.initials}
                </div>
                <div>
                  <div className="text-sm font-semibold text-primary">
                    {t.name}
                  </div>
                  <div className="text-sm text-neutral-500">{t.role}</div>
                </div>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
