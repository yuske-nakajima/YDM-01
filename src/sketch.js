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
  drawPertternButton()
}
