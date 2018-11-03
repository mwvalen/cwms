import React from 'react'

export const FormattedDate = props => {
  return (
    <span>{props.date.toLocaleString('en-US', props.options)}</span>
  )
}

const calendarDateOptions = {
  month: 'long',
  day: 'numeric',
  year: 'numeric',
  timeZone: 'America/New_York'
}
export const CalendarDate = props => {
  return (
    <FormattedDate date={props.date} options={calendarDateOptions} />
  )
}

export const ShortCalendarDate = props => {
  const options = {
    ...calendarDateOptions,
    month: 'short'
  }
  return(
    <FormattedDate date={props.date} options={options} />
  )
}
