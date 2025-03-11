let timerValue = 10;
let countdown;
let isPaused = false;

const para = document.getElementById("para");
const startbtn = document.getElementById("startbtn");
const pausebtn = document.getElementById("pausebtn");
const stopbtn = document.getElementById("stopbtn");

startbtn.onclick = function () {
    if (isPaused) {
        isPaused = false;
        countDown();
    }
    else {
        countDown();
    }
}

pausebtn.onclick = function () {
    clearInterval(countDown);
    isPaused = true;
    startbtn.disable = false;
    pausebtn.disabled = true;

};

stopbtn.onclick = function () {
    clearInterval(countdown);
    timerValue = 10;
    para.textContent = timerValue;
    startbtn.disabled = false;
    pausebtn.disabled = true;
    stopbtn.disabled = true;
};


function countDown() {
    countdown = setInterval(function () {
        if (timerValue > 0) {
            timerValue--;
            para.textContent = timerValue;
        } else {
            clearInterval(countdown);
        }
    }, 1000);
}



