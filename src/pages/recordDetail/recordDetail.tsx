import React, { useEffect } from 'react'
import {
  RecordDetailContainer,
  ExerciseWrapper,
  ExerciseContainer,
} from './recordDetailStyle'
import { useRecoilState } from 'recoil'
import { useLocation, useParams } from 'react-router'
import AddRecordBox from './components/AddRecordBox'
import RecordBox from './components/RecordBox'
import { RecordType } from '../record/components/calendar'
import { recordState } from '../../recoil/atoms/recordState'

const RecordDetail = () => {
  const location = useLocation()
  const [recordData, setRecordData] = useRecoilState<RecordType | undefined>(
    recordState,
  )
  useEffect(() => {}, [recordData])
  const { id: date } = useParams()

  return (
    <RecordDetailContainer>
      <ExerciseWrapper>
        <AddRecordBox />
      </ExerciseWrapper>
      <ExerciseContainer>
        {recordData![date!] !== undefined
          ? recordData![date!].map((e: any) => {
              return <RecordBox key={e} info={e} />
            })
          : null}
      </ExerciseContainer>
    </RecordDetailContainer>
  )
}

export default RecordDetail
