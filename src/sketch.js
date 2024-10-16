function beatEvent() {
  // デバッグ TODO: 本番では削除
  const onBeat = beatCount % BEAT
  console.clear()
  console.log('beat: ', onBeat)
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
  // ディスプレイ
  drawTempoDisplay()
  // コントロール
  drawTempoKnob()
}

function draw() {
  // UIの描画
  // コントロール
  drawPlayButton()
  drawStopButton()
  drawPatternButton()

  // 現在の時間（ミリ秒）を取得
  const currentTime = millis()

  // 1ビートの長さをミリ秒で計算
  const beatInterval = 60000 / 4 / bpm

  lastBeatTime = lastBeatTime || currentTime

  // 次のビートの時間になったらビートイベントを実行
  if (currentTime - lastBeatTime >= beatInterval) {
    beatEvent()
    beatCount++
    lastBeatTime = currentTime
  }
}
