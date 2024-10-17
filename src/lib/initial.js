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
  colors.buttonhalfDark = color(50, 10, 70)
  colors.buttonNormal = color(50, 10, 98)
  colors.buttonLight = color(0, 50, 100)
  colors.buttonStopping = color(220, 50, 100)
  colors.shadow = color(0, 50, 25)
  colors.textMain = color(220, 70, 50)
  colors.displayMain = color(120, 90, 70)
  colors.displayLine = color(120, 70, 50)
  colors.displayText = color(120, 70, 95)
  // キャンバスの設定

  if (windowWidth > windowHeight) {
    createCanvas(windowWidth * 0.75, windowHeight * 0.99)
  } else {
    createCanvas(windowWidth * 0.99, windowHeight * 0.75)
  }

  centerPos.x = width / 2
  centerPos.y = height / 2

  frameGuideSize.width = width * 0.95
  frameGuideSize.height = height * 0.9

  frameGuidePos.x = centerPos.x - frameGuideSize.width / 2
  frameGuidePos.y = centerPos.y - frameGuideSize.height / 2

  pushButtonSize = frameGuideSize.width * 0.07
  patternButtonSize = frameGuideSize.width * 0.04

  mainButtonAreaSize.width = frameGuideSize.width * 0.3
  mainButtonAreaSize.height = pushButtonSize * 1.5

  gapY = mainButtonAreaSize.height * 0.4

  mainButtonPos.x = centerPos.x
  mainButtonPos.y = frameGuidePos.y + mainButtonAreaSize.height * 0.5 + gapY / 2

  tempoKnobPos.x = centerPos.x - frameGuideSize.width * 0.325
  tempoKnobPos.y = mainButtonPos.y

  patternButtonPos.x = centerPos.x + frameGuideSize.width * 0.325
  patternButtonPos.y = mainButtonPos.y

  seqAreaSize.width = frameGuideSize.width * 0.95
  seqAreaSize.height = frameGuideSize.height * 0.75

  seqAreaPos.x = centerPos.x
  seqAreaPos.y = frameGuidePos.y + mainButtonAreaSize.height + gapY + seqAreaSize.height / 2

  lightSize = seqAreaSize.width * 0.02
  lightGap = (seqAreaSize.width / BEAT) * 0.9
  lightPos.x = seqAreaPos.x - seqAreaSize.width * 0.4
  lightPos.y = seqAreaPos.y + seqAreaSize.height * 0.4

  frameSize.width = frameGuideSize.width
  frameSize.height = mainButtonAreaSize.height + gapY + seqAreaSize.height + gapY * 0.6

  framePos.x = centerPos.x
  framePos.y = frameGuidePos.y + frameSize.height / 2

  tempoKnobControlPos.x = tempoKnobPos.x + mainButtonAreaSize.width * 0.18
  tempoKnobControlPos.y = tempoKnobPos.y - mainButtonAreaSize.height * 0.125
  tempoKnobControlSize.width = mainButtonAreaSize.width * 0.2
  tempoKnobControlSize.height = mainButtonAreaSize.width * 0.2

  // MUSIC
  musicList[0] = ['kick', sounds.kick[6]]
  musicList[1] = ['snare', sounds.snare[0]]
  musicList[2] = ['hihat_c', sounds.hihat_c[7]]
  musicList[3] = ['hihat_o', sounds.hihat_o[7]]
  musicList[4] = ['tom', sounds.tom[4]]
  musicList[5] = ['crash', sounds.crash[7]]
  musicList[6] = ['cowbell', sounds.cowbell[5]]
  musicList[7] = ['clap', sounds.clap[7]]

  beatCount = 0
  lastBeatTime = 0
  currentPatternNum = getOrInitializeValue('currentPatternNum', 1)

  // バターン * 音色数 * ビート
  // データの初期化
  const initBeatData = new Map()
  for (let i = 1; i <= PATTERN_MAX; i++) {
    const arr = []
    for (let m = 0; m < musicList.length; m++) {
      const innerArr = []
      for (let b = 0; b < BEAT; b++) {
        innerArr.push(false)
      }
      arr.push(innerArr)
    }
    initBeatData.set(i, arr)
  }
  beatData = getOrInitializeValue('beatData', initBeatData)

  bpm = getOrInitializeValue('bpm', 120)

  isPlaying = false
  isStopping = true

  audioContext = new (window.AudioContext || window.webkitAudioContext)()

  isDraggingTempo = false
}
