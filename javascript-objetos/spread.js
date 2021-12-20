const clientes = [
	{
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
	},
	{
		nome: "Juliana",
		CPF: "45634576523",
		dependentes: [
			{
				nome: "Sophia Souza",
				parentesco: "filha",
				dataNasc: "30/08/2020",
			},
		],
	},
]

let listaDependentes = [...clientes[0].dependentes, ...clientes[1].dependentes]
console.log(listaDependentes)
console.table(listaDependentes)
