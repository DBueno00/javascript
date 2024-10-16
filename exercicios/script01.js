



function carregar(){
    var msg = window.document.querySelector(`div#msg`) ;
    var img = window.document.querySelector(`img#imagem`) ;
    var data = new Date() ;
    var hora = data.getHours() ;
    msg.innerHTML = `Agora são ${hora} horas.`
    if(hora >= 0 && hora < 12){
        img.src = 'fon.png'
        window.document.body.style.background = '#d87e3a'
    } else if(hora >= 12 && hora <= 18){
        img.src = 'fototarde.png'
        window.document.body.style.background = '#c97c53'
    } else{
        img.src = 'fotonoite.png'
        window.document.body.style.background ='#372943'
    }
        }



