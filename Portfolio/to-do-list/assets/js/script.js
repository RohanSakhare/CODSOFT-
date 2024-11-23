
let arr = [];
let editIndex = -1; 

function addtask() {
    const input = document.getElementById("task");
    const inputValue = input.value;

    if (inputValue) {
        if (editIndex >= 0) {
            arr[editIndex] = inputValue;
            editIndex = -1;
        } else {
            arr.push(inputValue);
        }
    }

    renderTasks();
    input.value = ""; 
}

function renderTasks() {
    const newArr = arr.map((task, index) => print(task, index));
    document.getElementById("task1").innerHTML = newArr.join("<br>");
}

function print(task, index) {
    return (`<h5 class="text-start ps-5 pe-5 border border-info rounded active pt-3 pb-3" id="task-${index}">
                ${task}  
                <a href="#" onclick="done(${index})" id="icon1">
                    <i class="fa-solid fa-check float-end ms-2 text-success"></i>
                </a>
                <a href="#" onclick="dele(${index})">
                    <i class="fa-solid fa-trash float-end ms-2  text-danger"></i>
                </a>
                <a href="#" onclick="edi(${index})">
                    <i class="fa-solid fa-pen float-end text-primary"></i>
                </a>
            </h5>`);
}

function done(index) {
    const taskElement = document.getElementById(`task-${index}`);
    taskElement.style.textDecoration = 'line-through';
}

function dele(index) {
    arr.splice(index, 1);
    renderTasks();
}

function edi(index) {
    const taskText = arr[index];
    document.getElementById('task').value = taskText;
    editIndex = index; 
    
}

