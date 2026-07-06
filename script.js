const perguntas = [
    {
        pergunta: "Questão 1. O que é Java Script?",
        opcoes: [
            {texto: "É uma marca de tênis", correta: false},
            {texto: "Um computador", correta: false},
            {texto: "Uma linguagem da progamação", correta: true}
        ]
    },
    {
        pergunta: "Questão 2. O que é Python?",
        opcoes: [
            {texto: "Uma cobra e uma linguagem da programação", correta: true},
            {texto: "Um pato", correta: false},
            {texto: "Um padre", correta: false}
        ]
    },
    {
        pergunta: "Questão 3. O que é Lourdes?",
        opcoes: [
            {texto: "Uma avó", correta: true},
            {texto: "Uma Alexa caipira", correta: false},
            {texto: "Uma capivara", correta: false}
        ]
    },
    {
        pergunta: "Questão 4. O que é Alexa?",
        opcoes: [
            {texto: "Uma bola falante da Amazon", correta: true},
            {texto: "Um cachorro", correta: false},
            {texto: "Uma tia", correta: false}
        ]
    }
];

let indice = 0;
let pontos = 0;


function Iniciar() {
    document.getElementById("botaozinho").style.display = "none";
    mostrarPergunta();
}

function mostrarPergunta() {

    const quiz = document.getElementById("quiz");

    if (indice >= perguntas.length) {

        quiz.innerHTML = `
            <h2>Questionário Finalizado!</h2>
            <h3>Você acertou ${pontos} de ${perguntas.length} perguntas.</h3>
        `;

        return;
    }

    let html = `<h2>${perguntas[indice].pergunta}</h2>`;

    perguntas[indice].opcoes.forEach(opcao => {
        html += `
            <button onclick="responder(${opcao.correta})">
                ${opcao.texto}
            </button><br><br>
        `;
    });

    quiz.innerHTML = html;
}

function responder(correta) {

    if (correta) {
        pontos++;
        alert("Resposta correta!");
    } else {
        alert("Resposta incorreta!");
    }

    indice++;

    mostrarPergunta();
}

/*let pontos = 0;
let respostas = document.getElementById(respostas)

function começar(){
    document.getElementById("perguntas").innerHTML = "Questão 1. O que é Java Script?"

    document.getElementById("botoes").innerHTML = `
    <button onclick="resposta1('A')">É uma marca de tênis</button>
    <button onclick="resposta1('B')">Um computador</button>
    <button onclick="resposta1('C')">Uma linguagem da progamação</button>
`;
}

function começar2(){
    document.getElementById("perguntas").innerHTML = "Questão 2. O que é Python?"

    document.getElementById("botoes").innerHTML = `
    <button onclick="resposta2('A')">Uma cobra e uma linguagem da programação</button>
    <button onclick="resposta2('B')">Um pato</button>
    <button onclick="resposta2('C')">Um padre</button>
    `;
}

function começar3(){
    document.getElementById("perguntas").innerHTML = "Questão 3. O que é Lourdes?"

    document.getElementById("botoes").innerHTML = `
    <button onclick="resposta3('A')">Uma avó</button>
    <button onclick="resposta3('B')">Uma Alexa caipira</button>
    <button onclick="resposta3('C')">Uma capivara</button>
    `;
}

function começar4(){
    document.getElementById("perguntas").innerHTML = "Questão 4. O que é Alexa?"

    document.getElementById("botoes").innerHTML = `
    <button onclick="resposta4('A')">Uma bola falante da Amazon</button>
    <button onclick="resposta4('B')">Um cachorro</button>
    <button onclick="resposta4('C')">Uma tia</button>
  `;
}


function resposta1(opcao){
    if (opcao == 'C'){
        pontos++;
        alert("Parabéns, você acertou!")
        respostas.textContent = "Acertou!"
        document.body.style.backgroundColor = "green"
    }

    else{
    alert("Que pena, você errou!")
    respostas.textContent = "Errou!"
    document.body.style.backgroundColor = "red"
    }
}

function resposta2(opcao){
    if (opcao == 'A'){
        pontos++;
        alert("Parabéns, você acertou!")
        respostas.textContent = "Acertou!"
        document.body.style.backgroundColor = "green"
    }

    else{
    alert("Que pena, você errou!")
    respostas.textContent = "Errou!"
    document.body.style.backgroundColor = "red"
    }
}

function resposta3(opcao){
    if (opcao == 'B'){
        pontos++;
        alert("Parabéns, você acertou!")
        respostas.textContent =  "Acertou!"
        document.body.style.backgroundColor = "green"
    }

    else{
    alert("Que pena, você errou!")
    respostas.textContent = "Errou!"
    document.body.style.backgroundColor = "red"
    }
}

function resposta4(opcao){
    if (opcao == 'A'){
        pontos++;
        alert("Parabéns, você acertou!")
        respostas.textContent =  "Acertou!"
        document.body.style.backgroundColor = "green"
    }

    else{
    alert("Que pena, você errou!")
    respostas.textContent = "Errou!"
    document.body.style.backgroundColor = "red"
    }
}

*/