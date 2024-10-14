// --------------------------------------------------
// User Interface を記述
// --------------------------------------------------
function drawBackground() {
  background(colors.background)
}

function drawFrame() {
  drawBlock(() => {
    noStroke()
    fill(colors.shadow)
    rect(framePos.x + 8, framePos.y + 5, frameSize.width, frameSize.height, 5)

    stroke(colors.line)
    strokeWeight(4)
    fill(colors.machineMain)
    rect(framePos.x, framePos.y, frameSize.width, frameSize.height, 5)
  })
}

function drawMainButtonArea() {
  drawBlock(() => {
    rectMode(CENTER)

    noStroke()
    fill(colors.shadow)
    rect(mainButtonPos.x + 5, mainButtonPos.y + 5, pushButtonSize * 3, pushButtonSize * 1.5, 10)

    stroke(colors.line)
    strokeWeight(4)
    fill(colors.machineDark)
    rect(mainButtonPos.x, mainButtonPos.y, pushButtonSize * 3, pushButtonSize * 1.5, 10)
  })
}

function drawPlayButton() {
  pushButton(
    createVector(centerPos.x + frameSize.width * 0.06, framePos.y + frameSize.height * 0.15),
    colors.buttonNormal,
    (pos, color) => {
      fill(color)
      triangle(
        pos.x - pushButtonSize * 0.3,
        pos.y - pushButtonSize * 0.3,
        pos.x + pushButtonSize * 0.3 * 1.1,
        pos.y,
        pos.x - pushButtonSize * 0.3,
        pos.y + pushButtonSize * 0.3,
      )
    },
  )
}

function drawStopButton() {
  pushButton(
    createVector(centerPos.x - frameSize.width * 0.06, framePos.y + frameSize.height * 0.15),
    colors.buttonNormal,
    (pos, color) => {
      fill(color)
      rect(pos.x, pos.y, pushButtonSize * 0.5)
    },
  )
}
