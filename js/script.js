var btn = document.querySelector('.btn');
var popup = document.querySelector('.popup')
var redirect = document.querySelector('.btn3')

function toggle() {
    btn.classList.toggle('active');
    popup.classList.toggle('active2')
}

redirect.onclick = function click() {
    window.open("./downloads/CMDProtocol.zip", '_target')
    window.location.reload()
}

console.log("Site Loaded Successfully!")