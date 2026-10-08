const taskInput = document.getElementById("taskInput");
const addTaskBtn = document.getElementById("addTaskBtn");
const taskList = document.getElementById("taskList");
const taskCount = document.getElementById("taskCount");
const clearCompletedBtn = document.getElementById("clearCompletedBtn");

let tasks = [];

function updateTaskCount() {
  const activeTasks = tasks.filter(task => !task.completed).length;
  taskCount.textContent = `${activeTasks} active task${activeTasks === 1 ? "" : "s"}`;
}

function renderTasks() {
  taskList.innerHTML = "";

  tasks.forEach((task, index) => {
    const li = document.createElement("li");
    li.className = `task ${task.completed ? "completed" : ""}`;

    li.innerHTML = `
      <input type="checkbox" ${task.completed ? "checked" : ""}>
      <span>${task.text}</span>
      <button class="delete-btn">Delete</button>
    `;

    li.querySelector("input").addEventListener("change", () => {
      tasks[index].completed = !tasks[index].completed;
      renderTasks();
    });

    li.querySelector(".delete-btn").addEventListener("click", () => {
      tasks.splice(index, 1);
      renderTasks();
    });

    taskList.appendChild(li);
  });

  updateTaskCount();
}

function addTask() {
  const text = taskInput.value.trim();

  if (!text) {
    alert("Please enter a task.");
    return;
  }

  tasks.push({ text, completed: false });
  taskInput.value = "";
  renderTasks();
}

addTaskBtn.addEventListener("click", addTask);

taskInput.addEventListener("keydown", (event) => {
  if (event.key === "Enter") {
    addTask();
  }
});

clearCompletedBtn.addEventListener("click", () => {
  tasks = tasks.filter(task => !task.completed);
  renderTasks();
});

renderTasks();
