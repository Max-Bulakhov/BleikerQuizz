let questions = [
  {
    question: "Hvilket styresett har Norge?",
    answers: ["Republikk","Militærstyre","Konstitusjonelt monarki","Diktatur"],
    correct: 2
  },
  {
    question: "Hvem er Norges konge?",
    answers: ["Harald V","Olav V","Haakon VII","Frederik X"],
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
    question: "Hva betyr 'likestilling'?",
    answers: [
      "Alle skal tjene like mye",
      "Kvinner og menn skal ha samme rettigheter og muligheter",
      "Alle skal ha samme jobb",
      "Alle skal bo på samme sted"
    ],
    correct: 1
  },
  {
    question: "Hvilket fag er vanlig?",
    answers: ["Norsk","Astronaut-trening","Militær-trening","Dyrepass"],
    correct: 0
  },
  {
    question: "Hva betyr 'dugnad'?",
    answers: [
      "Frivillig arbeid for fellesskapet",
      "Mat",
      "Eksamen",
      "Sport"
    ],
    correct: 0
  },
  {
    question: "Arbeidstid i Norge?",
    answers: ["20 timer","37,5 timer","50 timer","60 timer"],
    correct: 1
  },
  {
    question: "Hva er ytringsfrihet?",
    answers: [
      "Reise fritt",
      "Si mening uten straff",
      "Gratis skole",
      "Rett til arbeid"
    ],
    correct: 1
  },
  {
    question: "Hva er en kommune?",
    answers: [
      "Skole",
      "Lokal administrasjon",
      "Organisasjon",
      "Bedrift"
    ],
    correct: 1
  },

  {
    question: "Hva er riktig?",
    video: "../video/VideoQuiz.mp4",
    answers: [
      "kokken har lamme lår",
      "ananas ringer i salaten",
      "det er godt med isbiter"
    ],
    correct: 2
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

  let videoContainer = document.getElementById("video-container");
  videoContainer.innerHTML = "";

  if (q.video) {
    let video = document.createElement("video");
    video.src = q.video;
    video.controls = true;
    videoContainer.appendChild(video);
  }

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
    document.getElementById("quiz-box").classList.add("hidden");
    document.getElementById("result-box").classList.remove("hidden");
    document.getElementById("score").innerText =
      username + ", poeng: " + score;
  }
}