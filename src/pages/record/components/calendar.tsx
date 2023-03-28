import React, { Fragment, useState } from 'react'
import moment from 'moment'
import {
  CalendarContainer,
  CalendarControl,
  CalendarWeekContainer,
  CalendarElement,
  CalendarWeekElement,
} from './calendarStyle'

const Calendar = () => {
  const [getMoment, setMoment] = useState(moment())
  const today = getMoment
  const firstWeek = today.clone().startOf('month').week()
  const lastWeek =
    today.clone().endOf('month').week() === 1
      ? 53
      : today.clone().endOf('month').week()

  const calendarArr = () => {
    let result: any = []
    let week = firstWeek
    for (week; week <= lastWeek; week++) {
      result = result.concat(
        <tr key={week}>
          {Array(7)
            .fill(0)
            .map((data, index) => {
              let days = today
                .clone()
                .startOf('year')
                .week(week)
                .startOf('week')
                .add(index, 'day')

              if (moment().format('YYYYMMDD') === days.format('YYYYMMDD')) {
                return (
                  <td key={index} style={{ backgroundColor: 'red' }}>
                    <CalendarElement>{days.format('D')}</CalendarElement>
                  </td>
                )
              } else if (days.format('MM') !== today.format('MM')) {
                return (
                  <td key={index} style={{ backgroundColor: 'gray' }}>
                    <CalendarElement>{days.format('D')}</CalendarElement>
                  </td>
                )
              } else {
                return (
                  <td key={index}>
                    <CalendarElement>{days.format('D')}</CalendarElement>
                  </td>
                )
              }
            })}
        </tr>,
      )
    }
    return result
  }

  return (
    <CalendarContainer>
      <CalendarControl>
        <button
          onClick={() => {
            setMoment(getMoment.clone().subtract(1, 'month'))
          }}
        >
          이전달
        </button>
        <span>{today.format('YYYY 년 MM 월')}</span>
        <button
          onClick={() => {
            setMoment(getMoment.clone().add(1, 'month'))
          }}
        >
          다음달
        </button>
      </CalendarControl>
      <CalendarWeekContainer>
        <CalendarWeekElement>
          <div>Sun</div>
          <div>Mon</div>
          <div>Tue</div>
          <div>Wed</div>
          <div>Thu</div>
          <div>Fri</div>
          <div>Sat</div>
        </CalendarWeekElement>
      </CalendarWeekContainer>
      <table style={{ width: '95%', height: '95%' }}>
        <tbody>{calendarArr()}</tbody>
      </table>
    </CalendarContainer>
  )
}

export default Calendar
