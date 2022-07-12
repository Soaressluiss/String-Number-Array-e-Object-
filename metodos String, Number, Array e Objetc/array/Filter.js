const numbers = [1, 2, 3, 4, 5];

const filtrarNumbers = numbers.filter(n => {
    return n > 2
})

console.log(filtrarNumbers); // [3, 4, 5]

//O método Filter() irá filtrar o array com base num criterio pre-estabelecido 
// retornará o resultado desse criterio.