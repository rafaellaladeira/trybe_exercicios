/* let n = 10;

for (let i=0 ; i <= n; i+= 1) {
    var linhaDeAsteriscos = " ";
} for ( let linha = 0 ; linha <= n ; linha += 1 ) {
    linhaDeAsteriscos = linhaDeAsteriscos + "*";
} console.log(n * linhaDeAsteriscos);
*/

let n = 5;
let asterisco = "*";
let espaco = " ";

/* for (let lineIndex = 0 ; lineIndex < n ; lineIndex += 1) {
    espaco = espaco + asterisco;
    for (let lineIndex = 0; lineIndex < n ; lineIndex += 1) {
   }
   console.log(espaco);
}
*/

for (let linha = 1; linha <= n; linha+=1) {
    let espaco = " ";
    for (let i = 0; i < linha; i+=1){
        espaco += "*";
    }
    console.log(espaco)
}