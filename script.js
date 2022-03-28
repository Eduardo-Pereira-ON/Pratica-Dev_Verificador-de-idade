function verificar() {
    var data = new Date();
    var ano = data.getFullYear();
    var fano = document.getElementById('txtano');
    var res = document.querySelector('div#res');

    if(fano.value.length == 0 || Number(fano.value) > ano ){
        window.alert("[Erro] Verifique os dados e tente novamente!")
    } else {
    var fsex = document.getElementsByName('radsex')
    var idade = ano - Number(fano.value)
    var genero = ''
    var img = document.createElement('img')
    img.setAttribute('id', 'foto')

    if(fsex[0].checked){
            
        if(idade <= 12){
            genero = 'Um pequeno Saiyajin'
            img.setAttribute('src', './img/gokucriança.png')
            document.body.style.background = 'red'
        }else if(idade > 12 && idade < 18){
            genero = 'Um Saiyajin adolescente'
            img.setAttribute('src', './img/gokujovem.png')
            document.body.style.background = 'red'
        }else if(idade >= 18 && idade < 40){
            genero = 'Um Saiyajin adulto'
            img.setAttribute('src', './img/gokuadulto.png')
            document.body.style.background = 'orange'
        }else if(idade >= 40 && idade < 100){
            genero = 'Um velho Saiyajin'
            img.setAttribute('src', './img/gokuvelho.png')
            document.body.style.background = 'gray'
        }else if(idade >= 100) {
            genero = 'Uma alma'
            img.setAttribute('src', './img/lapide.png')
            document.body.style.background = 'gray'
        }
        
    }else if(fsex[1].checked){
            
        if(idade <= 12){
            genero = 'Uma pequena garota'
            img.setAttribute('src', './img/titicriança.png')
            document.body.style.background = 'pink'
        }else if(idade > 12 && idade < 18){
            genero = 'Uma garota adolescente'
            img.setAttribute('src', './img/titiadolecente.png')
            document.body.style.background = 'pink'
        }else if(idade >= 18 && idade < 40){
            genero = 'Uma mulher adulta'
            img.setAttribute('src', './img/titiadulta.png')
            document.body.style.background = 'yellow'
        }else if(idade >= 40 && idade < 100){
            genero = 'Uma senhora'
            img.setAttribute('src', './img/titivelha.png')
            document.body.style.background = 'beige'
        }else if(idade >= 100) {
            genero = 'Uma alma'
            img.setAttribute('src', './img/lapide.png')
            document.body.style.background = 'Gray'
        }
    }
    res.style.textAlign = 'center'
    res.style.font = '20px Arial'
    res.innerHTML = `Detectamos ${genero} de ${idade} anos.` 
    res.appendChild(img)
    }
}