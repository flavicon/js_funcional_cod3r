// Funcao como parametro

function bomDia() {
  console.log("Bom dia");
}

const boaTarde = () => {
  console.log("Boa tarde");
};

// Passamos um função como parametro para outra função
//
function executarQualquerCoisa(fn) {
  if (typeof fn === "function") {
    fn();
  }
}

executarQualquerCoisa(3);
executarQualquerCoisa(bomDia);
executarQualquerCoisa(boaTarde);

// Retornar um function a partir de uma outra function

function potencia(base) {
  return function (exp) {
    return Math.pow(base, exp);
  };
}

const potenciaDe2 = potencia(2);
console.log(potenciaDe2(8)); // output: 256

// Outra forma de passar parametro

const potenca34 = potencia(3)(4);
console.log(potenca34); //output: 81

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
