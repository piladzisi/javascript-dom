const myHeading = document.getElementById('myHeading');
const myInput = document.getElementById('myInput');
const myButton = document.getElementById('myButton');

myButton.addEventListener('click', () => {
  myHeading.style.color = myInput.value;
  myButton.style.backgroundColor = myInput.value;
});