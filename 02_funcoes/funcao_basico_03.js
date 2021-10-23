// Arrow function

const mensagem = () => console.log("Olá!");
mensagem();

const saudacao = (nome) => `Fala ${nome}!!!`;
console.log(saudacao("Maria"));

const somar = (...numeros) => {
  let total = 0;
  for (let n of numeros) {
    total += n;
  }
  return total;
};

console.log(somar(1, 2, 3, 4, 5));

//Função dentro de função com arrow function

const potencia = (base) => (exp) => Math.pow(base, exp);

console.log("potencia de 2 e 8 é: " + potencia(2)(8));

// This
Array.prototype.ultimo = function () {
  console.log(this[this.length - 1]);
};

const numeros = [1, 2, 3];
numeros.ultimo();
