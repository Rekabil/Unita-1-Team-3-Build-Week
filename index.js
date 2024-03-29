function proceed(Clickevent) {
  Clickevent.preventDefault();
  const check = document.getElementById("promiseCheck").checked;
  console.log(check);
  if (check === true) {
    window.location.href = "Quiz.html";
  } else {
    alert("Accept the conditions to proceed");
  }
}

const quiz = [
  {
    category: "Science: Computers",
    type: "multiple",
    difficulty: "easy",
    question: "Which company was established on April 1st, 1976 by Steve Jobs, Steve Wozniak and Ronald Wayne?",
    correct_answer: "Apple",
    incorrect_answers: ["Microsoft", "Atari", "Commodore"],
  },
  {
    category: "Science: Computers",
    type: "multiple",
    difficulty: "easy",
    question: "According to the International System of Units, how many bytes are in a kilobyte of RAM?",
    correct_answer: "1000",
    incorrect_answers: ["512", "1024", "500"],
  },
  {
    category: "Science: Computers",
    type: "multiple",
    difficulty: "medium",
    question: "Whistler was the codename of this Microsoft Operating System.",
    correct_answer: "Windows XP",
    incorrect_answers: ["Windows 2000", "Windows 7", "Windows 95"],
  },
  {
    category: "Science: Computers",
    type: "multiple",
    difficulty: "medium",
    question:
      "Moore&#039;s law originally stated that the number of transistors on a microprocessor chip would double every...",
    correct_answer: "Year",
    incorrect_answers: ["Four Years", "Two Years", "Eight Years"],
  },
  {
    category: "Science: Computers",
    type: "multiple",
    difficulty: "medium",
    question: "What does AD stand for in relation to Windows Operating Systems? ",
    correct_answer: "Active Directory",
    incorrect_answers: ["Alternative Drive", "Automated Database", "Active Department"],
  },
  {
    category: "Science: Computers",
    type: "boolean",
    difficulty: "medium",
    question: "The very first recorded computer &quot;bug&quot; was a moth found inside a Harvard Mark II computer.",
    correct_answer: "True",
    incorrect_answers: ["False"],
  },
  {
    category: "Science: Computers",
    type: "multiple",
    difficulty: "easy",
    question: "The programming language &#039;Swift&#039; was created to replace what other programming language?",
    correct_answer: "Objective-C",
    incorrect_answers: ["C#", "Ruby", "C++"],
  },
  {
    category: "Science: Computers",
    type: "multiple",
    difficulty: "easy",
    question: "What amount of bits commonly equals one byte?",
    correct_answer: "8",
    incorrect_answers: ["1", "2", "64"],
  },
  {
    category: "Science: Computers",
    type: "multiple",
    difficulty: "easy",
    question: "Which computer hardware device provides an interface for all other connected devices to communicate?",
    correct_answer: "Motherboard",
    incorrect_answers: ["Central Processing Unit", "Hard Disk Drive", "Random Access Memory"],
  },
  {
    category: "Science: Computers",
    type: "multiple",
    difficulty: "easy",
    question:
      "In the programming language Java, which of these keywords would you put on a variable to make sure it doesn&#039;t get modified?",
    correct_answer: "Final",
    incorrect_answers: ["Static", "Private", "Public"],
  },
  {
    category: "Science: Computers",
    type: "multiple",
    difficulty: "easy",
    question:
      "The series of the Intel HD graphics generation succeeding that of the 5000 and 6000 series (Broadwell) is called:",
    correct_answer: "HD Graphics 500",
    incorrect_answers: ["HD Graphics 700 ", "HD Graphics 600", "HD Graphics 7000"],
  },
  {
    category: "Science: Computers",
    type: "multiple",
    difficulty: "medium",
    question: "The computer OEM manufacturer Clevo, known for its Sager notebook line, is based in which country?",
    correct_answer: "Taiwan",
    incorrect_answers: ["United States", "Germany", "China (People&#039;s Republic of)"],
  },
  {
    category: "Science: Computers",
    type: "multiple",
    difficulty: "medium",
    question: "Nvidia&#039;s headquarters are based in which Silicon Valley city?",
    correct_answer: "Santa Clara",
    incorrect_answers: ["Palo Alto", "Cupertino", "Mountain View"],
  },
  {
    category: "Science: Computers",
    type: "multiple",
    difficulty: "medium",
    question: "What did the name of the Tor Anonymity Network orignially stand for?",
    correct_answer: "The Onion Router",
    incorrect_answers: ["The Only Router", "The Orange Router", "The Ominous Router"],
  },
  {
    category: "Science: Computers",
    type: "multiple",
    difficulty: "medium",
    question: "What was the name given to Android 4.3?",
    correct_answer: "Jelly Bean",
    incorrect_answers: ["Lollipop", "Nutella", "Froyo"],
  },
  {
    category: "Science: Computers",
    type: "boolean",
    difficulty: "medium",
    question: "To bypass US Munitions Export Laws, the creator of the PGP published all the source code in book form. ",
    correct_answer: "True",
    incorrect_answers: ["False"],
  },
  {
    category: "Science: Computers",
    type: "multiple",
    difficulty: "medium",
    question: "On which day did the World Wide Web go online?",
    correct_answer: "December 20, 1990",
    incorrect_answers: ["December 17, 1996", "November 12, 1990", "November 24, 1995"],
  },
  {
    category: "Science: Computers",
    type: "multiple",
    difficulty: "easy",
    question: "What is the domain name for the country Tuvalu?",
    correct_answer: ".tv",
    incorrect_answers: [".tu", ".tt", ".tl"],
  },
  {
    category: "Science: Computers",
    type: "boolean",
    difficulty: "easy",
    question: "RAM stands for Random Access Memory.",
    correct_answer: "True",
    incorrect_answers: ["False"],
  },
  {
    category: "Science: Computers",
    type: "multiple",
    difficulty: "hard",
    question: "The internet domain .fm is the country-code top-level domain for which Pacific Ocean island nation?",
    correct_answer: "Micronesia",
    incorrect_answers: ["Fiji", "Tuvalu", "Marshall Islands"],
  },
  {
    category: "Science: Computers",
    type: "multiple",
    difficulty: "medium",
    question: "How many cores does the Intel i7-6950X have?",
    correct_answer: "10",
    incorrect_answers: ["12", "8", "4"],
  },
  {
    category: "Science: Computers",
    type: "multiple",
    difficulty: "medium",
    question: "In HTML, which non-standard tag used to be be used to make elements scroll across the viewport?",
    correct_answer: "&lt;marquee&gt;&lt;/marquee&gt;",
    incorrect_answers: ["&lt;scroll&gt;&lt;/scroll&gt;", "&lt;move&gt;&lt;/move&gt;", "&lt;slide&gt;&lt;/slide&gt;"],
  },
  {
    category: "Science: Computers",
    type: "multiple",
    difficulty: "hard",
    question:
      "Which of these was the name of a bug found in April 2014 in the publicly available OpenSSL cryptography library?",
    correct_answer: "Heartbleed",
    incorrect_answers: ["Shellshock", "Corrupted Blood", "Shellscript"],
  },
  {
    category: "Science: Computers",
    type: "multiple",
    difficulty: "easy",
    question: "In &quot;Hexadecimal&quot;, what color would be displayed from the color code? &quot;#00FF00&quot;?",
    correct_answer: "Green",
    incorrect_answers: ["Red", "Blue", "Yellow"],
  },
  {
    category: "Science: Computers",
    type: "multiple",
    difficulty: "easy",
    question: "What does LTS stand for in the software market?",
    correct_answer: "Long Term Support",
    incorrect_answers: ["Long Taco Service", "Ludicrous Transfer Speed", "Ludicrous Turbo Speed"],
  },
  {
    category: "Science: Computers",
    type: "multiple",
    difficulty: "medium",
    question: "How fast is USB 3.1 Gen 2 theoretically?",
    correct_answer: "10 Gb/s",
    incorrect_answers: ["5 Gb/s", "8 Gb/s", "1 Gb/s"],
  },
  {
    category: "Science: Computers",
    type: "boolean",
    difficulty: "medium",
    question: "The first dual-core CPU was the Intel Pentium D.",
    correct_answer: "False",
    incorrect_answers: ["True"],
  },
  {
    category: "Science: Computers",
    type: "multiple",
    difficulty: "medium",
    question: "Which of the following is a personal computer made by the Japanese company Fujitsu?",
    correct_answer: "FM-7",
    incorrect_answers: ["PC-9801", "Xmillennium ", "MSX"],
  },
  {
    category: "Science: Computers",
    type: "multiple",
    difficulty: "medium",
    question: ".rs is the top-level domain for what country?",
    correct_answer: "Serbia",
    incorrect_answers: ["Romania", "Russia", "Rwanda"],
  },
  {
    category: "Science: Computers",
    type: "multiple",
    difficulty: "medium",
    question: "What does the term GPU stand for?",
    correct_answer: "Graphics Processing Unit",
    incorrect_answers: ["Gaming Processor Unit", "Graphite Producing Unit", "Graphical Proprietary Unit"],
  },
  {
    category: "Science: Computers",
    type: "multiple",
    difficulty: "medium",
    question: "What was the first Android version specifically optimized for tablets?",
    correct_answer: "Honeycomb",
    incorrect_answers: ["Eclair", "Froyo", "Marshmellow"],
  },
  {
    category: "Science: Computers",
    type: "multiple",
    difficulty: "hard",
    question: "Which RAID array type is associated with data mirroring?",
    correct_answer: "RAID 1",
    incorrect_answers: ["RAID 0", "RAID 10", "RAID 5"],
  },
  {
    category: "Science: Computers",
    type: "multiple",
    difficulty: "hard",
    question: "What was the first company to use the term &quot;Golden Master&quot;?",
    correct_answer: "Apple",
    incorrect_answers: ["IBM", "Microsoft", "Google"],
  },
  {
    category: "Science: Computers",
    type: "multiple",
    difficulty: "easy",
    question: "How many values can a single byte represent?",
    correct_answer: "256",
    incorrect_answers: ["8", "1", "1024"],
  },
  {
    category: "Science: Computers",
    type: "boolean",
    difficulty: "medium",
    question:
      "Linus Sebastian is the creator of the Linux kernel, which went on to be used in Linux, Android, and Chrome OS.",
    correct_answer: "False",
    incorrect_answers: ["True"],
  },
  {
    category: "Science: Computers",
    type: "multiple",
    difficulty: "medium",
    question: "The name of technology company HP stands for what?",
    correct_answer: "Hewlett-Packard",
    incorrect_answers: ["Howard Packmann", "Husker-Pollosk", "Hellman-Pohl"],
  },
  {
    category: "Science: Computers",
    type: "multiple",
    difficulty: "hard",
    question: "What is the name given to layer 4 of the Open Systems Interconnection (ISO) model?",
    correct_answer: "Transport",
    incorrect_answers: ["Session", "Data link", "Network"],
  },
  {
    category: "Science: Computers",
    type: "multiple",
    difficulty: "easy",
    question: "Which programming language shares its name with an island in Indonesia?",
    correct_answer: "Java",
    incorrect_answers: ["Python", "C", "Jakarta"],
  },
  {
    category: "Science: Computers",
    type: "multiple",
    difficulty: "medium",
    question: "In programming, what do you call functions with the same name but different implementations?",
    correct_answer: "Overloading",
    incorrect_answers: ["Overriding", "Abstracting", "Inheriting"],
  },
  {
    category: "Science: Computers",
    type: "multiple",
    difficulty: "easy",
    question: "In computing, what does MIDI stand for?",
    correct_answer: "Musical Instrument Digital Interface",
    incorrect_answers: [
      "Musical Interface of Digital Instruments",
      "Modular Interface of Digital Instruments",
      "Musical Instrument Data Interface",
    ],
  },
  {
    category: "Science: Computers",
    type: "multiple",
    difficulty: "easy",
    question: "In computing, what does LAN stand for?",
    correct_answer: "Local Area Network",
    incorrect_answers: ["Long Antenna Node", "Light Access Node", "Land Address Navigation"],
  },
  {
    category: "Science: Computers",
    type: "multiple",
    difficulty: "hard",
    question: "According to DeMorgan&#039;s Theorem, the Boolean expression (AB)&#039; is equivalent to:",
    correct_answer: "A&#039; + B&#039;",
    incorrect_answers: ["A&#039;B + B&#039;A", "A&#039;B&#039;", "AB&#039; + AB"],
  },
  {
    category: "Science: Computers",
    type: "multiple",
    difficulty: "hard",
    question: "What major programming language does Unreal Engine 4 use?",
    correct_answer: "C++",
    incorrect_answers: ["Assembly", "C#", "ECMAScript"],
  },
  {
    category: "Science: Computers",
    type: "multiple",
    difficulty: "hard",
    question: "The acronym &quot;RIP&quot; stands for which of these?",
    correct_answer: "Routing Information Protocol",
    incorrect_answers: ["Runtime Instance Processes", "Regular Interval Processes", "Routine Inspection Protocol"],
  },
  {
    category: "Science: Computers",
    type: "multiple",
    difficulty: "hard",
    question: "Which of these is not a layer in the OSI model for data communications?",
    correct_answer: "Connection Layer",
    incorrect_answers: ["Application Layer", "Transport Layer", "Physical Layer"],
  },
  {
    category: "Science: Computers",
    type: "multiple",
    difficulty: "medium",
    question: "The teapot often seen in many 3D modeling applications is called what?",
    correct_answer: "Utah Teapot",
    incorrect_answers: ["Pixar Teapot", "3D Teapot", "Tennessee Teapot"],
  },
  {
    category: "Science: Computers",
    type: "multiple",
    difficulty: "hard",
    question: "What was the name of the first Bulgarian personal computer?",
    correct_answer: "IMKO-1",
    incorrect_answers: ["Pravetz 82", "Pravetz 8D", "IZOT 1030"],
  },
  {
    category: "Science: Computers",
    type: "multiple",
    difficulty: "hard",
    question: "What type of sound chip does the Super Nintendo Entertainment System (SNES) have?",
    correct_answer: "ADPCM Sampler",
    incorrect_answers: ["FM Synthesizer", "Programmable Sound Generator (PSG)", "PCM Sampler"],
  },
  {
    category: "Science: Computers",
    type: "multiple",
    difficulty: "hard",
    question: "Which of these Cherry MX mechanical keyboard switches is both tactile and clicky?",
    correct_answer: "Cherry MX Blue",
    incorrect_answers: ["Cherry MX Black", "Cherry MX Red", "Cherry MX Brown"],
  },
  {
    category: "Science: Computers",
    type: "multiple",
    difficulty: "hard",
    question: "Which kind of algorithm is Ron Rivest not famous for creating?",
    correct_answer: "Secret sharing scheme",
    incorrect_answers: ["Hashing algorithm", "Asymmetric encryption", "Stream cipher"],
  },
];
let insertnome = "";
let buttons = [];
let quest = [];
let qcount = null;
const leaderboardList = [];
function quizStart(eventClick) {
  let difficulty = document.getElementById("difficultySelect").value;
  qcount = document.getElementById("nQuestion").value;
  qcount = parseInt(qcount);
  insertnome = document.getElementById("insertName").value;
  if (insertnome !== "") {
    if (!isNaN(qcount)) {
      for (let i = 0; i < quiz.length; i++) {
        if (quiz[i].difficulty === difficulty && quest.length < qcount) {
          quest.push(quiz[i]);
        }
      }
      if (qcount > quest.length) {
        quest = [];
        alert("Surpassed the max number of questions");
      } else {
        document.getElementById("main").innerHTML += `<div class="quiz" id="begginingquiz"></div>`;
        document.getElementById("divdiff").remove();
        menuQuiz();
      }
    } else {
      alert("Choose the number of questions");
    }
  } else {
    alert("Insert Your Name");
  }
}

