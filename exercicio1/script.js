/*
let nome;
let idade;

console.log(typeof nome, idade); undefined porque não foi atribuido valor

*/

const nome = String(prompt("Qual é o seu nome?"));
let idade = Number(prompt("Qual é sua idade?"));

console.log(nome, idade);

console.log(typeof nome, typeof idade);
console.log(`Olá ${nome}, você tem ${idade} anos.`);

// Aqui final