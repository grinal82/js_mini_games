const dead = document.getElementById("dead");
const lost = document.getElementById("lost");
console.log(dead);
console.log(lost);
let idArray = [];

for (i = 1; i < 9; i++) {
    idArray.push(`hole${i}`);
    console.log(idArray);
}


for (id of idArray) {
    let getHole = document.getElementById(id);
    getHole.onclick = () => {
        if (getHole.className.includes("hole_has-mole")) {
            if (Number(dead.textContent) < 9) {
                dead.textContent = Number(dead.textContent) + 1;
            } else {
                alert("You have won!!!");
                dead.textContent = 0;
                lost.textContent = 0;
            }
        } else if (getHole.className.includes("hole")) {
            if (Number(lost.textContent) < 4) {
                lost.textContent = Number(lost.textContent) + 1;
            } else {
                alert("Sorry, buy You've LOST!\nTry again!");
                dead.textContent = 0;
                lost.textContent = 0;
            }
        }
    };
}

