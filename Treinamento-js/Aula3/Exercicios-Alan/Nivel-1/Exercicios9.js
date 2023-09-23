//Dados quatro números, contar quantos entre eles são divisíveis por 3 ou 4

a = 6 
b = 9
c = 40
d = 12

if ((a % 3 == 0) && (b % 4 == 0)){
	console.log(a,"e",b,"são divisiveis")
} if ((a % 4 == 0) && (c % 4 == 0)){
	console.log(a,"e",c, " são divisiveis")
} if ((a % 3 == 0) && (d % 4 == 0)){
	console.log(a,"e",d,"são divisiveis")
} if ((b % 3 == 0) && (a % 4 == 0)) {
	console.log(b,"e",a, "são divisiveis")
} if ((b % 3 == 0) && (c % 4 == 0)){
	console.log(b,"e",c, "são divisiveis")
} if ((b % 3 == 0) && (d % 4 == 0)){
	console.log(b,"e", d, "são divisiveis")
} if ((c % 3 == 0) && (a % 4 == 0)){
	console.log(c,"e",a,"são divisiveis")
} if ((c % 3 == 0) && (b % 4 == 0)){
	console.log(c,"e", b, "são divisiveis")
} if ((c % 3 == 0) && (d % 4 == 0)){
	console.log(c,"e",d,"são divisiveis")
} if ((d % 3 == 0) && (a % 4 == 0)){
	console.log(d, "e",a,"são divisiveis")
} if ((d % 3 == 0) && (b % 4 == 0)){
	console.log(d, "e",b,"são divisiveis")
} if ((d % 3 == 0) && (c % 4 ==0)){
	console.log(d,"e",c,"são divisiveis")
}