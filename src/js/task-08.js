const form = document.querySelector('.login-form');

form.addEventListener("submit", onFormSubmit);
console.log()
function onFormSubmit(event) {
    event.preventDefault();
  
    const formData = new FormData(event.currentTarget);
  
    console.log(formData);
  
    formData.forEach((value, name) => {
      console.log('onFormSubmit -> name', name);
      console.log('onFormSubmit -> value', value);
    });
  }



