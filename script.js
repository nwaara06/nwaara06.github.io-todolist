// --- UPDATE JAM & TANGGAL ---
function updateClock() {
    const clock = document.getElementById('clock');
    const date = document.getElementById('date');
    const now = new Date();

    let h = now.getHours().toString().padStart(2, '0');
    let m = now.getMinutes().toString().padStart(2, '0');
    let s = now.getSeconds().toString().padStart(2, '0');
    clock.innerText = `${h}:${m}:${s}`;

    const options = { weekday: 'long', day: 'numeric', month: 'long', year: 'numeric' };
    date.innerHTML = `<i class="fa-regular fa-calendar-days"></i> ${now.toLocaleDateString('id-ID', options)}`;
}
setInterval(updateClock, 1000);
updateClock();

// --- LOGIKA TO-DO LIST ---
const input = document.getElementById('todo-input');
const addBtn = document.getElementById('add-btn');
const list = document.getElementById('todo-list');
const counter = document.getElementById('task-counter');

function updateCount() {
    counter.innerText = `${list.children.length} Tugas`;
}

function addTask() {
    const val = input.value.trim();
    if (val === "") return;

    const li = document.createElement('li');
    li.innerHTML = `
        <span class="task-text">${val}</span>
        <button class="delete-btn"><i class="fa-solid fa-trash"></i></button>
    `;

    li.querySelector('.delete-btn').onclick = () => {
        li.style.transform = "scale(0.9)";
        li.style.opacity = "0";
        setTimeout(() => {
            li.remove();
            updateCount();
        }, 200);
    };

    list.appendChild(li);
    updateCount();
    input.value = "";
    input.focus();
}

addBtn.onclick = addTask;
input.onkeypress = (e) => { if (e.key === 'Enter') addTask(); };