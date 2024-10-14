// --------------------------------------------------
// UI部品
// --------------------------------------------------
function pushButton(pos, buttonColor, iconShape) {
  drawBlock(() => {
    noStroke()
    rectMode(CENTER)
    // チョイずらし
    fill(colors.shadow)
    rect(pos.x + 6, pos.y + 5, pushButtonSize, pushButtonSize)

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
