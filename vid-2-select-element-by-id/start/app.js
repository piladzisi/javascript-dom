const myHeading = document.getElementsByTagName('h1')[0];
const myInput = document.getElementById('myInput');
const myButton = document.getElementById('myButton');
const myList = document.getElementsByTagName ('li');



myButton.addEventListener('click', () => {
  myHeading.style.color = myInput.value;
  myButton.style.backgroundColor = myInput.value;
  for (let i=0; i< myList.length; i +=1){
	myList[i].style.color = 'purple';
}
});