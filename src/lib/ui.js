// --------------------------------------------------
// User Interface を記述
// --------------------------------------------------
function drawBackground() {
  background(colors.background)
}

// フレーム
function drawFrame() {
  drawBlock(() => {
    rectMode(CENTER)

    // 影
    noStroke()
    fill(colors.shadow)
    rect(framePos.x + 8, framePos.y + 5, frameSize.width * 1.01, frameSize.height * 1.01, 5)

    // フレーム
    stroke(colors.line)
    strokeWeight(4)
    fill(colors.machineMain)
    rect(framePos.x, framePos.y, frameSize.width, frameSize.height, 5)
  })
}

function drawMainButtonArea() {
  buttonArea(mainButtonPos, mainButtonAreaSize)
}

function drawTempoKnobArea() {
  buttonArea(tempoKnobPos, mainButtonAreaSize)
  buttonAreaText('TEMPO', tempoKnobPos, mainButtonAreaSize)
}

function drawPatternButtonArea() {
  buttonArea(pertternButtonPos, mainButtonAreaSize)
  buttonAreaText('PATTERN', pertternButtonPos, mainButtonAreaSize)
}

function drawSeqsArea() {
  buttonArea(seqAreaPos, seqAreaSize, 'small')
}

// コントロール
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
