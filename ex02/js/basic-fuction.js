var msg = 'Click here to receive 10% off!'

function updateMessage() {
    var el = document.getElementById('message');
    el.textContent = msg;
}

function resgatarCupom() {
    var el = document.getElementById('message').style.backgroundColor = "green";
    var el = document.getElementById('message').textContent = "Coupon Redeemed!";
    var el = document.getElementById('message').style.transform = "translateY(-220px)";
    var el = document.getElementById('message').style.transition = "transform 1s 1s";
}

updateMessage();