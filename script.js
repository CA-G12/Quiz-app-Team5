const questions = [
  {
    question: "+true; '!Lydia'",
    choices: ["1 and false", "false and NaN", "false and false"],
    answer: "1 and false",
  },
  {
    question: "const sum = eval('10*10+5');",
    choices: ["105", "TypeError", "10*10+5"],
    answer: "105",
  },
  {
    question:
      "How long is cool_secret accessible?, sessionStorage.setItem('cool_secret', 123);",
    choices: [
      "Forever, the data doesn't get lost.",
      "When the user closes the tab.",
      "When the user closes the entire browser, not only the tab.",
      "When the user shuts off their computer.",
    ],
    answer: "When the user closes the tab.",
  },
  {
    question: "var num = 8; var num = 10; console.log(num);",
    choices: ["8", "10", "SyntaxError", "ReferenceError"],
    answer: "10",
  },
  {
    question:
      "const obj = { a: 'one', b: 'two', a: 'three' }; console.log(obj);",
    choices: [
      '{ a: "one", b: "two" }',
      '{ b: "two", a: "three" }',
      '{ a: "three", b: "two" }',
      "SyntaxError",
    ],
    answer: '{ a: "three", b: "two" }',
  },
  {
    question:
      'The JavaScript global execution context creates two things for you: the global object, and the "this" keyword.',
    choices: ["true", "false", "it depends"],
    answer: "true",
  },
  {
    question: "console.log(typeof typeof 1);",
    choices: ["number", "string", "object", "undefined"],
    answer: "string",
  },
  {
    question: "Everything in JavaScript is either a...",
    choices: [
      "primitive or object",
      "function or object",
      "trick question! only objects",
      "number or object",
    ],
    answer: "primitive or object",
  },
  {
    question: "!!null; !!''; !!1;",
    choices: [
      "false true false",
      "false false true",
      "false true true",
      "true true false",
    ],
    answer: "false false true",
  },
  {
    question: "What does this return? [...'Lydia'];",
    choices: [
      '["L", "y", "d", "i", "a"]',
      '["Lydia"]',
      '[[], "Lydia"]',
      '[["L", "y", "d", "i", "a"]]',
    ],
    answer: '["L", "y", "d", "i", "a"]',
  },
  {
    question: "console.log(3 + 4 + '5');",
    choices: ['"345"', "75", "12", '"12"'],
    answer: "75",
  },
  {
    question: "const num = parseInt('7*6', 10);",
    choices: ["42", '"42', "7", "NaN"],
    answer: "7",
  },
];
const questionsSection = document.querySelector(".questions-section");
//? This function is responsible for generating a random question

function randomQuestion() {
  const randomNum = parseInt(Math.random() * (questions.length - 1));
  const div = generatorQuestion(questions[randomNum]);
  questionsSection.appendChild(div);
}

//? This function is responsible for creating an html elements

function generatorQuestion(obj) {
  const div = document.createElement("div");
  const question = document.createElement("p");
  question.textContent = obj.question;
  questionsSection.appendChild(question);

  obj.choices.forEach((e) => {
    const wrapper = document.createElement("div");
    const radio = document.createElement("input");
    const label = document.createElement("label");
    radio.setAttribute("type", "radio");
    radio.setAttribute("value", e);
    radio.setAttribute("name", "answer");
    radio.setAttribute("choice", "");
    label.textContent = e;
    wrapper.appendChild(radio);
    wrapper.appendChild(label);
    div.appendChild(wrapper);
  });

  return div;
}

// adding click event on the next button to let the user generate a question

const progress = document.querySelector(".progress");
const resultSection = document.querySelector(".show-score");
const root = document.querySelector(".root");

let counter = 1;
const nextQuestionBtn = document.querySelector(".btn");

let correctAnswer = 0;
nextQuestionBtn.addEventListener("click", () => {
  //! check the correct answer
  const choices = document.querySelectorAll("[choice]");
  choices.forEach((e) => {
    if (e.checked) {
      if (`${e.value}` === questions[counter - 1].answer) {
        correctAnswer++;
      }
    }
  });

  //! generate new question
  questionsSection.textContent = "";
  if (counter <= questions.length - 1) {
    progress.textContent = `${counter + 1} / ${questions.length}`;

    questionsSection.appendChild(generatorQuestion(questions[counter]));
    counter++;
  } else {
    const playerScore = document.querySelector(".player-score");
    playerScore.textContent = ` your score is ${correctAnswer} / ${questions.length}`;
    root.classList.add("hide");
    resultSection.classList.remove("hide");
  }
});

// -----------------------  Start About Start Event -----------------------
const popUp = document.querySelector(".overlay");
const startButton = document.querySelector(".start-btn");
const inputName = document.querySelector(".name");
const playerNameDiv = document.querySelector(".player-name");

function startEvent() {
  startButton.addEventListener("click", function (event) {
    event.preventDefault();
    popUp.classList.add("hide");
    playerNameDiv.textContent = "player name : " + inputName.value;
    window.localStorage.setItem("name", inputName.value);
  });
  //! show the first question
  progress.textContent = `1 / ${questions.length}`;
  const div = generatorQuestion(questions[0]);
  questionsSection.appendChild(div);
}
startEvent();

// -----------------------  End About Start Event -----------------------
