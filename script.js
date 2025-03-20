//Variáveis
//let numero = prompt('Digite seu número:');
let numer1 = prompt('Digite seu número:');
let numer2 = prompt('Digite seu número:');

//Funções
    function verificarPar() {
        
        if ( numero % 2 === 0) {
            console.log (numero + ' é um número par!');
        } else {
            console.log ('Esse número é ímpar!');
        }
    }

    function calcular() {

        console.log( numer1 + numer2);
        console.log( numer1 - numer2);
        console.log( numer1 * numer2);
        console.log( numer1 / numer2);      
    }

//Chamando Função
//verificarPar();
calcular();


