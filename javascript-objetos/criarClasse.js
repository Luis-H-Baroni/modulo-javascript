class Cliente {
	constructor(nome, CPF, email, saldo) {
		this.nome = nome
		this.CPF = CPF
		this.email = email
		this.saldo = saldo
	}

	depositar(valor) {
		this.saldo += valor
	}

	exibirSaldo() {
		console.log(this.saldo)
	}
}

let luis = new Cliente("Luis", "12323434556", "luis@email.com", 500)

luis.exibirSaldo()
luis.depositar(50)
luis.exibirSaldo()

console.log(luis)
