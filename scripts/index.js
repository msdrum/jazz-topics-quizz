// DOM MANIPULATION

//intanciando a classe
const game = new JazzTopics();

//capturando os elementos HTML
const screenContainer = document.getElementById("sc-container");
const inputName = document.getElementById("input-name");
const btnStart = document.getElementById("btn-start");
const quizScreenContainer = document.getElementById("qs-container");
const playerName = document.getElementById("name");
const firstQuestion = document.getElementById("first-question");
const awnserA = document.querySelector(".awnser-a");
const awnserB = document.querySelector(".awnser-b");
const awnserC = document.querySelector(".awnser-c");
const awnserD = document.querySelector(".awnser-d");

//adicionando o evento de clicar no botão JOGAR
btnStart.addEventListener("click", () => {
  //escondendo a tela inicial
  screenContainer.classList.add("hide");

  //mostrando a tela do jogo
  quizScreenContainer.className = "show";

  //recebendo o nome do jogador
  game.player = inputName.value; //enviando o nome do jogador para a class
  //colocando o nome do jogador no HTML
  playerName.innerText = game.player;
  //console.log(playerName.innerText);

  //setGame(); //iniciando a príxima tela
});

//function setGame() {}
