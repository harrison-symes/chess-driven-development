module.exports = (board) => {
  return board.map((arr, idx) => {
    return arr.map((el, jdx) => {
      if (isWhite(idx, jdx)) return {color: white}
      else return {color: black}
    })
  })
}

const isWhite(i, j) {
  if (i == j) return true
  if (i % 2 == 0 && j % 2 == 1) return true
  if (i % 2 == 1 && j % 2 == 0) return true
}
