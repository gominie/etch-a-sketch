let board = document.getElementById("board");
function dynamicDiv(size) {
  board.innerHTML = "";
  for (let i = 0; i < size; i++) {
    let divColumn = document.createElement("div");
    divColumn.className = "divColumn";
    for (let j = 0; j < size; j++) {
      let square = document.createElement("div");
      square.className = "square";
      divColumn.appendChild(square);
    }
    board.appendChild(divColumn);
  }
}

//const squareSize = 6
//const size = parseInt(squareSize)
dynamicDiv(4);

board.addEventListener("mouseover", (event) => {
  const target = event.target;
  if (target.classList.contains("square")) {
    console.log("hover triggered");
    target.style.backgroundColor = "red";
  }
});

const slider = document.getElementById("slider");
const sliderOutput = document.getElementById("sliderOutput");
sliderOutput.innerHTML = `${slider.value} x ${slider.value}`

slider.addEventListener("input", function () {
  sliderOutput.innerHTML = `${this.value} x ${this.value}`;
  const size = this.value;
  dynamicDiv(size);
});

//want to make end slider display differently e.g 48 x 48 instead of just 48 
