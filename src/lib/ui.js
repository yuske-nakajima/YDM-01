// --------------------------------------------------
// User Interface を記述
// --------------------------------------------------
function drawBackground() {
  background(colors.background)
}

function drawFrame() {
  strokeWeight(1)
  stroke(colors.line)

  // フレームの枠 陰
  drawBlock(() => {
    fill(colors.machineMainShadow)

    // 左
    beginShape()
    vertex(framePos.x, framePos.y)
    vertex(centerPos.x, centerPos.y)
    vertex(framePos.x, framePos.y + frameSize.height)
    endShape(CLOSE)

    // 下
    beginShape()
    vertex(centerPos.x, centerPos.y)
    vertex(framePos.x, framePos.y + frameSize.height)
    vertex(framePos.x + frameSize.width, framePos.y + frameSize.height)
    endShape(CLOSE)
  })

  // フレームの枠 陽
  drawBlock(() => {
    fill(colors.machineMainLight)

    // 右
    beginShape()
    vertex(framePos.x + frameSize.width, framePos.y)
    vertex(centerPos.x, centerPos.y)
    vertex(framePos.x + frameSize.width, framePos.y + frameSize.height)
    endShape(CLOSE)

    // 上
    beginShape()
    vertex(centerPos.x, centerPos.y)
    vertex(framePos.x, framePos.y)
    vertex(framePos.x + frameSize.width, framePos.y)
    endShape(CLOSE)
  })

  // フレームの背景
  const innerWidth = 0.005
  drawBlock(() => {
    fill(colors.machineMain)
    rectMode(CORNER)
    rect(
      lerp(framePos.x, centerPos.x, innerWidth),
      lerp(framePos.y, centerPos.y, innerWidth),
      frameSize.width * (1 - innerWidth),
      frameSize.height * (1 - innerWidth),
    )
  })
}
