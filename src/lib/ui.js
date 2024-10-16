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

function drawSeqsName() {
  // musicList から取得
  const posY = lightPos.y - seqAreaSize.height * 0.85
  const gap = lightGap * 0.95

  for (let i = 0; i < musicList.length; i++) {
    const x = lightPos.x - lightSize * 2.5
    const y = posY + lightSize + gap * i

    drawBlock(() => {
      rectMode(CENTER)
      noStroke()
      fill(colors.machineDark)
      textSize(mainButtonAreaSize.width * 0.06)
      textAlign(CENTER, CENTER)
      text(musicList[i][0], x, y)
    })
  }
}

function drawSeqsFrame() {
  const posY = lightPos.y - seqAreaSize.height * 0.85
  const gap = lightGap * 0.95

  for (let i = 0; i < beatData.get(currentPatternNum).length; i++) {
    for (let j = 0; j < beatData.get(currentPatternNum)[i].length; j++) {
      const x = lightPos.x + lightSize + lightGap * j
      const y = posY + lightSize + gap * i

      drawBlock(() => {
        rectMode(CENTER)
        noStroke()
        strokeWeight(lightSize * 0.1)

        const cellColor = onBeat === j ? colors.machineLight : colors.machineMain

        fill(cellColor)
        rect(x, y, lightSize * 2)

        if (beatData.get(currentPatternNum)[i][j]) {
          // 丸
          fill(colors.displayMain)
          ellipse(x, y, lightSize * 0.9)
        }
      })
    }
  }
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

function drawSeqLightsFrame() {
  for (let i = 0; i < 16; i++) {
    const x = lightPos.x + lightSize + lightGap * i
    const y = lightPos.y
    drawBlock(() => {
      ellipseMode(CENTER)

      // 台
      stroke(colors.line)

      if (i % 4 === 0) {
        strokeWeight(lightSize * 0.4)
      } else {
        strokeWeight(lightSize * 0.1)
      }

      fill(colors.machineMain)
      ellipse(x, y, lightSize, lightSize)
    })
  }
}

function drawSeqLights() {
  for (let i = 0; i < 16; i++) {
    const x = lightPos.x + lightSize + lightGap * i
    const y = lightPos.y
    drawBlock(() => {
      ellipseMode(CENTER)
      stroke(colors.line)
      strokeWeight(lightSize * 0.1)

      // 点灯
      if (i === onBeat) {
        fill(colors.buttonLight)
        ellipse(x, y, lightSize * 0.9)
      } else {
        fill(colors.machineMain)
        ellipse(x, y, lightSize)
      }
    })
  }
}

function drawTempoNumber() {
  const pos = {
    x: tempoKnobPos.x - mainButtonAreaSize.width * 0.15,
    y: tempoKnobPos.y - mainButtonAreaSize.height * 0.125,
  }

  drawBlock(() => {
    rectMode(CENTER)
    noStroke()
    fill(colors.displayText)
    textSize(mainButtonAreaSize.width * 0.1)
    textAlign(CENTER, CENTER)
    text(bpm, pos.x, pos.y)
  })
}

// コントロール
function drawPlayButton() {
  const buttonColor = isPlaying ? colors.buttonLight : colors.buttonNormal
  pushButton(createVector(centerPos.x + pushButtonSize * 0.7, mainButtonPos.y), buttonColor, (pos, color) => {
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
  const buttonColor = isPlaying ? colors.buttonNormal : colors.buttonLight
  pushButton(createVector(centerPos.x - pushButtonSize * 0.7, mainButtonPos.y), buttonColor, (pos, color) => {
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
    const buttonColor = currentPatternNum === i + 1 ? colors.buttonLight : colors.buttonNormal
    patternButton(pos, buttonColor, i + 1)
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
