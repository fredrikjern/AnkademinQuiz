let qNa = [
    {
        questions: "Är 1 + 1 = 5?",
        answers: {
            1: "Sant",
            2: "Falskt"
        },
        type: "radio",
        correctAnswer: "2"
    },
    {
        questions: "Är 2 + 4 = 6?",
        answers: {
            1: "Sant",
            2: "Falskt"
        },
        type: "radio",
        correctAnswer: "1"
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
        correctAnswer: "2"
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
        questions: "Vad är 2*(4-2)?",
        answers: {
            1: "1",
            2: "6",
            3: "18",
            4: "4"
        },
        type: "radio",
        correctAnswer: "4"
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
        correctAnswer: "3"
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
        correctAnswer: "2"
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
function isAnswerChecked(questionCounter) {    //Körs varje gång en checkbox blir ändras, kollar om någon checkbox är ifylld, om inte visas inte "Nästa fråga knappen"
    let checkedAnswer = document.querySelectorAll(`input[type='checkbox']:checked`);
    if (questionCounter < (qNa.length - 1)) {
        console.log((questionCounter));
        if (checkedAnswer.length > 0) {
            nextButton.style.visibility = 'visible';
        } else {
            nextButton.style.visibility = 'hidden';
        }; 
    } else if(questionCounter === (qNa.length-1)){
        console.log((qNa.length-1))
        if (checkedAnswer.length > 0) {
            startButton.style.visibility = 'visible';
        } else {
            startButton.style.visibility = 'hidden';
        }; 
    };
   
};
function gradeResults(score) {
    let resultsContainer = document.querySelector("#resultsContainer");
    
    if ((score/qNa.length) < 0.5) {
        resultsContainer.innerHTML = `Tyvärr fick du underkänt :( Din poäng: ${score} av ${qNa.length}`;
        resultsContainer.style.color = "red"
    } else if ((score/qNa.length) > 0.75) {
        resultsContainer.innerHTML = `MVG! :D Din poäng: ${score} av ${qNa.length}`;
        resultsContainer.style.color = "green"      
    } else {
        resultsContainer.innerHTML = `VG! :) Din poäng: ${score} av ${qNa.length}`;
        resultsContainer.style.color = "orange";
    };
};
function buildQuiz(currentQuestion, questionNumber){ 
    questionContainer.innerHTML = "";
    let output = []; // Variabel för slutgiltig HTMLoutput 
    let answers = []; // Variabel med HTML för svarsalternativen
    if (currentQuestion.type === "radio") {// Vilken typ av fråga
        for (const i in currentQuestion.answers) { //Loopar igenom svarsalternativen'
            answers.push( //Skapar HTML radio knappar.
              `<label>
                  <input type='radio' name="question${questionNumber}" value="${i}">
                  ${currentQuestion.answers[i]}
             </label>`
            );
        };    
     } else if (currentQuestion.type === "checkbox") {//(Fyra svarsalternativ varav ett rätt svar) 
        for (const i in currentQuestion.answers) {
            answers.push( //Skapara HTML checkboxar för varje fråga
                `<label>
                    <input type='checkbox' name='question${questionNumber}' value="${i}">  
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
    questionContainer.innerHTML = output.join('');
    // Visa/göm  eventlisteners       
    if (currentQuestion.type === "radio") {
        let radios = document.querySelectorAll(`input[type='radio']`);
        radios.forEach((radios) => {
        radios.addEventListener("change", () => {nextButton.style.visibility="visible"});
            });
    } else if(currentQuestion.type ="checkbox"){
        let checkboxes = document.querySelectorAll(`input[type='checkbox']`);
        checkboxes.forEach((box) => {
        box.addEventListener("change", isAnswerChecked);
        });
    };
};
function gradeQuestion(currentQuestion,questionNumber) {
    let answerContainer = quizContainer.querySelector('.answers');
    let checkedAnswer = `input[name=question${questionNumber}]:checked`;
    let userAnswer = (answerContainer.querySelector(checkedAnswer) || {}).value;        
    let userAnswers = answerContainer.querySelectorAll(checkedAnswer);
    let answerCheck = []; 
    //Kollar vilken typ av fråga radio/checkbox
    if (currentQuestion.type === "radio") {            //Kollar om svaret är rätt
         if (userAnswer === currentQuestion.correctAnswer) {
            score++; //score ökar med 1 vid rätt svar   
            resultOutput.push(
                `  Du svarade rätt!  `);            
            } else {
            //Skriver ut rätt svar
            resultOutput.push(
                `<div class ="wrong">Inkorrekt svar :(</div>`);            
            resultOutput.push(
                `<div class ="resultAnswer">  Ditt svar: ${currentQuestion.answers[userAnswer]} <br>
                Rätt svar: ${currentQuestion.answers[currentQuestion.correctAnswer]} </div>`);            
            };
    } else if (currentQuestion.type ==="checkbox") {          
        userAnswers.forEach((node) => { 
        //Loopar igenom checkade checkboxar och fyller i en array
        answerCheck.push(`${node.value}`)
        });
        // Jämför användarens svars array mot facit-arrayn
        if (JSON.stringify(answerCheck) === JSON.stringify(currentQuestion.correctAnswer)) {                score++; //score ökar med 1 vid rätt svar
            resultOutput.push("Du svarade rätt!");
        } else {
            resultOutput.push(
                `<div class ="wrong">Inkorrekt svar :(</div>`); 
            resultOutput.push("Ditt svar: ");
            answerCheck.forEach((checkedA)=> {
                resultOutput.push(
                    `  ${currentQuestion.answers[checkedA]}, `);
            });    
            resultOutput.push("<br>Rätt svar: ");
            // Loopar igenom correctAnswer arrayen och skriver ut rätt svar    
            currentQuestion.correctAnswer.forEach((correctAnswer)=> {
                resultOutput.push(
                    `  ${currentQuestion.answers[correctAnswer]}, `);
            });            
        };   
    };
};
// Variables
let toggleButton = document.querySelector("#toggleTheme");
let startButton = document.querySelector("#startButton");
let nextButton = document.querySelector("#nextButton")
let previousButton = document.querySelector("#previousButton")
let quizContainer =  document.querySelector("#quizContainer");
let questionContainer = document.querySelector("#questionContainer");
let questionCounter = 0;
let startButtonValue = true ;
let btnContainer = document.querySelector("#buttonContainer");
//Eventlisteners
toggleButton.addEventListener("click",(toggleTheme));
startButton.addEventListener("click", () => {
    if (startButtonValue) {
        buildQuiz(qNa[questionCounter],questionCounter);
        startButton.style.visibility='hidden';
        startButtonValue = false;
        startButton.textContent = "Rätta" ;
    } else if (startButtonValue === false){
        questionContainer.innerHTML="<h1>Resultat<h1>";
    };
    });
nextButton.addEventListener("click", () => {
    questionCounter++;   
    if(questionCounter === 1){
        previousButton.style.visibility = "visible";        
        buildQuiz(qNa[questionCounter],questionCounter);  
    } else {
        buildQuiz(qNa[questionCounter],questionCounter);
    };
    nextButton.style.visibility = "hidden"; 
    });    
previousButton.addEventListener("click", () => {
    questionCounter--;
    buildQuiz(qNa[questionCounter],questionCounter);
    if (questionCounter === 0) {
        previousButton.style.visibility = 'hidden';
    }
    });

