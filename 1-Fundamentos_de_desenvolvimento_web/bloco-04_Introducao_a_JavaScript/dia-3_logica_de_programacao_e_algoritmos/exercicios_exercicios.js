// 1) Fatorial de 10

let n = 10;
let fatorial = 1;
for (let i = n ; i> 0 ; i -= 1) {
    fatorial = fatorial * (i);
}
console.log(fatorial);


// 2) Inverter uma string

let word = "trybe";
let invertida = 

for (let i= word.length - 1 ; i >= word[0] ; i-=[1]) {
    invertida += i;
}
console.log(invertida);

//3)

let array = ['java', 'javascript', "xablaublaublau", 'python', 'html', 'css'];
let inputMaior = "";
let inputMenor = "";

for ( let i = 0 ; i < array.length ; i +=1) {
    if ( array[i].length > inputMaior.length) {
        inputMaior = array[i];
    } 
}
for ( let i = 0 ; i < array.length ; i +=1) {
    if( array[i].length < inputMenor.length) {
        inputMenor = array[i];
    }
}

console.log("Maior palavra: " + inputMaior);
console.log("Menor palavra: " + inputMenor);


