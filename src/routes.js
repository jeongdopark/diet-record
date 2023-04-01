import React from 'react'
import styled from '@emotion/styled'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Lading from './pages/main/landing'
import Report from './pages/report/report'
import Record from './pages/record/record'
import Header from './components/header/header'
import SideNav from './components/sideNav/sideNav'
import RecordDetail from './pages/recordDetail/recordDetail'

const ContentStyle = styled.div`
  display: flex;
  flex-direction: row;
`

let sideVarValid = false

const AppRouter = () => {
  return (
    <BrowserRouter>
      <Header />
      <ContentStyle>
        {sideVarValid === false ? <SideNav /> : null}
        <Routes>
          <Route path="/" element={<Lading />} />
          <Route path="/report" element={<Report />} />
          <Route path="/record" element={<Record />} />
          <Route path="/record/:id" element={<RecordDetail />} />
        </Routes>
      </ContentStyle>
    </BrowserRouter>
  )
}

export default AppRouter
