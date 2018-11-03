
const seasonalIndex = [0, 0, 1, 1, 1, 2, 2, 2, 3, 3, 3, 3]

export const getCurrentSeason = () => {
  const date = new Date()
  return {
    season: seasonalIndex[date.getMonth()],
    year: date.getYear()
  }
}
