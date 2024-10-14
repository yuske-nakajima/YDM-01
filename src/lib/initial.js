// --------------------------------------------------
// 初期化処理
// --------------------------------------------------

function initial() {
  // フォントの設定
  textFont('M PLUS Rounded 1c')

  // フォントの読み込みを確認
  document.fonts.ready.then(() => {
    fontLoaded = true
  })

  // カラーモード
  colorMode(HSB)

  // 使用カラー設定
  colors.background = color(0, 0, 30)
  colors.line = color(0, 0, 20)
  colors.machineMain = color(220, 10, 40)
  colors.machineLight = color(220, 10, 60)
  colors.machineDark = color(220, 10, 10)
  colors.buttonNormal = color(0, 0, 100)
  colors.shadow = color(0, 0, 20)

  // キャンバスの設定
  createCanvas(windowWidth * 0.99, windowHeight * 0.99)

  centerPos.x = width / 2
  centerPos.y = height / 2

  frameSize.width = width * 0.9
  frameSize.height = height * 0.9 // TODO: 中身で可変にする

  framePos.x = centerPos.x - frameSize.width / 2
  framePos.y = centerPos.y - frameSize.height / 2

  pushButtonSize = min(frameSize.width, frameSize.height) * 0.15

  mainButtonPos.x = centerPos.x
  mainButtonPos.y = framePos.y + frameSize.height * 0.15
}
