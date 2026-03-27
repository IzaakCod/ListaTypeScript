/* Crie uma função que receba um
número e retorne se ele é par ou ímpar
*/


function par_impar(){
    if(numero % 2 === 0){
        console.log("É par")
    }
    else{
        console.log("É ímpar")
    }
}


let entrada = prompt("Informe um número: ");
let numero:number = Number(entrada);

par_impar()