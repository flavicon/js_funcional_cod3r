// Funcao calcular(3)(7)(fn)
// fn = mult -> 3 * 7
// fn = somar -> 3 + 7
// fn = sub -> 3 - 7

function calcular(n1) {
  return function (n2) {
    return function (fn) {
      return fn(n1, n2);
    };
  };
}

const somar = (a, b) => a + b;

function mult(a, b) {
  return a * b;
}

const sub = function (a, b) {
  return a - b;
};

let resultado = calcular(3)(4)(somar);
console.log("somar: " + resultado);

resultado = calcular(3)(4)(mult);
console.log("Multiplicar: " + resultado);

resultado = calcular(3)(4)(sub);
console.log("Subtrair: " + resultado);
