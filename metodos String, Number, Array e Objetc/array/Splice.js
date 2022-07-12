const numbers = [1, 2, 3, 4, 5];

const sp = numbers.splice(0,3,100)

console.log(numbers) // [100, 4, 5];
// O método splice() remove elementos do arraay e adiciona novos elementos
// precisa de um  inicial e um final... que sera feito o corte,
// nesse meio que o novo elemento será adicionado!
