var readlineSync = require("readline-sync")

class Pilha {
	constructor() {
		this.dados = []
		this.topo = -1
	}
	pilhaVazia() {
		if (this.topo === -1) {
			return true
		} else {
			return false
		}
	}
	inserir(numero) {
		this.topo++
		this.dados[this.topo] = numero //push
	}
	remover() {
		if (this.pilhaVazia()) {
			console.log("Pilha vazia")
		} else {
			let removido = this.dados.splice(this.topo, 1) //pop
			this.topo--
			return removido
		}
	}
}

let pilha = new Pilha()

var OP
var valor
while (true) {
	console.log(pilha.dados)

	console.log("1 inserir")
	console.log("2 remover")

	OP = readlineSync.question("operacao: ")

	if (OP === "1") {
		valor = readlineSync.question("numero para inserir: ")
		pilha.inserir(valor)
		console.clear()
		continue
	}
	if (OP === "2") {
		valor = pilha.remover()
		console.clear()
	}
	if (OP === "4") {
		console.log("saindo")
		break
	}
}
