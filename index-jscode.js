function carregar(){
    h1 = document.getElementById('hr');
    img = document.getElementById('img');
    horal = new Date();
    hora = horal.getHours();
    hora2 = horal.getMinutes();
    h1.innerHTML = `Agora são ${hora}hrs e ${hora2}min!`;

    if(hora >= 5 && hora < 12){
        img.src = '_images/amanhecer.jpg';
        document.body.style.background = 'rgb(233, 217, 130)';      

    }
    else if(hora >= 12 && hora < 16){
        img.src = '_images/meio dia.jpg';
        document.body.style.background = 'rgb(148, 207, 235)';

    }
    else if(hora >= 16 && hora < 18){
        img.src = '_images/entardecer.jpg';
        document.body.style.background = 'rgba(221, 88, 47, .9)'

    }
    else{
        img.src = '_images/noite.jpg';
        document.body.style.background = 'rgb(29, 30, 41)'

    }

}
