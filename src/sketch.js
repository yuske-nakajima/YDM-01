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

  // 現在の時間（ミリ秒）を取得
  const currentTime = millis()

  // 1ビートの長さをミリ秒で計算
  const beatInterval = 60000 / 4 / bpm

  lastBeatTime = lastBeatTime || currentTime

  // 総拍数から現在の拍数を計算
  if (currentTime - lastBeatTime >= beatInterval) {
    play()
    beatCount++
    lastBeatTime = currentTime
  }
}

function mousePressed() {
  // マウスを押したときにドラムマシンのデータを更新
  const posY = lightPos.y - seqAreaSize.height * 0.85
  const gap = lightGap * 0.95

  for (let i = 0; i < beatData.get(currentPatternNum).length; i++) {
    for (let j = 0; j < beatData.get(currentPatternNum)[i].length; j++) {
      const x = lightPos.x + lightSize + lightGap * j
      const y = posY + lightSize + gap * i

      // マスの左上と右下の座標を計算
      const left = x - lightSize
      const right = x + lightSize
      const top = y - lightSize
      const bottom = y + lightSize

      // クリックがマスの範囲内かチェック
      if (mouseX > left && mouseX < right && mouseY > top && mouseY < bottom) {
        console.log(`Clicked on cell at row ${i}, column ${j}`)
        // ここでクリックされたマスに対する処理を行う
        beatData.get(currentPatternNum)[i][j] = !beatData.get(currentPatternNum)[i][j]
        return // クリックされたマスが見つかったらループを抜ける
      }
    }
  }
}
