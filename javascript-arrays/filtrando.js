let nomes = ["Ana", "Marcos", "Maria", "Mauro"]
let notas = [7, 4.5, 8, 7.5]

let reprovados = nomes.filter((_, indice) => notas[indice] < 5)

console.log(reprovados)