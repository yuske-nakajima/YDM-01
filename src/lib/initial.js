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
  colors.machineMain = color(200, 15, 90)
  colors.machineSub = color(75, 4, 90)
  colors.machineLight = color(220, 10, 60)
  colors.machineDark = color(220, 10, 10)
  colors.buttonNormal = color(0, 0, 100)
  colors.shadow = color(0, 0, 20)
  colors.textMain = color(0, 20, 70)

  // キャンバスの設定
  createCanvas(windowWidth * 0.99, windowHeight * 0.99)

  centerPos.x = width / 2
  centerPos.y = height / 2

  frameSize.width = width * 0.9
  frameSize.height = height * 0.9 // TODO: 中身で可変にする

  framePos.x = centerPos.x - frameSize.width / 2
  framePos.y = centerPos.y - frameSize.height / 2

  pushButtonSize = frameSize.width * 0.07

  mainButtonAreaSize.width = frameSize.width * 0.3
  mainButtonAreaSize.height = pushButtonSize * 1.5

  mainButtonPos.x = centerPos.x
  mainButtonPos.y = framePos.y + mainButtonAreaSize.height * 0.65

  tempoKnobPos.x = centerPos.x - frameSize.width * 0.325
  tempoKnobPos.y = mainButtonPos.y

  pertternButtonPos.x = centerPos.x + frameSize.width * 0.325
  pertternButtonPos.y = mainButtonPos.y

  seqAreaSize.width = frameSize.width * 0.95
  seqAreaSize.height = frameSize.height * 0.5

  seqAreaPos.x = centerPos.x
  seqAreaPos.y = framePos.y + mainButtonAreaSize.height + mainButtonAreaSize.height * 0.4 + seqAreaSize.height / 2 // TODO: 中身で可変にする
}
