//Variáveis

//Funções
let numero = prompt('Digite seu número:');
function verificarPar() {

    if (numero % 2 === 0) {
        console.log(numero + ' é um número par!');
    } else {
        console.log('Esse número é ímpar!');
    }
}

let numer1 = parseFloat(prompt('Digite seu número:'));
let numer2 = parseFloat(prompt('Digite seu número:'));
function calcular(numer1, numer2) {

    console.log(numer1 + numer2);
    console.log(numer1 - numer2);
    console.log(numer1 * numer2);
    if (numer2 === 0) {
        console.log(' não é possível ');
    } else {
        console.log(numer1 / numer2);
    }

}

let numer = 10;
//do {
//console.log ( numer -- );
//}
//while ( numer > 0); coloquei como comentário para não se repetir

let palavra = prompt('Digite sua palavra');
function inverterTexto(palavra) {
    console.log(palavra.split("").reverse().join(""));
}

let num = parseFloat(prompt('Digite sua palavra'))
function contarCaracteres ( num ) {
    console.log(myString);
    console.log(myString.length);
}

myString.length = 4;
console.log(myString);
// retorna  "campainhas"
console.log(myString.length);
// retorna 10

//Chamando Função
//verificarPar();
//calcular(numer1,numer2);
//inverterTexto(palavra);

