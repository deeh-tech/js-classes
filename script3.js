function changeText() {
    document.getElementById("heading").textContent = "Welcome to Javascript Events";
}
let button=document.getElementById("mybtn");
button.addEventListener("click",
    function() {
        alert("You clicked the button !");
    }
);