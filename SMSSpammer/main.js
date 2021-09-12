// Selectors
const textReader = document.querySelector("#sms");
const button = document.querySelector("#submitbtn")


// Functions

function sayIt(text) {
  const link = `https://api.voicerss.org/?key=53ab58cb04bc4c7f885093378c8a4fd6&hl=en-us&src=${text}`;
  fetch(link).then((response) => {
    const audio = new Audio(response.url);
    audio.play();
  });


}



//Listeners
button.addEventListener("click", (event) => {
  sayIt(textReader.value)
})
