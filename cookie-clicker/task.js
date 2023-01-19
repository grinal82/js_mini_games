const img = document.getElementById("cookie");

let lastClick = new Date();

function cookieClicker() {
    let currentTime = new Date();
    document.getElementById("clicker__counter").textContent =
        Number(document.getElementById("clicker__counter").textContent) + 1;
    if (document.getElementById("clicker__counter").textContent % 2 != 0) {
        img.width += 20;
        img.height += 20;
    } else if (
        document.getElementById("clicker__counter").textContent % 2 ==
        0
    ) {
        img.height -= 20;
        img.width -= 20;
    }
    result = (currentTime - lastClick) / 1000;
    document.getElementById("click__timer").textContent = result;
    lastClick = currentTime;
}

img.onclick = cookieClicker;
