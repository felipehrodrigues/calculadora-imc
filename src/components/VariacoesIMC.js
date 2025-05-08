function VariacoesIMC() {
  return (
    <div className="flex w-80 border border-black bg-white items-center my-16 shadow-2xl">
      <div className="flex flex-col m-4">
          <h2>Classificação</h2>
          <ul className="mt-4">
            <li className="text-[#0081C3]">Abaixo do peso</li>
            <li className="text-[#0E785E]">Peso Normal</li>
            <li className="text-[#E4851B]">Sobrepeso</li>
            <li className="text-[#AF5480]">Obesidade Grau 1</li>
            <li className="text-[#C12026]">Obesidade Grau 2</li>
            <li className="text-[#391A23]">Obesidade Grau 3</li>
          </ul>
      </div>
      <div className="flex flex-col m-4">
          <h2>IMC</h2>
          <ul className="mt-4">
            <li className="text-[#0081C3]"> menor que 18,5</li>
            <li className="text-[#0E785E]"> 18,5 – 24,9</li>
            <li className="text-[#E4851B]">25 – 29,9</li>
            <li className="text-[#AF5480]"> 30 – 34,9</li>
            <li className="text-[#C12026]"> 35 – 39,9</li>
            <li className="text-[#391A23]">≥ 40</li>
          </ul>
      </div>
    </div>
  );
}

export default VariacoesIMC;
