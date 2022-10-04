function carregar() {
    const msg = document.getElementById('msg');
    const image = document.getElementById('imagem');
    const data = new Date();
    let hora = data.getHours();
    let minuto = addZero(data.getMinutes());
    msg.innerHTML = `Agora são ${hora}:${minuto} horas.`
    
    if (hora >= 6 && hora < 13) {
        //  BOM DIA 
        image.src = ('fotomanha.jpg')
        document.body.style.backgroundColor = '#7C8E58'
    } else if (hora >= 13 && hora < 18 ) {
        // BOA TARDE
        image.src = ('fototarde.jpg')
        document.body.style.backgroundColor = '#C86C14'
    } else if (hora >= 18 && hora < 23) {
        // BOA NOITE
        image.src = ('fotonoite.jpg')
        document.body.style.backgroundColor = '#083A7D'
    } else {
        // BOA MADRUGADA
        image.src = ('fotomadrugada.jpg')
        document.body.style.backgroundColor = '#0D2C2D'
    }

    if (minuto < 10) {
        minuto = '0' + minuto
    }
}

function addZero(i) {
    if (i < 10) {
      i = "0" + i;
    }
    return i;
  }

