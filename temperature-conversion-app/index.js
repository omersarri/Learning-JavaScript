

const textBox = document.getElementById('textBox');
const toFahrenheit = document.getElementById('toFahrenheit');
const toCelsius = document.getElementById('toCelsius');
const result = document.getElementById('result');

let temp;





function convert() {
    if(toFahrenheit.checked){
        let number = Number(textBox.value);
        temp = (number * (9/5)) +32;
        result.textContent = temp.toFixed(1) + '°F';
    }else if(toCelsius.checked){
        let number = Number(textBox.value);
        temp = (number-32)/(9/5);
        result.textContent = temp.toFixed(1) + '°C';
    }else{
        result.textContent = 'Select a unit!!'
    }
}