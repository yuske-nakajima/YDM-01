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
  buttonAreaText(
    'TEMPO',
    {
      x: tempoKnobPos.x + mainButtonAreaSize.width * 0.15,
      y: tempoKnobPos.y,
    },
    mainButtonAreaSize,
  )
  buttonAreaText(
    'VOLUME',
    {
      x: tempoKnobPos.x - mainButtonAreaSize.width * 0.325,
      y: tempoKnobPos.y,
    },
    mainButtonAreaSize,
  )
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
  const gap = {
    x: lightGap.x * 0.95,
    y: lightGap.y * 0.85,
  }

  for (let i = 0; i < musicList.length; i++) {
    const x = lightPos.x - lightSize * 2.5
    const y = posY + lightSize + gap.y * i

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
  const gap = {
    x: lightGap.x * 0.95,
    y: lightGap.y * 0.85,
  }

  for (let i = 0; i < beatData.get(currentPatternNum).length; i++) {
    for (let j = 0; j < beatData.get(currentPatternNum)[i].length; j++) {
      const x = lightPos.x + lightSize + lightGap.x * j
      const y = posY + lightSize + gap.y * i

      drawBlock(() => {
        rectMode(CENTER)
        noStroke()

        strokeWeight(lightSize * 0.1)

        let cellColor = j % 4 === 0 ? colors.machineDark : colors.machineMain
        cellColor = j === (isPlaying && onBeat) ? colors.buttonNormal : cellColor
        fill(cellColor)

        rect(x, y, lightSize * 2)

        noStroke()
        if (beatData.get(currentPatternNum)[i][j]) {
          fill(colors.displayMain)
          rect(x, y, lightSize * 1)
        }
      })
    }
  }
}

// ディスプレイ
function drawTempoDisplay() {
  const pos = {
    x: tempoKnobPos.x + mainButtonAreaSize.width * 0.03,
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
    const x = lightPos.x + lightSize + lightGap.x * i
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
    const x = lightPos.x + lightSize + lightGap.x * i
    const y = lightPos.y
    drawBlock(() => {
      ellipseMode(CENTER)
      stroke(colors.line)
      strokeWeight(lightSize * 0.1)

      // 点灯
      if (isPlaying && i === onBeat) {
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
    x: tempoKnobPos.x + mainButtonAreaSize.width * 0.03,
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
  let buttonColor = isPlaying ? colors.buttonNormal : colors.buttonLight
  buttonColor = isStopping ? colors.buttonStopping : buttonColor
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
  drawBlock(() => {
    ellipseMode(CENTER)

    // 影
    noStroke()
    fill(colors.shadow)
    ellipse(
      tempoKnobControlPos.x + 3,
      tempoKnobControlPos.y + 3,
      tempoKnobControlSize.width * 1.06,
      tempoKnobControlSize.height * 1.08,
    )

    // ノブ
    fill(colors.buttonNormal)
    stroke(colors.line)
    strokeWeight(tempoKnobControlSize.width * 0.05)
    ellipse(tempoKnobControlPos.x, tempoKnobControlPos.y, tempoKnobControlSize.width, tempoKnobControlSize.height)

    // 内側
    noFill()
    stroke(colors.line)
    strokeWeight(tempoKnobControlSize.width * 0.02)
    ellipse(tempoKnobControlPos.x, tempoKnobControlPos.y, tempoKnobControlSize.width * 0.5)
  })
}

function drawTempoKnobIndicator() {
  const startAngle = HALF_PI // 9時から開始
  const endAngle = map(bpm, MIN_BPM, MAX_BPM, 0, TWO_PI) + startAngle

  drawBlock(() => {
    noFill()
    stroke(colors.buttonhalfDark)
    strokeWeight(tempoKnobControlSize.width * 0.03)

    // 現在の値を示す点を描画
    fill(colors.machineDark)
    stroke(colors.shadow)
    const pointAngle = endAngle
    const pointX = tempoKnobControlPos.x + cos(pointAngle) * (tempoKnobControlSize.width * 0.4)
    const pointY = tempoKnobControlPos.y + sin(pointAngle) * (tempoKnobControlSize.height * 0.4)
    ellipse(pointX, pointY, tempoKnobControlSize.width * 0.12)
  })
}

function drawVolumeKnob() {
  drawBlock(() => {
    ellipseMode(CENTER)

    // 影
    noStroke()
    fill(colors.shadow)
    ellipse(
      volumeKnobControlPos.x + 3,
      volumeKnobControlPos.y + 3,
      volumeKnobControlSize.width * 1.06,
      volumeKnobControlSize.height * 1.08,
    )

    // ノブ
    fill(colors.buttonNormal)
    stroke(colors.line)
    strokeWeight(volumeKnobControlSize.width * 0.05)
    ellipse(volumeKnobControlPos.x, volumeKnobControlPos.y, volumeKnobControlSize.width, volumeKnobControlSize.height)

    // 内側
    noFill()
    stroke(colors.line)
    strokeWeight(volumeKnobControlSize.width * 0.02)
    ellipse(volumeKnobControlPos.x, volumeKnobControlPos.y, volumeKnobControlSize.width * 0.5)
  })
}

function drawVolumeKnobIndicator() {
  const startAngle = HALF_PI // 9時から開始
  const endAngle = map(volume, MIN_VOLUME, MAX_VOLUME, 0, TWO_PI) + startAngle

  drawBlock(() => {
    noFill()
    stroke(colors.buttonhalfDark)
    strokeWeight(volumeKnobControlSize.width * 0.03)

    // 現在の値を示す点を描画
    fill(colors.machineDark)
    stroke(colors.shadow)
    const pointAngle = endAngle
    const pointX = volumeKnobControlPos.x + cos(pointAngle) * (volumeKnobControlSize.width * 0.4)
    const pointY = volumeKnobControlPos.y + sin(pointAngle) * (volumeKnobControlSize.height * 0.4)
    ellipse(pointX, pointY, volumeKnobControlSize.width * 0.12)
  })
}
