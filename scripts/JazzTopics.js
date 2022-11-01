// CLASS
//import { allQuestions } from "./database";
// const allQuestions = require("./database");

class JazzTopics {
  constructor() {
    this.player = "";
    this.questions = [
      // {
      //   question: "Primeira pergunta teste!",
      //   awnser: "Primeira resposta correta!",
      //   options: [
      //     "resposta a",
      //     "Primeira resposta correta!",
      //     "resposta c",
      //     "resposta d",
      //   ],
      // },
      // {
      //   question: "Segunda pergunta teste!",
      //   awnser: "Segunda resposta correta!",
      //   options: [
      //     "resposta a",
      //     "resposta b",
      //     "resposta c",
      //     "Segunda resposta correta!",
      //   ],
      // },
      // {
      //   question: "Terceira pergunta teste!",
      //   awnser: "Terceira resposta correta!",
      //   options: [
      //     "resposta a",
      //     "resposta b",
      //     "Terceira resposta correta!",
      //     "resposta d",
      //   ],
      // },
      // {
      //   question: "Quarta pergunta teste!",
      //   awnser: "Quarta resposta correta!",
      //   options: [
      //     "Quarta resposta correta!",
      //     "resposta b",
      //     "resposta c",
      //     "resposta d",
      //   ],
      // },
      {
        question:
          "Em 1917 foi gravado o primeiro disco de jazz da história.O disco foi lançado pela gravadora Victor. Qual era o nome da banda que gravou esse disco?",
        awnser: "The Orginal Dixieland Jazz Band",
        options: [
          "The Orginal Dixieland Jazz Band",
          "The Original Creole Orchestra",
          "Louis Armstrong and his Hot Seven",
          "The Original Jazz Dixeland Orchestra",
        ],
      },
      {
        question:
          "Qual apelido Louis Arsmotrong recebeu, ainda na infância, e carregou durante toda a sua vida?",
        awnser: "Satchmo",
        options: ["Satchmo", "Scat Man", "Blues Man", "King of Swing"],
      },
      {
        question:
          "Em 1923, após assitir o concerto de um grande músico em Washington, Duke Ellington resolveu ir morar em Nova Iorque e tentar a vida como músico nesta cidade. Qual era o nome desse músico?",
        awnser: "Sidney Bechet",
        options: [
          "Sidney Bechet",
          "Louis Armstrong",
          "Benny Goodman",
          "King Oliver",
        ],
      },
      {
        question:
          "Louis Armstrong influenciou a música americana de diversas formas, uma delas foi a maneira que ele desenvolveu de cantar melodias, improvisando como se estivesse tocando o trompete. Qual o nome dado a esta técnica?",
        awnser: "Scat Singing",
        options: [
          "Scat Singing",
          "Melodine Singing",
          "Satchmo Singing",
          "Vocalize Singing",
        ],
      },
      {
        question:
          "O advento da Lei Sêca no EUA trouxe um grande mercado paralelo de clubes clandestinos, dentre esses clubes, havia um no Harlem administrado por gângsters que viria a abrigar a orquestra de Duke Ellington por muito tempo. No final de 1927, a rádio CBS passou a transmitir as apresentações ocorridas no local para todo os EUA. Qual era o nome desse clube? ",
        awnser: "Cotton Club",
        options: ["Cotton Club", "Roseland Club", "Savoy Club", "Palomar Club"],
      },
      {
        question:
          "Qual a estrutura harmônica básica de um blues de 12 compassos?",
        awnser: "I7, IV7 e V7",
        options: ["I7, IV7 e V7", "I, IV7 e V7", "I7, IV7 e V", "I, IV e V7"],
      },
      {
        question:
          "Louis Armstrong foi considerado o primeiro grande solista do jazz e isto se deve à sua maneira de construir o discurso de seu improviso baseado na ideia de construção de histórias. Ele e o pianista de seu grupo Earl Hines ficaram imortalizados por uma música gravada em 1928, chamada: ",
        awnser: "West End Blues",
        options: [
          "West End Blues",
          "Hines Blues",
          "What a Wonderful World",
          "Summertime",
        ],
      },
      {
        question:
          "Na década de 20, havia uma cantora que foi considerada a maior catora de blues do seu tempo.Ela possuia tempramento forte, viajava em seu próprio vagão de trem e trabalhou em um dos primeiros filmes sonoros que tinham em seu elenco atores negros.",
        awnser: "Bessie Smith",
        options: [
          "Bessie Smith",
          "Billie Holiday",
          "Aretha Franklin",
          "Ella Fitzgerald",
        ],
      },
      {
        question:
          "A década de 30 trouxe consigo um novo estilo de música feita para as big bands, ele se chamava Swing. O estilo teve vários representantes expressivos, mas um deles recebeu o apelido de 'O Rei do Swing'. Qual era o seu nome?",
        awnser: "Benny Goodman",
        options: [
          "Benny Goodman",
          "Duke Ellington",
          "Paul Whiteman",
          "Fletcher Henderson",
        ],
      },
      {
        question:
          "Take The 'A' Train é um grande clássico do jazz e foi composta por um dos maiores compositores da música americana, seu nome era:",
        awnser: "Duke Ellington",
        options: [
          "Duke Ellington",
          "Benny Goodman",
          "Coleman Hawkins",
          "Louis Armstrong",
        ],
      },
    ];
    this.round = 0;
    this.questChosen = [];
  }

