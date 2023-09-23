//Implementar um subprograma que dado um vetor e um número, divide todos os elementos do vetor pelo número

function divisão(numeros){
	dividir = 2

	for (var i = 0; i < numeros.length; i++) {
		subtrair = numeros[i]/dividir
	}
	console.log("A divisão de 2 com vetor:",subtrair)
}

divisão([10,20,33])