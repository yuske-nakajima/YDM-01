// --------------------------------------------------
// UI部品
// --------------------------------------------------
function pushButton(pos, buttonColor, iconShape) {
  drawBlock(() => {
    rectMode(CENTER)

    // 影
    noStroke()
    fill(colors.shadow)
    rect(pos.x + 5, pos.y + 5, pushButtonSize * 1.08, pushButtonSize * 1.06, 3)

    // ボタン
    fill(buttonColor)
    stroke(colors.line)
    strokeWeight(2)
    rect(pos.x, pos.y, pushButtonSize, pushButtonSize)
    fill(colors.background)
    noStroke()
    rect(pos.x, pos.y, pushButtonSize * 0.9, pushButtonSize * 0.9)

    // buttonのアイコン
    iconShape(pos, buttonColor)
  })
}
