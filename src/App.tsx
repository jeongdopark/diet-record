import React from 'react'
import AppRouter from './routes'
import {
  RecoilRoot,
  atom,
  selector,
  useRecoilState,
  useRecoilValue,
} from 'recoil'

function App() {
  return (
    <RecoilRoot>
      <AppRouter />
    </RecoilRoot>
  )
}
//test
export default App
