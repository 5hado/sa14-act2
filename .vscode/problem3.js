const form = document.getElementById('form');
const title = document.getElementById('title');
const input = document.getElementById('detail');
const list = document.getElementById('list');

let tasks = [];

form.addEventListener('submit', function(event) {
    event.preventDefault();

    const tasktitle = title.value;
    const taskdetails = input.value;

    if (tasktitle.trim() !== '') {
        const newTask = { id: Date.now(), title: tasktitle, details: taskdetails };
        tasks.push(newTask);

        renderTasks();
    }
});

function renderTasks() {
    list.innerHTML = '';

    tasks.forEach(task => {
        const li = document.createElement('li');
        li.innerHTML = `
            <span>${task.title}</span>
            <span>${task.details}</span>
            <button class="edit-btn" data-id="${task.id}">Edit</button>
            <button class="delete-btn" data-id="${task.id}">Delete</button>
        `;
        list.appendChild(li);
    });
}

list.addEventListener('click', function(event) {
    if (event.target.classList.contains('edit-btn')) {
        const taskId = parseInt(event.target.dataset.id);
        const task = tasks.find(task => task.id === taskId);

        const newTitle = prompt('Enter new title:', task.title);
        const newDetails = prompt('Enter new detail:', task.details);

        if (newTitle !== null) {
            task.title = newTitle;
            task.details = newDetails;

            renderTasks();
        }
    }

    if (event.target.classList.contains('delete-btn')) {
        const taskId = parseInt(event.target.dataset.id);

        tasks = tasks.filter(task => task.id !== taskId);

        renderTasks();
    }
});
