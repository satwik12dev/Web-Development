document.addEventListener("DOMContentLoaded", function () {

// Declare the counter
let count = 0;

// Use element variables
const countEl = document.getElementById("count");
const msgEl = document.getElementById("message");
const btnPlus = document.getElementById("btnPlus");
const btnMinus = document.getElementById("btnMinus");
const btnReset = document.getElementById("btnReset");
const btnSave = document.getElementById("btnSave");
const btnLoad = document.getElementById("btnLoad");

// Add event listeners
btnPlus.addEventListener("click", increaseCount);
btnMinus.addEventListener("click", decreaseCount);
btnReset.addEventListener("click", resetCount);
btnSave.addEventListener("click", saveCount);
btnLoad.addEventListener("click", loadCount);

// Function to display the counter
function updateCount() {
  document.getElementById("count").innerHTML = count;
}

// Function to diplay message
function showMessage(text) {
  msgEl.innerHTML = text;
  setTimeout(function () {
    msgEl.innerHTML = "";
  }, 3000);
}

// Function to increase the counter
function increaseCount() {
  count++;
  updateCount();
}

// Function to decrease the counter
function decreaseCount() {
  count--;
  updateCount();
}

// Function to reset the counter
function resetCount() {
  count = 0;
  updateCount();
}

// Function to save the counter
function saveCount() {
  localStorage.setItem("count", count);
  showMessage("Saved!");
}

// Function to load the counter
function loadCount() {
  let saved = localStorage.getItem("count");
  if (saved !== null) {
    count = Number(saved);
    showMessage("Loaded!");
  }
  updateCount();
}

});