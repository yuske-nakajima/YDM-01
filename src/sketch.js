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
  drawTempoDisplay()
  drawSeqLightsFrame()
  // コントロール
  drawTempoKnob()
}

function draw() {
  // UIの描画
  // フレーム
  drawSeqsFrame()
  // ディスプレイ
  drawSeqLights()
  drawTempoNumber()
  // コントロール
  drawPlayButton()
  drawStopButton()
  drawPatternButton()

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
        beatCount = 0
        onBeat = 0
        console.log('Sequencer stopped at end of bar')
      }
    }
  }
}

function play() {
  onBeat = beatCount % BEAT

  for (let i = 0; i < BEAT; i++) {
    for (let j = 0; j < musicList.length; j++) {
      if (onBeat === i) {
        if (beatData.get(currentPatternNum)[j][i]) {
          musicList[j][1](musicGainList[j])
        }
      }
    }
  }
}

function mousePressed() {
  // シーケンサーのマス目クリック判定
  const posY = lightPos.y - seqAreaSize.height * 0.85
  const gap = lightGap * 0.95

  for (let i = 0; i < beatData.get(currentPatternNum).length; i++) {
    for (let j = 0; j < beatData.get(currentPatternNum)[i].length; j++) {
      const x = lightPos.x + lightSize + lightGap * j
      const y = posY + lightSize + gap * i

      const left = x - lightSize
      const right = x + lightSize
      const top = y - lightSize
      const bottom = y + lightSize

      if (mouseX > left && mouseX < right && mouseY > top && mouseY < bottom) {
        beatData.get(currentPatternNum)[i][j] = !beatData.get(currentPatternNum)[i][j]
        return
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
    console.log('Play button clicked. isPlaying:', isPlaying)
  }
  // Stop ボタンの判定
  else if (isButtonClicked(centerPos.x - pushButtonSize * 0.7, mainButtonPos.y)) {
    if (isPlaying) {
      isStopping = true
      console.log('Stop button clicked. Waiting for end of bar to stop.')
    } else {
      console.log('Sequencer is already stopped.')
    }
  }
}

function isButtonClicked(x, y) {
  const d = dist(mouseX, mouseY, x, y)
  return d < pushButtonSize / 2
}
