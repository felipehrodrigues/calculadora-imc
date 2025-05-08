import imc1 from "../images/imc 1-cutout.png";
import imc2 from "../images/imc 2-cutout.png";
import imc3 from "../images/imc 3-cutout.png";
import imc4 from "../images/imc 4-cutout.png";
import imc5 from "../images/imc 5-cutout.png";
import imc6 from "../images/imc 6-cutout.png";

function ImagensIMC({ resultado }) {
  // Mapeamento de imagens com seus respectivos resultados e cores
  const images = [
    { src: imc1, label: "Abaixo do Peso", color: "#0081C3" },
    { src: imc2, label: "Peso Normal", color: "#A8D382" },
    { src: imc3, label: "Sobrepeso", color: "#FECA25" },
    { src: imc4, label: "Obesidade grau 1", color: "#AF5480" },
    { src: imc5, label: "Obesidade grau 2", color: "#C12026" },
    { src: imc6, label: "Obesidade grau 3", color: "#391A23" },
  ];

  return (
    <div>
      <ul className="flex w-88 gap-4 px-8 mb-8">
        {images.map((image, index) => (
          <li key={index}>
            <img
              className={`h-64 w-48 ${resultado === image.label ? `drop-shadow-[0_20px_10px_${image.color}] animate-float` : ""}`}
              src={image.src}
              alt={`imc-${index + 1}`}
            />
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ImagensIMC;
