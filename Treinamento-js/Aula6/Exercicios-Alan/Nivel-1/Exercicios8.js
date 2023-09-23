//Implementar um subprograma que dados dois vetores, retorna qual deles possui a maior soma de seus elementos


function maior(numeros,numeros2){
	somar = 0

for (var i = 0; i < numeros.length; i++) {
	somar = somar + numeros[i]
}
	somar2 = 0
	for (var i = 0; i < numeros2.length; i++) {
		somar2 = somar2 + numeros2[i]
	}

		if (somar > somar2) {
		return("O primeiro vetor é maior")
	} else {
		return("O segundo vetor é maior")
	}

}

resultado = maior([1,2,3,4,5,6,7,8,9,10],[11,12,13,14,15,16,17,18,19,20])

console.log(resultado)




