let nome = "Claudio"
let apresentacao = "meu nome é " + nome + ", prazer!";

console.log(apresentacao);

//template literal
let apresentação2 = `meu nome é ${nome}, prazer!`;

console.log(apresentação2);
console.log(`quebrando uma
    linha com 
    template literal`);

//-----------
const idade = 23;
const bebidaMaior = "cerveja";
const bebidaMenor = "suco";
const pedido = `${nome} diz: "por favor, quero beber ${idade >= 18 ? bebidaMaior : bebidaMenor}"`
console.log(pedido)