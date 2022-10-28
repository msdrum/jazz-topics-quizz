// DOM MANIPULATION

//intanciando a classe
const game = new JazzTopics();

//capturando os elementos HTML
const screenContainer = document.getElementById("sc-container");
const inputName = document.getElementById("input-name");
const btnStart = document.getElementById("btn-start");

//add event Listner no botão JOGAR
btnStart.addEventListener("click", () => {
  //hidding start screen
  screenContainer.classList.add("hide");

  //mostrar a segunda tela (quiz screen)

  //pegando o nome do jogador
  game.player = inputName.value; //enviando o nome do jogador para a class
  //console.log(inputName.value);
});
