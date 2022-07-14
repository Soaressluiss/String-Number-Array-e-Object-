let pessoa = {
    nome: 'José',
    idade: 27,
    feliz: true,
    moto: {
        marca: 'Honda',
        modelo: 'XRE 300',
        cor: 'preta',
    },
    correr: function (km) {
        return ` ${pessoa.nome} estava andando com a sua ${pessoa.moto.modelo} 
        a uma velocidade de ${km} Km/h. Ele estava muito ${pessoa.feliz}`;
    },
};
console.log(pessoa.correr(60));

// Descontrution Object
const { nome, idade, correr, moto } = pessoa;

console.log(nome, idade, correr(58), moto.cor);
