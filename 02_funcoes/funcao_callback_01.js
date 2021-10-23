//Desafio callback
//exec(somar, 56, 38)
//exec(subtrair, 182, 27)

const exec = (fn, n1, n2) => fn(n1, n2);
const somar = (a, b) => console.log("resultado da soma: " + (a + b));
const subtrair = (a, b) => console.log("resultado da subtração: " + (a - b));

exec(somar, 10, 20);
exec(subtrair, 30, 20);
