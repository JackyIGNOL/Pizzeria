document.addEventListener("DOMContentLoaded", function () {
    var buttonA = document.getElementById("pizzaH");
    var buttonB = document.getElementById("saladsH");
    var buttonC = document.getElementById("starterH");
    
    var frameA = document.querySelector("#pizzaMain");
    var frameB = document.querySelector("#pastaMain");
    var frameC = document.querySelector("#starterMain");
    
    buttonA.addEventListener("click", function () {
        frameA.classList.add('visible');
        frameB.classList.remove('visible');
        frameB.classList.add('invisible');
        frameC.classList.remove('visible');
        frameC.classList.add('invisible');
    });
    buttonB.addEventListener("click", function () {
        frameA.classList.remove('visible');
        frameA.classList.add('invisible');
        frameB.classList.add('visible');
        frameC.classList.remove('visible');
        frameC.classList.add('invisible');
    });
    buttonC.addEventListener("click", function () {
        frameA.classList.remove('visible');
        frameA.classList.add('invisible');
        frameB.classList.remove('visible');
        frameB.classList.add('invisible');
        frameC.classList.add('visible');
    });
})



