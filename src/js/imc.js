// Parte onde calcula o IMC do usuario
function calcular(){
    let peso = document.getElementById('peso').value
    let altura = document.getElementById('altura').value
    let imc = peso / (altura * altura).toFixed(2)
    document.getElementById('resultado').value = imc
}

// Parte do botão
let button = document.getElementById('button');
button.addEventListener('click', calcular);