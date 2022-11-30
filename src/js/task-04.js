let counterValue = 0

const refs = {
  decrementEl: document.querySelector('[data-action="decrement"]'),
  incrementEl: document.querySelector('[data-action="increment"]'),
  valueEl: document.querySelector('#value'),
}

refs.incrementEl.addEventListener('click', addOnValueButtonsClick)
refs.decrementEl.addEventListener('click', minusValueButtonsClick)

function addOnValueButtonsClick() {
  refs.valueEl.innerHTML = counterValue++
}

function minusValueButtonsClick() {
  refs.valueEl.innerHTML = counterValue--
}
