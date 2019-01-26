const toggleList = document.getElementById('toggleList');
const listDiv = document.querySelector('.list');
const input = document.querySelector('input');
const p = document.querySelector('p.description');
const button = document.querySelector('button.description');
const li = document.querySelector('li:last-child');
const addItemInput = document.querySelector('input.addItemInput');
const addItemButton = document.querySelector('button.addItemButton');
const removeItemButton = document.querySelector('button.removeItemButton');

toggleList.addEventListener ('click', () => {
	if(listDiv.style.display =='none') {
	toggleList.textContent = 'Hide list';
	listDiv.style.display = 'block';
} else{
	toggleList.textContent = 'Show list';
	listDiv.style.display = 'none';
}
});

addItemButton.addEventListener('click', () => {
	let ul = document.getElementsByTagName('ul')[0];
	let li = document.createElement('li');
	li.textContent = addItemInput.value;
	ul.appendChild(li);
	addItemInput.value = '';
});

removeItemButton.addEventListener('click', () => {
	let ul = document.getElementsByTagName('ul')[0];
	let li = document.querySelector('li:last-child');
	
	ul.removeChild(li);
	
});


p.title = 'List Description'