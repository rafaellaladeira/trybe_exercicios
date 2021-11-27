// 11)

var salarioBruto = 2500;
var salarioBase;
var valorIR;

// INSS

if (salarioBruto <= 1556.94) {
    console.log(salarioBase = salarioBruto * 0.92);
} else if ( salarioBruto <= 2594.92) {
    console.log(salarioBase = salarioBruto * 0.91);
} else if ( salarioBruto <= 5189.82) {
    console.log(salarioBase = salarioBruto * 0.89);
} else if ( salarioBruto > 5189.82) {
    console.log(salarioBase = salarioBruto - 570,88);
}

// IR

if (salarioBase <= 1903.98) {
    console.log(valorIR = 0);
} else if (salarioBase <= 2826.65) {
    console.log (valorIR = (0.075 * salarioBase) - 142.80);
} else if (salarioBase <= 3751.05) {
    console.log(valorIR = (0.15 * salarioBase) - 354.80);
} else if (salarioBase <= 4664.68) {
    console.log(valorIR = (0.225 * salarioBase) - 636.13);
} else if (salarioBase > 4664.68 ) {
    console.log(valorIR = (0.275 * salarioBase) - 869.36);
}

// Calculo do salário líquido :

console.log("salarioLiquido:" + (salarioBase - valorIR));