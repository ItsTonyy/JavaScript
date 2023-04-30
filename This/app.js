const person = {
  firstName: 'Walter',
  lastName: 'White',
  nickName: 'Heisenberg',
  getFullName () {
    console.log(this);
  },
  getPresentation () {
    const {firstName, lastName, nickName} = this // destructuring
    return (`${firstName} ${lastName} or ${nickName}`)
  },
  printBio() {
    const fullName = this.getPresentation();
    console.log(`${fullName} is a character from the tv show 'Breaking Bad'`);
  }
}

person.getFullName() // {firstName: 'Walter',lastName: 'White',nickName: 'Heisenberg',getFullName: [Function: getFullName}

person.getPresentation() // Walter White or Heisenberg

person.printBio() // Walter White or Heisenberg is a character from the tv show 'Breaking Bad'

// Ao chamar a função abaixo sem 'conectar' ela a nenhum objeto, o 'this' é atribuido ao Window, e não ao objeto.
printBio() // printBio is not defined 


