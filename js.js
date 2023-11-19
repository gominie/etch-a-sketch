
function makeDiv () {
    const container = document.getElementById('container')
    for (let i = 1; i <= 256; i++ ) {
        const div = document.createElement("div");
        div.className = "grid";
        container.appendChild(div)
    }
}

makeDiv();