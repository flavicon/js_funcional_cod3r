// Function declaration
function bomDia() {
  console.log("Bom dia!");
}

bomDia();

// Function expression
//
const boaTarde = function () {
  console.log("Boa tarde!");
};

boaTarde();

function somar(a, b) {
  return a + b;
}

let resultado = somar(3, 4);
console.log(resultado); // output: 7

resultado = somar(3, 6, 5, 7);
console.log(resultado); // output: 9

resultado = somar(3);
console.log(resultado); // output: NaN

function somar2(a, b = 0) {
  return a + b;
}

resultado = somar2(3);
console.log(resultado); // output: 3
