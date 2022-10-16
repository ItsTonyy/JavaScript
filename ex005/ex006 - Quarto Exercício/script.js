let nmb = document.getElementById('number');
let tab = document.getElementById('seltab')
const res = document.getElementById('res');
const btn = document.getElementById('btn');


function tabuada() {
  if (nmb.value == 0) {
    window.alert('Número inválido. Tente novamente!');
  } else {
    tab.innerHTML = ''
    for (var i = 1 ; i <= 10 ; i++) {
      let n = Number(nmb.value);
      let x = n * i;
      //res.innerHTML = 'Calculando... '

      let item = document.createElement('option');
      item.text = `${n} x ${i} = ${x}`
      tab.appendChild(item)
                  
    }
      
      
  }
}
  


