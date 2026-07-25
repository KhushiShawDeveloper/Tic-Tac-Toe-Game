let cell = document.querySelectorAll(".cell");
let resetButton = document.querySelector(".reset");

let curr = true;
const winpatterns = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];

cell.forEach((box) => {
  box.addEventListener("click", () => {
    if (curr) {
      box.textContent = "X";
      curr = false;
    } else {
      box.textContent = "O";
      curr = true;
    }
    box.disabled = true;
    console.log("Cell is clicked");
    checkwinner();
  });
});
const checkwinner = () => {
  for (let patterns of winpatterns) {
    posi1 = cell[patterns[0]].textContent;
    posi2 = cell[patterns[1]].textContent;
    posi3 = cell[patterns[2]].textContent;
    if (posi1 != "" && posi1 == posi2 && posi2 == posi3) {
      if (posi1 === posi2 && posi2 === posi3) {
        document.getElementById("winnerText").textContent =
          "Winner is " + posi1 + " 🏆";
        document.getElementById("winnerDialog").style.display = "flex";
        document.getElementById("closeDialog").addEventListener("click", () => {
          location.reload(); // Reloads the page to start a new game
        });
      }
    }
  }
};
resetButton.addEventListener("click", () => {
  console.log("Reset button clicked"); // Reloads the page to start a new game
  location.reload();
});

cell.forEach((box) => {
  box.addEventListener("click", () => {
    if (box.textContent === "X") {
      box.style.color = "red";
    } else if (box.textContent === "O") {
      box.style.color = "blue";
    }
  });
});
