//var tem escopo mais glboal e sem controle, pode alterar valores de variaveis em outros blocos de codigo. não se utiliza. não se utiliza.
var variavel;

//const não permite que mude o valor armazenado. Deve ser declarada e inicializada antes de usar.
const variavel2;

//let também deve ser declarada
let forma = "retangulo";
let altura = 2;
let comprimento = 5;
let area;

if (forma === "retangulo") {
    area = altura * comprimento;
}

console.log("Area:", area);