function contar() {
    var ini = document.getElementById('txtini')
    var fim = document.getElementById('txtfin')
    var passo = document.getElementById('txtpas')
    let res = document.getElementById('res')
    let fini = document.getElementById('fini')
    if (ini.value.length == 0 || fim.value.length == 0 || passo.value.length == 0 || passo.value <= 0){
        window.alert('Analise os valores e tente novamente.')
    } else {
        res.innerHTML = `contando: `
        var i = Number(ini.value)
        var f = Number(fim.value)
        var p = Number(passo.value)
        res.innerHTML = ''
        if (ini.value < fim.value){
            //contagem crescente
            for(var c = i; c <= f; c += p) {
                res.innerHTML += `${c} \u{1F449}`

        }
        }  else {
            //contagem regressiva
            for(var c = i; c >= f; c -= p) {
                res.innerHTML += `${c} \u{1F449}`
            }
        }

        
      }  res.innerHTML += 'Fim. \u{1F3F3}'
    }
    