aluno ["nome"] = "nome do aluno";
aluno["matricula"] = "000000;
aluno["cpf"] = 000.000.000-00;

function Aluno (nome, matricula, cpf) {
  this.nome = nome;
  this.matricula = matricula;
  this.cpf = cpf;
}

var aluno1 = new Aluno("Thiago", "000001",000.000.000-01);


var Aluno = {
  tipo: "veterano", 
  qualTipo: function () {
    console.log(this.tipo);
  },
};

var aluno1 = Object.create(aluno);
animal1.qualTipo();
var aluno = Object.create(aluno);
aluno.tipo = "bolsita";
aluno.qualTipo(); 
