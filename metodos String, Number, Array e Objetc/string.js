//Principais Métodos de Strings

const frase = "Olá mundo! estou aprendendo sobre Strings"

let results  = frase.indexOf('mundo') // vai informar em que posição o caracteri inicial se encontra no caso index 4
    results = frase.includes('Olá') // vai informa se a string passada dentro existe na string pesquisada
    results = frase.slice(4, 16) // vai corta a string da onde vai começa o corte (4) até onde vai terminar (16)= mundo! estou
    results = frase.charAt(4) // vai indicar a letra conrespondente ao index passado = m
    results = frase.repeat(2) // vai repetir a string a quantidade de vezes que for informado
    results = frase.length // informa o tamanho da string = 41
    results = frase.split(' ') // irá criar um array cuja divisão ser com base no que for passado no caso 'espaço'= ['Olá', 'mundo', 'estou', 'aprendendo', 'sobre', 'strings']
    results = frase.toUpperCase() // deixá tudo em maiúsculo
    results = frase.toLowerCase() // deixa tudo em minusculo
    results = frase.concat(' e como estou gostando') // juntar a primeira string com a novo criada = Ola mundo! estou aprendendo sobre strings e como estou gostando
    results = frase.replace('Strings','arrays') // trocasse um termo do primeiro argumento pelo do segundo 

    
    console.log(results)
    
