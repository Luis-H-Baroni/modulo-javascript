let notas = [10, 9, 8, 7, 6]

let notasNovas = notas.map((nota) => (nota == 10 ? nota : ++nota))
console.log(notasNovas)

function pontoExtra(nota) {
	if (nota == 10) {
		return nota
	} else {
		return ++nota
	}
}

let notasNovas2 = notas.map(pontoExtra)
console.log(`novas 2 ${notasNovas2}`)
