const a = 2;
const b = 6;
const c = 7;

let soma = a + b;
let subtracao = a - b;
let mult = a * b;
let mod = a % b;
//_________________________________________________________________________________
if (a > b) {
    console.log("2 é maior")
} else if (a < b) {
    console.log("6 é maior")
} else {
    console.log("São iguais")
}
//_________________________________________________________________________________
if (a > b && a > c) {
    console.log("2 é maior");
} else if (b > a && b > c) {
    console.log("6 é maior");
} else if (c > a && c > b) {
    console.log("7 é maior");
}

//_________________________________________________________________________________

if (a > 0) {
    console.log("positive");
} else if (a < 0) {
    console.log("negative");
} else {
    console.log("zero");
}

//____________________________________________________________________________

// ângulos do triângulo:

const ang1 = 90;
const ang2 = 45;
const ang3 = 45;

console.log(ang1 + ang2 + ang3 === 180);
