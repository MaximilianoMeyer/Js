const prompt = require('prompt-sync');
const entrada = prompt();

const anoNascimento = 2005;
let idade = 18;
let anoAtual = 2023;
const nomeCompleto = "Juan Pablo"; 
anoAtual =  anoAtual + 1;

console.log("Meu nome é", nomeCompleto + " Nascido em " + anoNascimento + " e no ano atual " + anoAtual + " completo " + idade + " anos");

console.log(anoAtual);

idade = idade + 1  
console.log(idade);

// Agência de viagens: Paris, Canadá, Dubai, Maldivas, Tokyo
const listaDeDestinos = new Array(
  "Paris", 
  "Canadá", 
  "Dubai", 
  "Maldivas", 
  "Tokyo"
);

var nomeComprador = entrada("Digite seu nome: ");
var idadeComprador = parseInt(entrada("Qual a sua idade?"), 10);

if (idadeComprador >= 18) {
  console.log("Olá senhor(a) " + nomeComprador);
  console.log("Comprador maior de idade");
  console.log("Escolha seu destino: ");

  for (let i = 0; i < listaDeDestinos.length; i++) {
    console.log(`${i + 1} - ${listaDeDestinos[i]}`); // Exibe opções de 1 a 5
  }

  var destino = parseInt(entrada("Digite o número que corresponde ao destino selecionado (1-5): "), 10);

  // Verifica se o número digitado está dentro do intervalo válido
  if (destino >= 1 && destino <= 5) {
    console.log(`Destino selecionado foi: ${listaDeDestinos[destino - 1]}`); // Ajusta para o índice do array
  } else {
    console.log("Número inválido. Por favor, reinicie o processo e escolha um número entre 1 e 5.");
  }
} else {
  console.log(`Idade informada é ${idadeComprador}, menor que 18. Não é permitido visualizar a lista de destinos.`);
}
