const countValue = document.querySelector('#valueCount');

function increment() {
    let value = parseInt(countValue.textContent);
    value++;
    countValue.textContent = value;
}

function decrement() {
    let value = parseInt(countValue.textContent);
    value--;
    countValue.textContent = value;
}