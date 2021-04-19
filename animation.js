"use strict"

// -> procedimentos
// -> sub-rotinas
// -> funções 
// -> metodos

function soma(a, b) {
    return a + b;
}
const total = soma(5, 10)
//  -> parametros
//  -> argumentos

function situacao(params) {
    const nota1 = document.getElementById('nota1')
    const nota2 = document.getElementById('nota2')
    const media = (nota1 + nota2) / 2
    if (media >= 5) {
        alert("Aprovado")
    } else {
        alert('Reprvado')
    }
}