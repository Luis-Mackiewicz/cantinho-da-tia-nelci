import Header from "@/components/header";
import Sewing from "@/public/sewing.png";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <Header />
      <section
        id="inicio"
        className="h-dvh w-full flex items-center justify-center"
      >
        <main className=" h-3/4 w-4/5 grid grid-cols-1  md:grid-cols-2 gap-2 ">
          <div className="flex flex-col items-center justify-center">
            <h1 className="text-white  font-great-vibes text-4xl md:text-7xl">
              Cantinho da Tia Nelci
            </h1>
            <p className="text-base font-bold text-white">costura criativa +</p>
          </div>
          <div className="flex items-center justify-center md:row-span-2">
            <Image
              src={Sewing}
              alt="nelcimara costurando"
              className="rounded-2xl object-cover"
            />
          </div>

          <p className="overflow-y-auto flex items-center justify-center text-base text-white">
            Olá, me chamo Nelcimara Gross. Sou artesã especializada em costura
            criativa, trabalhando com a criação e personalização de peças feitas
            sob medida. Cada projeto é desenvolvido com atenção aos detalhes,
            buscando unir qualidade, criatividade e um acabamento cuidadoso. Meu
            objetivo é transformar ideias em peças únicas e especiais, pensadas
            para atender às necessidades de cada cliente. Cada trabalho é feito
            com dedicação para entregar um resultado bonito, durável e cheio de
            significado.
          </p>
        </main>
      </section>
      <section id="sobre" className="h-dvh w-full"></section>
      <section id="servicos" className="h-dvh w-full"></section>
      <section id="galeria" className="h-dvh w-full"></section>
      <section id="contato" className="h-dvh w-full"></section>
    </>
  );
}
