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
	],
}

clientes.dependentes.push({
	nome: "Marcelo Silva",
	parentesco: "filho",
	dataNasc: "04/01/2001",
})
console.log(clientes)

let filhoMaisNovo = clientes.dependentes.filter(
	(dependentes) => dependentes.dataNasc === "20/03/2006"
)
console.log(filhoMaisNovo[0].nome)
