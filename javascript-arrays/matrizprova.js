let gabarito = ["a", "b", "a", "c", "d"]
let alunos = ["Ana", "Luis", "Carlos"]
let resposta1 = ["a", "b", "a"]
let resposta2 = ["b", "b", "c"]
let resposta3 = ["a", "b", "c"]
let resposta4 = ["c", "b", "c"]
let resposta5 = ["a", "b", "d"]
let nota = [0, 0, 0]

let correcao = [
	alunos,
	resposta1,
	resposta2,
	resposta3,
	resposta4,
	resposta5,
	nota,
]
console.log(correcao)
console.log(gabarito)

for (i = 0; i < alunos.length; i++) {
	for (j = 1; j < 6; j++) {
		if (correcao[j][i] == gabarito[j - 1]) {
			correcao[6][i] += 2
		}
	}
}
for (i = 0; i < 3; i++) {
	console.log(alunos[i] + " " + correcao[6][i])
}
