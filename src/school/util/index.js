export const getWeeks = activities => {
  return activities && activities.reduce((weeks, activity) => {
    let week = weeks.find(w => w.index === activity.weekNumber - 1)
    let activityWithId = {
      ...activity,
      id: `${activity.courseName}-${activity.weekNumber}-${activity.index}`
    }
    if (week) {
      week.activities.push(activityWithId)
    } else {
      week = {
        index: activity.weekNumber - 1,
        name: `week-${activity.weekNumber}`,
        activities: [activityWithId]
      }
      weeks = weeks.concat([week])
    }
    return weeks
  }, [])
}

const puzzleTypeToImgKey = {
  boss: 'boss',
  maze: 'maze',
  memory: 'memory',
  puzzle: 'puzzle',
  solitaire: 'solitaire',
  scenario: 'scenario',
  video: 'video',
  highlight: 'puzzle'
}
export const getPuzzleImgKey = type => {
  return puzzleTypeToImgKey[type] || ''
}
