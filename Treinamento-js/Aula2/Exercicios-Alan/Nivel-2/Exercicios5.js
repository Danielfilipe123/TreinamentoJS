//Computar o Índice de Massa Corporal (peso dividido pelo quadrado da altura) 
//e classificar o resultado entre magreza (inferior a 18.5), saudável (entre 18.5 e 25), 
//sobrepeso (acima de 25);

peso = 40
altura = (1.70 * 1.70)

imc = peso/altura

if (imc < 18.5){
	console.log("Magreza")
} else if (imc > 25) {
	console.log("Sobrepeso")
} else {
	console.log("Saudável")
}