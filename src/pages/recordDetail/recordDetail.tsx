import React from 'react'
import {
  RecordDetailContainer,
  ExerciseWrapper,
  ExerciseContainer,
} from './recordDetailStyle'

import { useLocation } from 'react-router'
import AddRecordBox from './components/AddRecordBox'
import RecordBox from './components/RecordBox'

const RecordDetail = () => {
  const location = useLocation()
  console.log(location)
  return (
    <RecordDetailContainer>
      <ExerciseWrapper>
        <AddRecordBox />
      </ExerciseWrapper>
      <ExerciseContainer>
        {Object.keys(location.state).map((e: any) => {
          console.log(location.state[e])
          return <RecordBox key={e} info={location.state[e]} />
        })}
      </ExerciseContainer>
    </RecordDetailContainer>
  )
}

export default RecordDetail
