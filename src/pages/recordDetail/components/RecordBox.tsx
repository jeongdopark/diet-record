import React from 'react'
import { ExerciseRecordontainer, AddBtn } from '../recordDetailStyle'
import { ExerciseType } from '../../record/components/calendar'

interface InfoType {
  info: ExerciseType
}

const RecordBox = ({ info }: InfoType) => {
  return (
    <ExerciseRecordontainer>
      <div style={{ marginLeft: 'auto' }}>
        <AddBtn>x</AddBtn>
      </div>
      <div>
        <span>운동 종목 :</span>
        <span>{info.exercise_category}</span>
      </div>
      <div>
        <span>시작 시간 :</span>
        <span>{info.exercise_start_time}</span>
      </div>
      <div>
        <span>종료 시간 :</span>
        <span>{info.exercise_end_time}</span>
      </div>
      <div>
        <span>총 운동 시간 :</span>
        <span></span>
      </div>
    </ExerciseRecordontainer>
  )
}

export default RecordBox
