function makeDiv() {
  const container = document.getElementById("container");
  for (let i = 1; i <= 256; i++) {
    const grid = document.createElement("div");
    grid.className = "grid";
    container.appendChild(grid);
  }
}

makeDiv();

const grids = document.querySelectorAll(".grid");

grids.forEach((grid) => {
  grid.addEventListener("mouseover", () => {
    console.log("hover triggered")
    grid.style.backgroundColor = "red";
  });
});
