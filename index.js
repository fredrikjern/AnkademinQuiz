// Quiz-arrayer
let historyQuiz = [
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
        questions: "Potatisen kom till Sverige på 1600-talet",
        answers: {
            1: "Sant",
            2: "Falskt"
        },
        type: "radio",
        correctAnswer: ["1"]
    },
    {
        questions: "Vilket land förklarade krig först i WW1?",
        answers: {
            1: "Österrike-Ungern",
            2: "Polen",
            3: "Tyskland",
            4: "Ryssland"
        },
        type: "radio",
        correctAnswer: ["1"]
    },
    {
        questions: "Vem var Sveriges första kung?",
        answers: {
            1: "Gustav Adolf",
            2: "Gustav Vasa",
            3: "Gustav Wasa",
            4: "Zlatan"
        },
        type: "radio",
        correctAnswer: ["2"]
    },
    {
        questions: "Vilka var Winston Churchills favorit drycker?",
        answers: {
            1: "Whisky",
            2: "Champagne",
            3: "Dry Martini",
            4: "Brandy"
        },
        type: "checkbox",
        correctAnswer: ["2","4"]
    },
    {
        questions: "Vem är den största erövraren genom tiderna? (Kontrollerat territorie)",
        answers: {
            1: "Alexander den store",
            2: "Julius Ceasar",
            3: "Ghengis Khan",
            4: "Napoleon"
        },
        type: "radio",
        correctAnswer: ["3"]
    },
    {
        questions: "När inleddes Franska Revolutionen?",
        answers: {
            1: "1792",
            2: "1783",
            3: "1789",
            4: "1779"
        },
        type: "radio",
        correctAnswer: ["3"]
    },
    {
        questions: "Vilka länder ingick i Trippelententen (allians) under WW1?",
        answers: {
            1: "Storbritannien",
            2: "Ryssland",
            3: "Spanien",
            4: "Frankrike"
        },
        type: "checkbox",
        correctAnswer: ["1","2","4"]
    },
    {
        questions: "Vem sa: “Success is not final, failure is not fatal, it is the courage to continue that counts.” ?",
        answers: {
            1: "Muhammed Ali",
            2: "Winston Churchill",
            3: "Dwight Eisenhover",
            4: "Ed Sheeran"
        },
        type: "radio",
        correctAnswer: ["2"]
    }
];
let devQuiz = [
    {
        questions: "Vilka länder ligger i Skandinavien?",
        answers: {
            1: "Sverige",
            2: "Tyskland",
            3: "Danmark",
            4: "Norge"
        },
        type: "checkbox",
        correctAnswer: ["1","3","4"]
    },
    {
        questions: "Är checkboxar roligare än radioknappar?",
        answers: {
            1: "Sant",
            2: "Falskt"
        },
        type: "radio",
        correctAnswer: ["2"]
    }];
