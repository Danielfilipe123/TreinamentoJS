//Identificar se duas variáveis são ímpares e positivas ao mesmo tempo

numero = 12

if ((numero % 3 == 0) && (numero > 0)) {
	console.log(numero,"é impar e positivo")
} else if ((numero % 2 == 0) && (numero > 0)){
	console.log(numero, "não é impar e positivo")
} else if ((numero % 3 == 0) && (numero < 0)) {
	console.log(numero,"é impar e não positivo")
} else {
	console.log(numero, "não é impar e não é positivo")
}