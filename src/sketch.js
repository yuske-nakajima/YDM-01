function setup() {
  initial()

  // UIの描画(1回でOK)
  drawBackground()
}

function draw() {
  // UIの描画
  drawFrame()
  drawMainButtonArea()
  drawPlayButton()
  drawStopButton()
}
