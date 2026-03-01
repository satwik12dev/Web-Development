let tasks = [];

// Function to Display tasks
function displayTasks() {
  let html = "";
  for (let i = 0; i < tasks.length; i++) {
    html += "<li>" + tasks[i] +
    " <button onclick='removeTask(" + i + ")'>x</button></li>";
  }
  document.getElementById("list").innerHTML = html;
}

// Function to Add a task
function addTask() {
  let taskInput = document.getElementById("task");
  let text = taskInput.value;
  if (text === "") {
    return;
  }
  tasks.push(text);
  taskInput.value = "";
  saveTasks();
  displayTasks();
}

// Function to Remove a task
function removeTask(i) {
  tasks.splice(i, 1);
  saveTasks();
  displayTasks();
}

// Function to Clear all tasks
function clearAll() {
  tasks = [];
  saveTasks();
  displayTasks();
}

// Function to Save tasks
function saveTasks() {
  localStorage.setItem("tasks", JSON.stringify(tasks));
}

// Function to Load tasks
function loadTasks() {
  let saved = localStorage.getItem("tasks");
  if (saved !== null) {
    tasks = JSON.parse(saved);
  }
}

// Load and display tasks when page loads
loadTasks();
displayTasks()