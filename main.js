let bgAnimation = document.getElementById('bgAnimation');
const audio = new Audio("Spider_Man_2099_Miguel_OHara_Sound_Effect.mp3")
for (let index = 0; index < 625; index++) {
  const colorBox = document.createElement(`div`);
  colorBox.classList.add('colorBox');
  bgAnimation.append(colorBox);
  
}



let botonesNumericos = document.getElementsByClassName("numero");
let botonesOperaciones = document.getElementsByClassName("boton");
let input = document.getElementById("entrada");
let botonLimpiar = document.getElementById("AC");

let primerValor = 0;
let segundoValor = 0;
let simbolo;

for (let i = 0; i < botonesNumericos.length; i++) {
  botonesNumericos[i].addEventListener("click", () => {
    input.value += botonesNumericos[i].value;
  });
}

for (let i = 0; i < botonesOperaciones.length; i++) {
  botonesOperaciones[i].addEventListener("click", () => {
    primerValor = input.value;
    input.value = null;
    simbolo = botonesOperaciones[i].value;
    console.log(`El simbolo es: ${simbolo}`);
  });

}


let punto = document.getElementById('punto');

punto.addEventListener('click', () => {
    if(input.value.includes("."));
    else{
      input.value+=".";
    }
  
})





let botonIgual =document.getElementById("igual");

botonIgual.addEventListener("click", () => {

  let resultado;
  primerValor = parseFloat(primerValor);
  segundoValor = parseFloat(input.value);
  audio.play();
  switch (simbolo) {
    case "+":
      resultado = primerValor + segundoValor;
      input.value = resultado;
      break;

    case "-":
      resultado = primerValor - segundoValor;
      input.value = resultado;
      break;
    case "*":
      resultado = primerValor * segundoValor;
      input.value = resultado;
      break;  
    case "/":
      resultado = primerValor / segundoValor;
      input.value = resultado;
      break;
    default:
      break;
  }
});

botonLimpiar.addEventListener("click", () => {
  input.value = null;
  primerValor = null;
  simbolo = null;
});

