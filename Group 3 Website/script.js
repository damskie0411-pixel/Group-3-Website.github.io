// Game state
let enemyHero = null;
let score = 0;
let lives = 3;
let roundLocked = false;

// ================= CREATE PLAYER CARD =================
function createPlayerCard(hero) {
  const card = document.createElement("div");
  card.className = "card disabled"; // start disabled

  card.innerHTML = `
    <div class="card-inner">
      <div class="card-front">❓</div>
      <div class="card-back">
        <img src="${hero.images}" alt="${hero.name}">
        <h3>${hero.name}</h3>
        <p>${hero.description}</p>
      </div>
    </div>
  `;

  // Auto flip
  setTimeout(() => {
    card.classList.add("flipped");
  }, 400);

  // Enable click AFTER flip finishes
  setTimeout(() => {
    card.classList.remove("disabled");
  }, 400 + 800); // match CSS transition time

  card.onclick = () => {
    if (card.classList.contains("disabled")) return;
    if (roundLocked) return;

    roundLocked = true;
    checkCounter(hero.name);

    setTimeout(() => {
      roundLocked = false;
      startGame();
    }, 800);
  };

  return card;
}

// ================= START GAME / NEW ROUND =================
function startGame() {
  document.getElementById("result").textContent = "";

  const enemyCardDiv = document.getElementById("enemyCard");
  const playerCardsDiv = document.getElementById("playerCards");
  playerCardsDiv.innerHTML = "";

  // pick enemy
  enemyHero = heroes[Math.floor(Math.random() * heroes.length)];

  enemyCardDiv.innerHTML = `
    <h2>Enemy</h2>
    <h3>${enemyHero.name}</h3>
    <p>${enemyHero.description}</p>
    <img src="${enemyHero.images}">
  `;

  const numberOfCards = 5;
  const usedNames = new Set([enemyHero.name]);

  // pick 1–2 counters
  const counterCount = Math.random() < 0.5 ? 1 : 2;
  const shuffledCounters = [...enemyHero.counters].sort(() => 0.5 - Math.random());
  const chosenCounters = shuffledCounters.slice(0, counterCount);

  chosenCounters.forEach(name => {
    const hero = heroes.find(h => h.name === name);
    if (!hero) return;

    usedNames.add(hero.name);
    playerCardsDiv.appendChild(createPlayerCard(hero));
  });

  // fill remaining cards
  while (playerCardsDiv.children.length < numberOfCards) {
    let hero;
    do {
      hero = heroes[Math.floor(Math.random() * heroes.length)];
    } while (usedNames.has(hero.name));

    usedNames.add(hero.name);
    playerCardsDiv.appendChild(createPlayerCard(hero));
  }
}

// ================= CHECK PICK =================
function checkCounter(selectedName) {
  if (enemyHero.counters.includes(selectedName)) {
    score++;
    document.getElementById("result").textContent = "✅ Correct Counter!";
  } else {
    lives--;
    document.getElementById("result").textContent = "❌ Wrong Pick!";
  }

  document.getElementById("score").textContent = score;
  document.getElementById("lives").textContent = lives;

  // lose
  if (lives <= 0) {
    document.getElementById("finalScore").textContent = "Final Score: " + score;
    document.getElementById("gameOver").style.display = "block";
  }

  // win
  if (score >= 3) {
    document.getElementById("winScore").textContent = score;
    document.getElementById("winScreen").style.display = "block";
  }
}

// ================= RESET GAME =================
function resetGame() {
  score = 0;
  lives = 3;

  document.getElementById("score").textContent = score;
  document.getElementById("lives").textContent = lives;
  document.getElementById("result").textContent = "";

  document.getElementById("gameOver").style.display = "none";
  document.getElementById("winScreen").style.display = "none";

  startGame();
}

// ================= START BUTTON =================
document.getElementById("startButton").onclick = () => {
  document.getElementById("startScreen").style.display = "none";
  startGame();
   const music = document.getElementById("bgMusic");
  music.play().catch(e => console.log("Autoplay blocked:", e));
    console.log("Game Started!");
    // Change volume (0 to 1)
  music.volume = 0.5;
};