let index = 0;
let rispostegiuste = 0;
let c = 60;
let intervalID = null;
let chosenAnswer = [];
const countDown = () => {
  intervalID = setInterval(function () {
    document.getElementById(
      "countDown"
    ).innerHTML = `<div id=grafico></div><div class="textcenter chartcenter"><div><span>SECONDS</span>${c}<span>REMAINS</span></div></div>`;

    let pieChart = document.getElementById("grafico");
    let temporimasto = ((60 - c) * 360) / 60;
    pieChart.style.background =
      " conic-gradient(#99699D 0deg, #99699D " + temporimasto + "deg, #00FFFF " + temporimasto + "deg, #00FFFF 360deg)";
    c--;
    if (c < 0) {
      answer();
    }
  }, 1000);
};

function menuQuiz() {
  countDown();
  document.getElementById("begginingquiz").innerHTML += `<h3>${quest[index].question}</h3>`;
  if (quest[index].type === "multiple") {
    const risposte1 = [];

    risposte1.push(quest[index].correct_answer);
    for (let i = 0; i < 3; i++) {
      risposte1.push(quest[index].incorrect_answers[i]);
    }
    const risposte2 = risposte1.sort((a, b) => 0.5 - Math.random());
    for (let i = 0; i < 4; i++)
      document.getElementById(
        "begginingquiz"
      ).innerHTML += `<button class="risposta" onclick="select(event)" value="${risposte2[i]}">${risposte2[i]}</button>`;
  } else {
    document.getElementById(
      "begginingquiz"
    ).innerHTML += `<button class="risposta" onclick="select(event)" value="true">True</button>`;
    document.getElementById(
      "begginingquiz"
    ).innerHTML += `<button class="risposta" onclick="select(event)" value="false">False</button>`;
  }
  document.getElementById(
    "begginingquiz"
  ).innerHTML += `<button class="proceedbutton" onclick="answer(event)">PROCEED</button>`;
  document.getElementById("counter").innerHTML += `<p id="qid">QUESTION ${
    index + 1
  }<span class="totquestion"> / ${qcount}</span></p>`;
  buttons = document.querySelectorAll(".risposta");
}

