//Principais Métodos de Strings

const frase = "Olá mundo! estou aprendendo sobre Strings"

let results  = frase.indexOf('mundo') // vai informar em que posição o caracteri inicial se encontra no caso index 4
    results = frase.includes('Olá') // vai informa se a string passada dentro existe na string pesquisada

console.log(results)