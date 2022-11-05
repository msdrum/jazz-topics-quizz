// CLASS
// import jazzQuestions from "./database";
// const jazzQuestions = require("./database");

class JazzTopics {
  constructor() {
    this.player = "";
    this.questions = [
      {
        question:
          "Em 1917 foi gravado o primeiro disco de jazz da história. O disco foi lançado pela gravadora Victor. Qual era o nome da banda que gravou esse disco?",
        awnser: "The Orginal Dixieland Jazz Band",
        options: [
          "The Original Creole Orchestra",
          "Louis Armstrong and his Hot Seven",
          "The Orginal Dixieland Jazz Band",
          "The Original Jazz Dixeland Orchestra",
        ],
      },
      {
        question:
          "Qual apelido Louis Arsmotrong recebeu, ainda na infância, e carregou durante toda a sua vida?",
        awnser: "Satchmo",
        options: ["Scat Man", "Blues Man", "King of Swing", "Satchmo"],
      },
      {
        question:
          "Em 1923, após assitir o concerto de um grande músico em Washington, Duke Ellington resolveu ir morar em Nova Iorque e tentar a vida como músico nesta cidade. Qual era o nome desse músico?",
        awnser: "Sidney Bechet",
        options: [
          "Benny Goodman",
          "Sidney Bechet",
          "Louis Armstrong",
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
        options: ["Palomar Club", "Cotton Club", "Roseland Club", "Savoy Club"],
      },
      {
        question:
          "Qual a estrutura harmônica básica de um blues de 12 compassos?",
        awnser: "I7, IV7 e V7",
        options: ["I7, IV7 e V", "I, IV7 e V7", "I7, IV7 e V7", "I, IV e V7"],
      },
      {
        question:
          "Louis Armstrong foi considerado o primeiro grande solista do jazz e isto se deve à sua maneira de construir o discurso de seu improviso baseado na ideia de construção de histórias. Ele e o pianista de seu grupo Earl Hines ficaram imortalizados por uma música gravada em 1928, chamada: ",
        awnser: "West End Blues",
        options: [
          "Hines Blues",
          "What a Wonderful World",
          "West End Blues",
          "Summertime",
        ],
      },
      {
        question:
          "Na década de 20, havia uma cantora que foi considerada a maior cantora de blues do seu tempo.Ela possuia temperamento forte, viajava em seu próprio vagão de trem e trabalhou em um dos primeiros filmes sonoros que tinham em seu elenco atores negros. Qual era o seu nome?",
        awnser: "Bessie Smith",
        options: [
          "Billie Holiday",
          "Bessie Smith",
          "Aretha Franklin",
          "Ella Fitzgerald",
        ],
      },
      {
        question:
          "A década de 30 trouxe consigo um novo estilo de música feita para as big bands, ele se chamava Swing. O estilo teve vários representantes expressivos, mas um deles recebeu o apelido de 'O Rei do Swing'. Qual era o seu nome?",
        awnser: "Benny Goodman",
        options: [
          "Paul Whiteman",
          "Benny Goodman",
          "Duke Ellington",
          "Fletcher Henderson",
        ],
      },
      {
        question:
          "Qual baterista gravou o icônico disco 'A Love Supreme' do John Coltrane?",
        awnser: "Elvin Jones",
        options: [
          "Art Blakey",
          "Kenny Clarke",
          "Philly Joe Jones",
          "Elvin Jones",
        ],
      },
      {
        question:
          "Qual o nome do disco de Miles Davis que ficou conhecido como o álbum mais vendido do jazz?",
        awnser: "Kind of Blue",
        options: [
          "Birth Of The Cool",
          "Kind of Blue",
          "Round About Midnight",
          "Bitches Brew",
        ],
      },
      {
        question:
          "Qual estilo do jazz teve como precursores os músicos Charlie Parker e Dizzy Gillespie?",
        awnser: "Bebop",
        options: ["Bebop", "Swing", "Cool Jazz", "Free Jazz"],
      },
      {
        question: "Qual o compositor da música 'Straight No Chaser'?",
        awnser: "Thelonius Monk",
        options: [
          "Thelonius Monk",
          "John Coltrane",
          "Miles Davis",
          "Duke Ellington",
        ],
      },
      {
        question:
          "A primeira gravação em estúdio de Thelonius Monk foi como pianista do grupo de:",
        awnser: "Coleman Hawkins",
        options: [
          "Dizzy Gillespie",
          "John Coltrane",
          "Coleman Hawkins",
          "Charlie Parker",
        ],
      },
      {
        question:
          "Take The 'A' Train é um grande clássico do jazz e foi composta por um dos maiores compositores da música americana, seu nome era:",
        awnser: "Duke Ellington",
        options: [
          "Benny Goodman",
          "Coleman Hawkins",
          "Louis Armstrong",
          "Duke Ellington",
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
    let questionNumber = document.querySelector(".question-number");
    let question = document.getElementById("first-question");
    let allAwnsers = document.querySelectorAll(".awnser");

    questionNumber.innerText = `${this.round + 1}.`;
    question.innerText = this.questChosen[this.round].question;
    allAwnsers.forEach((btn, i) => {
      btn.innerText = this.questChosen[this.round].options[i];
    });

    // console.log(allAwnsers);
  }

  nextQuestion() {
    this.round++;
    // console.log(this.round);
    let questionNumber = document.querySelector(".question-number");
    let question = document.getElementById("first-question");
    let allAwnsers = document.querySelectorAll(".awnser");

    questionNumber.innerText = `${this.round + 1}.`;
    question.innerText = this.questChosen[this.round].question;

    allAwnsers.forEach((btn, i) => {
      btn.innerText = this.questChosen[this.round].options[i];
    });
  }

  checkAwnser() {
    let allAwnsers = document.querySelectorAll(".awnser");

    allAwnsers.forEach((btn) => {
      btn.addEventListener("click", () => {
        // console.log(btn.textContent);
        if (btn.textContent === this.questChosen[4].awnser) {
          console.log("VOCÊ GANHOU!!");
          this.winGame();
        }
        if (btn.textContent === this.questChosen[this.round].awnser) {
          console.log("você acertou!");
          this.nextQuestion();
        } else {
          console.log("você errou!");
          this.loseGame();
        }
      });
    });
  }

  //setando a tela de derrota e a opção de tentar jogar novamente
  loseGame() {
    const loserName = document.querySelector(".loser-name");
    const screenContainer = document.getElementById("sc-container");
    const quizScreenContainer = document.getElementById("qs-container");
    const loseScreen = document.getElementById("final-screen-lose");
    let playAgain = document.querySelector("#bnt-final");
    let quitGame = document.querySelector("#init-screen");

    quizScreenContainer.classList.add("hide");
    loseScreen.className = "show";

    loserName.innerText = this.player;

    playAgain.addEventListener("click", () => {
      console.log("clicado");

      loseScreen.classList.add("hide");
      quizScreenContainer.className = "show";
      this.round = 0;
      this.takeRandomQuests();
      this.startGame();
    });

    quitGame.addEventListener("click", () => {
      loseScreen.classList.add("hide");
      screenContainer.className = "show";
      this.round = 0;
      this.takeRandomQuests();
      this.startGame();
    });
  }

  //setando a tela de vitória e a opção de tentar jogar novamente
  winGame() {
    const winName = document.querySelector(".win-name");
    const screenContainer = document.getElementById("sc-container");
    const quizScreenContainer = document.getElementById("qs-container");
    const winScreen = document.getElementById("final-screen-win");
    let playAgain = document.querySelector("#bnt-final-win");
    let quitGame = document.querySelector("#inicial-screen");

    quizScreenContainer.classList.add("hide");
    winScreen.className = "show";

    winName.innerText = this.player;

    playAgain.addEventListener("click", () => {
      console.log("clicado");

      winScreen.classList.add("hide");
      quizScreenContainer.className = "show";
      this.round = 0;
      this.takeRandomQuests();
      this.startGame();
    });

    quitGame.addEventListener("click", () => {
      winScreen.classList.add("hide");
      screenContainer.className = "show";
      this.round = 0;
      this.takeRandomQuests();
      this.startGame();
    });
  }
}
