// --------------------------------------------------
// 定数を定義するファイル
// --------------------------------------------------

// UI
// [string]: p5.Color
const colors = {}

// x, y
const frameGuidePos = {}

// width, height
const frameGuideSize = {}

// number
let gapY

// x, y
const centerPos = {}

// width, height
const frameSize = {}

// x, y
const framePos = {}

// number
let pushButtonSize

// x, y
const mainButtonPos = {}

// width, height
const mainButtonAreaSize = {}

// x, y
const tempoKnobPos = {}

// x, y
const patternButtonPos = {}

// width, height
const seqAreaSize = {}

// x, y
const seqAreaPos = {}

// number
let lightSize

// number
let lightGap

// x, y
const lightPos = {}

// x, y
const tempoKnobControlPos = {}

// width, height
const tempoKnobControlSize = {}

// MUSIC
const BEAT = 16
const PATTERN_MAX = 4

// 拍の回数
let beatCount

let lastBeatTime

let currentPatternNum

let beatData = new Map()

const musicList = []

const musicGainList = [
  0.8, // kick
  0.8, // snare
  0.8, // hihat_c
  0.3, // hihat_o
  1, // tom
  0.6, // crash
  0.28, // cowbell
  3, // clap
]

let bpm

let onBeat

let isPlaying
let isStopping

let audioContext

const MIN_BPM = 0
const MAX_BPM = 240