  // //pegar as perguntas no documento database.js

  //capturar a array e randomizar o resultado de exposição:
  takeRandomQuests() {
    this.questions.sort(() => {
      return Math.random() - 0.5;
    });
    //pegando apenas o número de questões desejadas:
    this.questChosen = this.questions.slice(0, 5);
    console.log(this.questChosen);
  }

  startGame() {
    let question = document.getElementById("first-question");
    let allAwnsers = document.querySelectorAll(".awnser");
    // let reandomArray = this.takeRandomQuests(this.questions);
    // question.innerText = this.questions[this.round].question;
    question.innerText = this.questChosen[this.round].question;

    allAwnsers.forEach((btn, i) => {
      // btn.innerText = this.questions[this.round].options[i];
      btn.innerText = this.questChosen[this.round].options[i];
    });

    // console.log(allAwnsers);
  }

  nextQuestion() {
    this.round++;
    // console.log(this.round);
    let question = document.getElementById("first-question");
    let allAwnsers = document.querySelectorAll(".awnser");

    question.innerText = this.questChosen[this.round].question;

    allAwnsers.forEach((btn, i) => {
      btn.innerText = this.questChosen[this.round].options[i];
    });
    // this.startGame();
  }

  checkAwnser() {
    let allAwnsers = document.querySelectorAll(".awnser");

    allAwnsers.forEach((btn) => {
      // btn.addEventListener("click", () => {
      //   // console.log(btn.textContent);
      //   if (btn.textContent === this.questChosen[this.round].awnser) {
      //     console.log("você acertou!");
      //     this.nextQuestion();
      //   } else {
      //     console.log("Você errou");
      //   }
      // });
      btn.addEventListener("click", () => {
        // console.log(btn.textContent);
        if (
          btn.textContent === this.questChosen[this.round].awnser &&
          this.round === 4
        ) {
          console.log("VOCÊ GANHOU!!");
          this.winGame();
          // this.nextQuestion();
        }
        if (btn.textContent === this.questChosen[this.round].awnser) {
          console.log("você acertou!");
          this.nextQuestion();
        }
        if (btn.textContent !== this.questChosen[this.round].awnser) {
          console.log("você errou!");
          this.loseGame();
        } //else {
        //   console.log("Você Ganhou!");
        // }
      });
    });
    // return this.nextQuestion();
  }

  //setando a tela de derrota e chamando novamente o início do jogo
  loseGame() {
    const quizScreenContainer = document.getElementById("qs-container");
    const loseScreen = document.getElementById("final-screen-lose");
    let playAgain = document.querySelector("#bnt-final");

    quizScreenContainer.classList.add("hide");
    loseScreen.className = "show";

    playAgain.addEventListener("click", () => {
      console.log("clicado");

      loseScreen.classList.add("hide");
      quizScreenContainer.className = "show";
      this.round = 0;
      this.takeRandomQuests();
      this.startGame();
    });
  }

  winGame() {
    const quizScreenContainer = document.getElementById("qs-container");
    const winScreen = document.getElementById("final-screen-win");
    let playAgain = document.querySelector("#bnt-final-win");

    quizScreenContainer.classList.add("hide");
    winScreen.className = "show";

    playAgain.addEventListener("click", () => {
      console.log("clicado");

      winScreen.classList.add("hide");
      quizScreenContainer.className = "show";
      this.round = 0;
      this.takeRandomQuests();
      this.startGame();
    });
  }
}

//iterar pela lista de perguntas (allQuestions)  e escolher 10 perguntas para colocar no array this.question

//embaralhar a ordem das perguntas e a posição das respostas

//setar as perguntas na ordem escolhida

//adicionar o evento de click aos 4 botões existentes (respostas [A,B,C,D])

//checar cada resposta (primeira até a décima)

//caso a resposta esteja correta, seguir para a próxima pergunta ou, se a pergunta tiver sido a última, enviar para a tela FINAL WIN, e colocar o botão de JOGAR NOVAMENTE

//caso a pergunta esteja errada, enviar o jogador para a tela FINAL LOSE e colocar o botão de JOGAR NOVAMENTE
