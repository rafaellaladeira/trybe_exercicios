/* Faça as modificações necessárias na função para que o seu comportamento respeite o escopo no qual cada variável foi declarada.
Modifique a estrutura da função para que ela seja uma arrow function .
Modifique as concatenações para template literals .*/

const testingScope = (escopo) => { (escopo === true)? 'Não devo ser utilizada fora do meu escopo (if) ótimo, fui utilizada no escopo!': 'Não devo ser utilizada fora meu escopo (else)';}


const testingScope = escopo => { 
    if (escopo === true) { 
      let ifScope = 'Não devo ser utilizada fora do meu escopo (if)';
      ifScope = `${ifScope} ótimo, fui utilizada no escopo !`;
      console.log(ifScope);
    } else {
      const elseScope = 'Não devo ser utilizada fora meu escopo (else)';
      console.log(elseScope);
    }
  }
testingScope(true);


/* Copie o código abaixo e faça uma função que retorne o array oddsAndEvens em ordem crescente.

 Utilize template literals para que a chamada console.log(<seu código>oddsAndEvens<seu código>); retorne "Os números 2,3,4,7,10,13 se encontram ordenados de forma crescente!".
 Bônus (opcional): tente fazer o mesmo exercício utilizando o método array.sort() . Spoiler: É possível realizar uma função que ordene qualquer array de números.*/
    const oddsAndEvens = [13, 3, 4, 10, 7, 2];
    
    console.log(`Os números ${oddsAndEvens.sort((a,b) => a - b)} se encontram ordenados de forma crescente!`); 

// __________________________________________________________________

 //PARTE 2:

 /* Crie uma função que receba um número e retorne seu fatorial.
Na matemática, o fatorial de um número não negativo N , com a notação N! , é o produto de todos os inteiros menores ou iguais a N . Exemplo: 4! = 4 * 3 * 2 * 1 = 24.
Bônus (opcional): tente fazer o mesmo exercício de forma recursiva . Spoiler: É possível resolver com uma linha usando ternary operator . */

const fatorial = (n) => {
    let fatorial = 1;
    for (let i = 2 ; i <= n; i += 1) {
        fatorial *= i;
    }
   return fatorial;
}
console.log(fatorial(4)); 


const factorial = number => number > 1 ? number * factorial(number - 1) : 1;    // ???
console.log(factorial(3));

// Crie uma função que receba uma frase e retorne qual a maior palavra. 

const longestWord = text => {
    const array = text.split(' ');
    let numeroDeLetras = 0;
    let result = '';
    for (let i of array) {
        if (i.length > numeroDeLetras) {
            i.length = numeroDeLetras;
            result = i;
        }
    }
    return result;
}
console.log(longestWord("Antônio foi no banheiro e não sabemos o que aconteceu"));
