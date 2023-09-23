//Dados três números, encontrar o número do meio (não é o menor, nem o maior)

a = 10
b = 20
c = 30

if ((c > a ) && (b < a)){
	console.log("o meio:", a,"a1")
} else if ((b > a) && (c < a)){
	console.log("o meio:",a,"a2")
} else if ((a > b) && (c < b)) {
	console.log("meio:",b,"b1")
} else if ((c > b) && (a < b)){
	console.log("meio:",b,"b2")
} else if ((b > c) && (a < c)) {
	console.log("meio:", c, "c1")
} else {
	console.log("meio:",c,"c2")
}

