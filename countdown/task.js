const myTimer = document.getElementById("timer");

setInterval(() => {
    myTimer.textContent = Number(myTimer.textContent) - 1;
    if (myTimer.textContent == 0) {
        alert("Вы победили в конкурсе!");
    }
}, 1000);
