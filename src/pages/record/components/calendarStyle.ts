import styled from '@emotion/styled'

export const CalendarContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 80%;
  justify-content: center;
  align-items: center;
  margin-bottom: 50px;
  border: 1px solid black;
  margin-top: 30px;
  border-radius: 10px;
`

export const CalendarControl = styled.div`
  display: flex;
  justify-content: center;
  height: 80px;
  align-items: center;
  width: 80%;
  margin-bottom: 15px;
  margin-top: 30px;
`

export const CalendarTable = styled.tbody`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 80%;
  height: 80%;
`

export const CalendarElement = styled.tr`
  width: 100px;
  height: 100px;
`

export const CalendarWeekContainer = styled.div`
  width: 100%;
  height: 30px;
  display: flex;
  justify-content: center;
  margin-bottom: 40px;
`

export const CalendarWeekElement = styled.div`
  width: 95%;
  display: flex;
  justify-content: space-around;
  color: rgba(0, 0, 0, 0.6);
`
