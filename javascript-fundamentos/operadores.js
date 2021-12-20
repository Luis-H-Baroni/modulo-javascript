//comparação -----------------
let numero = 10;
let numeroS = "10";

//compara apenas o valor
console.log(numero == numeroS);

//compara o valor e o tipo
console.log(numero === numeroS);


//ternário -------------------
let idadeMinima = 18;
let idadeCliente = 17;

if (idadeCliente >= idadeMinima) {
    console.log("cerveja");
} else {
    console.log("suco");
}

// condição ? resultado se verdadeiro : resultado se falso
console.log(idadeCliente >= idadeMinima ? "cerveja" : "suco")
//não usado em complexidade
