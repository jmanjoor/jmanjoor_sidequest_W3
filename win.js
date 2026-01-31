function drawWin() {
  background(200, 255, 200);
  fill(0);
  textAlign(CENTER, CENTER);

  textSize(42);
  text("CONTROLLED RESOLUTION", width / 2, 260);

  textSize(18);
  text(
    "Rescue arrives prepared.\nNo lives lost.\nJudgment over speed.",
    width / 2,
    335,
  );

  text("Click or press R to restart.", width / 2, 470);
}

function winMousePressed() {
  currentScreen = "start";
}

function winKeyPressed() {
  if (key === "r" || key === "R") currentScreen = "start";
}
