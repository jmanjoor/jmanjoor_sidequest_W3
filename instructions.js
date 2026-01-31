function drawInstr() {
  background(240);
  fill(0);
  textAlign(CENTER, TOP);

  textSize(36);
  text("Instructions", width / 2, 80);

  textSize(18);
  text(
    "You are the dispatcher on a stormy night.\n" +
      "Each call presents two choices to you.\n" +
      "Your decisions change the outcome.\n\n" +
      "Controls:\n" +
      "• Click buttons or press 1 / 2\n" +
      "• Press ESC or B to go back",
    width / 2,
    160,
  );

  const backBtn = { x: width / 2, y: height / 2 + 180, w: 220, h: 70 };
  rectMode(CENTER);
  fill(isHover(backBtn) ? 200 : 220);
  rect(backBtn.x, backBtn.y, backBtn.w, backBtn.h, 12);

  fill(0);
  textSize(26);
  textAlign(CENTER, CENTER);

  text("BACK", backBtn.x, backBtn.y);

  cursor(isHover(backBtn) ? HAND : ARROW);
}

function instrMousePressed() {
  const backBtn = { x: width / 2, y: height / 2 + 180, w: 220, h: 70 };
  if (isHover(backBtn)) currentScreen = "start";
}

function instrKeyPressed() {
  if (keyCode === ESCAPE || key === "b" || key === "B") currentScreen = "start";
}
