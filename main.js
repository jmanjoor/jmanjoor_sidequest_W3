let currentScreen = "start";

function setup() {
  const canvas = createCanvas(800, 800);
  canvas.parent(document.querySelector(".canvas-frame"));
  textFont("sans-serif");
}

function draw() {
  switch (currentScreen) {
    case "start":
      drawStart();
      break;
    case "instr":
      drawInstr();
      break;
    case "game":
      drawGame();
      break;
    case "win":
      drawWin();
      break;
    case "lose":
      drawLose();
      break;
    default:
      currentScreen = "start";
  }
}

function mousePressed() {
  switch (currentScreen) {
    case "start":
      startMousePressed?.();
      break;
    case "instr":
      instrMousePressed?.();
      break;
    case "game":
      gameMousePressed?.();
      break;
    case "win":
      winMousePressed?.();
      break;
    case "lose":
      loseMousePressed?.();
      break;
  }
}

function keyPressed() {
  switch (currentScreen) {
    case "start":
      startKeyPressed?.();
      break;
    case "instr":
      instrKeyPressed?.();
      break;
    case "game":
      gameKeyPressed?.();
      break;
    case "win":
      winKeyPressed?.();
      break;
    case "lose":
      loseKeyPressed?.();
      break;
  }
}

function isHover({ x, y, w, h }) {
  return (
    mouseX > x - w / 2 &&
    mouseX < x + w / 2 &&
    mouseY > y - h / 2 &&
    mouseY < y + h / 2
  );
}
