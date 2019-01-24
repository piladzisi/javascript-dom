const input = document.querySelector('input');
const p = document.querySelector('p.description');
const button = document.querySelector('button');
const li = document.querySelector('li:last-child');

button.addEventListener('click', () => {
	li.innerHTML = input.value 
});