function select(event) {
  buttons.forEach((btn) => {
    if (btn === event.target) {
      btn.classList.add("selected");
    } else {
      btn.classList.remove("selected");
    }
  });
}

function answer(eventClick) {
  clearInterval(intervalID);
  let risp = document.querySelector(".selected");

  if (risp != null) {
    chosenAnswer.push(risp.value);
    let rispostaSelect = risp.value;
    if (rispostaSelect === quest[index].correct_answer) {
      rispostegiuste += 1;
    }
  } else {
    chosenAnswer.push("TimedOut/No Answer");
  }
  index += 1;
  c = 60;
  document.getElementById("begginingquiz").innerHTML = "";
  document.getElementById("qid").remove();
  document.querySelector("#countDown").innerHTML = "";

  if (index < qcount) {
    menuQuiz();
  } else {
    let rispGiustePer = ((rispostegiuste / qcount) * 100).toFixed(2);
    let leaderobj = { name: insertnome, score: rispGiustePer };
    leaderboardList.push(leaderobj);
    document.getElementById("countDown").innerHTML = "";
    risultati();
  }
}

function risultati() {
  let rispGiustePer = ((rispostegiuste / qcount) * 100).toFixed(1);
  let rispsbagliatePer = (((qcount - rispostegiuste) / qcount) * 100).toFixed(1);
  document.getElementById("begginingquiz").innerHTML = "";

  document.getElementById("begginingquiz").innerHTML += `<h1>Results</h1>`;
  document.getElementById("begginingquiz").innerHTML += `<h2>The summery of your anwsers</h2>`;
  document.getElementById(
    "begginingquiz"
  ).innerHTML += `<div id="results" class="results"><h3>Correct </br>${rispGiustePer}%</br><span>${rispostegiuste}/${qcount} questions</span></h3> </div>`;

  if (rispostegiuste > qcount / 2) {
    document.getElementById("results").innerHTML +=
      "<div id='chart'></div><div class='congratulcenter'>Congratulations!</br></br><span class='blue'>You passed the exam.</span></br></br>We'll send you the certificate</br> in few minutes.</br>Check your email(including </br>/promotions span folder)</div>";
  } else {
    document.getElementById("results").innerHTML +=
      "<div id='chart'></div><div class='textcenter'>We are sorry</br></br><span class='blue'>You didn't pass the exam<span></div>";
  }
  document.getElementById("results").innerHTML += `<h3>Wrong</br>${rispsbagliatePer}%</br><span>${
    qcount - rispostegiuste
  }/${qcount} questions</span></h3>`;
  document.getElementById(
    "begginingquiz"
  ).innerHTML += `<button class="btn" onclick="window.location.href='/feedback.html'">FEEDBACK</button>`;
  document.getElementById(
    "begginingquiz"
  ).innerHTML += `<button class="btn" onclick="viewQuestions(event)">VIEW YOUR ANSWERS</button>`;
  document.getElementById(
    "begginingquiz"
  ).innerHTML += `<button class="btn" onclick="leaderboard(event)"><img src="assets/award-solid.svg" alt=""></button>`;
  document.getElementById(
    "begginingquiz"
  ).innerHTML += `<button class="btn" onclick="retry(event)"><img src="assets/redo-solid.svg" alt=""></button>`;
  let ctx = document.getElementById("chart");
  let chartRisultati = ((qcount - rispostegiuste) * 360) / qcount;
  ctx.style.background =
    "conic-gradient(#B51289 0deg,#B51289 " +
    chartRisultati +
    "deg,   #00FFFF " +
    chartRisultati +
    "deg,  #00FFFF 360deg)";
}

