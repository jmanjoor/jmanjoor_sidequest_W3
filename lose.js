function drawLose() {
  background(255, 210, 210);
  fill(0);
  textAlign(CENTER, CENTER);

  textSize(42);
  text("COSTLY OUTCOME", width / 2, 260);

  textSize(18);
  text(
    "The response was fast but flawed.\nOne call was missed.\nThe night remembers.",
    width / 2,
    335,
  );

  text("Click or press R to restart.", width / 2, 470);
}

function loseMousePressed() {
  currentScreen = "start";
}

function loseKeyPressed() {
  if (key === "r" || key === "R") currentScreen = "start";
}
