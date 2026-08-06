import Image from "next/image";

export default function Footer() {
  return (
    <footer className="border-t border-neutral-200 bg-white">
      <div className="mx-auto flex max-w-6xl flex-col gap-10 px-6 py-12 md:flex-row md:justify-between">
        <div className="max-w-sm">
          <div className="flex items-center gap-2">
            <Image
              src={"/logo-name.svg"}
              alt="Mark Hora"
              width={0}
              height={0}
              className="h-auto w-38"
            />
          </div>

          <p className="mt-4 leading-relaxed text-neutral-500">
            Automatize seus agendamentos diretamente pelo WhatsApp.
          </p>
        </div>

        <div className="grid grid-cols-2 gap-10 text-sm md:grid-cols-1">
          <a
            href="#how-it-works"
            className="text-neutral-600 transition hover:text-neutral-900"
          >
            Como funciona
          </a>

          <a
            href="#features"
            className="text-neutral-600 transition hover:text-neutral-900"
          >
            Benefícios
          </a>

          {/* <a
            href="#testimonials"
            className="text-neutral-600 transition hover:text-neutral-900"
          >
            Depoimentos
          </a>

          <a
            href="#contato"
            className="text-neutral-600 transition hover:text-neutral-900"
          >
            Contato
          </a> */}
        </div>
      </div>

      <div className="border-t border-neutral-200">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-3 px-6 py-6 text-sm text-neutral-500 md:flex-row">
          <span>Eamus App Ltda. | CNPJ: 60.617.817/0001-35</span>

          <span>Feito no Brasil 🇧🇷</span>
        </div>
      </div>
    </footer>
  );
}
