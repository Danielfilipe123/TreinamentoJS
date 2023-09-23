//Receber um número como parâmetro e retornar true se ele for divisível 7 e false caso contrário

function divisível(a) {
	
	if (a % 7 == 0){
		return(true)
	}else {
		return(false)
	}
}

resultado = divisível(14)

console.log(resultado)