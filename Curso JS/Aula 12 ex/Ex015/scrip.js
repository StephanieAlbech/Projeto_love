function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.getElementById('res')
    if (fano.value.length == 0 || fano.value > ano){
        window.alert('Verifique os dados e tente novamente.')
    } else{
        var fsex = document.getElementsByName('radsexo')
        var idade = ano - Number(fano.value)
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if (fsex[0].checked) {
           genero = 'Homem' 
           if (idade >= 0  && idade < 12){
            //Criança
            img.setAttribute('src', 'criançamen.png')
           } else if (idade < 21) {
            //jovem
            img.setAttribute('src', 'jovemen.png')
           } else if (idade < 70) {
            //adulto
            img.setAttribute('src', 'adultoo.png')
           } else if (idade >= 70) {
            //idoso
            img.setAttribute('src', 'idoso.png')
           }

        } else if (fsex[1].checked) {
            genero = 'Mulher'
            if (idade >= 0  && idade < 12){
                img.setAttribute('src', 'criançafem.png')
               } else if (idade < 21) {
                img.setAttribute('src', 'jovem.png')
               } else if (idade < 70) {
                img.setAttribute('src', 'adulta.png')
               } else if (idade >= 70) {
                img.setAttribute('src', 'idosa.png')
               }
    
        } else if(fsex[2].checked) {
            genero = 'Não binário'
            if (idade >= 0  && idade < 12){
                //Criança
               } else if (idade < 21) {
                //jovem
                
               } else if (idade < 70) {
                //adulto
               } else if (idade >= 70) {
                //idoso
               }
    
        }
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos ${genero} com ${idade} anos.` 
        res.appendChild(img)
        
    }
}
