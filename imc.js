let nome = document.getElementById("nome");
let altura = document.getElementById("altura");
let peso = document.getElementById("peso");
let res = document.getElementById("result");
let botao = document.getElementById("botao");

function CalcularIMC(e) {
  e.preventDefault();

  let nomeValue = nome.value;
  let pesoValue = Number(peso.value);
  let alturaValue = Number(altura.value);
  let IMC = pesoValue / ((alturaValue / 100) * (alturaValue / 100));

  if (IMC < 18) {
    res.innerHTML = `${nomeValue} seu IMC é ${IMC.toFixed(2)}`;
  } else if (IMC >= 18.5 && IMC <= 24.9) {
    res.innerHTML = `${nomeValue} o seu IMC é ${IMC.toFixed(2)} `;
  } else if (IMC >= 25.0 && IMC <= 29.9) {
    res.innerHTML = `${nomeValue} o seu IMC é ${IMC.toFixed(2)} `;
  } else if (IMC >= 30.0 && IMC <= 34.9) {
    res.innerHTML = `${nomeValue} o seu IMC é ${IMC.toFixed(2)} `;
  } else if (IMC >= 35.0 && IMC <= 39.9) {
    res.innerHTML = `${nomeValue} o seu IMC é ${IMC.toFixed(2)} `;
  } else if (IMC >= 40.0) {
    res.innerHTML = `${nomeValue} o seu IMC é ${IMC.toFixed(2)}`;
  }
}
botao.addEventListener("click", CalcularIMC);
