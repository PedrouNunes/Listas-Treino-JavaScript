/*Crie uma função anônima que receba como parâmetro a data de
nascimento de uma pessoa (dia, mês e ano) e retorne a idade da
pessoa expressa em dias. Considere que os meses têm 30 dias e os
anos 365.
Entrada: idadeEmDias(12, 06, 1991)
Saída: 11639*/

var idadeEmDias = function(dia, mes, ano){
var soma;
var convMes;
var convAno;
      convMes = mes * 30;
      convAno = (2023 - ano) * 365;
      soma = dia + convMes + convAno;
    return soma;
}

console.log(idadeEmDias(12, 6, 1991));