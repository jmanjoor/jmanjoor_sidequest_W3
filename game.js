let phase = 1;
let branch = null;

function drawGame() {
  background(30, 35, 45);
  fill(240);
  textAlign(CENTER, TOP);

  textSize(30);
  text("Active Line", width / 2, 90);

  const left = { x: 230, y: 560, w: 300, h: 90 };
  const right = { x: 570, y: 560, w: 300, h: 90 };

  textSize(20);

  if (phase === 1) {
    text(
      "Caller reports a vehicle submerged near the river.\nSignal breaking.",
      width / 2,
      200,
    );
    drawChoice(left, "1) Dispatch rescue now");
    drawChoice(right, "2) Ask for details");
  } else {
    if (branch === 1) {
      text("Rescue en route. Visibility poor.\nGPS unclear.", width / 2, 200);
      drawChoice(left, "1) Keep direct route");
      drawChoice(right, "2) Reroute safely");
    } else {
      text("More info arrives.\nSecond vehicle reported.", width / 2, 200);
      drawChoice(left, "1) Focus one caller");
      drawChoice(right, "2) Split attention");
    }
  }

  cursor(isHover(left) || isHover(right) ? HAND : ARROW);
}

function drawChoice({ x, y, w, h }, label) {
  rectMode(CENTER);
  fill(isHover({ x, y, w, h }) ? 90 : 70);
  rect(x, y, w, h, 14);
  fill(255);
  textAlign(CENTER, CENTER);
  textSize(18);
  text(label, x, y);
}

function gameMousePressed() {
  if (isHover({ x: 230, y: 560, w: 300, h: 90 })) choose(1);
  if (isHover({ x: 570, y: 560, w: 300, h: 90 })) choose(2);
}

function gameKeyPressed() {
  if (key === "1") choose(1);
  if (key === "2") choose(2);
}

function choose(n) {
  if (phase === 1) {
    // First decision determines the branch
    branch = n;
    phase = 2;
  } else {
    // Second decision determines outcome based on branch
    if (branch === 1) {
      // Branch A: Dispatch rescue now
      // 1 = risky direct route (lose)
      // 2 = safer reroute (win)
      if (n === 2) currentScreen = "win";
      else currentScreen = "lose";
    } else if (branch === 2) {
      // Branch B: Ask for details
      // 1 = focused response (win)
      // 2 = split attention (lose)
      if (n === 1) currentScreen = "win";
      else currentScreen = "lose";
    }

    // Reset for replay
    phase = 1;
    branch = null;
  }
}
