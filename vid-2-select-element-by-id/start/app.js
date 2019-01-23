const myHeading = document.getElementsByTagName('h1')[0];
const myInput = document.getElementById('myInput');
const myButton = document.getElementById('myButton');
const myList = document.getElementsByTagName ('li');
const errorNotPurple = document.getElementsByClassName('error-not-purple');
const evens = document.querySelectorAll('li:nth-child(even)');
const odds = document.querySelectorAll('li:nth-child(odd)');

myButton.addEventListener('click', () => {
  myHeading.style.color = myInput.value;
  myButton.style.backgroundColor = myInput.value;
  for (let i=0; i< myList.length; i +=1){
	myList[i].style.color = 'purple';
	}
	for (let i = 0; i<errorNotPurple.length; i+=1){
	errorNotPurple[i].style.color = 'red';
	}
	for (let i=0; i<evens.length; i+=1){
		evens[i].style.backgroundColor = 'lightgray';
	}
	for (let i=0; i<odds.length; i+=1){
		odds[i].style.backgroundColor = myInput.value;	
	}

});


