//Teste das funçÕes

const array = [
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
];

//console.log(array);

//pegar as perguntas no documento database.js
// function pegarArray(array) {
//   let quest = [];

//   quest = array;
// }

// pegarArray(array);

//console.log(quest)

//capturar a array e randomizar o resultado de exposição:
function randomQuests(quests) {
  let randomArray = quests;
  let questChosen = [];
  //console.log(randomArray);
  //embaralhando a ordem das perguntas:
  randomArray.sort(() => {
    return Math.random() - 0.5;
  });
  //pegando apenas o número de questões desejadas:
  return (questChosen = randomArray.splice(0, 2));
  //console.log(questChosen);
}
//chamando a função  randomQuests():
//randomQuests(array);

function splitAwnsers(quests) {
  let temporary = [];
  let setQuest = [];
  //pegando o resultado da função randomQuests (acima) e colocando na variável temporary:
  temporary = randomQuests(quests);
  //console.log(temporary);
  //pegando dentro do array de questões apenas o array de opções de resposta:
  temporary.forEach((element) => {
    setQuest.push(element.options);
  });
  //return setQuest;
  console.log(setQuest);
}

splitAwnsers(array);
