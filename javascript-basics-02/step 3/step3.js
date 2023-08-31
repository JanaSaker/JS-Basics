const outputDiv = document.querySelector('#outputDiv');
const textInput = document.querySelector('#name');
textInput.addEventListener('input', function() {
       outputDiv.textContent = textInput.value;
         });
