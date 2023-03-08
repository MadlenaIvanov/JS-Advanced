function addItem() {
    const text = document.getElementById('newItemText').value;

    const liElement = document.createElement('li');
    const button = document.createElement('a', '[Delete]');

    liElement.textContent = text;
    button.href = '#';
    button.textContent = '[Delete]';
    button.addEventListener('click', (ev) => {
        ev.target.parentNode.remove();
    })

    liElement.appendChild(button);
    const ulElement = document.getElementById('items');

    ulElement.appendChild(liElement);

    document.getElementById('newItemText').value = '';



}