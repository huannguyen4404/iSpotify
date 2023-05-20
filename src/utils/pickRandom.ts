export const pickRandom = <T>(array: T[]) => {
  const randomIdx = Math.floor(Math.random() * array.length)
  return array[randomIdx]
}
