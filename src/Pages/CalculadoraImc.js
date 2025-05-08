// Importa o hook useState do React e dois componentes personalizados
import { useState } from "react";
import VariacoesIMC from "../components/VariacoesIMC";
import ImagensIMC from "../components/ImagensIMC";

// Define o componente funcional CalculadoraImc
function CalculadoraImc() {
  // Estados para armazenar os valores de peso, altura e o IMC calculado
  const [peso, setPeso] = useState("");
  const [altura, setAltura] = useState("");
  let [imc, setImc] = useState(null);
  

  // Função executada ao enviar o formulário
  function calcularImc(e) {
    e.preventDefault(); // Impede o recarregamento da página

    const pesoNum = parseFloat(peso);
    const alturaNum = parseFloat(altura);

    // Valida se os valores de peso e altura são válidos
    if (!pesoNum || !alturaNum) {
      alert("Preencha peso e altura corretamente.");
      return;
    }

    // Cálculo do IMC e atualização do estado com duas casas decimais
    const resultado = pesoNum / (alturaNum * alturaNum);
    setImc(resultado.toFixed(2));
  }

  // Converte o valor do IMC para número e define a categoria correspondente
  let resultado;
  const imcNumber = parseFloat(imc);
  if (imcNumber < 18.5) {
    resultado = "Abaixo do Peso";
  } else if (imcNumber >= 18.5 && imcNumber < 25) {
    resultado = "Peso Normal";
  } else if (imcNumber >= 25 && imcNumber < 30) {
    resultado = "Sobrepeso";
  } else if (imcNumber >= 30 && imcNumber < 35) {
    resultado = "Obesidade grau 1";
  } else if (imcNumber >= 35 && imcNumber < 40) {
    resultado = "Obesidade grau 2";
  } else if (imcNumber >= 40) {
    resultado = "Obesidade grau 3";
  } else {
    resultado = "";
  }

  return (
    <div className="flex flex-row flex-wrap lg:flex-nowrap justify-center p-2 gap-16">
      <div className="bg-background w-72 p-4 items-center justify-center flex sm:w-80 md:w-64 lg:w-96">
        <div className="items-center">
          <form
            className="flex flex-col items-center justify-center"
            onSubmit={calcularImc}
          >
            <p className="mt-0 mb-8 justify-center px-16 text-white">
              <strong>Cálculo de IMC</strong> <br></br>
              <span className="italic text-justify">
                Este sistema permite calcular o IMC com base nos dados de peso e
                altura informados, seguindo os parâmetros definidos pela
                Organização Mundial da Saúde. O resultado classifica o usuário
                em categorias como baixo peso, peso normal, sobrepeso ou
                obesidade, auxiliando na análise do estado nutricional.
              </span>
            </p>
            <div className="flex flex-col items-center text-white">
              {/* Campo de entrada para peso */}
              <label htmlFor="peso">Digite seu peso (kg):</label>
              <input
                className="mb-8 max-w-[300px] text-black px-4 py-3 text-base border-[1.5px] border-black rounded-lg outline-none transition-all duration-200 shadow-[2.5px_3px_0_black] focus:shadow-[5.5px_7px_0_black]"
                type="number"
                value={peso}
                onChange={(e) => setPeso(e.target.value)}
                lang="pt-BR"
                required
              />
              {/* Campo de entrada para altura */}
              <label htmlFor="altura">Digite sua altura (m):</label>
              <input
                className="mb-8 max-w-[350px] text-black px-4 py-3 text-base border-[1.5px] border-black rounded-lg outline-none transition-all duration-200 shadow-[2.5px_3px_0_black] focus:shadow-[5.5px_7px_0_black]"
                type="number"
                value={altura}
                onChange={(e) => setAltura(e.target.value)}
                step="0.01"
                lang="pt-BR"
                required
              />
            </div>

            {/* Botão para calcular IMC */}
            <button
              className="m-2 bg-[#f3f7fe] text-black border-none cursor-pointer rounded-lg w-[215px] h-[50px] transition duration-300 hover:bg-corSecundaria hover:shadow-[0_0_0_5px_#00001a] hover:text-white"
              type="submit"
            >
              Calcular
            </button>
          </form>

          {/* Exibição dos resultados */}
          <div className="text-white flex flex-col mt-8 justify-center items-center text-xl w-96 px-4">
            <p className="m-2">Índice de Massa Corporal:</p>
            <p className="m-2 text-3xl font-bold">{imc}</p>
            <p className="m-2">{resultado}</p>
          </div>
        </div>
      </div>

      {/* Componentes adicionais: variações e imagens baseadas no IMC */}
      <div className="flex flex-col items-center mx-2 gap-16 ">
        <VariacoesIMC></VariacoesIMC>
        <ImagensIMC resultado={resultado}></ImagensIMC>
      </div>
    </div>
  );
}

export default CalculadoraImc;
