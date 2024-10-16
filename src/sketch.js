function setup() {
  initial()

  // UIの描画(1回でOK)
  drawBackground()
}

function draw() {
  // UIの描画
  // フレーム
  drawFrame()
  drawMainButtonArea()
  drawTempoKnobArea()
  drawPatternButtonArea()
  drawSeqsArea()

  // コントロール
  drawPlayButton()
  drawStopButton()
  drawPertternButton()
}
