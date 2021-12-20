let notas = [10, 6.5, 8, 7.5]
let somaDasNotas = 0

function somaNota(nota) {
	somaDasNotas += nota
}
notas.forEach(somaNota)

let media = somaDasNotas / notas.length
console.log(media)
