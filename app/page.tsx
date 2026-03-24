import Header from "@/components/header";
import NelcimaraImage from "@/public/nelcimara.png";
import Sewing from "@/public/sewing.png";
import Image from "next/image";
import WhatsappLink from "@/components/button";
import Card from "@/components/card";
import { Car } from "lucide-react";

export default function Home() {
  return (
    <>
      <Header />
      <section
        id="inicio"
        className="min-h-dvh w-full flex items-center justify-center"
      >
        <main className="h-3/4 w-4/5 grid grid-cols-1 lg:grid-cols-2 gap-y-2 md:gap-8">
          <div className="flex flex-col items-center justify-center">
            <h1 className="text-white font-great-vibes text-3xl lg:text-5xl">
              Cantinho da Tia Nelci
            </h1>
            <p className="text-base text-white md:text-xl opacity-90">
              costura criativa +
            </p>
          </div>
          <div className="flex items-center justify-center lg:row-span-2 lg:items-end">
            <Image
              src={Sewing}
              alt="nelcimara costurando"
              className="rounded-2xl transition duration-300 hover:scale-105"
            />
          </div>
          <div className="flex flex-col items-center justify-between gap-2">
            <p className="text-base text-center text-white lg:hidden">
              Olá, me chamo Nelcimara Gross. Artesã especializada em costura
              criativa, trabalhando com a criação e personalização de peças
              feitas sob medida. Faça já o seu pedido!
            </p>

            <p className="hidden text-base text-white lg:flex md:m-auto">
              Olá, me chamo Nelcimara Gross. Sou artesã especializada em costura
              criativa, trabalhando com a criação e personalização de peças
              feitas sob medida. Cada projeto é desenvolvido com atenção aos
              detalhes, buscando unir qualidade, criatividade e um acabamento
              cuidadoso. Meu objetivo é transformar ideias em peças únicas e
              especiais, pensadas para atender às necessidades de cada cliente.
              Cada trabalho é feito com dedicação para entregar um resultado
              bonito, durável e cheio de significado.
            </p>
            <WhatsappLink />
          </div>
        </main>
      </section>
      <section
        id="sobre"
        className="min-h-dvh w-full flex items-center justify-center"
      >
        <div className="h-3/4 w-4/5 grid grid-cols-1 gap-2 lg:grid-cols-2">
          <h2 className="flex items-center justify-center text-white font-great-vibes text-3xl lg:text-5xl lg:order-2">
            Sobre
          </h2>

          <div className="flex justify-center items-center lg:row-span-2 lg:order-1">
            <Image
              src={NelcimaraImage}
              alt="nelcimara image"
              width={500}
              className="rounded-2xl object-cover transition duration-300 hover:scale-105"
            />
          </div>

          <div className="flex items-center justify-center lg:order-3">
            <p className="text-white text-base lg:hidden">
              Sou Nelcimara Gross e transformo tecidos em peças únicas desde
              2012. O que começou como paixão tornou-se um trabalho dedicado a
              unir criatividade, qualidade e funcionalidade. Cada detalhe é
              pensado para entregar o valor do feito à mão em produtos
              personalizados e cheios de carinho.
            </p>

            <p className="hidden text-white lg:flex">
              Meu nome é Nelcimara Gross e iniciei na costura criativa em 2012.
              Foi nesse período que descobri minha paixão por criar peças
              artesanais, transformando tecidos, ideias e inspirações em
              produtos únicos. O que começou como um interesse pela costura logo
              se tornou um trabalho feito com carinho, dedicação e muito cuidado
              em cada detalhe. Ao longo dos anos, venho aperfeiçoando minhas
              técnicas e desenvolvendo peças personalizadas que unem
              criatividade, qualidade e funcionalidade. Cada criação é feita
              pensando em proporcionar algo especial para quem recebe,
              valorizando o trabalho artesanal e o cuidado presente em cada
              etapa da produção. Para mim, a costura criativa é mais do que
              produzir peças: é transformar ideias em algo único e feito à mão.
            </p>
          </div>
        </div>
      </section>
      <section
        id="servicos"
        className="min-h-dvh w-full flex flex-col gap-y-4 justify-center items-center"
      >
        <h2 className="flex items-center justify-center text-white font-great-vibes text-3xl lg:text-5xl">
          Serviços
        </h2>
        <Card />
      </section>

      <section id="galeria" className="min-h-dvh w-full">
        <div className="h-3/4 w-4/5 bg-sky-500">
          <h2 className="flex items-center justify-center text-white font-great-vibes text-3xl lg:text-5xl">
            Serviços
          </h2>
        </div>
      </section>

      <section id="contato" className="min-h-dvh w-full">
        <div className="h-3/4 w-4/5 bg-sky-500">
          <h2 className="flex items-center justify-center text-white font-great-vibes text-3xl lg:text-5xl">
            Serviços
          </h2>
        </div>
      </section>
    </>
  );
}
