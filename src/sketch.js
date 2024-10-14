function setup() {
  // フォントの設定
  textFont('M PLUS Rounded 1c')
  // フォントの読み込みを確認
  document.fonts.ready.then(() => {
    fontLoaded = true
  })

  // Hello World を表示
  createCanvas(windowWidth * 0.99, windowHeight * 0.99)
  background(200)
  stroke(0)
  strokeWeight(min(width, height) / 10)
  rect(0, 0, width, height)

  fill(0)
  strokeWeight(0)
  textAlign(CENTER, CENTER)
  textSize(min(width, height) / 10)
  text('Hello World', width / 2, height / 2)
}

function draw() {
  // put drawing code here
}
