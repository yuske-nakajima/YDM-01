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

// MUSIC
const BEAT = 16
const PATTERN_MAX = 4

// 拍の回数
let beatCount

let lastBeatTime

let currentPatternNum

let beatData = new Map()

const musicList = []

let bpm

let onBeat
