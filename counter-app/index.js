
let value = 0;

document.getElementById('increaseBtn').onclick = function() {
    value++;
    document.getElementById('countLabel').textContent = value;

}

document.getElementById('resetBtn').onclick = function() {
    value = 0;
    document.getElementById('countLabel').textContent = value;

}

document.getElementById('decreaseBtn').onclick = function() {
    value--;
    document.getElementById('countLabel').textContent = value;

}




