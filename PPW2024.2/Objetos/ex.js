for (let foods in listFoods) {
    console.log(foods, listFoods[foods]);
}

//inserindo novo objeto e alterar um dos campos: 

let food2 = {...foods, name: banana}

let food3 = { food, name: maça}

food4 = {} // objeto vazio

let aluno = {matrícula, nome, cpf, idade}
JSON.stringify(aluno)

"mat =" +aluno.matrícula+",nome="+aluno.nome+",cpf:"+aluno.cpf+",idade="+aluno.idade+""