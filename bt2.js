function result() {
    let a = +document.getElementById('a').value;
    let b = +document.getElementById('b').value;
    c = a % b;
    if (c == 0) {
        document.getElementById('result').innerHTML = 'a chia hết cho b';
    } else {
        document.getElementById('result').innerHTML = 'a không chia hết cho b';
    }
}