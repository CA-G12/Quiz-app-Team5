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
