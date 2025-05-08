import "./App.css";
import CalculadoraImc from "./Pages/CalculadoraImc";

function App() {
  return (
    <div className="flex flex-wrap justify-center items-center w-full max-w-4xl m-auto bg-background rounded-xl shadow-2xl">
      <h2 className="text-white bg-corSecundaria w-full h-16 text-4xl text-center py-2 rounded-t-2xl font-bold">
        Calculadora IMC
      </h2>
      <CalculadoraImc />
      <h2 className="text-white w-full text-center bg-corSecundaria py-2 rounded-b-2xl">
        IMC = Peso (kg) / Altura²(m)
      </h2>
    </div>
  );
}

export default App;
