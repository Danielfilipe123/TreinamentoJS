//Dados quatro notas, computar e classificar o valor da média das notas de um 
//estudante como aprovado (> 6), reprovado (< 4) e recuperação (caso contrário)

nota1 = 5
nota2 = 6
nota3 = 7
nota4 = 4

media = (nota1 + nota2 + nota3 + nota4 )/4

if (media > 6) {
	console.log("Aprovado")
}else if (media < 4) {
	console.log("Reprovado")
} else {
	console.log("Recuperação")
}
