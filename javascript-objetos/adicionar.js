const clientes = {
	nome: "André",
	idade: 36,
	CPF: "23423423",
	email: "andre@email.com",
}
const chaves = ["nome", "idade", "CPF", "email", "fone"]

clientes.fone = "92453492"
console.log(clientes)

clientes.fone = "9"
console.log(clientes)

clientes.fone += "888888"
console.log(clientes)

chaves.forEach((chave) => console.log(clientes[chave]))

if (fone > chaves) console.log()
