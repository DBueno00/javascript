function verificar(){
    var data = new Date()
    var ano = data.getFullYear()
    var fAno = window.document.getElementById('txtano')
    var res = window.document.getElementById('res')
    if(fAno.value.length == 0 || fAno.value > ano){
        window.alert('[ERRO] Verifique os dados e tente novamente!')
    } else {
        var fsex = document.getElementsByName('radsex') ;
        var idade = ano - Number(fAno.value) ;
        var genero = '' ;
        var img = document.createElement('img') ; 
        img.setAttribute('id','foto')
        if(fsex[0].checked){
            genero = 'Homem';
            if(idade > 0 && idade < 10){
                //criança
                img.setAttribute('src','bebem.jpeg')
            } else if(idade >=10 && idade < 21){
                //jovem
                img.setAttribute('src','jovem.png')
            } else if (idade < 50){
                //adulto
                img.setAttribute('src','adulto.jpeg')
            } else{
                // idoso
                img.setAttribute('src','idoso.jpeg')
            }
        } else if (fsex[1].checked) {
            genero = 'Mulher' ;
            if(idade > 0 && idade < 10){
                //criança
                img.setAttribute('src','bebef.jpeg')
            } else if(idade >=10 && idade < 21){
                //jovem
                img.setAttribute('src','jovemf.png')
            } else if (idade < 50){
                //adulto
                img.setAttribute('src','adulta.jpeg')
            } else{
                // idoso
                img.setAttribute('src','idosa.jpeg')
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos ${genero} com ${idade} anos.`
        res.appendChild(img)
    }
}