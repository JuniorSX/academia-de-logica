/* Primeiramente divida seu problema em partes e só depois disso comece a codar.

A Dora aventureira gostaria de ter uma lista com todos o números ímpares entre 1 e 50.

Escreva um algoritmo que imprima no terminal uma string com todos os números inteiros ímpares desse intervalo.

Use a seguinte estrutura na impressão:

"x, y, z, ...n"

 */

let numerosImpares = [];

for(let index =1; index <= 50; index+= 1 ){
    if(index % 2 !== 0){
        numerosImpares.push(index);
    }
}
console.log("Os numeros impares de 1 a 50 são : " + numerosImpares);