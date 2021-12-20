function Cliente(nome, CPF, email, saldo) {
	this.nome = nome
	this.CPF = CPF
	this.email = email
	this.saldo = saldo
	this.deposito = function (valor) {
		this.saldo += valor
	}
}

let andre = new Cliente("Luis", "12345678912", "email@exemplo.com", 4500)
console.log(andre)
