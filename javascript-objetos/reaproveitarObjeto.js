function Cliente(nome, CPF, email, saldo) {
	this.nome = nome
	this.CPF = CPF
	this.email = email
	this.saldo = saldo
	this.deposito = function (valor) {
		this.saldo += valor
	}
}

function ClientePoupanca(nome, CPF, email, saldo, saldoPoup) {
	Cliente.call(this, nome, CPF, email, saldo)
	this.saldoPoup = saldoPoup
}

let luis = new ClientePoupanca(
	"Luis",
	"12323434556",
	"luis@email.com",
	2800,
	1800
)
console.log(luis)

ClientePoupanca.prototype.depositoPoup = function (valor) {
	this.saldoPoup += valor
}
luis.depositoPoup(100)
console.log(luis)
