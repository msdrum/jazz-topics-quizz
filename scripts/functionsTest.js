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

//opção de array apenas de objetos:
// const array = [
//   {
//     question: "Primeira pergunta teste!",
//     awnser: "Primeira resposta correta!",
//     options: {
//       r1: "a",
//       r2: "b",
//       correta: "Primeira resposta correta!",
//       r3: "d",
//     },
//   },

//   {
//     question: "Segunda pergunta teste!",
//     awnser: "Segunda resposta correta!",
//     options: {
//       r1: "a",
//       r2: "b",
//       correta: "Segunda resposta correta!",
//       r3: "d",
//     },
//   },

//   {
//     question: "Terceira pergunta teste!",
//     awnser: "Terceira resposta correta!",
//     options: {
//       r1: "a",
//       r2: "b",
//       correta: "Terceira resposta correta!",
//       r3: "d",
//     },
//   },

//   {
//     question: "Quarta pergunta teste!",
//     awnser: "Quarta resposta correta!",
//     options: {
//       r1: "a",
//       r2: "b",
//       correta: "Quarta resposta correta!",
//       r3: "d",
//     },
//   },
// ];

//console.log(array);

//pegar as perguntas no documento database.js
// function pegarArray(array) {
//   let quest = [];

//   quest = array;
// }

// pegarArray(array);

//console.log(quest)

//capturar a array e randomizar o resultado de exposição:
function takeRandomQuests(quests) {
  let randomArray = quests;
  let questChosen = [];
  //console.log(randomArray);
  //embaralhando a ordem das perguntas:
  randomArray.sort(() => {
    return Math.random() - 0.5;
  });
  //pegando apenas o número de questões desejadas:
  return (questChosen = randomArray.splice(0, 2));
  // console.log((questChosen = randomArray.splice(0, 2)));
}
//chamando a função  takeRandomQuests():
takeRandomQuests(array);

//embaralhando as respostas da primeira questão:
function firstQuestion(array) {
  let firstArr = takeRandomQuests(array); //pega o array todo de perguntas selecionadas
  let firstAwnser = firstArr[0]; //pega só a primeira questão selecionada de dentro do array selecionado
  let questions = firstAwnser.options; //recebe o array de respostas da primeira pergunta

  // console.log(questions)
  //embaralha o array de respostas da primeira questão
  questions.sort(() => {
    return Math.random() - 0.5;
  });
  //console.log(firstArr);
  // console.log(firstAwnser);
  console.log(questions);
  // return questions
}

firstQuestion(array);
