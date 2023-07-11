/*
the page loads on the welcome div that has a header and 3 buttons,
clicking on a category button should hide the welcome div and show,
the div that has the required elements, then on questions there is,
a timer of setInterval starts and a question and there will be 4 ans,
buttons and a go to next question button that goes to the next div,
restart the timer and increment the index if timer reaches 0 the next,
button gets invoked after choosing ans he will click next which will,
check if the ans was correct or not and if his ans was correct the,
score variable will get incremented, there will be another 4 qs and,
after he finishes the result div shows and tells him his score and a,
button that restarts the game.
*/

// selecting body:-

const body = document.querySelector("body");

// declaring needed variables:-

let QI = 0;

let scoreSum = 0;

let chosenCategory;

let currentPick;

let timer = 10;

let interval;


// welcome div:-

const wlc = document.createElement("div");
wlc.id = "wlc";
body.append(wlc);

const wlcTitle = document.createElement("h1");
wlcTitle.id = "wlc-title"
wlcTitle.innerText = "Choose Category";
wlc.append(wlcTitle);

const btnDiv = document.createElement("div");
btnDiv.id = "wlc-buttons";
wlc.append(btnDiv);

const geoButton = document.createElement("button");
geoButton.id = "geo";
geoButton.innerText = "Geography";
btnDiv.append(geoButton);

const historyButton = document.createElement("button");
historyButton.id = "history";
historyButton.innerText = "History";
btnDiv.append(historyButton);

const fbButton = document.createElement("button");
fbButton.id = "fb";
fbButton.innerText = "Football";
btnDiv.append(fbButton);

// creating needed divisions:-

// end div:-

const endDiv = document.createElement("div");
endDiv.id = "end";
body.append(endDiv);
const endResult = document.createElement("h1");
endResult.id = "endHead";
endDiv.append(endResult);
const yourScore = document.createElement("h3");
yourScore.id = "endScore";
endDiv.append(yourScore);
endDiv.style.display = "none";

// geo:-

const geoDiv = document.createElement("div");
geoDiv.id = "geo1";
body.append(geoDiv);
const geoQuest = document.createElement("h1");
geoQuest.id = "geo1q";
geoDiv.append(geoQuest);
const geoTimer = document.createElement("h5");
geoTimer.className = "timeLeft";
geoDiv.append(geoTimer);
const geoButtonDiv = document.createElement("div");
geoButtonDiv.id = "geoAns";
geoDiv.append(geoButtonDiv);
geoDiv.style.display = "none";


// history:-

const historyDiv = document.createElement("div");
historyDiv.id = "history1";
body.append(historyDiv);
const historyQuest = document.createElement("h1");
historyQuest.id = "history1q";
historyDiv.append(historyQuest);
const historyTimer = document.createElement("h5");
historyTimer.className = "timeLeft";
historyDiv.append(historyTimer);
const historyButtonDiv = document.createElement("div");
historyButtonDiv.id = "historyAns";
historyDiv.append(historyButtonDiv);
historyDiv.style.display = "none";

// football:-

const fbDiv = document.createElement("div");
fbDiv.id = "fb1";
body.append(fbDiv);
const fbQuest = document.createElement("h1");
fbQuest.id = "fb1q";
fbDiv.append(fbQuest);
const fbTimer = document.createElement("h5");
fbTimer.className = "timeLeft";
fbDiv.append(fbTimer);
const fbButtonDiv = document.createElement("div");
fbButtonDiv.id = "fbAns";
fbDiv.append(fbButtonDiv);
fbDiv.style.display = "none";

// setting up the timer:-

const startTimer = () => {
  interval = setInterval(() => {
    if (timer <= 0) {
      nextByTimer(chosenCategory, currentPick)
    }
    else {
      timer -= 1;
      geoTimer.innerText = `${timer}s left`;
      historyTimer.innerText = `${timer}s left`;
      fbTimer.innerText = `${timer}s left`;
    }
  }, 1000);
};

const nextByTimer = (cb, cb2) => {
  if (QI >= cb2.length - 1) {
    clearInterval(interval);
    endScreen();
    QI = 0;
    scoreSum = 0;
  }
  else {
    timer = 10;
    QI += 1;
    clearInterval(interval);
    startTimer();
    cb();
  }
};

