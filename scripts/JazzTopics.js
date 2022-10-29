// CLASS
//import { allQuestions } from "./database";
// const allQuestions = require("./database");

class JazzTopics {
  constructor() {
    this.player = "";
    this.questions = [];
  }

  // //pegar as perguntas no documento database.js
  // takeQuestions() {
  //   allQuestions.forEach((element) => {
  //     this.questions.push(element);
  //   });
  //   console.log(this.questions);
  // }

  // randomQuests() {
  //   this.questions.sort(() => {
  //     return Math.random() - 0.5;
  //   });
  //   console.log(this.questions);
  // }
}

//iterar pela lista de perguntas (allQuestions)  e escolher 10 perguntas para colocar no array this.question

//embaralhar a ordem das perguntas e a posição das respostas

//setar as perguntas na ordem escolhida

//adicionar o evento de click aos 4 botões existentes (respostas [A,B,C,D])

//checar cada resposta (primeira até a décima)

//caso a resposta esteja correta, seguir para a próxima pergunta ou, se a pergunta tiver sido a última, enviar para a tela FINAL WIN, e colocar o botão de JOGAR NOVAMENTE

//caso a pergunta esteja errada, enviar o jogador para a tela FINAL LOSE e colocar o botão de JOGAR NOVAMENTE