function viewQuestions(clickEvent) {
  document.getElementById("begginingquiz").innerHTML = "";
  document.getElementById("begginingquiz").innerHTML += "<h1>Your Answers:</h1>";
  document.getElementById("begginingquiz").innerHTML += `<div id="quizAnswer"></div>`;
  for (let i = 0; i < quest.length; i++) {
    document.getElementById("quizAnswer").innerHTML += `<h4 class="question">${quest[i].question}</h4>`;
    document.getElementById(
      "quizAnswer"
    ).innerHTML += `<p class="Answer">The Correct Answer is : ${quest[i].correct_answer},</p>`;
    if (quest[i].correct_answer === chosenAnswer[i]) {
      document.getElementById("quizAnswer").innerHTML += `<p class="correct Answer"> And you were Correct</p>`;
    } else {
      document.getElementById(
        "quizAnswer"
      ).innerHTML += `<p class="wrong Answer"> But You Answered: ${chosenAnswer[i]}`;
    }
  }
  document.getElementById(
    "begginingquiz"
  ).innerHTML += `</br><button class="bluebutton" onclick="risultati(event)">GO BACK</button>`;
}

function rating(clickEvent) {
  clickEvent.preventDefault();
  const stars = document.querySelectorAll(".star");
  const divstar = document.querySelector(".rating");
  if (clickEvent.target !== divstar) {
    for (let i = 0; i < stars.length; i++) {
      stars[i].classList.remove("ratingselect");
    }
    for (let i = 0; i < stars.length; i++) {
      if (stars[i] === clickEvent.target) {
        stars[i].classList.add("ratingselect");
        return;
      } else {
        stars[i].classList.add("ratingselect");
      }
    }
  }
}

