// 1)

let player = {
    name: "Marta",
    lastName: "Silva",
    age: 34,
    medal:{
        golden: 2,
        silver: 3,
    }
}

for ( let teste in player) {
    console.log(player[teste]);
}
// 2)  "A jogadora Marta Silva tem 34 anos de idade".

let fullName = player.name + " " + player.lastName;

console.log( "A jogadora " + fullName + " tem " + player.age + " anos de idade.")

// 3) 

player["bestInTheWorld"] = [2006, 2007, 2008, 2009, 2010, 2018];
console.log(player);

//4) "A jogadora Marta Silva foi eleita a melhor do mundo por 6 vezes".

console.log(player.bestInTheWorld.length)

console.log( "A jogadora " + fullName + " foi eleita a melhor do mundo por " + player.bestInTheWorld.length + " vezes.");


//5) "A jogadora possui 2 medalhas de ouro e 3 medalhas de prata".

console.log("A jogadora possui " + player.medal.golden + " medalhas de ouro e " + player.medal.silver + " medalhas de prata.")

//6) for/in: - Usando o objeto abaixo, utilize For/in e imprima no console a mensagem 'Olá xxxxx' para cada nome, substituindo o xxxxx pelo nome em questão.

let names = {
    person1: 'João',
    person2: 'Maria',
    person3: 'Jorge' 
  };

  for (let name in names) {
      console.log( "Olá, " + names[name]);
  }

//7)  Usando o objeto abaixo, utilize For/in e imprima um console.log com as chaves e valores desse objeto.

let car = {
    model: 'A3 Sedan',
    manufacturer: 'Audi',
    year: 2020
  };

  for (let cars in car) {
      console.log(cars, car[cars]);
  }