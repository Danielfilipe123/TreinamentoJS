//Implementar um subprograma que dados um vetor e um número, multiplica cada elemento do vetor pelo número recebido como parâmetro

function multiplicar(numeros){
	multiplicar = 2

	for (var i = 0; i < numeros.length; i++) {
		multiplicar = multiplicar * numeros[i]
	}
	console.log("A multiplicação de 2 com o vetor:", multiplicar)
}

multiplicar([2,4,6])
