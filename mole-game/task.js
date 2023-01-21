const dead = document.getElementById("dead");
const lost = document.getElementById("lost");
console.log(dead);
console.log(lost);
let idArray = document.querySelectorAll(".hole");

for (el of idArray) {
    let getHole = document.getElementById(el.id);
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
