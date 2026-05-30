const text = "Full Stack Developer";
const typingElement = document.getElementById("typing");

let index = 0;

function typeEffect() {

    if(index < text.length){

        typingElement.innerHTML += text.charAt(index);

        index++;

        setTimeout(typeEffect, 100);
    }
}

window.onload = () => {
    typeEffect();
};