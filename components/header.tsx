import Link from "next/link";

export default function Header() {
  return (
    <header className="h-14 w-full fixed flex justify-center items-center top-0 md:justify-end">
      <nav className="md:mr-8">
        <ul className="h-full w-full flex justify-center items-center text-white/70 text text-base gap-3 sm:gap-6 sm:w-4/5">
          <li>
            <Link
              href="#inicio"
              className="hover:bg-foreground rounded-2xl p-2 transition-all duration-300"
            >
              inicio
            </Link>
          </li>
          <li>
            <Link
              href="#sobre"
              className="hover:bg-foreground rounded-2xl p-2 transition-all duration-300"
            >
              sobre
            </Link>
          </li>
          <li>
            <Link
              href="#servicos"
              className="hover:bg-foreground rounded-2xl p-2 transition-all duration-300"
            >
              serviços
            </Link>
          </li>
          <li>
            <Link
              href="#galeria"
              className="hover:bg-foreground rounded-2xl p-2 transition-all duration-300"
            >
              galeria
            </Link>
          </li>
          <li>
            <Link
              href="#contato"
              className="hover:bg-foreground rounded-2xl p-2 transition-all duration-300"
            >
              contato
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
