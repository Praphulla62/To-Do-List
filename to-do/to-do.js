var d_text = document.getElementById('task-input');

var task = document.getElementById('task-list');
var add_t = document.getElementById('add-btn');

function addTask() {
    d_text.innerHTML = "";
    var p = document.createElement('p');
    var taskText = prompt("Enter your task: ");
    var deleteButton = document.createElement('button');
    deleteButton.innerHTML = '<i class="fa-solid fa-xmark" id="del-btn"></i>';
    deleteButton.addEventListener('click', function () {
        task.removeChild(p);
        p.id.add('#del-btn', 'i');
    });

    p.innerHTML = taskText;
    p.appendChild(deleteButton);
    task.appendChild(p);
}

add_t.addEventListener('click', addTask);