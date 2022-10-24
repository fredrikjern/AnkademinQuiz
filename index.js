let historyQuestions = [
    {
        questions: "När bröt första världskriget ut?",
        answers: {
            1: "1929",
            2: "1939",
            3: "1932",
            4: "1945"
        },
        type: "radio",
        correctAnswer: ["3"]
    },
    {
        questions: "Var Dwight Eisenhower USA's president under WW2?",
        answers: {
            1: "Sant",
            2: "Falskt"
        },
        type: "radio",
        correctAnswer: ["2"]
    },
    {
        questions: "Ad",
        answers: {
            1: "Sant",
            2: "Falskt"
        },
        type: "radio",
        correctAnswer: ["2"]
    },
    {
        questions: "Vilket land förklarade krig först i WW1?",
        answers: {
            1: "Österrike, Ungern",
            2: "Polen",
            3: "Tyskland",
            4: "Ryssland"
        },
        type: "radio",
        correctAnswer: ["3"]
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
let qNaF = [
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
function createProgressBar(qNa) { // Generar en <li>(progressstep) för varje fråga i frågeArrayen och skickar presenterar i DOM:en.
    let progressOutput = [];
    progressNum.innerHTML = "";
    
    for (let i = 1; i < (qNa.length+1); i++) {
        progressOutput.push(`<li class="step">${(i)}</li>`);
    };
    progressNum.innerHTML = progressOutput.join('');
    steps = document.querySelectorAll(".step");
    //steps[0].classList.add("active");
};
function updateProgress() {
    // toggle active class on list items
    steps.forEach((step, i) => {
        console.log(i + "inne i stepsForeahc")
        if (i < active) {
          step.classList.add("active");
        } else {
          step.classList.remove("active");
        }
      });
      // set progress bar width  
      progressBar.style.width = 
        ((active - 1) / (steps.length - 1)) * 70 + "%"; 
};
function toggleTheme() { // Byter ut CSS filen i index.html
    if (theme.getAttribute('href') == 'lightmode.css') {
        theme.setAttribute('href', 'darkmode.css')
    } else {
        theme.setAttribute('href', 'lightmode.css');
    }
};
function isAnswerChecked() { //Körs varje gång en checkbox ändras, kollar om någon checkbox är ifylld, om inte visas inte "Nästa fråga knappen" men på sista frågan visas "Rätta" knappen
    let checkedAnswer = quizContainer.querySelectorAll(`input[type='checkbox']:checked`);
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
function gradeResults(score) { // Graderar utifrån variabeln score, printar sen ut i DOM:en
    let gradeContainer = document.querySelector("#grade");
    if ((score/qNa.length) < 0.5) {
        gradeContainer.innerHTML = `Tyvärr fick du underkänt :( Din poäng: ${score} av ${qNa.length}`;
        gradeContainer.style.color = "rgb(162, 1, 1)"
    } else if ((score/qNa.length) > 0.75) {
        gradeContainer.innerHTML = `MVG! :D Din poäng: ${score} av ${qNa.length}`;
        gradeContainer.style.color = "green"      
    } else {
        gradeContainer.innerHTML = `VG! :) Din poäng: ${score} av ${qNa.length}`;
        gradeContainer.style.color = "orange";
    };
};
function buildQuiz(currentQuestion, questionNumber){ //Bygger en Quiz-fråga i #quizContainer, quizCounter bestämmer vilken
    quizContainer.innerHTML = ""; // Tömmer quizContainern
    let output = []; // Variabel för slutgiltig HTMLoutput för nuvarande fråga
    let answers = []; // Variabel med HTML för frågans svarsalternative
    if (currentQuestion.type === "radio") {// Avgör vilken typ av fråga det är.
        for (const i in currentQuestion.answers) { //Loopar igenom svarsalternativen'
            answers.push( //Skapar HTML radio knappar.
              `<label class="form-control-radio">
                  <input type='radio' name="questionCheckbox" value="${i}" id='radio${i}'>
                  ${currentQuestion.answers[i]}
             </label>`
            );
        };    
     } else if (currentQuestion.type === "checkbox") {//(Fyra svarsalternativ varav ett rätt svar) 
        for (const i in currentQuestion.answers) {
            answers.push( //Skapara HTML checkboxar för varje fråga
                `<label class="form-control-check">
                    <input type='checkbox' name='questionCheckbox' value="${i}" id='checkbox${i}'>  
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
    quizContainer.innerHTML = output.join(''); //Presenterar i DOM:en
    // Skapar visa/göm eventlisteners för varje radio/checkbox så nästaknappen bara syns om du svarat.     
    if (currentQuestion.type === "radio") {
        let radios = quizContainer.querySelectorAll(`input[type='radio']`);
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
        let checkboxes = quizContainer.querySelectorAll(`input[type='checkbox']`);
        checkboxes.forEach((box) => {
        box.addEventListener("change", isAnswerChecked);
        });
    };
    // Om man går tillbaka fylls det svarsalternativ man tidigare svarat i.
    if (savedAnswerArray[questionCounter] != undefined && currentQuestion.type === "checkbox") {
        savedAnswerArray[questionCounter].forEach((savedAnswer)=>{
            document.getElementById(`checkbox${savedAnswer}`).checked = true
            nextButton.style.visibility='visible';
        });
    } else if (savedAnswerArray[questionCounter] != undefined && currentQuestion.type === "radio") {
            document.getElementById(`radio${savedAnswerArray[questionCounter]}`).checked = true ;
            nextButton.style.visibility='visible';
    };
};
function correctTheQuiz() { // Rättar svars-arrayen och skriver ut resultatet i DOM:en
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
    
    gradeResults(score); // Skapar G/VG/MVG
};  
function saveCurrentAnswer() { // Sparar svaret på nuvarandra fråga i en Array
    let answersChecked = [];
    userAnswers = document.querySelectorAll(`input[name='questionCheckbox']:checked`);
    userAnswers.forEach((node) => { //Loopar igenom ickeckade-inputs och fyller i en array
        answersChecked.push(`${node.value}`)
        });
    savedAnswerArray[questionCounter] = answersChecked;
};
function nextQuestion() { // Sparar användarens svar och byter till fråga i DOM:en
    nextButton.style.visibility = "hidden"; //Gömmer nästaknappen
    saveCurrentAnswer();
    questionCounter++;
    active = questionCounter;
    updateProgress;   
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
        qNa = qNaF;
        startButton.style.visibility='hidden';
        buildQuiz(qNa[questionCounter],questionCounter);
        createProgressBar(qNa); //Bygger progressbaren initial
        active = questionCounter;
        updateProgress; //Uppdaterar
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
let qNa = [];
let score = 0; 
let questionCounter = 0;
let savedAnswerArray = [];
let toggleButton = document.querySelector("#toggleTheme");
let startButton = document.getElementById("startButton");
let nextButton = document.getElementById("nextButton");
let previousButton = document.getElementById("previousButton")
let quizContainer =  document.querySelector("#quizContainer");
let btnContainer = document.querySelector("#buttonContainer");
let darkmode = document.querySelector("#dark");

let progressBar = document.getElementById("progress-bar");
let progressNext = document.getElementById("progress-next"); //
let progressPrev = document.getElementById("progress-prev");// bort
let progressNum = document.getElementById("progress-num");
let steps = document.querySelectorAll(".step");
let active = 1;
// Initial styling, hidding buttons
nextButton.style.visibility ='hidden';
previousButton.style.visibility ='hidden';
//Eventlisteners
toggleButton.addEventListener("click", toggleTheme);
startButton.addEventListener("click", startQuiz);
nextButton.addEventListener("click", nextQuestion);
previousButton.addEventListener("click", previousQuestion);
