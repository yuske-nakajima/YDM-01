// --------------------------------------------------
// User Interface を記述
// --------------------------------------------------
function drawBackground() {
  background(colors.background)
}

function drawFrame() {
  drawBlock(() => {
    rectMode(CENTER)

    // 影
    noStroke()
    fill(colors.shadow)
    rect(centerPos.x + 8, centerPos.y + 5, frameSize.width * 1.01, frameSize.height * 1.01, 5)

    // フレーム
    stroke(colors.line)
    strokeWeight(4)
    fill(colors.machineMain)
    rect(centerPos.x, centerPos.y, frameSize.width, frameSize.height, 5)
  })
}

function drawMainButtonArea() {
  drawBlock(() => {
    rectMode(CENTER)

    // 影
    noStroke()
    fill(colors.shadow)
    rect(
      mainButtonPos.x + 5,
      mainButtonPos.y + 5,
      mainButtonAreaSize.width * 1.03,
      mainButtonAreaSize.height * 1.05,
      10,
    )

    // ボタンを置くエリア
    stroke(colors.line)
    strokeWeight(4)
    fill(colors.machineSub)
    rect(mainButtonPos.x, mainButtonPos.y, mainButtonAreaSize.width, mainButtonAreaSize.height, 10)
  })
}

function drawPlayButton() {
  pushButton(createVector(centerPos.x + pushButtonSize * 0.7, mainButtonPos.y), colors.buttonNormal, (pos, color) => {
    fill(color)
    triangle(
      pos.x - pushButtonSize * 0.3,
      pos.y - pushButtonSize * 0.3,
      pos.x + pushButtonSize * 0.3 * 1.1,
      pos.y,
      pos.x - pushButtonSize * 0.3,
      pos.y + pushButtonSize * 0.3,
    )
  })
}

function drawStopButton() {
  pushButton(createVector(centerPos.x - pushButtonSize * 0.7, mainButtonPos.y), colors.buttonNormal, (pos, color) => {
    fill(color)
    rect(pos.x, pos.y, pushButtonSize * 0.5)
  })
}
