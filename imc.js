const alturaInput = document.getElementById('altura');
const pesoInput = document.getElementById('peso');
const res = document.getElementById("resultado")

/* ACIMA ESTA TODAS OS ID'S ATRIBUIDOS QUE SÃO USADOS COM DOM*/
function aqui() {
  const altura = Number(alturaInput.value) / 100;
  const peso = Number(pesoInput.value);
  let IMC = Math.round(peso / (altura * altura))

  if (IMC < 17) {
    res.innerHTML = `Seu IMC é ${IMC} Você esta muito abaixo do peso`
  } else if (IMC >= 17 && IMC < 18.5) {
    res.innerHTML = `Seu IMC é ${IMC} Abaixo do peso`
  } else if (IMC >= 18.5 && IMC < 25) {
    res.innerHTML = `Seu IMC é ${IMC} Peso normal`
  } else if (IMC >= 25 && IMC < 30) {
    res.innerHTML = `Seu IMC é ${IMC} Acima do peso`
  } else if (IMC >= 30 && IMC < 35) {
    res.innerHTML = `Seu IMC é ${IMC} Obesidade I`
  } else if (IMC >= 35 && IMC < 40) {
    res.innerHTML = `Seu IMC é ${IMC}Obesidade II (severa)`
  } else if (IMC >= 40) {
    res.innerHTML = `Seu IMC é ${IMC}Obesidade III (mórbida)`
  }
}