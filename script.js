let money = 0;
let factories = 0;
let factoryCost = 10;

// Load game state from local storage
const savedMoney = localStorage.getItem("money");
const savedFactories = localStorage.getItem("factories");

if (savedMoney !== null) {
    money = parseInt(savedMoney);
}

if (savedFactories !== null) {
    factories = parseInt(savedFactories);
}

function updateDisplay() {
    document.getElementById("money").textContent = money;
    document.querySelector("#factories button").textContent = `Buy Factory (Cost: $${factoryCost})`;
}

function clickEarth() {
    money += 1;
    updateDisplay();
    saveGameState();
}

function buyFactory() {
    if (money >= factoryCost) {
        money -= factoryCost;
        factories++;
        factoryCost *= 2;
        updateDisplay();
        saveGameState();

        // Automatically generate money from factories
        setInterval(function() {
            money += factories;
            updateDisplay();
            saveGameState();
        }, 1000);
    }
}

// Save game state to local storage
function saveGameState() {
    localStorage.setItem("money", money.toString());
    localStorage.setItem("factories", factories.toString());
}

updateDisplay();
