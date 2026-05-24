const lines = [
  "Keep your goals InScope",
  "Keep your team InScope",
  "Keep your project InScope",
  "Keep your compliance InScope",
  "Keep your progress InScope",
  "Keep what matters InScope"
];

let index = 0;

function updateRollingText() {
  const line = document.getElementById("rolling-line");

  if (!line) return;

  index = (index + 1) % lines.length;
  line.textContent = lines[index];
}

setInterval(updateRollingText, 3500);

