const NUMBER_OF_QUESTIONS_DISPLAYED = 3

let questions = [];


//questions from https://opentdb.com/
testBank = [
    {
    "category": "Science & Nature",
    "type": "boolean",
    "difficulty": "medium",
    "question": "The Neanderthals were a direct ancestor of modern humans.",
    "correct_answer": "False",
    "incorrect_answers": [
    "True"
    ]
    },
    {
    "category": "Mythology",
    "type": "boolean",
    "difficulty": "easy",
    "question": "In Norse mythology, Thor once dressed as a woman.",
    "correct_answer": "True",
    "incorrect_answers": [
    "False"
    ]
    },
    {
    "category": "Science: Computers",
    "type": "boolean",
    "difficulty": "medium",
    "question": "&quot;Windows NT&quot; is a monolithic kernel.",
    "correct_answer": "False",
    "incorrect_answers": [
    "True"
    ]
    },
    {
    "category": "Science: Computers",
    "type": "boolean",
    "difficulty": "easy",
    "question": "RAM stands for Random Access Memory.",
    "correct_answer": "True",
    "incorrect_answers": [
    "False"
    ]
    },
    {
    "category": "Geography",
    "type": "boolean",
    "difficulty": "medium",
    "question": "Gothenburg is the capital of Sweden.",
    "correct_answer": "False",
    "incorrect_answers": [
    "True"
    ]
    },
    {
    "category": "General Knowledge",
    "type": "boolean",
    "difficulty": "easy",
    "question": "The Lego Group was founded in 1932.",
    "correct_answer": "True",
    "incorrect_answers": [
    "False"
    ]
    },
    {
    "category": "Entertainment: Video Games",
    "type": "boolean",
    "difficulty": "easy",
    "question": "In Sonic the Hedgehog universe, Tails&#039; real name is Miles Prower.",
    "correct_answer": "True",
    "incorrect_answers": [
    "False"
    ]
    },
    {
    "category": "History",
    "type": "boolean",
    "difficulty": "easy",
    "question": "In World War ll, Great Britian used inflatable tanks on the ports of Great Britain to divert Hitler away from Normandy/D-day landing.",
    "correct_answer": "True",
    "incorrect_answers": [
    "False"
    ]
    },
    {
    "category": "Entertainment: Video Games",
    "type": "boolean",
    "difficulty": "easy",
    "question": "In RuneScape, one must complete the &quot;Dragon Slayer&quot; quest before equipping Rune Platelegs.",
    "correct_answer": "False",
    "incorrect_answers": [
    "True"
    ]
    },
    {
    "category": "Celebrities",
    "type": "boolean",
    "difficulty": "hard",
    "question": "Lady Gaga&#039;s real name is Stefani Joanne Angelina Germanotta.",
    "correct_answer": "True",
    "incorrect_answers": [
    "False"
    ]
    }
 ]
    
 console.log(testBank);

 //select questions

//Fisher-Yates Shuffle
function shuffle(a) {
    for (let i = a.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [a[i], a[j]] = [a[j], a[i]];
    }
    return a;
}

shuffle(testBank);

for (let i=0; i<NUMBER_OF_QUESTIONS_DISPLAYED; i++) {
    var index = Math.floor(Math.random() * (NUMBER_OF_QUESTIONS_DISPLAYED - 1 ) );
    questions.push(testBank[i]);
}

console.log (questions);

//add questions to DOM
for (let i=0; i<NUMBER_OF_QUESTIONS_DISPLAYED; i++) {
    let questionId = "#question-" + i
    $(questionId).html(questions[i].question + " True or False?");
    questionId.append($("<input>"));

};