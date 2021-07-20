// deel 1 opdracht click event aanmaken
const AlertButton = document.querySelector("#mybutton");
AlertButton.onclick = function () { alert("Button clicked") };

// deel 2 en 3
// plaats waarop geklikt wordt
const buttonChangeBcolor = document.querySelector(".change-background")
// plaats waar wat veranderd moet worden
const changeBackground = document.querySelector(".blue-background")
// functie voor de toggle
const toggleColor = () => {
    changeBackground.classList.toggle("red-background");
    // ipv toggle, add, remove 
}
// functie aan eventlistner koppellen
buttonChangeBcolor.addEventListener("click", toggleColor);


