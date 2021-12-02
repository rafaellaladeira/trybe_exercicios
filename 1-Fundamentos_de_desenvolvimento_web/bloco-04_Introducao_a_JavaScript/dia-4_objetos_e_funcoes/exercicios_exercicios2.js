
//3) Crie uma função que receba um array de inteiros e retorne o índice do menor valor.
Array = [2, 4, 6, 7, 10, 0, -3]; .
Valor esperado no retorno da função: 6 .



// 4 ) Crie uma função que receba um array de nomes e retorne o nome com a maior quantidade de caracteres.

let arrayDeTeste = ['José', 'Lucas', 'Nádia', 'Fernanda', 'Cairo', 'Joana'];


function maiorPalavra (arrayDeTeste) {
    let maiorPalavra = "";
    for ( let i = 0 ; i < arrayDeTeste.length ; i +=1) {
        
        if(maiorPalavra.length < arrayDeTeste[i].length) {
            maiorPalavra = arrayDeTeste[i];
        }
    }
    return maiorPalavra;
}
console.log(maiorPalavra(arrayDeTeste));


