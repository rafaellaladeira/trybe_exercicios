// Exercícios de aula:
// 1)

let menu = ['Home', 'Serviços', 'Portfólio', 'Links'];
let menuServices = menu[1];

console.log(menuServices);

//2)

let menu = ['Home', 'Serviços', 'Portfólio', 'Links'];
let indexOfPortfolio = menu.indexOf("Portfólio");

console.log(indexOfPortfolio);

//3)

let menu = ['Home', 'Serviços', 'Portfólio', 'Links'];

menu.push("Contato");
console.log(menu);

//4)

let groceryList = ['Arroz', 'Feijão', 'Alface', 'Melancia'];

for (var i = 0 ; i < groceryList.length ; i+=1) {
console.log(groceryList[i]);
}