// consts and vars
const question = document.getElementById("question");
const choices = Array.from(document.getElementsByClassName("choice-text"));
const progressText = document.getElementById("progressText");
const scoreText = document.getElementById("score");
const progressBarFull = document.getElementById("progressBarFull");
let currentQuestion = {};
let acceptingAnswers = false;
let score = 0;
let questionCounter = 0;
let availableQuesions = [];

// List of questions
// Line 278 chooses a random question to display from this set.
let questions = [{
    question: "What is the name of Arya's sword?",
    choice1: "Oathkeeper",
    choice2: "Needle",
    choice3: "Nymeria",
    choice4: "Stoneheart",
    answer: 2
  },
  {
    question: "Ramsay's torture-loving girlfriend's name is ...",
    choice1: "Myranda",
    choice2: "Melisandre",
    choice3: "Melania",
    choice4: "Morticia",
    answer: 1
  },
  {
    question: "What is Lysa Arryn's son's name?",
    choice1: "Robert",
    choice2: "Royce",
    choice3: "Roose",
    choice4: "Robin",
    answer: 4
  },
  {
    question: "In what episode did Jon fight off White Walkers and witness the dead Wildlings coming back to life ?",
    choice1: "Hardhome",
    choice2: "The Gift",
    choice3: "Sons of the Harpy",
    choice4: "Heart and Home",
    answer: 1
  },
  {
    question: "In season 1, who does Tywin temporarily name Hand of the King?",
    choice1: "Cersei",
    choice2: "Jamie",
    choice3: "Tyrion",
    choice4: "Joffrey",
    answer: 3
  },
  {
    question: "Oberyn went to King's Landing seeking revenge for who?",
    choice1: "His sister",
    choice2: "His brother",
    choice3: "His best friend",
    choice4: "His father",
    answer: 1
  },
  {
    question: "Which of Dany's dragons is the largest?",
    choice1: "Dracarys",
    choice2: "Viserion",
    choice3: "Rhaegal",
    choice4: "Drogon",
    answer: 4
  },
  {
    question: "What does 'Valar Morghulis' mean?",
    choice1: "All men must serve",
    choice2: "Dead is not death",
    choice3: "All men must die",
    choice4: "Trust this man",
    answer: 3
  },
  {
    question: "Melisandre comes from which city?",
    choice1: "Asshai",
    choice2: "Meereen",
    choice3: "Braavos",
    choice4: "Pentos",
    answer: 1
  },
  {
    question: "Which of these people are NOT on Arya's kill list?",
    choice1: "Polliver",
    choice2: "Sir Ilyn Payne",
    choice3: "Ser Meryn Trant",
    choice4: "Ser Dontos",
    answer: 4
  },
  {
    question: "Which character threatened to eat all the chickens?",
    choice1: "Arya Stark",
    choice2: "Gregor Clegane",
    choice3: "Sandor Clegane",
    choice4: "Joffrey",
    answer: 3
  },
  {
    question: "Who did Joffrey kill in the bedroom with his bow?",
    choice1: "Ros",
    choice2: "Shae",
    choice3: "Rosalynna",
    choice4: "Talisa",
    answer: 1
  },
  {
    question: "Ser Davos Seaworth is also known as ...",
    choice1: "The Oyster Fighter",
    choice2: "The Pepper's Hand",
    choice3: "The Onion Night",
    choice4: "The Shallot Man",
    answer: 3
  },
  {
    question: "Which real life band had a cameo in the Purple Wedding scene?",
    choice1: "Arcade Fire",
    choice2: "Sigur Rós",
    choice3: "Of Monsters and Men",
    choice4: "Edward Sharpe and the Magnetic Zeros",
    answer: 2
  },
  {
    question: "Who did Dany burn alive at Drogo's funeral pyre?",
    choice1: "Pyatt Pree",
    choice2: "Lhazareen",
    choice3: "Mirri Maz Duur",
    choice4: "Myrcelle Lubaz",
    answer: 3
  },
  {
    question: "Which character was forced to drink horse urine?",
    choice1: "Jamie",
    choice2: "Tyrion",
    choice3: "Sansa",
    choice4: "Ned",
    answer: 1
  },
  {
    question: "The season 4 finale aired on what real life holiday?",
    choice1: "Valentine's Day",
    choice2: "Veteran's Day",
    choice3: "Flag Day",
    choice4: "Father's Day",
    answer: 4
  },
  {
    question: "Who are the two show runners and creators of the Game of Thrones TV show?",
    choice1: "D.B. Weiss and George R. R. Martin",
    choice2: "George R. R. Martin and Robert Kirkman",
    choice3: "Robert Kirkman and David Benioff",
    choice4: "David Benioff and D.B. Weiss",
    answer: 4
  },
  {
    question: "Who cut off Jaime Lannister's hand?",
    choice1: "Locke",
    choice2: "Roose Bolton",
    choice3: "Rikard Karstark",
    choice4: "Vargo Hoat",
    answer: 1
  },
  {
    question: "Which of these direwolves died first?",
    choice1: "Summer",
    choice2: "Lady",
    choice3: "Shaggydog",
    choice4: "Grey Wind",
    answer: 2
  },
  {
    question: "Who of the following is NOT Cersie's child?",
    choice1: "Joffery",
    choice2: "Myrcella",
    choice3: "Rickon",
    choice4: "Tommen",
    answer: 3
  },
  {
    question: "What was Robb Stark's direwolf's name?",
    choice1: "Summer",
    choice2: "Ghost",
    choice3: "Grey Wind",
    choice4: "Shaggydog",
    answer: 3
  },
  {
    question: "Which bird is the sigil of House Arryn?",
    choice1: "Hawk",
    choice2: "Eagle",
    choice3: "Falcon",
    choice4: "Raven",
    answer: 3
  },
  {
    question: "Which of these places has Daenerys Targaryen never been to?",
    choice1: "Qarth",
    choice2: "Meereen",
    choice3: "Mantarys",
    choice4: "Astapor",
    answer: 3
  },
  {
    question: "Who is the leigh lord of Samwell Tarly's father Randyll Tarly?",
    choice1: "Robb Stark",
    choice2: "Tywin Lannister",
    choice3: "Mace Tyrell",
    choice4: "Oberyn Martell",
    answer: 3
  },
  {
    question: "Which of these identities has Arya Stark never taken?",
    choice1: "Arry",
    choice2: "Weasel",
    choice3: "Jane",
    choice4: "Beth",
    answer: 3
  },
  {
    question: "Daenerys Targaryen has three dragons: Drogon, Viserion and ...",
    choice1: "Rhaegal",
    choice2: "Rhaegar",
    choice3: "Rhaegor",
    choice4: "Rhaegon",
    answer: 1
  },
  {
    question: "What is Hodor's real name?",
    choice1: "Collin",
    choice2: "Doran",
    choice3: "Willem",
    choice4: "Walder",
    answer: 4
  },
  {
    question: "Which of these is not an island in Westeros?",
    choice1: "Sunspear",
    choice2: "Skagos",
    choice3: "Dragonstone",
    choice4: "Tarth",
    answer: 1
  },
  {
    question: "Which of these Stronghold was the seat of Night's King?",
    choice1: "The Shadow Tower",
    choice2: "The Nightfort",
    choice3: "Castle Black",
    choice4: "Oakenshield",
    answer: 2
  }
];

