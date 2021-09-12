// Selectors

const mainTitle = document.querySelector("h1");


// Funtions
/* function flasher() {
    mainTitle.classList.toggle("red")
  }
 */
function flasher2() {
  mainTitle.style.color = (getRandomColor())
}
function getRandomColor() {
  var letters = '0123456789ABCDEF';
  var color = '#';
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}



// Executers / Listeners
document.addEventListener("mousemove", (event) => { flasher2() })
