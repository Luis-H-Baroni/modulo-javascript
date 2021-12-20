let nomes = ["Ana", "Luis", "Rodrigo", "Taison"]

nomes.forEach(nome => {
    console.log(nome)
})

function imprimeNomes(nome) {
    console.log(nome)
}
nomes.forEach(imprimeNomes)