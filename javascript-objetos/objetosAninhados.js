const clientes = {
	nome: "André",
	idade: 36,
	CPF: "23423423",
	email: "andre@email.com",
	fones: ["444999993403", "48999999448"],
}

clientes.fones.forEach((fone) => console.log(fone))

clientes.dependentes = {
	nome: "Sandra",
	parentesco: "filha",
	dataNasc: "20/03/2006",
}
console.log(clientes)

clientes.dependentes.nome = "Sandra Silva"
console.log(clientes)
