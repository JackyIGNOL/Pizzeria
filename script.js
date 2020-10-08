document.addEventListener("DOMContentLoaded", function () {
    var buttonA = document.getElementById("pizzaH");
    var buttonB = document.getElementById("saladsH");
    var buttonC = document.getElementById("starterH");
    
    var frameA = document.querySelector("#pizzaMain");
    var frameB = document.querySelector("#pastaMain");
    var frameC = document.querySelector("#starterMain");
    
    var container = document.querySelector("#container");
    buttonA.addEventListener("click", function () {
        frameA.classList.toggle('invisible');
        frameA.classList.toggle('visible');
        frameB.classList.remove('visible');
        frameB.classList.add('invisible');
        frameC.classList.remove('visible');
        frameC.classList.add('invisible');
    });
    buttonB.addEventListener("click", function () {
        frameA.classList.remove('visible');
        frameA.classList.add('invisible');
        frameB.classList.toggle('invisible');
        frameB.classList.toggle('visible');
        frameC.classList.remove('visible');
        frameC.classList.add('invisible');
    });
    buttonC.addEventListener("click", function () {
        frameA.classList.remove('visible');
        frameA.classList.add('invisible');
        frameB.classList.remove('visible');
        frameB.classList.add('invisible');
        frameC.classList.toggle('visible');
        frameC.classList.toggle('invisible');
    });
})



