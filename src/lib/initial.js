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
  colors.line = color(220, 50, 30)
  colors.machineMain = color(220, 10, 50)
  colors.machineSub = color(220, 10, 70)
  colors.machineLight = color(220, 10, 60)
  colors.machineDark = color(220, 10, 10)
  colors.buttonNormal = color(50, 10, 98)
  colors.shadow = color(0, 50, 25)
  colors.textMain = color(220, 70, 50)
  colors.displayMain = color(120, 90, 70)
  colors.displayLine = color(120, 70, 50)

  // キャンバスの設定
  createCanvas(windowWidth * 0.99, windowHeight * 0.99)

  centerPos.x = width / 2
  centerPos.y = height / 2

  frameGuideSize.width = width * 0.95
  frameGuideSize.height = height * 0.9

  frameGuidePos.x = centerPos.x - frameGuideSize.width / 2
  frameGuidePos.y = centerPos.y - frameGuideSize.height / 2

  pushButtonSize = frameGuideSize.width * 0.07
  pertternButtonSize = frameGuideSize.width * 0.04

  mainButtonAreaSize.width = frameGuideSize.width * 0.3
  mainButtonAreaSize.height = pushButtonSize * 1.5

  gapY = mainButtonAreaSize.height * 0.4

  mainButtonPos.x = centerPos.x
  mainButtonPos.y = frameGuidePos.y + mainButtonAreaSize.height * 0.5 + gapY / 2

  tempoKnobPos.x = centerPos.x - frameGuideSize.width * 0.325
  tempoKnobPos.y = mainButtonPos.y

  pertternButtonPos.x = centerPos.x + frameGuideSize.width * 0.325
  pertternButtonPos.y = mainButtonPos.y

  seqAreaSize.width = frameGuideSize.width * 0.95
  seqAreaSize.height = frameGuideSize.height * 0.65 // TODO: 中身で可変にする

  seqAreaPos.x = centerPos.x
  seqAreaPos.y = frameGuidePos.y + mainButtonAreaSize.height + gapY + seqAreaSize.height / 2 // TODO: 中身で可変にする

  // フレーム
  frameSize.width = frameGuideSize.width
  frameSize.height = mainButtonAreaSize.height + gapY + seqAreaSize.height + gapY * 0.6

  framePos.x = centerPos.x
  framePos.y = frameGuidePos.y + frameSize.height / 2
}
