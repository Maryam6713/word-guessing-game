document.getElementById("checkButton").addEventListener("click", function() {
    var userInput = document.getElementById("userInput").value.toLowerCase();
    if (userInput === "friend" || userInput === "school" || userInput === "cricket" || userInput === "uniform") {
        alert( userInput + "  is correct answer");
    } else {
        alert("Incorrect Answer!");
    }
});

