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
  height: 20px;
  margin-bottom: 30px;
  padding: 5px;
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

export const CalendarTd = styled.td`
  border-radius: 5px;
  width: 100px;
  height: 100px;
  padding: 5px;
  &:hover {
    border-radius: 10px;
    transition: ease-in-out 0.3s;
    box-shadow: 1px 1px 20px #ddd;
  }
`

export const NotWeek = styled(CalendarTd)`
  background-color: #e2e2e2;
  opacity: 0.4;
`

export const CalendarRecordElementWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-bottom: 8px;
`

export const CalendarRecordElement = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 5px;
  div {
    width: 5px;
    height: 5px;
    background-color: #007fff;
    border-radius: 50%;
  }

  li {
    margin-left: 8px;
  }
`

export const CalendarTodayElement = styled(CalendarRecordElement)`
  div {
    background-color: white;
  }
  li {
    color: white;
  }
`
