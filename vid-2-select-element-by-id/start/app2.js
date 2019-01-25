const toggleList = document.getElementById('toggleList');
const listDiv = document.querySelector('.list');
const input = document.querySelector('input');
const p = document.querySelector('p.description');
const button = document.querySelector('button.description');
const li = document.querySelector('li:last-child');

toggleList.addEventListener ('click', () => {
	listDiv.style.display = 'none';
});

button.addEventListener('click', () => {
	li.innerHTML = input.value ;
});

p.title = 'List Description'