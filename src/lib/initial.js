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
  colors.background = color(0, 0, 98)
  colors.line = color(0, 0, 0)
  colors.machineMain = color(200, 20, 80)
  colors.machineMainLight = color(200, 20, 100)
  colors.machineMainShadow = color(200, 20, 50)

  // キャンバスの設定
  createCanvas(windowWidth * 0.99, windowHeight * 0.99)

  centerPos.x = width / 2
  centerPos.y = height / 2

  frameSize.width = width * 0.9
  frameSize.height = height * 0.9 // TODO: 中身で可変にする

  framePos.x = centerPos.x - frameSize.width / 2
  framePos.y = centerPos.y - frameSize.height / 2

  console.log('lerp(framePos.x, centerPos.x, 0.5)', lerp(framePos.x, centerPos.x, 0.5))
}
