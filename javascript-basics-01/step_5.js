
var firstNumberInput = document.getElementById("first_number");
var secondNumberInput = document.getElementById("second_number");
var validateButton = document.getElementById("validate");

validateButton.addEventListener("click", function() {
    var firstNumber = parseFloat(firstNumberInput.value);
    var secondNumber = parseFloat(secondNumberInput.value);

    if (!isNaN(firstNumber) && !isNaN(secondNumber)) {
        var result = firstNumber * secondNumber;

        alert("The result of multiplying " + firstNumber + " and " + secondNumber + " is: " + result);
    } else {
        alert("Please enter valid numbers.");
    }
});
