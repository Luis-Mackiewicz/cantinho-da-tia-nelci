export default function Card() {
  return (
    <div
      className="w-4/5 
      rounded-xl  
      bg-linear-to-br 
       from-[#71071d] 
       to-[#D70D37] 
        text-white p-2 
        lg:w-2/5 
        lg:p-16"
    >
      <dl className="p-4">
        <dt className="font-bold text-xl">costura criativa</dt>
        <dd className="text-base">
          A costura criativa é um tipo de artesanato que utiliza técnicas de
          costura para criar peças úteis e decorativas, como bolsas,
          nécessaires, organizadores e itens personalizados.Cada peça é feita
          com cuidado, atenção aos detalhes e escolha de materiais de qualidade,
          resultando em produtos únicos e feitos especialmente para cada
          cliente.
        </dd>
      </dl>
    </div>
  );
}
