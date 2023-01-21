const myTimer = document.getElementById("timer");

setInterval(() => {
    myTimer.textContent = Number(myTimer.textContent) - 1;
    if (myTimer.textContent == -1) {
        alert("Вы победили в конкурсе!");
        myTimer.textContent = 11;
    }
}, 1000);
