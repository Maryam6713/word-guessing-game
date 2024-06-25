document.getElementById("checkButton").addEventListener("click", function() {
    var userInput = document.getElementById("userInput").value.toLowerCase();
    if (userInput === "friend" || userInput === "school" || userInput === "cricket" || userInput === "uniform") {
        alert("Correct Answer");
    } else {
        alert("Incorrect Answer!");
    }
});

