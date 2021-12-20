const clientes = {
	nome: "André",
	idade: 36,
	CPF: "23423423",
	email: "andre@email.com",
	fones: ["444999993403", "48999999448"],
	dependentes: [
		{
			nome: "Sandra Silva",
			parentesco: "filha",
			dataNasc: "20/03/2006",
		},
		{
			nome: "Marcelo Silva",
			parentesco: "filho",
			dataNasc: "04/01/2001",
		},
	],
	saldo: 1000,
	depositar: function (valor) {
		this.saldo += valor
	},
}

for (let chave in clientes) {
	if (
		typeof clientes[chave] === "object" ||
		typeof clientes[chave] === "function"
	) {
		continue
	} else {
		console.log(`${chave} = ${clientes[chave]}`)
	}
}
