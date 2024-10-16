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
}

function draw() {
  // UIの描画

  // コントロール
  drawPlayButton()
  drawStopButton()
  drawPertternButton()
}
