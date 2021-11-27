// 10) Calcular o lucro de mil unidades de venda, e ganhar erro qdo os valores de entrada forem < 0:

const valorCusto = 3;
const valorVenda = 10;

if ( valorCusto >= 0 && valorVenda >= 0) {
const valorCustoTotal = valorCusto * 1.2;
const lucro = valorVenda - valorCustoTotal;
console.log(lucro *1000);
} else {
    console.log ("Erro");
} 

_______________________________________________________________________
