const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

const words = [
  "PLAYMAKER",
  "QUADRATIC",
  "MACARONIC",
  "JACKFRUIT",
  "OBJECTION",
  "CACOPHONY",
  "SACRIFICE",
  "FUGISHIMV"
]

let interval = null;

document.querySelector("h1").onmouseover = event => {

  event.target.dataset.value = words[Math.floor(Math.random() * words.length)];

  let iterations = 0;
      // velocity = 1;
      // direction = 1;


  clearInterval(interval);
  

  interval = setInterval(() => {
    event.target.innerText = event.target.innerText.split("").map((letter, index) => {
      if (index < iterations) {
        // event.target.style = `color: rgba(${(Math.random() * 195) + 60},${(Math.random() * 195) + 60},${(Math.random() * 195) + 60}); transition: all 75ms ease-in-out; transform: rotate(${iterations * 5 * velocity * direction}deg);`;
        return event.target.dataset.value[index];
      }
      return letters[Math.floor(Math.random() * 26)];
    }).join("");

    if (iterations >= event.target.dataset.value.length) clearInterval(interval);

    iterations += 1 / 4;
    velocity += 0.1;
    direction *= -1;
  }, 30);



};