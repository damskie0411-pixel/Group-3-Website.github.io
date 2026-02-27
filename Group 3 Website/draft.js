const synergyPairs = [
["Atlas","Pharsa"],
["Tigreal","Odette"],
["Khufra","Lylia"],
["Angela","Ling"],
["Angela","Fanny"],
["Mathilda","Gusion"],
["Estes","Uranus"],
["Cecilion","Carmilla"]
];

const blueTeam = [];
const redTeam = [];

window.onload = () => {
    heroes.forEach(h=>{
        blueSelect.innerHTML += `<option>${h}</option>`;
        redSelect.innerHTML  += `<option>${h}</option>`;
    });
};

function addHero(side){
    const hero = (side === "blue" ? blueSelect : redSelect).value;

    if(blueTeam.includes(hero) || redTeam.includes(hero)){
        alert("Hero already picked");
        return;
    }

    if(side === "blue" && blueTeam.length < 5){
        blueTeam.push(hero);
    }
    if(side === "red" && redTeam.length < 5){
        redTeam.push(hero);
    }
    renderPicks();
}

function addPick(hero){
  const container = document.getElementById("draftPicks");

  const card = document.createElement("div");
  card.className = "pick-card";

  card.innerHTML = `
    <img src="role/mid.jpg" onerror="this.src='images/${hero}.jfif'">
    <p>${hero}</p>
  `;

  container.appendChild(card);
}

function renderPicks(){
    bluePicks.innerHTML = blueTeam.map(h=>`<div>${h}</div>`).join("");
    redPicks.innerHTML = redTeam.map(h=>`<div>${h}</div>`).join("");
}

function analyzeDraft(){
    let blueScore = 0, redScore = 0;
    let reasons = [];

    blueTeam.forEach(b=>{
        redTeam.forEach(r=>{
            if(counters[r].includes(b)) redScore += 2;
            if(counters[b].includes(r)) blueScore += 2;
        });
    });

    synergyPairs.forEach(pair=>{
        if(pair.every(h=>blueTeam.includes(h))){
            blueScore += 3;
            reasons.push(`Blue synergy: ${pair.join(" + ")}`);
        }
        if(pair.every(h=>redTeam.includes(h))){
            redScore += 3;
            reasons.push(`Red synergy: ${pair.join(" + ")}`);
        }
    });

    let winner = "Draw";
    if(blueScore > redScore) winner = "Blue Team Advantage";
    if(redScore > blueScore) winner = "Red Team Advantage";

    draftResult.innerHTML = `
        <b>${winner}</b><br>
        Blue Score: ${blueScore} | Red Score: ${redScore}<br><br>
        ${reasons.join("<br>")}
    `;
}

