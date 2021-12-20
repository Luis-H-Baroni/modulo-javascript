const clientes = {
	nome: "André",
	idade: 36,
	CPF: "23423423",
	email: "andre@email.com",
}
const chaves = ["nome", "idade", "CPF", "email"]

console.log(clientes[chaves[0]])

function listarCliente(chave) {
	console.log(clientes[chave])
}

chaves.forEach(listarCliente)
