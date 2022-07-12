const numbers = [1, 2, 3, 4, 5];

const haveSome = numbers.some(n => {
    return n > 3
});

console.log(haveSome) // TRUE

// O método Some() retorna true ou false com base no critério estabelecido previamente