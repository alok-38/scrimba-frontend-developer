let fighters = ["🐉", "🐥", "🐊", "💩", "🦍", "🐢", "🐩", "🦭", "🦀", "🐝", "🤖", "🐘", "🐸", "🕷", "🐆", "🦕", "🦁"];

let stageEl = document.getElementById("stage");
let fightButton = document.getElementById("fightButton");

fightButton.addEventListener("click", function () {
    // Pick two random fighters
    let fighter1 = getRandomFighter();
    let fighter2 = getRandomFighter();

    // Display the fighters on the stage
    displayFighters(fighter1, fighter2);
});

function getRandomFighter() {
    let randomIndex = Math.floor(Math.random() * fighters.length);
    return fighters[randomIndex];
}

function displayFighters(fighter1, fighter2) {
    // Clear previous content on the stage
    stageEl.innerHTML = "";

    // Create and append a new div with the selected fighters
    let fightersDiv = document.createElement("div");
    fightersDiv.textContent = `${fighter1} vs ${fighter2}`;
    stageEl.appendChild(fightersDiv);
}
