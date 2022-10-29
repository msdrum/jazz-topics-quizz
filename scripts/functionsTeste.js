//Teste das funçÕes

const array = [
  {
    question: "Primeira pergunta teste!",
    awnser: "Primeira resposta correta!",
    options: ["resposta a", "resposta b", "resposta c", "resposta d"],
  },
  {
    question: "Segunda pergunta teste!",
    awnser: "Segunda resposta correta!",
    options: ["resposta a", "resposta b", "resposta c", "resposta d"],
  },
  {
    question: "Terceira pergunta teste!",
    awnser: "Terceira resposta correta!",
    options: ["resposta a", "resposta b", "resposta c", "resposta d"],
  },
];

//console.log(array);

//pegar as perguntas no documento database.js
// function pegarArray(array) {
//   let quest = [];

//   quest = array;
// }

// pegarArray(array);

//console.log(quest)

//capturar a array e randomizar o resultado de exposição
function randomQuests(quests) {
  let randomArray = quests;
  let questChosen = [];
  //console.log(randomArray);
  randomArray.sort(() => {
    return Math.random() - 0.5;
  });

  //pegando apenas o número de questões desejadas
  questChosen = randomArray.splice(0, 2);

  console.log(questChosen);
}

randomQuests(array);
