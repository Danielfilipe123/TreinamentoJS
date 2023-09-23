// Implementar um subprograma que dado um vetor, computa a média dos seus elementos e retorna quantos elementos acima da média ele possui

function unidades(notas){

media= 0

for (var i = 0; i < notas.length; i++) {
	media = media + notas[i]
}

resultado = media/notas.length

if(resultado > 5.0) {
	return ("Aprovado")
} else {
	return("Reprovado")
}
}
resultadofinal = unidades([8.0,7.0,6.0,8.0])

console.log("O aluno está:",resultadofinal)

/*

sinceramente não sei se era pra fazer isso,
mas vou supor que o aluno tem passar na media

*/