let euQuiz = [
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
        questions: "EU har 25 medlemsnationer.",
        answers: {
            1: "Sant",
            2: "Falskt"
        },
        type: "radio",
        correctAnswer: ["2"]
    },
    {
        questions: "EU är med i NATO",
        answers: {
            1: "Sant",
            2: "Falskt"
        },
        type: "radio",
        correctAnswer: ["2"]
    },
    {
        questions: "Vem var EU:s första ordförande?",
        answers: {
            1: "Ursula von der Leyen",
            2: "Walter Hallstein",
            3: "Olof Palme",
            4: "Nicolas Sarkozy"
        },
        type: "radio",
        correctAnswer: ["2"]
    },
    {
        questions: "Vilka länder har lämnat EU?",
        answers: {
            1: "Norge",
            2: "Finland",
            3: "UK",
            4: "Slovenien"
        },
        type: "checkbox",
        correctAnswer: ["3"]
    },
    {
        questions: "Vilka länder är med i EMU (Economic & Monetary Union)?",
        answers: {
            1: "Tyskland",
            2: "Sverige",
            3: "Frankrike",
            4: "Grekland"
        },
        type: "checkbox",
        correctAnswer: ["1","3","4"]
    },
    {
        questions: "När grundades Europeiska Unionen?",
        answers: {
            1: "1945",
            2: "2001",
            3: "1973",
            4: "1993"
        },
        type: "radio",
        correctAnswer: ["4"]
    },
    {
        questions: "I vilken stad skrevs EU:s författning?",
        answers: {
            1: "Hamburg",
            2: "Maastricht",
            3: "Lyon",
            4: "Greenwich"
        },
        type: "radio",
        correctAnswer: ["2"]
    },
    {
        questions: "Vilka färger ingår i Europeiska flaggan?",
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
        questions: "Hur många platser finns det i EU-parlamentet?",
        answers: {
            1: "349",
            2: "915",
            3: "705",
            4: "695"
        },
        type: "radio",
        correctAnswer: ["3"]
    }
];
// Funktioner
function createProgressBar(qNa) {  // Skapar och lägger till en div ovanför btnContainer-diven med en div i sig och genererar en lista som används som progressbar
    let pDiv = document.createElement('div'); // Ville använda createElement en gång, smidigare när ett element ska placeras in med precision i DOM:en men enklare och mer överskådligt att använda innerHTML upplever jag i övrigt.
    pDiv.setAttribute('id', 'progress');
    pDiv.innerHTML = `<div id='progress-bar'><ul id='progress-num'></ul></div>`;
    btnContainer.parentNode.insertBefore(pDiv, btnContainer); // Placerar pDiv "innan"/ovanför btnC
    progressDiv = document.getElementById("progress"); // Uppdaterar dom globalt definierade "pekningar?"
    progressBar = document.getElementById("progress-bar");
    progressNum = document.getElementById("progress-num");
    let progressOutput = [];
    for (let i = 1; i < ((qNa.length)+1); i++) { // Generar en <li></li>(progressstep) för varje fråga i frågeArrayen
        progressOutput.push(`<li class="step"></li>`);
    };
    progressNum.innerHTML = progressOutput.join('');
    progressBar.style.width = 
    (qNa.length) * 8.2 + "%";
};
function updateProgress() { // Loopar igenom list-elementen i progressbaren och lägger till/tar bort en class beroende på vilken fråga questionCounter är på.
    steps = document.querySelectorAll(".step");
    steps.forEach((step, i) => {
        if (i < (questionCounter+1)) {
          step.classList.add("active");
        } else {
          step.classList.remove("active");
        }
      });
};
function toggleTheme() { // Byter ut CSS filen i index.html
    if (theme.getAttribute('href') == 'lightmode.css') {
        theme.setAttribute('href', 'darkmode.css')
    } else {
        theme.setAttribute('href', 'lightmode.css');
    }
};
function isAnswerChecked() { //Kollar om någon checkbox är ifylld, visar/gömmer "nästa"-knapp samt "rätta-knapp" 
    let checkedAnswer = quizContainer.querySelectorAll(`input[type='checkbox']:checked`);
    if (questionCounter < ((qNa.length)-1)){
        if ((checkedAnswer.length) > 0) {
            rightButton.style.visibility = 'visible';
        } else {
            rightButton.style.visibility = 'hidden';
        };
    } else if (questionCounter === ((qNa.length)-1)){ // Visar Rättaknapp om användaren svarat på sista frågan
        if (((checkedAnswer.length) > 0)) {
            centerButton.style.visibility = 'visible';
        } else {
            centerButton.style.visibility = 'hidden';
        }; 
    };
};
function gradeResults(score) { // Graderar utifrån variabeln score, printar sen ut i DOM:en
    let gradeContainer = document.querySelector("#grade");
    if ((score/qNa.length) < 0.5) {
        gradeContainer.innerHTML = `Tyvärr fick du underkänt :( <br>Din poäng: ${score} av ${qNa.length}`;
        gradeContainer.style.color = "rgb(162, 1, 1)"
    } else if ((score/qNa.length) > 0.75) {
        gradeContainer.innerHTML = `MVG! :D <br>Din poäng: ${score} av ${qNa.length}`;
        gradeContainer.style.color = "green"      
    } else {
        gradeContainer.innerHTML = `VG! :)<br>Din poäng: ${score} av ${qNa.length}`;
        gradeContainer.style.color = "orange";
    };
};
function buildQuiz(currentQuestion, questionNumber){ //Bygger en Quiz-fråga i #quizContainer, quizCounter bestämmer vilken
    quizContainer.innerHTML = ""; // Tömmer quizContainern
    let output = []; // Variabel för slutgiltig HTMLoutput för nuvarande fråga
    let answers = []; // Variabel med HTML för frågans svarsalternative
    if (currentQuestion.type === "radio") { // Avgör vilken typ av fråga det är.
        for (const i in currentQuestion.answers) { //Loopar igenom svarsalternativen'
            answers.push( //Skapar HTML radio knappar.
              `<label class="form-control-radio">
                  <input type='radio' name="questionCheckbox" value="${i}" id='radio${i}'>
                  ${currentQuestion.answers[i]}
             </label>`
            );
        };    
     } else if (currentQuestion.type === "checkbox") { 
        for (const i in currentQuestion.answers) {
            answers.push( //Skapar HTML checkboxar för varje fråga 
                `<label class="form-control-check">
                    <input type='checkbox' name='questionCheckbox' value="${i}" id='checkbox${i}'>  
                    ${currentQuestion.answers[i]}
                </label>`
            );
        };    
    };
    output.push( // Skapar och sätter samman slutgiltliga frågan och svarsalternativen
        `<div class="question" id="${questionNumber}">
        <h5> Fråga ${(questionNumber+1)}:</h5>
        ${currentQuestion.questions} </div>
        <div class="answers"> ${answers.join('')} </div>`
    );  
    quizContainer.innerHTML = output.join(''); //Presenterar frågan och svarsalternativen i DOM:en
    if (currentQuestion.type === "radio") { // Skapar visa/göm eventlisteners för varje radio/checkbox så nästaknappen bara syns om du svarat. 
        let radios = quizContainer.querySelectorAll(`input[type='radio']`);
        radios.forEach((radios) => {
        radios.addEventListener("change", () => {
            if (questionCounter < ((qNa.length-1))) {
                rightButton.style.visibility="visible"
            } else {
                centerButton.style.visibility="visible"
            };
        });
            });
    } else if(currentQuestion.type = "checkbox"){ //Samma för checkboxar, men anropar en funktion då det går att checka ur dom.
        let checkboxes = quizContainer.querySelectorAll(`input[type='checkbox']`);
        checkboxes.forEach((box) => {
        box.addEventListener("change", isAnswerChecked);
        });
    };
    // Om man går tillbaka fylls det svarsalternativ man tidigare svarat i.
    if (savedAnswerArray[questionCounter] != undefined && currentQuestion.type === "checkbox") { //  != undefined (Endast sparade svar)
        savedAnswerArray[questionCounter].forEach((savedAnswer) => {
            document.getElementById(`checkbox${savedAnswer}`).checked = true;
            rightButton.style.visibility= 'visible'; // Behövs då buildQuiz gömmer knappen när den körs.
        });
    } else if (savedAnswerArray[questionCounter] != undefined && currentQuestion.type === "radio") {
            document.getElementById(`radio${savedAnswerArray[questionCounter]}`).checked = true ;
            rightButton.style.visibility= 'visible';
    };
};
function correctTheQuiz() { // Rättar svars-arrayen och skriver ut resultatet i DOM:en
    quizContainer.innerHTML = "";
    quizContainer.style.height = "auto"; // Sidan behöver vara längre än under frågedelen
    progressDiv.innerHTML = ""; // Tar bort progress-baren från resultat-sidan
    resultOutput = [];
    resultOutput.push(`<div class='grade' id="grade"></div>`); // Skapar en div högst upp i quizContainer där betyget kan presenteras efter rättningen
    savedAnswerArray.forEach((answer, questionNumber) => {
        currentUserAnswer = [];
            answer.forEach((alternative) => { // Loopar ut användarens svar på frågan, la den ovan då den används om svaret är rätt eller fel
                currentUserAnswer.push(` ${qNa[questionNumber].answers[alternative]} `)
            });
        if ((JSON.stringify(answer)) === (JSON.stringify(qNa[questionNumber].correctAnswer))) { // Jämför svaren som strängar då JS inte kunde jämföra 2 arays direkt, finns definitivt avsevärt bättre metoder. 
            score++; //score ökar med 1 vid rätt svar   
            resultOutput.push(
                `<div class='right'>Fråga ${(questionNumber + 1)}: ${qNa[questionNumber].questions}  </div>
                <div class ="resultAnswer">Ditt svar: ${currentUserAnswer}<br>
                <b>Du svarade rätt!</b></div>`);   
            quizContainer.innerHTML = resultOutput.join('');
            } else { // Om svaret är fel
            currentCorrectAnswer = [];
            qNa[questionNumber].correctAnswer.forEach((alternative) => { // Loopar ut korrekta svar för frågan in i currentCorrectAnswer
                currentCorrectAnswer.push(` ${qNa[questionNumber].answers[alternative]} `)
            });
            resultOutput.push( //Skriver ut fråga samt lägger in rätt svar och användarens svar.
                `<div class='wrong'>Fråga ${(questionNumber + 1)}: ${qNa[questionNumber].questions} Fel svar!</div>
                <div class ="resultAnswer"> Ditt svar: ${currentUserAnswer} <br>
                <b>Rätt svar:</b> ${currentCorrectAnswer} </div>`);
            quizContainer.style.height = "auto"; 
            quizContainer.innerHTML = resultOutput.join(''); 
            };                            
    });
    gradeResults(score); // Skapar G/VG/MVG och presenterar i DOM:en i div:en "grade" som skapats tidigare.
};  
function saveCurrentAnswer() { // Sparar svaret på nuvarandra fråga i en Array
    let answersChecked = [];
    userAnswers = document.querySelectorAll(`input[name='questionCheckbox']:checked`);
    userAnswers.forEach((checkedbox) => { //Loopar igenom ickeckade-inputs och fyller i en array (fungerar för både radio och checkbox pga "name")
        answersChecked.push(`${checkedbox.value}`)
        });
    savedAnswerArray[questionCounter] = answersChecked; // Sparar i en array
};
function nextQuestion() { // Sparar användarens svar och byter till nästa fråga i DOM:en
    rightButton.style.visibility = "hidden"; //Gömmer nästaknappen
    saveCurrentAnswer(); // Sparar svaret
    questionCounter++; // ökar countern
    updateProgress();   // Uppdaterar progressbaren med nya questionCountern
    if(questionCounter === 1){ // Visar "tidigareknappen" vid fråga 2
        leftButton.style.visibility = "visible";        
        buildQuiz(qNa[questionCounter],questionCounter);  
    } else {
        buildQuiz(qNa[questionCounter],questionCounter);
    };
};    
function startQuiz(userchoice) { // Startar Quizzet
    quizContainer.style.height = "248px"; // Låser höjden på quizContainern under fråge-perioden, aningens behagligare.
    qNa = userchoice; // Val av quiz array
    createProgressBar(qNa); //Bygger progressbaren initial
    centerButton.style.visibility = 'hidden';
    leftButton.style.visibility = 'hidden';
    rightButton.style.visibility ='hidden';
    buildQuiz(qNa[questionCounter],questionCounter); // Bygger första frågan
    updateProgress(); //Uppdaterar
    centerButton.textContent = "Rätta" ; // Byter text i knapparna då elementen återanvänds genom hela quizzet
    leftButton.textContent = "Tidigare fråga";
    rightButton.textContent ="Nästa fråga";
};
function previousQuestion() { // Byter till tidigare fråga.. vore fint att få in att gamla alternativen är ifyllda?
    centerButton.style.visibility = "hidden"; // Gömmer rätta-knappen
    questionCounter--;
    updateProgress();
    buildQuiz(qNa[questionCounter],questionCounter);
    if (questionCounter === 0) {
        leftButton.style.visibility = 'hidden'; // Döjer knappen då det är första frågan
    };
};
// Variabler
let chooseQuiz = true; // Har användaren valt en quiz? Behövs för knapplogiken
let qNa = []; // Deklarerar qNa här för att kunna ge den ett värde(quizArrayen) inne i startQuiz-funktionen.
let score = 0;  // Deklarerar poängräkningsvariablen 
let questionCounter = 0; 
let savedAnswerArray = []; // Deklarerar en tom array för att spara svar i under quizzets gång.
let toggleButton = document.querySelector("#toggleTheme");
let centerButton = document.getElementById("centerButton");
let rightButton = document.getElementById("rightButton");
let leftButton = document.getElementById("leftButton");
let quizContainer =  document.querySelector("#quizContainer");
let btnContainer = document.querySelector("#buttonContainer");
let darkmode = document.querySelector("#dark");
let steps = document.querySelectorAll(".step");
let progressDiv = document.getElementById("progress");
let progressBar = document.getElementById("progress-bar");
let progressNum = document.getElementById("progress-num");
//Eventlisteners
toggleButton.addEventListener("click", toggleTheme); 
leftButton.addEventListener("click", () => {
    if (chooseQuiz) {
        startQuiz(historyQuiz);
        chooseQuiz = false;
    } else {
        previousQuestion();
    }
});
centerButton.addEventListener("click", () => {
    if (chooseQuiz) {
        startQuiz(euQuiz);
        chooseQuiz = false;
    } else if (questionCounter === (qNa.length)){
        location.reload();
    } else {
        saveCurrentAnswer();
        correctTheQuiz();
        leftButton.style.visibility= "hidden";
        questionCounter++;
        centerButton.textContent = "Börja om" ;
    };
});
rightButton.addEventListener("click", () => {
    if (chooseQuiz) {
        startQuiz(devQuiz)
        chooseQuiz = false;
    } else {
        nextQuestion();
    };
});
