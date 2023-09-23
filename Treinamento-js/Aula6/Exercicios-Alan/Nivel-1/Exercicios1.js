//Implementar subprograma que retorna a soma todos os elementos de um vetor

function somar(vetor) {
		somar = 0
for (var i = 0; i < vetor.length; i++) {
		somar = somar + vetor[i]
	}
	return somar
}

vetor = [2,4,6,8,10]

resultado = somar(vetor)

console.log("O vetor retorna:",resultado)
