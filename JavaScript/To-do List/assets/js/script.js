const form = document.getElementById('task-form');
const lista = document.getElementById('tasks');

form.onsubmit = function(e) {
    e.preventDefault();
    const inputField = document.getElementById('inputTask');
    addTask(inputField.value);
    form.reset();
};

function addTask(description) {
    const taskContainer = document.createElement('div'),
        newTask = document.createElement('input'),
        taskLabel = document.createElement('label'),
        taskDescriptionNode = document.createTextNode(description);
    
    newTask.setAttribute('type', 'checkbox');
    newTask.setAttribute('name', description);
    newTask.setAttribute('id', description);

    taskLabel.setAttribute('for', description);
    taskLabel.appendChild(taskDescriptionNode);

    taskContainer.classList.add('task-item');
    taskContainer.appendChild(newTask);
    taskContainer.appendChild(taskLabel);

    lista.appendChild(taskContainer);
}