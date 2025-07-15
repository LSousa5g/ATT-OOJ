function Animal(nome, idade, peso) {
    this.nome = nome;
    this.idade = idade;
    this.peso = peso;
}

function Cachorro(nome) {
    Animal.call(this, nome, 12, "12kg");
}

function Gato(nome) {
    Animal.call(this, nome, 2, "2kg");
}

const Animal1 = new Cachorro("Chico");
const Animal2 = new Gato("Café");

console.log(Animal1);
console.log(Animal2);


