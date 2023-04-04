import React, { ReactElement, useState } from 'react'

import {
  ExerciseElement,
  InputSpan,
  ExerciseInput,
  AddBtn,
} from '../recordDetailStyle'
import { SELECT_HOUR, SELECT_MINUTE } from '../mock'
import {
  doc,
  setDoc,
  collection,
  addDoc,
  updateDoc,
  arrayUnion,
} from 'firebase/firestore'
import { db } from '../../../Firebase'
import { useParams } from 'react-router'

const AddRecordBox = () => {
  const [startHour, setStartHour] = useState<string>('00')
  const [startMinute, setStartMinute] = useState<string>('00')
  const [endHour, setEndHour] = useState<string>('00')
  const [endMinute, setEndMinute] = useState<string>('00')
  const [inputValue, setInputValue] = useState<string>('')
  const { id: date } = useParams()

  const onChangeStartHour = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setStartHour(e.currentTarget.value)
  }
  const onChangeStartMinute = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setStartMinute(e.currentTarget.value)
  }
  const onChangeEndHour = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setEndHour(e.currentTarget.value)
  }
  const onChangeEndMinute = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setEndMinute(e.currentTarget.value)
  }
  const onChangeInputValue = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value)
  }

  const onClickAddBtn = async () => {
    const testRef = doc(db, 'user_data', '2656770278')
    setDoc(testRef, { capital: true }, { merge: true })
    await updateDoc(testRef, {
      [date!]: arrayUnion({
        exercise_category: inputValue,
        exercise_end_time: `${endHour}:${endMinute}`,
        exercise_start_time: `${startHour}:${startMinute}`,
      }),
    })
  }

  return (
    <ExerciseElement>
      <div>
        <InputSpan>운동 종목</InputSpan>
        <ExerciseInput
          placeholder="운동 종목"
          value={inputValue}
          onChange={onChangeInputValue}
        />
      </div>
      <div>
        <InputSpan>시작 시간</InputSpan>
        <select onChange={onChangeStartHour} value={startHour}>
          {SELECT_HOUR.map((e) => (
            <option key={e} value={e}>
              {e}
            </option>
          ))}
        </select>
        <InputSpan>:</InputSpan>
        <select onChange={onChangeStartMinute} value={startMinute}>
          {SELECT_MINUTE.map((e) => (
            <option key={e}>{e}</option>
          ))}
        </select>
      </div>
      <div>
        <InputSpan>종료 시간</InputSpan>
        <select onChange={onChangeEndHour} value={endHour}>
          {SELECT_HOUR.map((e) => (
            <option key={e} value={e}>
              {e}
            </option>
          ))}
        </select>
        <InputSpan>:</InputSpan>
        <select onChange={onChangeEndMinute} value={endMinute}>
          {SELECT_MINUTE.map((e) => (
            <option key={e}>{e}</option>
          ))}
        </select>
      </div>
      <div style={{ marginLeft: 'auto' }}>
        <AddBtn onClick={() => onClickAddBtn()}>+</AddBtn>
      </div>
    </ExerciseElement>
  )
}

export default AddRecordBox
