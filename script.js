const container = document.getElementById("container");
const button = document.getElementById("resetButton");

button.addEventListener("click", resetFunction, false);

function makeRows(rows, cols) {
  container.style.setProperty('--grid-rows', rows);
  container.style.setProperty('--grid-cols', cols);
  for (i = 0; i < (rows * cols); i++) {
    let cell = document.createElement("div");
    cell.addEventListener("mouseover", function (event) {
      event.target.style.backgroundColor = "red";
    }, false);
    container.appendChild(cell).className = "grid-item";
  };
};

function resetFunction() {
  let cell = document.getElementsByClassName("grid-item");
  for (let i = 0; i< cell.length; i++) {
    cell[i].style.backgroundColor = "white";
  }

  };

makeRows(24, 24);
