import { useState } from 'react';

export function Class2() {
  // Arreglo de colores
  const coloresAbsolutos = [
    "#FF0000",     // Rojo
    "#00FF00",     // Verde
    "#0000FF",     // Azul
    "#FFFF00",     // Amarillo
    "#FF00FF",     // Magenta
    "#00FFFF",     // Cian
    "#000000",     // Negro
    "#FFFFFF",     // Blanco
    "#808080",     // Gris
    "#800000",     // Marrón oscuro
    "#808000",     // Oliva
    "#800080",     // Púrpura
    "#008080",     // Verde azulado
    "#C0C0C0",     // Plata
    "#FFA500",     // Naranja
    "#A52A2A"      // Marrón
  ];

  const [color, setColor] = useState(coloresAbsolutos[0]);


  const cambiarColor = () => {

    const nuevoColor = coloresAbsolutos[Math.floor(Math.random() * coloresAbsolutos.length)];
    setColor(nuevoColor);
  };

  return (
    <main className="w-screen h-screen bg-gray-600 flex flex-col items-center justify-center">
      <div
        id="recuadro"
        className="w-64 h-64 border-4 border-black mt-4 flex items-center justify-center"
        style={{ backgroundColor: color }}>
          
        <p className="text-white font-bold">{color}</p>
      </div>

      <button onClick={cambiarColor} className="p-2 bg-blue-500 text-white mt-4">
        Cambiar color
      </button>
    </main>
  );
}
