let targetnumber = Math.floor(Math.random() * 100) + 1;
let attempts = 0;

function guess() {
    const userguess = document.getElementById("mynum").value;
    const message = document.getElementById("div2");
    // const targetnumberdisplay = document.getElementById("targetnum");



    function clearResult() {
        const result = document.getElementById("result");
        result.textContent = '';
        // const targetNumberDisplay = document.getElementById("target-number");
        // targetNumberDisplay.style.display = 'none';
    }

    if (userguess < 1 || userguess > 100 || isNaN(userguess)) {
        message.textContent = "Enter valid number";
        message.style.color = "red";
        return;

    }

    attempts++;

    if (userguess == targetnumber) {
        message.textContent = `Congrats you guess the number in ${attempts} attempts`;
        message.style.color = "blue";
        // targetnumberdisplay.textContent = `the target number is ${targetnumber}`;
        // targetnumberdisplay.style.display = "block";
    }

    else if (userguess < targetnumber) {
        message.textContent = "Its too low try again!!";
        message.style.color = "orange";
        // targetnumberdisplay.textContent = `the target number is ${targetnumber}`;
    }

    else {
        message.textContent = "Its too high try again!!";
        message.style.color = "orange";
        // targetnumberdisplay.textContent = `the target number is ${targetnumber}`;
    }

}



