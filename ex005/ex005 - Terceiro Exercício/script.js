function contar() {
    const inicio = document.getElementById('inicio')
    const fim = document.getElementById('fim')
    const passo = document.getElementById('passo')
    const res = document.getElementById('res')
    const btn = document.getElementById('btn-restart')

    if (inicio.value.lenth == 0 || fim.value.lenght == 0 || passo.value.lenght == 0) {
        window.alert('você esqueceu de digitar um valor.') 
    } 
    
    res.innerHTML = 'Contando: '

    let i = Number(inicio.value)
    let f = Number(fim.value)
    let p = Number(passo.value)

    if(i<f){
        // Contagem em ordem crescente
        for(i ; i<f ; i += p) {
            res.innerHTML += `${i} + ➡️ `
        }
        res.innerHTML += '🏴'

    } else {
        for(i ; i>f ; i -= p) {
            res.innerHTML += `${i} + ➡️ `
        }
        res.innerHTML += '🏴'
               
    }
}

