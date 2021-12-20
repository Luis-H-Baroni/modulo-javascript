let sala1 = [7, 8, 8, 7, 10, 6.5, 4, 10, 7]
let sala2 = [6, 5, 8, 9, 5, 6]
let sala3 = [7, 3.5, 8, 9.5]

function mediaSala(arrayDeNotas) {
	let somaNotas = arrayDeNotas.reduce((acum, atual) => atual + acum, 0)
	return somaNotas / arrayDeNotas.length
}
console.log(mediaSala(sala1))
console.log(mediaSala(sala2))
console.log(mediaSala(sala3))

function somarArray(acum, atual) {
	return atual + acum
}
function media(array) {
	let soma = array.reduce(somarArray, 0)
	return soma / array.length
}
console.log(media(sala1))

function media(array) {
	let soma = array.reduce(function (acum, atual) {
		return atual + acum
	}, 0)
	return soma / array.length
}
console.log(media(sala1))
