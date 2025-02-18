const para = document.getElementById("para");
const incrementbtn = document.getElementById("increment");
const decrementbtn = document.getElementById("decrement");

let countervalue = 0;

incrementbtn.addEventListener("click", function () {
    countervalue = countervalue + 1;
    para.textContent = countervalue;
});

decrementbtn.addEventListener("click", function () {
    countervalue = countervalue - 1;
    para.textContent = countervalue;

});



