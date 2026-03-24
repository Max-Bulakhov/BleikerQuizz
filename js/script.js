let questions = [
  {
    question: "Hvilket styresett har Norge?",
    answers: ["Republikk", "Militærstyre", "Konstitusjonelt monarki", "Diktatur"],
    correct: 2
  },
  {
    question: "Hvem er Norges konge?",
    answers: ["Harald V", "Olav V", "Haakon VII", "Frederik X"],
    correct: 0
  },
  {
    question: "Hva er Stortinget?",
    answers: [
      "Norges regjering",
      "Norges parlament (nasjonalforsamling)",
      "Norges høyesterett",
      "Norges kongehus"
    ],
    correct: 1
  },
  {
    question: "Hva betyr ordet 'likestilling'?",
    answers: [
      "Alle skal tjene like mye",
      "Kvinner og menn skal ha samme rettigheter og muligheter",
      "Alle skal ha samme jobb",
      "Alle skal bo på samme sted"
    ],
    correct: 1
  },
  {
    question: "Hvilket av disse fagene er vanlig på videregående skole i Norge?",
    answers: ["Norsk", "Astronaut-trening", "Militær-trening", "Dyrepass"],
    correct: 0
  },
  {
    question: "Hva betyr begrepet 'dugnad' i norsk kultur?",
    answers: [
      "Frivillig arbeid for fellesskapet",
      "En type mat",
      "En skoleeksamen",
      "En sport"
    ],
    correct: 0
  },
  {
    question: "Hva er vanlig arbeidstid i Norge for en fulltidsjobb?",
    answers: [
      "Ca. 20 timer per uke",
      "Ca. 37,5 timer per uke",
      "Ca. 50 timer per uke",
      "Ca. 60 timer per uke"
    ],
    correct: 1
  },
  {
    question: "Hva betyr 'ytringsfrihet'?",
    answers: [
      "Rett til å reise fritt",
      "Rett til å si sin mening uten frykt for straff",
      "Rett til gratis skole",
      "Rett til arbeid"
    ],
    correct: 1
  },
  {
    question: "Hva er en kommune i Norge?",
    answers: [
      "En type skole",
      "En lokal administrativ enhet som styrer tjenester i et område",
      "En organisasjon",
      "En bedrift"
    ],
    correct: 1
  },
  {
    question: "Hva er målet med videregående opplæring i Norge?",
    answers: [
      "Bare å gi karakterer",
      "Å forberede elever til jobb eller høyere utdanning",
      "Å lære sport",
      "Å lære bare norsk språk"
    ],
    correct: 1
  }
];

let current = 0;
let score = 0;
let username = "";

function startQuiz() {
  username = document.getElementById("username").value;
  if (!username) return alert("Skriv navn!");

  document.getElementById("start-screen").classList.add("hidden");
  document.getElementById("quiz-box").classList.remove("hidden");

  showQuestion();
}

function showQuestion() {
  let q = questions[current];

  document.getElementById("question").innerText = q.question;

  let answersDiv = document.getElementById("answers");
  answersDiv.innerHTML = "";
  document.getElementById("feedback").innerText = "";
  document.getElementById("nextBtn").style.display = "none";

  q.answers.forEach((answer, index) => {
    let btn = document.createElement("button");
    btn.innerText = answer;
    btn.onclick = () => selectAnswer(btn, index);
    answersDiv.appendChild(btn);
  });
}

function selectAnswer(btn, index) {
  let correctIndex = questions[current].correct;
  let buttons = document.querySelectorAll("#answers button");

  buttons.forEach(b => b.disabled = true);

  if (index === correctIndex) {
    btn.classList.add("correct");
    document.getElementById("feedback").innerText = "Riktig!";
    score++;
  } else {
    btn.classList.add("wrong");
    buttons[correctIndex].classList.add("correct");
    document.getElementById("feedback").innerText = "Feil!";
  }

  document.getElementById("nextBtn").style.display = "block";
}

function nextQuestion() {
  current++;

  if (current < questions.length) {
    showQuestion();
  } else {
    endQuiz();
  }
}

function endQuiz() {
  document.getElementById("quiz-box").classList.add("hidden");
  document.getElementById("result-box").classList.remove("hidden");

  document.getElementById("score").innerText =
    username + ", poeng: " + score;
}