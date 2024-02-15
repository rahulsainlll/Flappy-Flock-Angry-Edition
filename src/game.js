let block = document.getElementById("block");
let hole = document.getElementById("hole");
let character = document.getElementById("character");
let jumping = 0;
let counter = 0;

hole.addEventListener("animationiteration", () => {
  let random = -(Math.random() * 300 + 150);
  hole.style.top = random + "px";
  counter++;
});

setInterval(function () {
  let characterTop = parseInt(
    window.getComputedStyle(character).getPropertyValue("top")
  );
  if (jumping == 0) {
    character.style.top = characterTop + 7 + "px";
  }

  var blockLeft = parseInt(
    window.getComputedStyle(block).getPropertyValue("left")
  );
  var holeTop = parseInt(window.getComputedStyle(hole).getPropertyValue("top"));
  let = cTop = -(500 - characterTop);

  if (
    characterTop > 450 ||
    (blockLeft < 50 &&
      blockLeft > -100 &&
      (cTop < holeTop || cTop > holeTop + 130))
  ) {
    alert("Game over. Score: " + counter);
    character.style.top = 100 + "px";
    counter = 0;
  }
}, 10);

const jump = () => {
  jumping = 1;
  let jumpCount = 0;
  let jumpInterval = setInterval(() => {
    let characterTop = parseInt(
      window.getComputedStyle(character).getPropertyValue("top")
    );

    if (characterTop > 6 && jumpCount < 15) {
      character.style.top = characterTop - 5 + "px";
    }

    if (jumpCount > 20) {
      clearInterval(jumpInterval);
      jumpCount = 0;
      jumping = 0;
    }
    jumpCount++;
  }, 10);
};

document.addEventListener("keydown", (event) => {
    if (event.code === "Space") {
        jump();
    }
});