// clicking on play again Button at end screen:-

const restart = () => {
  endDiv.style.display = "none";
  wlc.style.display = "block";
  QI = 0;
  scoreSum = 0;
  timer = 10;
};


// to end screen:-

const endScreen = () => {
  geoDiv.style.display = "none";
  historyDiv.style.display = "none";
  fbDiv.style.display = "none";
  endDiv.style.display = "block";
    if (scoreSum > 2) {
      endResult.innerText = "You Passed!";
    }
    else {
      endResult.innerText = "You Failed :(";
    }
  yourScore.innerText = `Your score: ${scoreSum} out of 5`;
};

// creating play again button:-

const restartBtn = document.createElement("button");
restartBtn.id = "again";
endDiv.append(restartBtn);
restartBtn.innerText = "Play Again";
restartBtn.addEventListener("click", restart);

// geo data:-

const geoQuests = [
    {
      id: 1,
      q: "The Strait of Gibraltar separates the Iberian Peninsular from which African country?",
      ans: ["Tunisia", "Morocco", "South africa", "Senegal"],
      correctAns: "Morocco",
    },
    {
      id: 2,
      q: "Astana is the capital city of which country?",
      ans: ["Indonesia", "Uruguay", "Kazakhstan", "Iran"],
      correctAns: "Kazakhstan",
    },
    {
      id: 3,
      q: "Which city currently has the highest population in the world?",
      ans: ["Hong kong", "New Delhi", "New York", "Tokyo"],
      correctAns: "Tokyo",
    },
    {
      id: 4,
      q: "What is the name of the microstate located between Spain and France?",
      ans: ["Andorra", "Liechtenstein", "Luxembourg", "Vatican"],
      correctAns: "Andorra",
    },
    {
      id: 5,
      q: "What is the largest desert in the world?",
      ans: ["GOBI Desert", "Kalahari Desert", "Antarctica", "Sahara"],
      correctAns: "Antarctica",
    },
  ];


// choosing geography:-

const geoPick = () => {
  wlc.style.display = "none";
  geoDiv.style.display = "block";
  geoButtonDiv.innerHTML = "";
  chosenCategory = geoPick;
  currentPick = geoQuests;
  geoQuest.innerText = geoQuests[QI].q
  clearInterval(interval);
  startTimer();
  geoQuests[QI].ans.forEach((elem) => {
    const btn = document.createElement("button");
    geoButtonDiv.append(btn);
    btn.innerText = elem;
    btn.className = "geoButtons";
    btn.addEventListener("click", () => {
      if (btn.innerText === geoQuests[QI].correctAns) {
        scoreSum += 1
        btn.style.backgroundColor = "green";
      }
      else {
        btn.style.backgroundColor = "red";
      }
    });
  });
};

// clicking on next button at geography's category:-

const next1 = document.createElement("button")
next1.className = "nextButton";
next1.innerText = "Next Question";
geoDiv.append(next1);
next1.addEventListener("click", () => {
  clearInterval(interval);
  timer = 10;
  geoTimer.innerText = `${timer}s left`;
  startTimer();
  if (QI >= geoQuests.length - 1) {
    endScreen();
  }
  else {
    QI += 1;
    geoPick();
  }
});

// clicking on geography button in the welcome screen:-

geoButton.addEventListener("click", geoPick);


// history data:-

const historyQuests = [
    {
      id: 1,
      q: "Who was the first human to travel into space?",
      ans: ["Neil Armstrong", "John Glenn", "Yuri Gagarin", "Alan Shepard"],
      correctAns: "Yuri Gagarin",
    },
    {
      id: 2,
      q: "Who was the first President of the United States?",
      ans: ["Abraham Lincoln", "George Washington", "Ronald Reagan", "Franklin Roosevelt"],
      correctAns: "George Washington",
    },
    {
      id: 3,
      q: "What was the final battle of the Napoleonic Wars?",
      ans: ["Battle of Marengo", "Battle of Borodino", "Battle of Trafalgar", "The Battle of Waterloo"],
      correctAns: "The Battle of Waterloo",
    },
    {
      id: 4,
      q: "Who served as the final leader of the Soviet Union?",
      ans: ["Mikhail Gorbachev", "Joseph Stalin", "Vladimir Lenin", "Konstantin Chernenko"],
      correctAns: "Mikhail Gorbachev",
    },
    {
      id: 5,
      q: "Who is credited with inventing the telephone?",
      ans: ["Alessandro Volta", "James Watt", "Alexander Graham Bell", "Benjamin Franklin"],
      correctAns: "Alexander Graham Bell",
    },
  ];

