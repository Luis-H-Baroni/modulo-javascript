let alunos = ["Joao", "Juliana", "Ana", "Caio"]
let medias = [10, 7, 9, 6]

let matrizMedias = [alunos, medias]

function exibeNomeNota(nomeDoAluno) {
    if (matrizMedias[0].includes(nomeDoAluno)) {
        indice = matrizMedias[0].indexOf(nomeDoAluno)
        return matrizMedias[0][indice] + ", sua média é " + matrizMedias[1][indice]
    }
    else {
        return "Aluno não encontrado"
    }
}

console.log(exibeNomeNota("luis"))