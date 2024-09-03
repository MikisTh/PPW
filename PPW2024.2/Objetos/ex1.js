meuCarro["fabricacao"] = "Ford";
meuCarro["modelo"] = "Mustang";
meuCarro["ano"] = 1969;

function Carro(marca, modelo, ano) {
  this.marca = marca;
  this.modelo = modelo;
  this.ano = ano;
}

var meucarro = new Carro("Eagle", "Talon TSi", 1993);

var carroDeKen = new Carro("Nissan", "300ZX", 1992);
var carroDeVPG = new Carro("Mazda", "Miata", 1990);

// Encapsulamento das propriedades e métodos de Animal
var Animal = {
  tipo: "Invertebrados", // Propriedades de valores padrão
  qualTipo: function () {
    // Método que ira mostrar o tipo de Animal
    console.log(this.tipo);
  },
};

// Cria um novo tipo de animal chamado animal1
var animal1 = Object.create(Animal);
animal1.qualTipo(); // Saída:Invertebrados

// Cria um novo tipo de animal chamado Peixes
var peixe = Object.create(Animal);
peixe.tipo = "Peixes";
peixe.qualTipo(); // Saída: Peixes