// choosing history:-

const historyPick = () => {
  wlc.style.display = "none";
  historyDiv.style.display = "block";
  historyButtonDiv.innerHTML = "";
  chosenCategory = historyPick;
  currentPick = historyQuests;
  historyQuest.innerText = historyQuests[QI].q;
  clearInterval(interval);
  startTimer();
  historyQuests[QI].ans.forEach((elem) => {
  const btn = document.createElement("button");
  historyButtonDiv.append(btn);
  btn.innerText = elem;
  btn.className = "historyButtons";
  btn.addEventListener("click", () => {
    if (btn.innerText === historyQuests[QI].correctAns) {
      scoreSum += 1
      btn.style.backgroundColor = "green";
    }
    else {
      btn.style.backgroundColor = "red";
    }
    });
  });
};

// clicking on next button at history's category:-

const next2 = document.createElement("button");
next2.className = "nextButton";
next2.innerText = "Next Question";
historyDiv.append(next2);
next2.addEventListener("click", () => {
  clearInterval(interval);
  timer = 10;
  historyTimer.innerText = `${timer}s left`;
  startTimer();
  if (QI >= historyQuests.length - 1) {
    endScreen();
  }
  else {
    QI += 1;
    historyPick();
  }
});

// clicking on history button in the welcome screen:-

historyButton.addEventListener("click", historyPick);


// football data:-

const fbQuests = [
    {
      id: 1,
      q: "Who is the youngest player to ever score in a World Cup tournament?",
      ans: ["Gavi", "Lionel Messi", "Pelé", "Mbappe"],
      correctAns: "Pelé",
    },
    {
      id: 2,
      q: "Which player was known as The Divine Ponytail?",
      ans: ["Ruben Neves", "Roberto Baggio", "Zlatan Ibrahimovic", "Gareth Bale"],
      correctAns: "Roberto Baggio",
    },
    {
      id: 3,
      q: "Which stadium is known as The Theatre of Dreams?",
      ans: ["Stamford Bridge", "Camp Nou", "Santiago Bernabeu", "Manchester United"],
      correctAns: "Manchester United",
    },
    {
      id: 4,
      q: "In which year was the Video Assistant Referee (VAR) system first introduced in official competitions?",
      ans: ["2017", "2019", "2020", "2014"],
      correctAns: "2017",
    },
    {
      id: 5,
      q: "Which player holds the record for the most goals scored in a single Premier League season?",
      ans: ["Cristiano Ronaldo", "Luis Suarez", "Erling Haaland", "Kun Aguero"],
      correctAns: "Erling Haaland",
    },
  ];

// choosing football:-

const fbPick = () => {
  wlc.style.display = "none";
  fbDiv.style.display = "block";
  fbButtonDiv.innerHTML = "";
  chosenCategory = fbPick;
  currentPick = fbQuests;
  fbQuest.innerText = fbQuests[QI].q;
  clearInterval(interval);
  startTimer();
  fbQuests[QI].ans.forEach((elem) => {
    const btn = document.createElement("button");
    fbButtonDiv.append(btn);
    btn.innerText = elem;
    btn.className = "geoButtons";
    btn.addEventListener("click", () => {
      if (btn.innerText === fbQuests[QI].correctAns) {
        scoreSum += 1
        btn.style.backgroundColor = "green";
      }
      else {
        btn.style.backgroundColor = "red";
      }
    });
  });
};  

// clicking on next button at football's category:-

const next3 = document.createElement("button");
next3.className = "nextButton";
next3.innerText = "Next Question";
fbDiv.append(next3);
next3.addEventListener("click", () => {
  clearInterval(interval);
  timer = 10;
  fbTimer.innerText = `${timer}s left`;
  startTimer();
  if (QI >= fbQuests.length - 1) {
    endScreen();
  }
  else {
    QI += 1;
    fbPick();
  }
});

// clicking on football button in the welcome screen:-

fbButton.addEventListener("click", fbPick);