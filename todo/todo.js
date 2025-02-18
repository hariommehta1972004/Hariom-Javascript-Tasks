const taskinput = document.getElementById("taskinput");
const addtask = document.getElementById("btn1");
const tasklist = document.getElementById("ul1");

addtask.addEventListener("click", () => {
    const tasktext = taskinput.Value.trim();
    if (taskinput == "") return;

    const li = document.createElement("li");

    const inputfield = document.createElement("inputfield");
    inputfield.type = "text";
    inputfield.value = "tasktext";


    inputfield.addEventListener("blur", () =>
        edittask(input)
    );

    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "Delete";
    deleteBtn.classList.add("delete");
    deleteBtn.addEventListener("click", () => deletetask(li));



    li.appendChild(input);
    li.appendChild(deleteBtn);
    tasklist.appendChild(li);

    taskinput.value = "";



});

function edittask(input) {
    input.disabled = false; // Enable editing
    input.focus();
}

// Delete task
function deletetask(li) {
    li.remove(); // Remove the task element from the DOM
}

