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
  buttonArea(patternButtonPos, mainButtonAreaSize)
  buttonAreaText('PATTERN', patternButtonPos, mainButtonAreaSize)
}

function drawSeqsArea() {
  buttonArea(seqAreaPos, seqAreaSize, 'small')
}

// ディスプレイ
function drawTempoDisplay() {
  const pos = {
    x: tempoKnobPos.x - mainButtonAreaSize.width * 0.15,
    y: tempoKnobPos.y - mainButtonAreaSize.height * 0.125,
  }
  const size = {
    width: mainButtonAreaSize.width * 0.35,
    height: mainButtonAreaSize.height * 0.5,
  }

  drawBlock(() => {
    rectMode(CENTER)

    // 影
    noStroke()
    fill(colors.displayLine)
    rect(pos.x + 6, pos.y + 4, size.width * 1.01, size.height * 1.01, 5)

    // ディスプレイ
    stroke(colors.displayLine)
    strokeWeight(4)
    fill(colors.displayMain)
    rect(pos.x, pos.y, size.width, size.height, 5)
  })
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

function drawPatternButton() {
  const startX = patternButtonPos.x - mainButtonAreaSize.width * 0.3
  for (let i = 0; i < 4; i++) {
    const pos = {
      x: startX + mainButtonAreaSize.width * 0.2 * i,
      y: patternButtonPos.y - mainButtonAreaSize.height * 0.1,
    }
    patternButton(pos, colors.buttonNormal, i + 1)
  }
}

function drawTempoKnob() {
  const pos = {
    x: tempoKnobPos.x + mainButtonAreaSize.width * 0.18,
    y: tempoKnobPos.y - mainButtonAreaSize.height * 0.125,
  }

  const size = {
    width: mainButtonAreaSize.width * 0.2,
    height: mainButtonAreaSize.width * 0.2,
  }

  drawBlock(() => {
    ellipseMode(CENTER)

    // 影
    noStroke()
    fill(colors.shadow)
    ellipse(pos.x + 3, pos.y + 3, size.width * 1.06, size.height * 1.08)

    // ノブ
    fill(colors.buttonNormal)
    stroke(colors.line)
    strokeWeight(size.width * 0.05)
    ellipse(pos.x, pos.y, size.width, size.height)

    // 内側
    noFill()
    stroke(colors.line)
    strokeWeight(size.width * 0.02)
    ellipse(pos.x, pos.y, size.width * 0.5)
  })
}
