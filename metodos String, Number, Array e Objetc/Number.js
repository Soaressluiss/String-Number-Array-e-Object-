//Principais  métodos Number

//ParserInt()
const num = 4.4
console.log(Number.parseInt(num)) // converte um numero decimal em inteiro = 4

// ParseFloat()
const num2 = '3.4'
console.log(Number.parseFloat(num2)) // converte uma string em number independente de ser um decimal ou não = 33.4

// Number()
const num3 = '56.7'
console.log(Number(num3)) // converte para number um string de numeros = 56.7

//toFixed()
const num4 = 3.45456554
console.log(num4.toFixed(3)) // irá aredondar o numero para a quantidade de casas definidas = 3.455

//isNaN()
const num5 = 'teste'
console.log(isNaN(num5)); // irá verifica se o variavel é um numero ou nao, caso retone for uma string retona true (consegue diferi numero com e sem "")

// Objeto Math
// random()
const generationNumbers = Math.random()
console.log(generationNumbers); // gerará um número randominco entre 0 e 1

// round()
const generationNumbersRound = Math.round(4.5554)
console.log(generationNumbersRound); // retonará um numero arendondado = 5

//flour()
const generationNumbersFloor = Math.floor(2.9)
console.log(generationNumbersFloor); // sempre vai arrendodar para baixo = 2

//ceil()
const generationNumbersCeil = Math.ceil(3.15)
console.log(generationNumbersCeil); // sempre vai arrendodar para cima = 4


Math.PI // pi = 3,14
Math.pow(5, 2) // pontencia base e expoente = 25
Math.sqrt(49) // retorna a raiz quadrada = 7