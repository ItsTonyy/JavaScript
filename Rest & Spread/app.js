//function showList (empresa, ...clientes) {
//  console.log(empresa)
//  console.log(clientes)
//}

//showList("Google", "Tony", "Amanda", "Juliette", "Gil", 10, 5);

const items = document.querySelectorAll(`li`);

[...items].map(item => {
  console.log(item);
})

console.log(items)

