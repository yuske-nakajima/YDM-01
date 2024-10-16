// --------------------------------------------------
// UI部品
// --------------------------------------------------
function buttonArea(
  pos, // { x, y }
  size, // { width, height }
  shadowSize = 'normal', // 'small' | 'normal' | 'large'
) {
  const shadowSizeMap = {
    small: {
      ratio: {
        x: 1.007,
        y: 1.009,
      },
      sPos: {
        x: size.width * 0.004,
        y: size.height * 0.006,
      },
    },
    normal: {
      ratio: {
        x: 1.05,
        y: 1.03,
      },
      sPos: {
        x: size.width * 0.01,
        y: size.height * 0.015,
      },
    },
    large: {
      ratio: {
        x: 1.1,
        y: 1.08,
      },
      sPos: {
        x: size.width * 0.02,
        y: size.height * 0.03,
      },
    },
  }

  const { ratio, sPos } = shadowSizeMap[shadowSize]
  drawBlock(() => {
    rectMode(CENTER)

    // 影
    noStroke()
    fill(colors.shadow)
    rect(pos.x + sPos.x, pos.y + sPos.y, size.width * ratio.x, size.height * ratio.y, 10)

    // ボタンを置くエリア
    stroke(colors.line)
    strokeWeight(4)
    fill(colors.machineSub)
    rect(pos.x, pos.y, size.width, size.height, 10)
  })
}

function buttonAreaText(
  str, // string
  pos, // { x, y }
  size, // { width, height }
) {
  drawBlock(() => {
    noStroke()
    fill(colors.textMain)
    textStyle(BOLD)
    textSize(size.height * 0.2)
    textAlign(CENTER, CENTER)
    text(str, pos.x, pos.y + (size.height / 2) * 0.7)
  })
}

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
