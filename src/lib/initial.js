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
  colors.machineMain = color(220, 5, 90)
  colors.machineSub = color(220, 10, 90)
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

  pushButtonSize = frameSize.width * 0.28 * 0.3

  mainButtonAreaSize.width = pushButtonSize * 4
  mainButtonAreaSize.height = pushButtonSize * 1.3

  mainButtonPos.x = centerPos.x
  mainButtonPos.y = framePos.y + mainButtonAreaSize.height * 0.65
}
