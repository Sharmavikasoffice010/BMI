function calculateBMI() {
    var height = parseFloat(document.getElementById("height").value);
    var weight = parseFloat(document.getElementById("weight").value);

    if (isNaN(height) || isNaN(weight) || height <= 0 || weight <= 0) {
        document.getElementById("result").innerText = "Please enter valid height and weight values.";
        return;
    }

    var bmi = weight / ((height / 100) * (height / 100));
    document.getElementById("result").innerText = "Your BMI is: " + bmi.toFixed(2);
}
