function carregar() {
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()
    //var hora = 9
    msg.innerHTML = `Agora são ${hora} horas.`
    if (hora >= 0 && hora < 12) {
        //Bom dia.
        img.src = 'manhaa.png'
        document.body.style.background = '#865390'
    } else if (hora >= 12 && hora < 18) {
        //Boa tarde.
        img.src = 'tardee.png'
        document.body.style.background = '#843D0D'
    } else {
        //Boa noite.
        img.src = 'noiteee.png'
        document.body.style.background = '#000929'
    }
}