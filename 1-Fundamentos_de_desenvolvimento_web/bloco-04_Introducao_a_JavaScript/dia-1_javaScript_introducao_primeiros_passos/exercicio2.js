// 6 )Exercício das peças de xadrez:

let imput = "BISPO"
let result = imput.toLowerCase();

switch (result) {
    case "dama": //dama
        console.log("fileira, coluna e diagonal");
        break;
    case "bispo":      //bispo
        console.log("Diagonal");
        break;    
    case "cavalo": // cavalo
        console.log("Anda em L");
        break;  
    default:
        console.log ("Erro");
    }

//_________________________________________________________________________________

// 7 ) Converte nota (number) em letra (String):

let nota = 90;

if ( nota < 0 || nota > 100) {
    console.log("ERRO");
} else if (nota < 50 ) {
    console.log("F");
} else if (nota < 60 ) {
    console.log("E");
} else if (nota < 70 ) {
    console.log("D");   
} else if (nota < 80 ) {
    console.log("C");
} else if (nota < 90 ) {
    console.log("B");
} else if (nota <= 100 ) {
   console.log("A");
}

__________________________________________________________________________________________________

// 8) usar somente um IF para que se no minimo uma das constantes for par retornar TRUE:

const a = 23;
const b = 49;
const c = 33;

if (a % 2 === 0 || b % 2 === 0 || c % 2 === 0) {
    console.log("true");
} else {
    console.log("false");
}

__________________________________________________________________________________________________

// 9) usar somente um If para que se tenha no minimo uma das constantes for IMPAR retornar true:

const d = 24;
const e = 50;
const f = 1;

if (d % 2 !== 0 || e % 2 !== 0 || f % 2 !== 0) {
    console.log("true");
} else {
    console.log("false");
}