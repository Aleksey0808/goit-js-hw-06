function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
};

const inputEl = document.querySelector('[data-create]');
const btnCreate = document.querySelector('[data-destroy]');
const btnDestroy = document.querySelector('#controls input');
const boxesEl = document.querySelector('#boxes');

console.log(btnDestroy)

btnCreate.addEventListener("click", createObject);
btnDestroy.addEventListener("click", deleteObject);

function createObject() {
  
};

function deleteObject() {
  boxesEl.innerHTML = "";
};

function createBoxes(amount) {
  const elementsToAdd = [];

  for (let i = 0; i < amount; i++) {
    const divEl = <div></div>
		
		divEl.style.background = getRandomHexColor()
		elementsToAdd.push(divEl)
	}
	return elementsToAdd
};






