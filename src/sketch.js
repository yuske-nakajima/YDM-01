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
  // ディスプレイ
  drawTempoDisplay()
  drawSeqLightsFrame()
  // コントロール
  drawTempoKnob()
}

function draw() {
  // UIの描画
  // ディスプレイ
  drawSeqLights(onBeat)
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
    onBeat = beatCount % BEAT
    beatCount++
    lastBeatTime = currentTime
  }
}
