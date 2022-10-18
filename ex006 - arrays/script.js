let num = [5, 8, 2, 9, 3, 4, 5]

/*(for(pos = 0 ; pos < num.length ; pos++) {
    console.log(`A posição ${pos} tem o valor ${num[pos]}`)
} 
*/

/*for(let pos in num) {
    console.log(num[pos])
}
*/

let pos = num.indexOf(8)
console.log(pos)
let posWrong = num.indexOf(1)
console.log(posWrong)