function makeDiv(size) {
  const board = document.getElementById("board");

  for (let i = 1; i <= size * size; i++) {
    const square = document.createElement("div");
    square.className = "square";
    board.appendChild(square);
  }

  const squareSizePercentage = 100/size;
  const squares = document.querySelectorAll(".square")
  squares.forEach((square) => {
    square.style.flexBasis = `calc(${squareSizePercentage}% - 20px)`;
  })
}

//const squareSize = 6
//const size = parseInt(squareSize)
makeDiv(3)


const squares = document.querySelectorAll(".square");

squares.forEach((square) => {
  square.addEventListener("mouseover", () => {
    console.log("hover triggered")
    square.style.backgroundColor = "red";
  });
});

const slider = document.getElementById("slider")
const sliderOutput = document.getElementById("sliderOutput")

slider.addEventListener("input", function() {
    sliderOutput.innerHTML = this.value
}) 