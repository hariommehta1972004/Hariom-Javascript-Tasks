document.addEventListener("DOMContentLoaded", function () {
    const redSlider = document.getElementById('red');
    const greenSlider = document.getElementById('green');
    const blueSlider = document.getElementById('blue');

    const redValue = document.getElementById('redValue');
    const greenValue = document.getElementById('greenValue');
    const blueValue = document.getElementById('blueValue');

    const colorDisplay = document.getElementById('colorDisplay');
    const randomColorBtn = document.getElementById('randomColorBtn');

    // Update color display based on slider values
    function updateColor() {
        const red = redSlider.value;
        const green = greenSlider.value;
        const blue = blueSlider.value;

        // Update text values next to sliders
        redValue.textContent = red;
        greenValue.textContent = green;
        blueValue.textContent = blue;

        // Set the background color of the color display box
        const color = `rgb(${red}, ${green}, ${blue})`;
        colorDisplay.style.backgroundColor = color;
    }

    // Generate random RGB color
    function generateRandomColor() {
        const randomRed = Math.floor(Math.random() * 256);
        const randomGreen = Math.floor(Math.random() * 256);
        const randomBlue = Math.floor(Math.random() * 256);

        redSlider.value = randomRed;
        greenSlider.value = randomGreen;
        blueSlider.value = randomBlue;

        updateColor(); // Update display with random color
    }

    // Event listeners for sliders
    redSlider.addEventListener('input', updateColor);
    greenSlider.addEventListener('input', updateColor);
    blueSlider.addEventListener('input', updateColor);

    // Event listener for random color button
    randomColorBtn.addEventListener('click', generateRandomColor);

    // Initialize color display
    updateColor(); // Run on page load to set initial color
});
