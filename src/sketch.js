// --- p5.js イベント関数のみ ---
function setup() {
  initial()

  // UIの描画(1回でOK)
  drawBackground()
  // フレーム
  drawFrame()
  drawMainButtonArea()
  drawTempoKnobArea()
  drawPatternButtonArea()
  drawSeqsArea()
  drawSeqsName()
  // ディスプレイ
  drawSeqLightsFrame()
}

function draw() {
  // UIの描画
  // フレーム
  drawSeqsFrame()
  // ディスプレイ
  drawTempoDisplay()
  drawSeqLights()
  drawTempoNumber()
  // コントロール
  drawPlayButton()
  drawStopButton()
  drawPatternButton()
  updateTempoKnob()
  drawTempoKnobIndicator()
  updateVolumeKnob()
  drawVolumeKnobIndicator()

  if (isPlaying) {
    const currentTime = millis()
    const beatInterval = 60000 / 4 / bpm

    lastBeatTime = lastBeatTime || currentTime

    if (currentTime - lastBeatTime >= beatInterval) {
      play()
      beatCount++
      lastBeatTime = currentTime

      if (isStopping && beatCount % BEAT === 0) {
        isPlaying = false
        isStopping = false
        onBeat = 0
      }
    }
  }
}

function mousePressed() {
  // パターンボタンのクリック判定
  const startX = patternButtonPos.x - mainButtonAreaSize.width * 0.3
  for (let i = 0; i < 4; i++) {
    const pos = {
      x: startX + mainButtonAreaSize.width * 0.2 * i - patternButtonSize / 2,
      y: patternButtonPos.y - mainButtonAreaSize.height * 0.1 - patternButtonSize / 2,
    }
    if (mouseX > pos.x && mouseX < pos.x + patternButtonSize && mouseY > pos.y && mouseY < pos.y + patternButtonSize) {
      currentPatternNum = i + 1
      saveToLocalStorage('currentPatternNum', currentPatternNum)
      break
    }
  }

  // シーケンサーのマス目クリック判定
  const posY = lightPos.y - seqAreaSize.height * 0.85
  const gap = {
    x: lightGap.x * 0.95,
    y: lightGap.y * 0.85,
  }

  for (let i = 0; i < beatData.get(currentPatternNum).length; i++) {
    for (let j = 0; j < beatData.get(currentPatternNum)[i].length; j++) {
      const x = lightPos.x + lightSize + lightGap.x * j
      const y = posY + lightSize + gap.y * i

      const left = x - lightSize
      const right = x + lightSize
      const top = y - lightSize
      const bottom = y + lightSize

      if (mouseX > left && mouseX < right && mouseY > top && mouseY < bottom) {
        beatData.get(currentPatternNum)[i][j] = !beatData.get(currentPatternNum)[i][j]
        saveToLocalStorage('beatData', beatData)
        break
      }
    }
  }

  // Play ボタンの判定
  if (isButtonClicked(centerPos.x + pushButtonSize * 0.7, mainButtonPos.y)) {
    isPlaying = true
    isStopping = false
    if (beatCount === 0 || beatCount % BEAT === 0) {
      lastBeatTime = millis()
    }
  }
  // Stop ボタンの判定
  else if (isButtonClicked(centerPos.x - pushButtonSize * 0.7, mainButtonPos.y)) {
    if (isPlaying) {
      isStopping = true
    }
  }

  if (isMouseOverTempoKnob()) {
    isDraggingTempo = true
    lastMouseY = mouseY
    lastMouseX = mouseX
  }

  if (isMouseOverVolumeKnob()) {
    isDraggingVolume = true
    lastMouseY = mouseY
    lastMouseX = mouseX
  }
}

function mouseDragged() {
  if (isDraggingTempo) {
    const dy = lastMouseY - mouseY
    const dx = mouseX - lastMouseX

    // 垂直方向の動きを優先し、水平方向の動きも考慮する
    const change = dy + dx * 0.5

    // 感度調整（必要に応じて調整してください）
    const sensitivity = 0.5

    bpm = saveToLocalStorage('bpm', ceil(constrain(bpm + change * sensitivity, MIN_BPM, MAX_BPM)))

    lastMouseY = mouseY
    lastMouseX = mouseX
  }

  if (isDraggingVolume) {
    const dy = lastMouseY - mouseY
    const dx = mouseX - lastMouseX

    // 垂直方向の動きを優先し、水平方向の動きも考慮する
    const change = dy + dx * 0.5

    // 感度調整（必要に応じて調整してください）
    const sensitivity = 0.01

    volume = saveToLocalStorage('volume', constrain(volume + change * sensitivity, MIN_VOLUME, MAX_VOLUME))

    lastMouseY = mouseY
    lastMouseX = mouseX
  }
}

function mouseReleased() {
  isDraggingTempo = false
  isDraggingVolume = false
}

function touchStarted() {
  mousePressed()
  return false
}

function touchMoved() {
  mouseDragged()
  return false
}

function touchEnded() {
  mouseReleased()
  return false
}
