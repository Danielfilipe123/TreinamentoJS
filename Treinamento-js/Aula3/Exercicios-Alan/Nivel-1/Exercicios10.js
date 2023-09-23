//Identificar se duas variáveis são pares e negativas ao mesmo tempo

numero = -21

if ((numero % 2 == 0) && (numero < 0)) {
	console.log(numero,"é par e negativo")
} else if ((numero % 3 == 0) && (numero < 0)){
	console.log(numero, "não é par e negativo")
} else if ((numero % 2 == 0) && (numero > 0)) {
	console.log(numero,"é par e não é negativo")
} else {
	console.log(numero, "não é par e não é negativo")
}
