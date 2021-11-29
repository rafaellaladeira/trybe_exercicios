// Exercicios de 1 a 7:

let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

// 1)

for (let numeros of numbers) {
    console.log(numeros);
} 

//Ou:

for ( let i=0 ; i < numbers.length ; i += 1) {
    console.log(numbers[i]);
}

// 2) soma de todos os numeros :

let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let soma = 0;

for ( let i=0 ; i < numbers.length ; i+=1 ) {
   soma += numbers[i];
}   
   console.log(soma);
   
// 3 )

let media = soma / numbers.length;
console.log(media);

//4)

if (media > 20) {
    console.log("Valor maior que 20");
} else {
    console.log("Valor menor ou igual a 20");
}

//5)

let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let maior = numbers[0];
for ( let i = 1 ; i < numbers.length ; i += 1) {
    if(maior < numbers[i]) {
        maior = numbers[i];
    }
}
console.log(maior);

    

// 6)

let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let odd = 0;
for ( let i = 0 ; i < numbers.length ; i += 1) {
    if (numbers[i] % 2 !== 0) {
        odd += 1;
    }
}
    console.log(odd)

// 7)

let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let menor = numbers[0];
for ( let i = 1 ; i < numbers.length ; i += 1) {
    if(menor > numbers[i]) {
        menor = numbers[i];
    }
}
console.log(menor);

// 8)

let array = [];
for ( let i = 1 ; i <= 25 ; i += 1) {
    array.push(i);
}   
    console.log(array);
    

// 9)

let divisao = 0;
for ( let index = 0 ; index< array.length ; index +=1) {
    divisao = (array[index] / 2);
    console.log(divisao);
}