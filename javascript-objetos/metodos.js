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

class ClientePoupanca extends Cliente {
	constructor(nome, CPF, email, saldo, saldoPoup) {
		super(nome, CPF, email, saldo)
		this.saldoPoup = saldoPoup
	}
	depositarPoup(valor) {
		this.saldoPoup += valor
	}
}

let luis = new ClientePoupanca(
	"Luis",
	"12323434556",
	"luis@email.com",
	100,
	500
)

console.log(luis)

luis.depositar(50)
luis.depositarPoup(50)
console.log(luis)
