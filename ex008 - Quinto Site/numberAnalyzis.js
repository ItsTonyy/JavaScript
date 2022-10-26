let input = document.getElementById('number');
let nmb = Number(input);
let tab = document.getElementById('seltab');
let res = document.getElementById('res');
let array = [];


function adicionar() {
  if (input.value > 100 || input.value < 1) {
    window.alert('Valor inválido ou já encontrado na lista.');
  } else if (array.includes(input.value)) {
    window.alert('Este número já foi adicionado.')
  } else {
    res.innerHTML = ''
    // botar os numeros no array
    array.push(input.value);
    // criar a mensagem no select
    let lastElement = array.slice(-1);
    let item = document.createElement('option');
    item.text = `Valor ${lastElement} adicionado.`;
    tab.appendChild(item);
  }
}

function finalizar() {
  const total = array.reduce((valorAnterior, valorAtual) => {return Number(valorAnterior) + Number(valorAtual)})
  //organizar os números de forma crescente
  array.sort(); 

  // variáveis com as propriedades

  //lenght
  let length = array.length
  // soma dos números = const total

  // maior número 
  let higherNumber = array.slice(-1)
  // menor número
  let smallestNumber = array[0]
  // média dos números 
  let media = Math.floor(total / length)





  res.innerHTML += `Ao todo, temos ${length} números cadastrados. <br>`
  res.innerHTML += `O maior valor informado foi ${higherNumber} <br>`
  res.innerHTML += `O menor valor informado foi ${smallestNumber} <br>`
  res.innerHTML += `Somando todos os valores, temos ${total} <br>`
  res.innerHTML += `A média dos valores é de ${media}` 


}
