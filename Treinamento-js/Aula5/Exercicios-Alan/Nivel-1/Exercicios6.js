/*Solucionar a equação: f(x) = x³ + x² + 3x - 25, para uma valor determinado de x.
 A questão vai mudar por que não conheço a equação do 3° grau e não consegui aprender
então a equação sera substituida por f(x) = x³ - x² = 25 + 3
*/
function equação(a,b,c){
    x = (a + a + a) - (b + b)
    numeros = (c + a)
    return numeros/x
}

resultado = equação(3,2,25)

console.log(resultado)
