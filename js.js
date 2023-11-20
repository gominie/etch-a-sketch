function dynamicDiv(size) {
  let board = document.getElementById("board");
  board.innerHTML = "";
 for (let i = 0; i < size; i++) {
  let divColumn = document.createElement("div");
  divColumn.className = "divColumn"
    for (let j = 0; j < size; j++) {
     let square = document.createElement("div");
     square.className = "square";
     divColumn.appendChild(square)
    }
  board.appendChild(divColumn)
 } 
}

//const squareSize = 6
//const size = parseInt(squareSize)
dynamicDiv(4)


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
    const size = this.value;
    dynamicDiv(size)
})  