import React, { Fragment, useState, useEffect } from 'react'
import moment from 'moment'
import {
  CalendarContainer,
  CalendarControl,
  CalendarWeekContainer,
  CalendarElement,
  CalendarWeekElement,
  NotWeek,
  CalendarTd,
  CalendarRecordElementWrapper,
  CalendarRecordElement,
  CalendarTodayElement,
} from './calendarStyle'
import { useNavigate } from 'react-router'
import { db } from '../../../Firebase'
import {
  collection,
  doc,
  setDoc,
  getDocs,
  onSnapshot,
} from 'firebase/firestore'

interface RecordType {
  [key: string]: ExerciseCount
}

interface ExerciseCount {
  [key: string]: ExerciseType
}
interface ExerciseType {
  exercise_category: string
  exercise_start_time: string
  exercise_end_time: string
}

const Calendar = () => {
  const [getMoment, setMoment] = useState(moment())
  const today = getMoment
  const navigate = useNavigate()

  const onClickDate = (e: any) => {
    const params = today.format('YYMM') + e.target.childNodes[0].innerText
    navigate(`/record/${params}`)
  }
  const [recordData, setRecordData] = useState<RecordType | undefined>({})

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
                return recordData !== undefined ? (
                  recordData[String(days.format('YYYYMMDD').slice(2))] !==
                  undefined ? (
                    <CalendarTd
                      key={index}
                      onClick={onClickDate}
                      style={{ backgroundColor: '#007fff' }}
                    >
                      <CalendarElement>{days.format('D')}</CalendarElement>
                      <ul style={{ marginTop: '5px' }}>
                        {Object.keys(
                          recordData[String(days.format('YYYYMMDD').slice(2))],
                        ).map((e: any) => {
                          return (
                            <CalendarRecordElementWrapper key={e}>
                              <CalendarTodayElement>
                                <div></div>
                                <li>
                                  {
                                    recordData[
                                      String(days.format('YYYYMMDD').slice(2))
                                    ][e].exercise_category
                                  }
                                </li>
                              </CalendarTodayElement>
                            </CalendarRecordElementWrapper>
                          )
                        })}
                      </ul>
                    </CalendarTd>
                  ) : (
                    <CalendarTd
                      key={index}
                      onClick={onClickDate}
                      style={{ backgroundColor: '#007fff' }}
                    >
                      <CalendarElement>{days.format('D')}</CalendarElement>
                    </CalendarTd>
                  )
                ) : null
              } else if (days.format('MM') !== today.format('MM')) {
                return recordData !== undefined ? (
                  recordData[String(days.format('YYYYMMDD').slice(2))] !==
                  undefined ? (
                    <NotWeek key={index} onClick={onClickDate}>
                      <CalendarElement>{days.format('D')}</CalendarElement>
                      <ul style={{ marginTop: '5px' }}>
                        {Object.keys(
                          recordData[String(days.format('YYYYMMDD').slice(2))],
                        ).map((e: any) => {
                          return (
                            <CalendarRecordElementWrapper key={e}>
                              <CalendarRecordElement>
                                <div></div>
                                <li>
                                  {
                                    recordData[
                                      String(days.format('YYYYMMDD').slice(2))
                                    ][e].exercise_category
                                  }
                                </li>
                              </CalendarRecordElement>
                            </CalendarRecordElementWrapper>
                          )
                        })}
                      </ul>
                    </NotWeek>
                  ) : (
                    <NotWeek key={index} onClick={onClickDate}>
                      <CalendarElement>{days.format('D')}</CalendarElement>
                    </NotWeek>
                  )
                ) : null
              } else {
                return recordData !== undefined ? (
                  recordData[String(days.format('YYYYMMDD').slice(2))] !==
                  undefined ? (
                    <CalendarTd key={index} onClick={onClickDate}>
                      <CalendarElement>{days.format('D')}</CalendarElement>
                      <ul style={{ marginTop: '5px' }}>
                        {Object.keys(
                          recordData[String(days.format('YYYYMMDD').slice(2))],
                        ).map((e: any) => {
                          return (
                            <CalendarRecordElementWrapper key={e}>
                              <CalendarRecordElement>
                                <div></div>
                                <li>
                                  {
                                    recordData[
                                      String(days.format('YYYYMMDD').slice(2))
                                    ][e].exercise_category
                                  }
                                </li>
                              </CalendarRecordElement>
                            </CalendarRecordElementWrapper>
                          )
                        })}
                      </ul>
                    </CalendarTd>
                  ) : (
                    <CalendarTd key={index} onClick={onClickDate}>
                      <CalendarElement>{days.format('D')}</CalendarElement>
                    </CalendarTd>
                  )
                ) : null
              }
            })}
        </tr>,
      )
    }
    return result
  }

  useEffect(() => {
    const unsub = onSnapshot(doc(db, 'user_data', '2656770278'), (doc) => {
      setRecordData(doc.data())
    })
  }, [])
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
