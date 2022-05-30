const ul = document.querySelector('ul');
const form = document.querySelector('form');

ul.addEventListener('click', (e) => {
    console.log();
    if (e.target.tagName == 'SPAN') {
        
        e.target.parentElement.remove();
    }
})

function generateTodo(todo) {
    const html = `<li>${todo} <span>button</span></li>`;
    ul.innerHTML+=html
}

form.addEventListener('submit', (e) => {
    e.preventDefault()
    console.log();
    const todo = form.add.value;
    generateTodo(todo)
    form.reset()
})