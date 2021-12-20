//parametros de função

function soma(numero1, numero2) {
    return numero1 + numero2;

}

console.log(soma(4, 7));
console.log(soma("oi", " mundo"));
console.log(soma("mundo", " oi"));

function cumprimentar() {
    return "Oi gente!"
}

function cumprimentaPessoa(nomePessoa) {
    console.log(`${cumprimentar()} Meu nome é ${nomePessoa}`)
}

cumprimentaPessoa("Paula")