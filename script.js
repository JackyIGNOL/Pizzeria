document.addEventListener("DOMContentLoaded", function () {
    var buttonA = document.getElementById("buttonA");
    var buttonB = document.getElementById("buttonB");
    var buttonC = document.getElementById("buttonC");
    
    var frameA = document.querySelector("#frameA");
    var frameB = document.querySelector("#frameB");
    var frameC = document.querySelector("#frameC");
    
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



