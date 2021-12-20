var readlineSync = require("readline-sync")

let contador = 0
let stringEntrada = readlineSync.question("Entre um binario: ")
console.log(stringEntrada)

function lacuna(numero) {
	if (numero == "0") {
		contador++
	}
}

Array.from(stringEntrada).forEach(lacuna)
console.log(typeof stringEntrada)
console.log(contador)
