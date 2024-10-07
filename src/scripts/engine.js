const images = [
    "../src/image/sailormoon.jpeg",
    "../src/image/sailormoon.jpeg",
    "../src/image/sailorChibi.jpg",
    "../src/image/sailorChibi.jpg",
    "../src/image/sailorMars.jpg",
    "../src/image/sailorMars.jpg",
    "../src/image/sailorMercury.jpg",
    "../src/image/sailorMercury.jpg",
    "../src/image/sailorNeptune.jpg",
    "../src/image/sailorNeptune.jpg",
    "../src/image/sailorPluto.jpg",
    "../src/image/sailorPluto.jpg",
    "../src/image/sailorSaturno.jpg",
    "../src/image/sailorSaturno.jpg",
    "../src/image/sailorVenus.jpg",
    "../src/image/sailorVenus.jpg",
];
let openCards = [];

let shuffleImages = images.sort(() => (Math.random() > 0.5 ? 2 : -1));

for (let i = 0; i < images.length; i++) {
    let box = document.createElement("div");
    box.className = "item";
    box.innerHTML = `<img src="${shuffleImages[i]}" alt="SailorMoon" />`;
    box.onclick = handleClick;
    document.querySelector(".game").appendChild(box);
}

function handleClick() {
    if (openCards.length < 2) {
        this.classList.add("boxOpen");
        openCards.push(this);
    }

    if (openCards.length == 2) {
        setTimeout(checkMatch, 500);
    }
}

function checkMatch() {
    if (openCards[0].innerHTML === openCards[1].innerHTML) {
        openCards[0].classList.add
            ("boxMatch");
        openCards[1].classList.add
            ("boxMatch");
    } else {
        openCards[0].classList.remove
            ("boxOpen");
        openCards[1].classList.remove
            ("boxOpen");
    }

    openCards = [];

    if (document.querySelectorAll(".boxMatch").length === images.length) {
        alert("Well done, you won!");
    }
}