// CONSTANTS
const CORRECT_BONUS = 1;
const MAX_QUESTIONS = 10;

// main function
// make sure to call it at the end of this file.
startGame = () => {
  questionCounter = 0;
  score = 0;
  availableQuesions = [...questions]; //copies the set  `questions` to `availableQuestions`
  getNewQuestion(); //picks a random question from `avaiableQuestions`
};

getNewQuestion = () => {
  // if there are no items in `availableQuesions` OR the `questionCounter` becomes greater tha the MAX_QUESTIONS/
  if (availableQuesions.length === 0 || questionCounter >= MAX_QUESTIONS) {
    // then:
    // set the highscore into local storage as a kv pair of 
    // ```id:mostRecentScore val: score```.
    // TODO: Move this to a database instead of local storage
    localStorage.setItem("mostRecentScore", score);
    // redirect user to the end page.
    return window.location.assign("/end.html");
  }
  questionCounter++;
  // Update the question counter on the screen
  progressText.innerText = `Question ${questionCounter}/${MAX_QUESTIONS}`;
  // Update the progress bar
  progressBarFull.style.width = `${(questionCounter / MAX_QUESTIONS) * 100}%`;

  // pick a random question
  const questionIndex = Math.floor(Math.random() * availableQuesions.length);
  currentQuestion = availableQuesions[questionIndex]; // remove the selected question from `availableQuestions` so it isnt repeated.
  question.innerText = currentQuestion.question;

  // Display choices of that question. 
  choices.forEach(choice => {
    const number = choice.dataset["number"];
    choice.innerText = currentQuestion["choice" + number];
  });

  availableQuesions.splice(questionIndex, 1);
  acceptingAnswers = true; // we need to use this to give a 1 second delay to user after he clicks an option.
};

choices.forEach(choice => {
  // click event handler 
  choice.addEventListener("click", e => {
    if (!acceptingAnswers) return; // if this is false it meand we need to wait 1 sec

    acceptingAnswers = false; // set to false to wait 1 sec. 
    const selectedChoice = e.target; // e.target returns the element i.e. choice that was clicked.
    const selectedAnswer = selectedChoice.dataset["number"]; // find the number of choice i.e. choice1, choice2 ... chioce4

    const classToApply =
      selectedAnswer == currentQuestion.answer ? "correct" : "incorrect"; // ternary operator.

    if (classToApply === "correct") {
      incrementScore(CORRECT_BONUS);
    }

    // adds a correct class to the choice element so that it turns into green bg to indicate it is correct answer.
    selectedChoice.parentElement.classList.add(classToApply);

    // this functiones defines a 1000ms == 1sec timeout
    setTimeout(() => {
      // adds a correct class to the choice element so that it turns into red bg to indicate it is wrong answer.
      selectedChoice.parentElement.classList.remove(classToApply);
      getNewQuestion();
    }, 1000);
  });
});

incrementScore = num => {
  score += num;
  scoreText.innerText = score;
};

startGame();