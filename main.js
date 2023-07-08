/*
the page loads on the welcome div that has header and 3 buttons and all,
of them are styled, clicking on a category button should hide wlc div,
and show the div that has the required elements, then on questions,
there is a timer of setInterval starts and a quest there will be 4 ans,
buttons, the next div and restart the timer, if timer reaches 0 it will go,
to the next div and gives that quest score 0 as if he did wrong after,
choosing ans there will be another 4 qs and after he finishes the result,
div shows and a 
*/

// selecting body:-

const body = document.querySelector("body")

// declaring the score variable:-

let scoreSum = 0

// adding event listeners to home page buttons:-

const geoBtn = document.getElementById("geo")
const historyBtn = document.getElementById("history")
const fbBtn = document.getElementById("fb")


// selecting divisions in html

const wlc = document.getElementById("wlc")





// creating needed divisions:-

// end Div:-

const endDiv = document.createElement("div");
endDiv.id = "end"
body.append(endDiv);

// geo:-

const geoDiv1 = document.createElement("div");
geoDiv1.id = "geo1"
body.append(geoDiv1);

const geoDiv2 = document.createElement("div");
geoDiv2.id = "geo2"
body.append(geoDiv2);

const geoDiv3 = document.createElement("div");
geoDiv3.id = "geo3"
body.append(geoDiv3);

const geoDiv4 = document.createElement("div");
geoDiv4.id = "geo4"
body.append(geoDiv4);

const geoDiv5 = document.createElement("div");
geoDiv5.id = "geo5"
body.append(geoDiv5);


// history:-



// football:-



// geo data:-

const geoQuests = [`The Strait of Gibraltar separates the Iberian Peninsular from which African country?`, `Astana is the capital city of which country?`, `Which city currently has the highest population in the world?`, `What is the name of the microstate located between Spain and France?`, `What is the largest desert in the world?`]

const geoAns = {
    quest1Ans: [`Tunisia`, `Morocco`, `South africa`, `Senegal`],
    quest2Ans: [`Indonesia`, `Uruguay`, `Kazakhstan`, `Iran`],
    quest3Ans: [`Hong kong`, `New Delhi`, `New York`, `Tokyo`],
    quest4Ans: [`Andorra`, `Liechtenstein`, `Luxembourg`, `Vatican`],
    quest5Ans: [`GOBI Desert`,`Kalahari Desert`,`Antarctica`,`Sahara`],
};

const {quest1Ans, quest2Ans, quest3Ans, quest4Ans, quest5Ans} = geoAns

// choosing geography:-

const geographyPick = () => {
    wlc.style.display = "none"
    const geoQ1 = document.createElement("h1");
    geoQ1.id = "geo1q"
    geoQ1.innerText = geoQuests[0]
    geoDiv1.append(geoQ1);
    const geoA1 = document.createElement("div");
    geoA1.id = "geo1a"
    geoDiv1.append(geoA1);
    quest1Ans.forEach((elem) => {
        const btn = document.createElement("button");
        btn.style.display = "block"
        geoA1.append(btn);
        btn.innerText = elem
        btn.className = "geo1Buttons"
        btn.addEventListener("click", geoQ2);
    })
};

geoBtn.addEventListener("click", geographyPick)

// to geo q2:-

const geoQ2 = () => {
    geoDiv1.style.display = "none"
    const geoQ2 = document.createElement("h1");
    geoQ2.id = "geo2q"
    geoQ2.innerText = geoQuests[1]
    geoDiv2.append(geoQ2);
    const geoA2 = document.createElement("div");
    geoA2.id = "geo2a"
    geoDiv2.append(geoA2);
    quest2Ans.forEach((elem) => {
        const btn = document.createElement("button");
        btn.style.display = "block"
        geoA2.append(btn);
        btn.innerText = elem
        btn.className = "geo2Buttons"
        btn.addEventListener("click", geoQ3);
    })
};

// to geo q3:-

const geoQ3 = () => {
    geoDiv2.style.display = "none"
    const geoQ3 = document.createElement("h1")
    geoQ3.id = "geo3q"
    geoQ3.innerText = geoQuests[2]
    geoDiv3.append(geoQ3);
    const geoA3 = document.createElement("div")
    geoA3.id = "geo3a"
    geoDiv3.append(geoA3);
    quest3Ans.forEach((elem) => {
        const btn = document.createElement("button");
        btn.style.display = "block"
        geoA3.append(btn);
        btn.innerText = elem
        btn.className = "geo3Buttons"
        btn.addEventListener("click", geoQ4);
    })
};

// to geo q4:-

const geoQ4 = () => {
    geoDiv3.style.display = "none"
    const geoQ4 = document.createElement("h1");
    geoQ4.id = "geo4q"
    geoQ4.innerText = geoQuests[3]
    geoDiv4.append(geoQ4);
    const geoA4 = document.createElement("div");
    geoA4.id = "geo4a"
    geoDiv4.append(geoA4);
    quest4Ans.forEach((elem) => {
        const btn = document.createElement("button");
        btn.style.display = "block"
        geoA4.append(btn);
        btn.innerText = elem
        btn.className = "geo4Buttons"
        btn.addEventListener("click", geoQ5);
    })
};

// to geo q5:-

const geoQ5 = () => {
    geoDiv4.style.display = "none"
    const geoQ5 = document.createElement("h1");
    geoQ5.id = "geo5q"
    geoQ5.innerText = geoQuests[4]
    geoDiv5.append(geoQ5);
    const geoA5 = document.createElement("div");
    geoA5.id = "geo5a"
    geoDiv5.append(geoA5);
    quest5Ans.forEach((elem) => {
        const btn = document.createElement("button");
        btn.style.display = "block"
        geoA5.append(btn);
        btn.innerText = elem
        btn.className = "geo5Buttons"
        btn.addEventListener("click", endScreen);
    })
};

// to end screen:-



// choosing history:-


// choosing football:-


// to end screen:-

const endScreen = () => {
    geoDiv5.style.display = "none"
    historyDiv5.style.display = "none"
    fbDiv5.style.display = "none"
    const endResult = document.createElement("h1");
    endResult.id = "endHead"
    endDiv.append(endResult);
    if (scoreSum > 2) {
        endResult.innerText = "You Passed!"
    }
    else {
        endResult.innerText = "You Failed :("
    }
    const yourScore = document.createElement("h3");
    yourScore.id = "endScore"
    yourScore.innerText = `Your score: ${scoreSum} from 5`
};


