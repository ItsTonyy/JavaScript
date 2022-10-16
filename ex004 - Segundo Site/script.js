function verificar() {
  let data = new Date();
  let ano = data.getFullYear();
  let fano = document.getElementById('txtano');
  let res = document.getElementById('res');

  if (fano.value == 0 || fano.value > ano) {
    window.alert('Verifique os dados e tente novamente.');
  } else {
    let fsex = document.getElementsByName('radsex');
    let idade = ano - Number(fano.value);
    let gênero = ''
    // res innerhtml
    let img = document.createElement('img');
    

    if (fsex[0].checked) {
      gênero = 'homem'
      if (idade > 0 && idade <= 13) {
        //criança
        img.setAttribute('src', 'foto-bebe-m.png');
      } else if (idade > 13 && idade < 18) {
        //adolescente
        img.setAttribute('src', 'foto-jovem-m.png');
      } else if (idade > 18 && idade < 65) {
        //adulto
        img.setAttribute('src', 'foto-adulto-m.png');
      } else {
        //idoso
        img.setAttribute('src', 'foto-idoso-m.png');
      }
    } else if (fsex[1].checked) {
      gênero = 'mulher'
      if (idade > 0 && idade <= 13) {
        //criança
        img.setAttribute('src', 'foto-bebe-f.png');
      } else if (idade > 13 && idade < 18) {
        //adolescente
        img.setAttribute('src', 'foto-jovem-f.png');
      } else if (idade > 18 && idade < 65) {
        //adulto
        img.setAttribute('src', 'foto-adulto-f.png');
      } else {
        //idoso
        img.setAttribute('src', 'foto-idoso-f.png');
      }
    }

    
    

    res.innerHTML = `<p> Detectamos ${gênero} com ${idade} anos. </p>`
    res.appendChild(img);



    
  }
}

function reiniciar() {
  let res = document.getElementById('res')
  res.innerHTML = '<p>Preencha os dados acima para ver o resultado.</p>'
  document.body.style.backgroundColor = '#3E84D9'
}
