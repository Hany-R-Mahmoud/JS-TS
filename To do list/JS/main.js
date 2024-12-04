let theInput = document.querySelector(".add-task input");
let addBtn = document.querySelector(".add-task .plus");
let tasksContent = document.querySelector(".tasks-content");
let noTasksMsg = document.querySelector(".no-tasks-message");
let tasksCount = document.querySelector(".tasks-count span");
let completedTasks = document.querySelector(".completed-tasks span");
window.onload = () => {
  localStorage.clear();
};
//  + button
addBtn.addEventListener("click", function () {
  if (theInput.value === "") {
    Swal.fire("No Task Added ");
  } else if (theInput.value !== "") {
    if (localStorage.getItem(theInput.value) === theInput.value) {
      Swal.fire("Task Already Exists");
      theInput.value = "";
    } else {
      noTasksMsg.remove();

      let mainSpan = document.createElement("span");
      let taskSpan = document.createElement("span");
      let deleteBtn = document.createElement("span");
      taskSpan.appendChild(document.createTextNode(theInput.value));
      deleteBtn.appendChild(document.createTextNode("+"));
      mainSpan.className = "task-box";
      taskSpan.className = "task-value";
      deleteBtn.className = "delete";
      mainSpan.appendChild(taskSpan);
      mainSpan.appendChild(deleteBtn);
      tasksContent.appendChild(mainSpan);

      document.querySelector(".todo-container").append(deleteAll);
      calculateTasks();

      localStorage.setItem(theInput.value, `${theInput.value}`);

      theInput.value = "";
    }
  }
});
// X button
document.addEventListener("click", (e) => {
  if (e.target.className == "delete") {
    e.target.parentNode.remove();
    localStorage.removeItem(
      localStorage.getItem(e.target.previousSibling.textContent)
    );

    if (tasksContent.children.length === 0) {
      tasksContent.appendChild(noTasksMsg);
    }
    //   tasksContent.childElementCount
  }
  if (e.target.classList.contains("task-value")) {
    e.target.classList.toggle("completed");
  }
  calculateTasks();
});

// Delete All buttons
let deleteAll = document.createElement("div");
deleteAll.className = "deleteAll";
let deleteCompleted = document.createElement("span");
deleteCompleted.className = "delete-completed";
deleteCompleted.appendChild(document.createTextNode("Delete Completed"));
let delAll = document.createElement("span");
delAll.className = "delete-all";
delAll.appendChild(document.createTextNode("Delete All"));
deleteAll.appendChild(deleteCompleted);
deleteAll.appendChild(delAll);

// Delete completed
deleteCompleted.addEventListener("click", () => {
  if (document.querySelector(".completed") === null) {
    Swal.fire("No Completed Task(s)");
  } else {
    localStorage.removeItem(
      localStorage.getItem(document.querySelector(".completed").textContent)
    );

    document.querySelectorAll(".completed").forEach(() => {
      document.querySelector(".completed").parentNode.remove();
    });
    if (tasksContent.children.length === 0) {
      tasksContent.appendChild(noTasksMsg);
      localStorage.clear();
    }
    calculateTasks();
  }
});
// Delete All
delAll.addEventListener("click", () => {
  document.querySelectorAll(".task-box").forEach(() => {
    document.querySelector(".task-box").remove();
  });
  localStorage.clear();
  tasksContent.appendChild(noTasksMsg);
  calculateTasks();
});

function calculateTasks() {
  tasksCount.innerHTML = document.querySelectorAll(
    ".tasks-content .task-box"
  ).length;
  completedTasks.innerHTML = document.querySelectorAll(
    ".tasks-content .completed"
  ).length;
}
