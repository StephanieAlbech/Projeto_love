var num = []
var numero = document.getElementById('txtnume')
var sele = document.getElementById('txtnum')
var text = document.getElementById('text')

function Adicionar() {
    var n = Number(numero.value) 
    var valid = num.indexOf(n)
    if ( n == 0 || n > 100 || valid != -1) {
        window.alert('Você digitou um número que ja existe ou um número invalido, tente novamente.')
    }else{
        num.push(n)
        window.alert('Adicionado.' + ` A lista esta assim ${num} `)
        var item = document.createElement('option')
        item.text = `O numero ${n} foi adicionado a lista.`
        sele.appendChild(item)}
    
}
function Finalizar(){
    if (num.length == 0){
        window.alert('Você não adicionou nenhum valor. Tente novamente')
    } else {
    var maxnum = Math.max(...num);
    var minnum = Math.min(...num);
    var soma = 0
    var med = num.length
    for (var i = 0;i <num.length; i++){
        soma+=num[i]
    }
    media = soma / med
    text.innerHTML = ''
    text.innerHTML += `Existem no total ${num.length} números na lista.` 
    text.innerHTML += `<br>O maior número é ${maxnum}` 
    text.innerHTML += `<br>O menor número é ${minnum}` 
    text.innerHTML +=  `<br> A soma dos valores é ${soma} ` 
    text.innerHTML += `<br> A média dos valores é igual á ${media}`
}
}
    
