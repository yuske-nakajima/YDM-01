/**
 * p5.jsのpush()とpop()で描画操作を分離します。
 * スケッチの他の部分に影響を与えずに変換を適用するのに有用です。
 * @param {() => void} func
 * @returns {void}
 */
function drawBlock(func) {
  push()
  func()
  pop()
}
