// En este ejercicio tenéis que sustituir TODAS las funciones tradicionales por funciones flecha y que siga funcionando igual.

const changeBackgroundButton = document.getElementById(
  "changeBackgroundButton"
);

let cambiarColor = () => 
  document.getElementById("changeBackgroundButton").style.backgroundColor = getRandomColor();

changeBackgroundButton.addEventListener("click", cambiarColor);

let getRandomColor = () => {
  const letters = getLetters();
  let color = '#';
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
};

let getLetters = () => '0123456789ABCDEF';

