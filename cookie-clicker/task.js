const img = document.getElementById("cookie");
let clickTimer = document.getElementById("click__timer");
let start = 0;
let end;


function cookieClicker() {
    end = new Date();
    if (start !== 0) {
        let currentSpeed = 1000 / (end - start);
        clickTimer.textContent = currentSpeed.toFixed(2).toString();
    }

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
    start = new Date();

}

img.onclick = cookieClicker;
