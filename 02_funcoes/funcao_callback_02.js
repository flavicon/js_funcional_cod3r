const fs = require("fs");
const path = require("path");

const caminho = path.join(__dirname, "dados_aula_callback_02.txt");

function exibir_conteudo(err, conteudo) {
  console.log(conteudo.toString());
}

//Assicrono e Sicrono

console.log("Inicio assincrono...");
fs.readFile(caminho, exibir_conteudo);
fs.readFile(caminho, (_, conteudo) => console.log(conteudo.toString()));
console.log("Fim assincrono...");

console.log("Inicio Sincrono...");
const conteudo = fs.readFileSync(caminho);
console.log(conteudo.toString());
console.log("Fim Sincrono...");
