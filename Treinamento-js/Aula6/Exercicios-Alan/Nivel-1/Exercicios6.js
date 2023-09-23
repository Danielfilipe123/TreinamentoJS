//Implementar um subprograma que dado um vetor e um número, subtraí o número de todos os elementos do vetor

function subtração(numeros){
	subtrair = 20

	for (var i = 0; i < numeros.length; i++) {
		subtrair = numeros[i] - subtrair
	}
	console.log("A subtração de 20 com vetor:",subtrair)
}

subtração([35,40,80])