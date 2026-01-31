function drawStart() {
  background(180, 225, 220);
  fill(30, 50, 60);
  textAlign(CENTER, CENTER);

  textSize(48);
  text("DISPATCH: Night Shift", width / 2, 160);

  textSize(18);
  text("02:13 AM • Tornado warning • Lines unstable", width / 2, 205);

  const startBtn = {
    x: width / 2,
    y: 320,
    w: 260,
    h: 80,
    label: "BEGIN SHIFT",
  };
  const instrBtn = {
    x: width / 2,
    y: 430,
    w: 260,
    h: 80,
    label: "INSTRUCTIONS",
  };

  drawButton(startBtn);
  drawButton(instrBtn);

  cursor(isHover(startBtn) || isHover(instrBtn) ? HAND : ARROW);
}

function startMousePressed() {
  if (isHover({ x: 400, y: 320, w: 260, h: 80 })) currentScreen = "game";
  else if (isHover({ x: 400, y: 430, w: 260, h: 80 })) currentScreen = "instr";
}

function startKeyPressed() {
  if (keyCode === ENTER) currentScreen = "game";
  if (key === "i" || key === "I") currentScreen = "instr";
}

function drawButton({ x, y, w, h, label }) {
  rectMode(CENTER);
  noStroke();
  fill(isHover({ x, y, w, h }) ? 255 : 240);
  rect(x, y, w, h, 14);

  fill(40);
  textSize(28);
  text(label, x, y);
}
