var readlineSync = require("readline-sync")
let numeros = []
let soma = 0
let quantNum = parseInt(
	readlineSync.question("Deseja fazer a media de quantos numeros? ")
)

for (let i = 0; i < quantNum; i++) {
	numeros[i] = parseFloat(readlineSync.question(`Numero ${i + 1}: `))
}
console.log(numeros)

numeros.forEach((numero) => {
	soma += numero
})
console.log(soma)

let media = soma / numeros.length
console.log(media)
