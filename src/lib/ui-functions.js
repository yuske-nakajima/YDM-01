// UIと機能をつなぐ関数
function isMouseOverTempoKnob() {
  const d = dist(mouseX, mouseY, tempoKnobControlPos.x, tempoKnobControlPos.y)
  return d < tempoKnobControlSize.width / 2
}

function isMouseOverVolumeKnob() {
  const d = dist(mouseX, mouseY, volumeKnobControlPos.x, volumeKnobControlPos.y)
  return d < volumeKnobControlSize.width / 2
}

function updateTempoKnob() {
  drawTempoKnob()
  if (isDraggingTempo) {
    cursor(MOVE)
  } else if (isMouseOverTempoKnob()) {
    cursor(HAND)
  } else {
    cursor(AUTO)
  }
}

function updateVolumeKnob() {
  drawVolumeKnob()
  if (isDraggingVolume) {
    cursor(MOVE)
  } else if (isMouseOverVolumeKnob()) {
    cursor(HAND)
  } else {
    cursor(AUTO)
  }
}

function isButtonClicked(x, y) {
  const d = dist(mouseX, mouseY, x, y)
  return d < pushButtonSize / 2
}

function play() {
  onBeat = beatCount % BEAT

  for (let i = 0; i < BEAT; i++) {
    for (let j = 0; j < musicList.length; j++) {
      if (onBeat === i) {
        if (beatData.get(currentPatternNum)[j][i]) {
          musicList[j][1](musicGainList[j] * volume)
        }
      }
    }
  }
}
