let qNa2 = [
    {
        questions: "Vilka länder är med i EU?",
        answers: {
            1: "Sverige",
            2: "Tyskland",
            3: "Danmark",
            4: "Norge"
        },
        type: "checkbox",
        correctAnswer: ["1","2","3"]
    },
    {
        questions: "Är 1 + 1 = 5?",
        answers: {
            1: "Sant",
            2: "Falskt"
        },
        type: "radio",
        correctAnswer: ["2"]
    }
];
let qNa = [
    {
        questions: "Vilka länder är med i EU?",
        answers: {
            1: "Sverige",
            2: "Tyskland",
            3: "Danmark",
            4: "Norge"
        },
        type: "checkbox",
        correctAnswer: ["1","2","3"]
    },
    {
        questions: "Är 1 + 1 = 5?",
        answers: {
            1: "Sant",
            2: "Falskt"
        },
        type: "radio",
        correctAnswer: ["2"]
    },
    {
        questions: "Är 2 + 4 = 6?",
        answers: {
            1: "Sant",
            2: "Falskt"
        },
        type: "radio",
        correctAnswer: ["1"]
    },
    {
        questions: "Är 2 + 4 = 6?",
        answers: {
            1: "Falskt",
            2: "Sant",
            3: "Kanske",
            4: "I en annan värld"
        },
        type: "radio",
        correctAnswer: ["2"]
    },
    {
        questions: "Vilka djur har 4 ben?",
        answers: {
            1: "Hästar",
            2: "Ormar",
            3: "Människor",
            4: "Hundar"
        },
        type: "checkbox",
        correctAnswer: ["1","4"]
    },
    {
        questions: "Vem läser inte FEND22?",
        answers: {
            1: "Emelie",
            2: "Tobias",
            3: "Sofia",
            4: "Arne Anka"
        },
        type: "checkbox",
        correctAnswer: ["4"]
    },
    {
        questions: "Vad är 2*(4-2)?",
        answers: {
            1: "1",
            2: "6",
            3: "18",
            4: "4"
        },
        type: "radio",
        correctAnswer: ["4"]
    },
    {
        questions: "Vad är roten ur 9?",
        answers: {
            1: "2",
            2: "5",
            3: "3",
            4: "4"
        },
        type: "radio",
        correctAnswer: ["3"]
    },
    {
        questions: "Vilka färger ingår i svenska flaggan?",
        answers: {
            1: "Röd",
            2: "Gul",
            3: "Brun",
            4: "Blå"
        },
        type: "checkbox",
        correctAnswer: ["2","4"]
    },
    {
        questions: "Vad är 2 * 4?",
        answers: {
            1: "2",
            2: "8",
            3: "9",
            4: "12"
        },
        type: "radio",
        correctAnswer: ["2"]
    }
];
// Funktioner
function toggleTheme() {
    if (theme.getAttribute('href') == 'lightmode.css') {
        theme.setAttribute('href', 'darkmode.css');
    } else {
        theme.setAttribute('href', 'lightmode.css');
    }
};
function isAnswerChecked() {    //Körs varje gång en checkbox blir ändras, kollar om någon checkbox är ifylld, om inte visas inte "Nästa fråga knappen" men på sista frågan visas "Rätta" knappen
    let checkedAnswer = document.querySelectorAll(`input[type='checkbox']:checked`);
    if (questionCounter < ((qNa.length)-1)){
        if ((checkedAnswer.length) > 0) {
            nextButton.style.visibility = 'visible';
        } else {
            nextButton.style.visibility = 'hidden';
        };
    } else if (questionCounter === ((qNa.length)-1)){
        if (((checkedAnswer.length) > 0)) {
            startButton.style.visibility = 'visible';
        } else {
            startButton.style.visibility = 'hidden';
        }; 
    };
};
function gradeResults(score) {
    console.log("Inne i gradfunc " + score)
    let gradeContainer = document.querySelector("#grade");
    if ((score/qNa.length) < 0.5) {
        gradeContainer.innerHTML = `Tyvärr fick du underkänt :( Din poäng: ${score} av ${qNa.length}`;
        gradeContainer.style.color = "red"
    } else if ((score/qNa.length) > 0.75) {
        gradeContainer.innerHTML = `MVG! :D Din poäng: ${score} av ${qNa.length}`;
        gradeContainer.style.color = "green"      
    } else {
        gradeContainer.innerHTML = `VG! :) Din poäng: ${score} av ${qNa.length}`;
        gradeContainer.style.color = "orange";
    };
};
function buildQuiz(currentQuestion, questionNumber){ //Bygger quizzet i quizContainer, fråga för fråga
    quizContainer.innerHTML = "";
    let output = []; // Variabel för slutgiltig HTMLoutput 
    let answers = []; // Variabel med HTML för svarsalternativen
    if (currentQuestion.type === "radio") {// Vilken typ av fråga
        for (const i in currentQuestion.answers) { //Loopar igenom svarsalternativen'
            answers.push( //Skapar HTML radio knappar.
              `<label>
                  <input type='radio' name="questionCheckbox" value="${i}">
                  ${currentQuestion.answers[i]}
             </label>`
            );
        };    
     } else if (currentQuestion.type === "checkbox") {//(Fyra svarsalternativ varav ett rätt svar) 
        for (const i in currentQuestion.answers) {
            answers.push( //Skapara HTML checkboxar för varje fråga
                `<label>
                    <input type='checkbox' name='questionCheckbox' value="${i}">  
                    ${currentQuestion.answers[i]}
                </label>`
            );
        };    
    };
    output.push(
        `<div class="question" id="${questionNumber}">
        <h5> Fråga ${(questionNumber+1)}:</h5>
        ${currentQuestion.questions} </div>
        <div class="answers"> ${answers.join('')} </div>`
    );  
    //Presenterar i DOM:en
    quizContainer.innerHTML = output.join('');
    // Visa/göm  eventlisteners       
    if (currentQuestion.type === "radio") {
        let radios = document.querySelectorAll(`input[type='radio']`);
        radios.forEach((radios) => {
        radios.addEventListener("change", () => {
            if (questionCounter < ((qNa.length-1))) {
                nextButton.style.visibility="visible"
            } else {
                startButton.style.visibility="visible"
            };
            
        });
            });
    } else if(currentQuestion.type ="checkbox"){
        let checkboxes = document.querySelectorAll(`input[type='checkbox']`);
        checkboxes.forEach((box) => {
        box.addEventListener("change", isAnswerChecked);
        });
    };
};
function correctTheQuiz() {
    quizContainer.innerHTML = "";
    resultOutput = [];
    resultOutput.push(`<div class='grade' id="grade"> HEJ</div>`);
    savedAnswerArray.forEach((answer, questionNumber) => {
        if ((JSON.stringify(answer)) === (JSON.stringify(qNa[questionNumber].correctAnswer))) {
            score++; //score ökar med 1 vid rätt svar   
            resultOutput.push(
                `<div class='right'>Fråga ${(questionNumber + 1)}: ${qNa[questionNumber].questions}  </div>
                <div class ="resultAnswer"><b>Du svarade rätt!</b></div>`);   
            quizContainer.innerHTML = resultOutput.join('');
            } else { 
            resultOutput.push( //Skriver ut fråga samt skapar divar för att fylla i useranswer och correct answer senare
                `<div class='wrong'>Fråga ${(questionNumber + 1)}: ${qNa[questionNumber].questions} Fel svar!</div>
                <div class ="resultAnswer"> Ditt svar:  `);         
            currUserAns =[];
            answer.forEach((alternative) => {
                currUserAns.push(` ${qNa[questionNumber].answers[alternative]} `)
            });
            resultOutput.push(currUserAns); 
            resultOutput.push(`</div>`)
            resultOutput.push( `<div class = "resultAnswer"> <b>Rätt svar:</b> `);
            currCorrAns = [];
            qNa[questionNumber].correctAnswer.forEach((alternative) => {
                currCorrAns.push(` ${qNa[questionNumber].answers[alternative]} `)
            });
            resultOutput.push(currCorrAns);
            resultOutput.push(`</div>`)
            quizContainer.innerHTML = resultOutput.join(''); 
            };                            
    });
    console.log(score);
    gradeResults(score); // Skapar G/VG/MVG
};  
function saveCurrentAnswer() { // Sparar svaret på nuvarandra fråga i en Array
    let answersChecked = [];
    userAnswers = document.querySelectorAll(`input[name='questionCheckbox']:checked`);
    userAnswers.forEach((node) => { //Loopar igenom ickeckade-inputs och fyller i en array
        answersChecked.push(`${node.value}`)
        });
    savedAnswerArray[questionCounter] = answersChecked;
}
function nextQuestion() { // Byter fråga i DOM:en
    saveCurrentAnswer();
    questionCounter++;   
    if(questionCounter === 1){
        previousButton.style.visibility = "visible";        
        buildQuiz(qNa[questionCounter],questionCounter);  
    } else {
        buildQuiz(qNa[questionCounter],questionCounter);
    };
    ; 
};    
function startQuiz() { // Startar Quizzet
    if (questionCounter === 0) {
        startButton.style.visibility='hidden';
        buildQuiz(qNa[questionCounter],questionCounter);
        startButton.textContent = "Rätta" ;
    } else if (questionCounter === (qNa.length)){
        location.reload();
    } else {
        saveCurrentAnswer();
        correctTheQuiz();
        previousButton.style.visibility="hidden";
        questionCounter++;
        startButton.textContent = "Börja om" ;
    };
};
function previousQuestion() { // Byter till tidigare fråga.. vore fint att få in att gamla alternativen är ifyllda?
    startButton.style.visibility = "hidden";
    questionCounter--;
    buildQuiz(qNa[questionCounter],questionCounter);
    if (questionCounter === 0) {
        previousButton.style.visibility = 'hidden';
    };
};
// Variables
let score = 0; 
let savedAnswerArray = [];
let toggleButton = document.querySelector("#toggleTheme");
let startButton = document.getElementById("startButton");
let nextButton = document.getElementById("nextButton");
let previousButton = document.getElementById("previousButton")
let quizContainer =  document.querySelector("#quizContainer");
let questionCounter = 0;
let btnContainer = document.querySelector("#buttonContainer");
// Initial styling, hidding buttons
nextButton.style.visibility ='hidden';
previousButton.style.visibility ='hidden';
//Eventlisteners
toggleButton.addEventListener("click",(toggleTheme));
startButton.addEventListener("click", startQuiz);
nextButton.addEventListener("click", () => {
    nextButton.style.visibility = "hidden"
    nextQuestion();
});
previousButton.addEventListener("click", previousQuestion);

//Ta bort
//startQuiz();