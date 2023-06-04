var num = [1,4,3]
num[3] = 5 // Adiciona um número
num.push(7) // Adiciona um número
num.length //quantas coisas tem dentro da variavel.
num.sort() // Deixa a variavel em ordem.
console.log(num)
console.log(`O vetor tem ${num.length} elementos`)
//console.log(num[0])

for (var pos = 0 ; pos < num.length ; pos++){
    console.log(num[pos])
} //modo do guanabara

/*for (var pos = 0; pos <= 4 ; pos++) {
    console.log(num[pos])
}*/ // teste caseiro 

let pas = num.indexOf(3)
if (pas == -1 ) {
    console.log('Valor não encontrado')
}else{
    console.log(`O valor está na posição ${pas}`)
}