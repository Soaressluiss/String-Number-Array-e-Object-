//Principais  métodos Number

//ParserInt()
const num = 4.4
console.log(Number.parseInt(num)) // converte um numero decimal em inteiro = 4

// ParseFloat()
const num2 = '3.4'
console.log(Number.parseFloat(num2)) // converte uma string em number independente de ser um decimal ou não = 33.4

// Number()
const num3 = '56.7'
console.log(Number(num3))// converte para number um string de numeros = 56.7

//toFixed()
const num4 = 3.45456554
console.log(num4.toFixed(3))// irá aredondar o numero para a quantidade de casas definidas = 3.455

//isNaN()
const num5 = 'teste'
console.log(isNaN(num5)); // irá verifica se o variavel é um numero ou nao, caso retone for uma string retona true (consegue diferi numero com e sem "")

