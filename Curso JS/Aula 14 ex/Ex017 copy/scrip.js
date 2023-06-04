function clicar() {
    var Con = document.getElementById('Con')
    var numero = document.getElementById('txtnum')
    var tab = document.getElementById('txtnumb')
    if(numero.value.length == 0) {
        window.alert('Porfavor, digite um valor válido.')
    }
    else {
        var num = Number(numero.value)
        var x = 0
        tab.innerHTML = ''
        while(x <= 10){
            var item = document.createElement('option')
            item.text = `${num} X ${x} = ${num*x}`
            item.value = `tab${x}`
            tab.appendChild(item)
            x++
            
    }
    }

}



