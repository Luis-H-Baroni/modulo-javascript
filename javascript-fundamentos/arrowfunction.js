function apresentar(nome) {
    return `meu nome é ${nome}`
}

const apresentacao = nome => `meu nome é ${nome}`;

const soma = (num1, num2) => num1 + num2;

const somaNumeroPequeno = (num1, num2) => {
    if (num1 > 10 || num2 > 10) {
        return "somente numeros de 1 a 9";
    } else {
        return num1 + num2;
    }
}

console.log(apresentar("Luis"));
console.log(apresentacao("Luis"));
console.log(soma(1, 2));
console.log(somaNumeroPequeno(2, 2));
