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
const btLimpar = document.getElementById("btLimpar");

let somatorio = 0;
let qtd = 0;

const handleBtAdicionarClick = () => {
  let num = parseInt(inputNum.value);
  if (isNaN(num)) {
    alert("Digite um número inteiro!");
    inputNum.focus();
    return;
  }

function Enviar() {

    var nome = document.getElementById("nomeid");

    if (nome.value != "") {
        alert('Obrigado sr(a) ' + nome.value + ' os seus dados foram encaminhados com sucesso');
    }

}

  inputMat.value = matrícula;
  inputNome.value = nome;
  inputIdade.value = idade;
  inputCpf.value = cpf;
  inputcpf.focus();
};

const handleBtLimparClick = (evt) => {
  console.log("evt.target", evt.target);
  inputMat.value = 0;
  inputNome.value = 0;
  inputIdade.value = 0;
  inputCpf.value = "";
  inputCpf.focus();
};

// configuração de todos os eventos
btAdic.onclick = handleBtAdicionarClick;
btLimpar.onclick = handleBtLimparClick;

// alert("Olá!");
console.log("Mensagem impressa no console das ferramentas do desenvolvedor!");

// console.log(alert("esse aqui é um alert!"));
// console.log(confirm("esse aqui é um confirm"));
// console.log(prompt("esse aqui é um prompt"));

document.getElementById("titulo").innerHTML = "Alterando o título 1";
