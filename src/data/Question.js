export const Question = [
  {
    id: 1,
    question: 'Inside which HTML element do we put the JavaScript?',
    options: [
      {
        title: '<script>',
        correct: true,
      },
      {
        title: '<scripting>',
        correct: false,
      },
      {
        title: 'js',
        correct: false,
      },
      {
        title: 'javascript',
        correct: false,
      },
    ],
  },
  {
    id: 2,
    question: 'What is the correct JavaScript syntax to change the content of the HTML element below? <p id="demo">This is a demonstration.</p>',
    options: [
      {
        title: '#demo.innerHTML = "Hello World" ',
        correct: false,
      },
      {
        title: 'document.getElement("p").innerHTML = "Hello World"',
        correct: false,
      },
      {
        title: 'document.getElementById("demo").innerHTML = "Hello World"',
        correct: true,
      },
      {
        title: 'document.getElementByName("demo").innerHTML = "Hello World',
        correct: false,
      },
    ],
  },
  {
    id: 3,
    question: 'Where is the correct place to insert a JavaScript?',
    options: [
      {
        title: 'The <head> section',
        correct: false,
      },
      {
        title: 'The <body> section',
        correct: false,
      },
      {
        title: 'Both the <head> section and the <body> section are correct',
        correct: true,
      },
      {
        title: 'None at Above',
        correct: false,
      },
    ],
  },
  {
    id: 4,
    question: 'What is the correct syntax for referring to an external script called "xxx.js"?',
    options: [
      {
        title: '<script src="xxx.js"',
        correct: true,
      },
      {
        title: '<script href="xxx.js"',
        correct: false,
      },
      {
        title: '<script name="xxx.js"',
        correct: false,
      },
      {
        title: '<script id="xxx.js"',
        correct: false,
      },
    ],
  },
  {
    id: 5,
    question: 'How do you write "Hello World" in an alert box?',
    options: [
      {
        title: 'msgBox("Hello World")',
        correct: false,
      },
      {
        title: 'alert("Hello World")',
        correct: true,
      },
      {
        title: 'alertBox("Hello World")',
        correct: false,
      },
      {
        title: 'msg("Hello World")',
        correct: false,
      },
    ],
  },
];

const shuffle = (array) => {
  for (let i = array.length - 1; i >= 0; i--) {
    const randomIndex = Math.floor(Math.random() * (i + 1));
    array.push(array[randomIndex]);
    array.splice(randomIndex, 1);
  }
  return array;
};

shuffle(Question);
