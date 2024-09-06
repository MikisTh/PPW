//Faça um site em HTML e JS que:
//tenha os campos: mat, nome, idade e cpf
//tenha um botão Transformar em JSON - que quando o usuário clicar, exiba o objeto aluno com todos os campos preenchidos no formato JSON num elemento PRE
//faça uma validação que se algum campo não for preenchido, exiba um alert com uma mensagem de texto
//faça uma validação em que a idade digitada precisa ser um valor inteiro, e caso não seja, exiba um alert com uma mensagem de texto
//A entrega deve ser feita anexando:
//link para o seu código no github
//link para o seu site publicado no vercel


const btAdicAluno = document.getElementById("btAdicAluno");
const inputMat = document.getElementById("inputMat");
const inputNome = document.getElementById("inputNome");
const inputIdade = document.getElementById("inputIdade");
const inputCpf = document.getElementById("inputCpf");
const btSubmit = document.getElementById("btEnviar");
const btLimpar = document.getElementById("btLimpar");

const handleBtAdicionarClick = () => {
  let idade = parseInt(inputIdade.value);
  if (isNaN(idade)) {
    alert("Digite um número inteiro!");
    inputIdade.focus();
    return;
  }

  inputMat.value = matrícula;
  inputNome.value = nome;
  inputIdade.value = idade;
  inputCpf.value = cpf;
 };

const handleBtLimparClick = (evt) => {
  console.log("evt.target", evt.target);
  inputMat.value = 0;
  inputNome.value = 0;
  inputIdade.value = 0;
  inputCpf.value = "";
  };

btAdicionar.onclick = handleBtAdicionarClick;
btSalvar.onclick = handleBtSalvarClick;
btLimpar.onclick = handleBtLimparClick;

console.log(alert("Aluno adicionado com sucesso!"));
console.log(confirm("Deseja adicionar aluno?"));
console.log(prompt("Bem vindo!"));

document.getElementById("titulo").innerHTML = "Alterando o título 1";


