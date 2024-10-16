function contar(){
    var ini = document.getElementById('iinicio')
    var fim = document.getElementById('ffim')
    var passo = document.getElementById('ppasso')
    let resultado = document.getElementById('res')
    if(ini.value.length == 0 || fim.value.length == 0 || passo.value.length == 0){
          resultado.innerHTML = 'Impossivel Contar!'
        window.alert('[ERRO] Porfavor Digite um Numero!')
    } else{
    resultado.innerHTML = 'Contando: <br>'
    let i = Number(ini.value)
    let f = Number(fim.value)
    let p = Number(passo.value)
    if ( p <= 0){
        window.alert('Passo inválido! Considerando PASSO 1')
        p = 1
    }
        if(i < f){
         for (var c = i ; c <= f; c+= p){
        resultado.innerHTML += `${c} \u{1F449}`
    }
  
 } else {
    for(c = i; c >= f ;c -= p){
        resultado.innerHTML += `${c} \u{1F449}`
    }
 }
  resultado.innerHTML += `\u{1F3C1}`
    }
}