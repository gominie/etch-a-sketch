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
dynamicDiv(35);

board.addEventListener("mouseover", (event) => {
  const target = event.target;
  if (target.classList.contains("square")) {
    console.log("hover triggered");
    let currentColor = getComputedStyle(target).backgroundColor;
    let rgbaArray = currentColor.replace(/[^\d,\.]/g, '').split(',');
console.log(rgbaArray)
    let alpha = parseFloat(rgbaArray[3]);
  console.log(alpha)
    alpha = Math.min(1, alpha + 0.2);
    rgbaArray.splice(3,1,alpha);
 console.log(rgbaArray)
    target.style.backgroundColor = `rgba(${rgbaArray.join()})`;
  }
});

//rgba.splice(3,1,alpha)

const slider = document.getElementById("slider");
const sliderOutput = document.getElementById("sliderOutput");
sliderOutput.innerHTML = `${slider.value} x ${slider.value}`

slider.addEventListener("input", function () {
  sliderOutput.innerHTML = `${this.value} x ${this.value}`;
  const size = this.value;
  dynamicDiv(size);
});

//want to make end slider display differently e.g 48 x 48 instead of just 48 


//event listener for reset button
const reset = document.getElementById("reset");
reset.addEventListener("mousedown", () => {
  console.log("press")
  const size = slider.value
  dynamicDiv(size)
})


//extra credit : shading effect