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

// 値をデシリアライズする関数
function deserializeValue(value) {
  try {
    const parsed = JSON.parse(value)
    if (Array.isArray(parsed) && parsed.every((item) => Array.isArray(item) && item.length === 2)) {
      // MapのJSON表現と思われる場合
      return jsonToMap(value)
    }
    return parsed
  } catch (e) {
    return value // JSONでない場合はそのまま返す
  }
}

// MapをJSON形式に変換する関数
function mapToJson(map) {
  return JSON.stringify([...map])
}

// JSON形式をMapに変換する関数
function jsonToMap(jsonStr) {
  return new Map(JSON.parse(jsonStr))
}

// ローカルストレージから値を取得または初期化する関数
function getOrInitializeValue(key, defaultValue) {
  const storedValue = localStorage.getItem(key)
  if (storedValue !== null) {
    return deserializeValue(storedValue)
  }
  saveToLocalStorage(key, defaultValue)
  return defaultValue
}

// ローカルストレージに値を保存または更新する関数
function saveToLocalStorage(key, value) {
  const existingValue = localStorage.getItem(key)
  if (existingValue !== null) {
    const parsedExisting = deserializeValue(existingValue)
    if (parsedExisting instanceof Map && value instanceof Map) {
      // 両方がMapの場合、マージする
      const mergedMap = new Map([...parsedExisting, ...value])
      localStorage.setItem(key, mapToJson(mergedMap))
      return mergedMap
    } else if (typeof parsedExisting === 'object' && !Array.isArray(parsedExisting) && typeof value === 'object') {
      // オブジェクトの場合、既存の値と新しい値をマージ
      const updatedValue = { ...parsedExisting, ...value }
      localStorage.setItem(key, JSON.stringify(updatedValue))
      return updatedValue
    }
  }
  // 既存の値がない場合、または単純な上書きの場合
  const serializedValue = value instanceof Map ? mapToJson(value) : JSON.stringify(value)
  localStorage.setItem(key, serializedValue)
  return value
}