function leaderboard(clickEvent) {
  document.getElementById("begginingquiz").innerHTML = "";
  document.getElementById(
    "begginingquiz"
  ).innerHTML += `<h1 class="leaderboardtitle">Leaderboard</h1><div id="leaderboardcontainer"></div>`;
  leaderboardList.sort((a, b) => {
    return b.score - a.score;
  });
  for (let i = 0; i < leaderboardList.length; i++) {
    document.getElementById(
      "leaderboardcontainer"
    ).innerHTML += `<div class="leadRow"><div class="leadName">${leaderboardList[i].name}</div><div class="score">Score: ${leaderboardList[i].score}%</div></div>`;
  }
  document.getElementById(
    "begginingquiz"
  ).innerHTML += `</br><button class="bluebutton" onclick="risultati(event)">GO BACK</button>`;
}

function retry() {
  index = 0;
  rispostegiuste = 0;
  buttons = [];
  quest = [];
  qcount = null;
  document.getElementById("main").innerHTML = "";
  document.getElementById("main").innerHTML += ` <div id="divdiff">
  <label>Who is doing the Quiz?</label><br />
  <input class="inputname" id="insertName" type="text" placeholder="Insert your name here" /><br />
  <h3 class="quiztitle">Select your difficulty:</h3>
  <br />
  <select class="diffselect" name="diff" id="difficultySelect">
    <option value="easy">EASY max 15 questions</option>
    <option value="medium">MEDIUM max 22 questions</option>
    <option value="hard">HARD max 13 questions</option>
  </select>
  <br /><br /><br />
  <div>
    <label>Insert the number of questions:</label><br />
    <input id="nQuestion" class="inputnumber" type="number" placeholder="10" /><br />
    <button class="bluebutton rightalign" onclick="quizStart(event)">PROCEED</button>
  </div>
</div>`;
}
