// CLASS
//import { allQuestions } from "./database";
// const allQuestions = require("./database");

class JazzTopics {
  constructor() {
    this.player = "";
    this.questions = [
      {
        question: "Primeira pergunta teste!",
        awnser: "Primeira resposta correta!",
        options: [
          "resposta a",
          "Primeira resposta correta!",
          "resposta c",
          "resposta d",
        ],
      },
      {
        question: "Segunda pergunta teste!",
        awnser: "Segunda resposta correta!",
        options: [
          "resposta a",
          "resposta b",
          "resposta c",
          "Segunda resposta correta!",
        ],
      },
      {
        question: "Terceira pergunta teste!",
        awnser: "Terceira resposta correta!",
        options: [
          "resposta a",
          "resposta b",
          "Terceira resposta correta!",
          "resposta d",
        ],
      },
      {
        question: "Quarta pergunta teste!",
        awnser: "Quarta resposta correta!",
        options: [
          "Quarta resposta correta!",
          "resposta b",
          "resposta c",
          "resposta d",
        ],
      },
    ];
    this.round = 0;
  }

  // //pegar as perguntas no documento database.js

  //capturar a array e randomizar o resultado de exposição:
  // takeRandomQuests() {
  //   // let randomArray = this.questions;
  //   let questsChosen = [];
  //   //console.log(randomArray);
  //   //embaralhando a ordem das perguntas:
  //   // randomArray.sort(() => {
  //   //   return Math.random() - 0.5;
  //   // });

  //   this.questions.sort(() => {
  //     return Math.random() - 0.5;
  //   });
  //   //pegando apenas o número de questões desejadas:
  //   return (questsChosen = this.questions.splice(0, 2));
  //   // console.log((questChosen = this.questions.splice(0, 2)));
  // }

  // firstQuestion() {
  //   let chosenArr = takeRandomQuests(this.questions); //pega o array todo de perguntas selecionadas
  //   let firstAwnser = chosenArr[0]; //pega só a primeira questão selecionada de dentro do array selecionado
  //   let awnserOptions = firstAwnser.options; //recebe o array de respostas da primeira pergunta

  //   // console.log(awnserOptions)
  //   //embaralha o array de respostas da primeira questão
  //   awnserOptions.sort(() => {
  //     return Math.random() - 0.5;
  //   });
  //   //console.log(chosenArr);
  //   //console.log(firstAwnser);
  //   //console.log(awnserOptions);
  //   return awnserOptions;
  // }

  startGame() {
    let question = document.getElementById("first-question");
    let allAwnsers = document.querySelectorAll(".awnser");

    question.innerText = this.questions[this.round].question;

    // console.log(allAwnsers);

    allAwnsers.forEach((btn, i) => {
      console.log(this.questions.options);
      btn.innerText = this.questions[this.round].options[i];
      btn.addEventListener("click", () => {
        // console.log(btn.textContent);
        if (btn.textContent === this.questions[this.round].awnser) {
          console.log("você acertou!");
          return this.nextQuestion();
        }
      });
    });
  }

  nextQuestion() {
    this.round++;
    // console.log(this.round);
    this.startGame();
  }
}

//iterar pela lista de perguntas (allQuestions)  e escolher 10 perguntas para colocar no array this.question

//embaralhar a ordem das perguntas e a posição das respostas

//setar as perguntas na ordem escolhida

//adicionar o evento de click aos 4 botões existentes (respostas [A,B,C,D])

//checar cada resposta (primeira até a décima)

//caso a resposta esteja correta, seguir para a próxima pergunta ou, se a pergunta tiver sido a última, enviar para a tela FINAL WIN, e colocar o botão de JOGAR NOVAMENTE

//caso a pergunta esteja errada, enviar o jogador para a tela FINAL LOSE e colocar o botão de JOGAR NOVAMENTE
