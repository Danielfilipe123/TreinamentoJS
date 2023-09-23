//Dados quatro números, contar quantos entre eles são divisíveis por 5 e 7 ao mesmo tempo

a = 21
b = 49
c = 70
d = 40

if ((a % 5 == 0) && (b % 7 == 0)){
	console.log(a,"e",b,"são divisiveis")
} if ((a % 5 == 0) && (c % 7 == 0)){
	console.log(a,"e",c, " são divisiveis")
} if ((a % 5 == 0) && (d % 7 == 0)){
	console.log(a,"e",d,"são divisiveis")
} if ((b % 5 == 0) && (a % 7 == 0)) {
	console.log(b,"e",a, "são divisiveis")
} if ((b % 5 == 0) && (c % 7 == 0)){
	console.log(b,"e",c, "são divisiveis")
} if ((b % 5 == 0) && (d % 7 == 0)){
	console.log(b,"e", d, "são divisiveis")
} if ((c % 5 == 0) && (a % 7 == 0)){
	console.log(c,"e",a,"são divisiveis")
} if ((c % 5 == 0) && (b % 7 == 0)){
	console.log(c,"e", b, "são divisiveis")
} if ((c % 5 == 0) && (d % 7 == 0)){
	console.log(c,"e",d,"são divisiveis")
} if ((d % 5 == 0) && (a % 7 == 0)){
	console.log(d, "e",a,"são divisiveis")
} if ((d % 5 == 0) && (b % 7 == 0)){
	console.log(d, "e",b,"são divisiveis")
} if ((d % 5 == 0) && (c % 7 ==0)){
	console.log(d,"e",c,"são divisiveis")
}