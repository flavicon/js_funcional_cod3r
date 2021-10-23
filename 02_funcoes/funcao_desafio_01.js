// Desafio
// somar(3)(4)(5)
// calcular(3)(4)(fn)

function somar(n1) {
  return function (n2) {
    return function (n3) {
      return n1 + n2 + n3;
    };
  };
}

const resultado = somar(3)(4)(5);
console.log(resultado);
