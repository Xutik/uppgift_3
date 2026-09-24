const heading = document.getElementById("heading");
const button = document.getElementById("switcher");

const colors = ['red', 'violet', 'blue', 'orange', 'pink', 'green'];

let colorIndex = 1;
let isHello = true;

button.addEventListener("click", () => {

    if (isHello) {
        heading.textContent = "Goodbye World!";
    } else {
        heading.textContent = "Hello World!";
    }
    isHello = !isHello;

    colorIndex = (colorIndex + 1) % colors.length;
    heading.style.color = colors[colorIndex];
});