/*Chico tem 1,50 metros de altura e cresce 2 centímetros por ano,
enquanto Zé tem 1,10 metros e cresce 3 centímetros por ano. Crie uma
função anônima que descubra e retorne quantos anos serão
necessários para que Zé seja maior que Chico.*/

const anosNecessarios = function (){
var countChico = 150;
var countZe = 110;
var countAnos = 1;

    while(countChico > countZe){
        countChico += 2;
        countZe += 3;
        countAnos += 1;
    }
    return countAnos;
}

console.log(anosNecessarios());
