import styled from '@emotion/styled'

export const RecordDetailContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-around;
  padding: 20px;
`

export const RecordContainer = styled.div`
  width: 42%;
  height: 80vh;
  opacity: 0.8;
  box-shadow: 1px 1px 20px #ddd;
  border-radius: 10px;
  padding: 20px;
`

export const ExerciseContainer = styled(RecordContainer)`
  display: flex;
  justify-content: space-around;
  flex-direction: column;
  align-items: center;
`

export const ExerciseWrapper = styled.div`
  width: 50%;
  height: 30%;
  display: flex;
  justify-content: center;
`

export const ExerciseElement = styled.div`
  width: 80%;
  box-shadow: 1px 1px 20px #ddd;
  background-color: white;
  border-radius: 7px;
  padding: 15px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
`

export const ExerciseInput = styled.input`
  border: none;
  width: 120px;
  height: 20px;
  border-bottom: 1px solid black;
  &:focus {
    outline: none;
  }
`

export const InputSpan = styled.span`
  margin-right: 10px;
  margin-left: 10px;
`

export const AddBtn = styled.button`
  width: 20px;
  height: 20px;
  background-color: #0080ff;
  border: none;
  border-radius: 50%;
  color: white;
  font-weight: 600;
  font-size: 16px;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
`

export const ExerciseRecordontainer = styled.div`
  width: 70%;
  height: 30%;
  box-shadow: 1px 1px 20px #ddd;
  border-radius: 5px;
`
