function calculate() {
    var height = document.getElementById('height').value;
    var weight = document.getElementById('weight').value;

    if (height != "" && weight != "") {
        var bmi = weight / ((height / 100) ** 2)

        var status;

        if (bmi < 18.5) {
            status = 'Underweight';
        }
        else if (bmi <= 24.9) {
            status = 'Normal Weight';
        }
        else if (bmi <= 29.9) {
            status = 'Overweight';
        }
        else {
            status = 'Obesity';
        }
        
        // document.getElementById('pbmi').innerHTML = "Your BMI is:"
        // document.getElementById('pstatus').innerHTML = "You are:"
        document.getElementById('bmi').innerHTML = "Your BMI: " + bmi.toFixed(1);
        document.getElementById('status').innerHTML = "You Are: " + status;
        document.getElementById('warning').innerHTML = ""
    }
    else {
        document.getElementById('warning').innerHTML = "Please Fill Out All Required Fields!"
        // document.getElementById('pbmi').innerHTML = ""
        // document.getElementById('pstatus').innerHTML = ""
    }
}
function reload() {
    location.reload()
}