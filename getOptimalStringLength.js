function getOptimalStringLength(countA, countB, maxA, maxB) {
  if (countA === countB) {
    return countA + countB
  }

  const a = { letter: 'A', count: countA, max: maxA }
  const b = { letter: 'B', count: countB, max: maxB }
  const primary = countA >= countB ? a : b
  const secondary = countB > countA ? a : b

  let string = ''

  for(let i = 0; i < secondary.count; i++) {
    string += `${primary.letter}${secondary.letter}`
  }

  const lastLength = Math.max(primary.count - (string.length / 2), 0)
  const lastRepeatCount = Math.min(lastLength, primary.max)

  return `${string}${primary.letter.repeat(lastRepeatCount)}`.length
}
