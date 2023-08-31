alert("please enter your age")
function res(){
    let Age= parseInt(document.getElementById("age").value)
    if (Age > 18) {
        alert("You are over 18.");
        } else {
            alert("You are under 18.");
    }
}