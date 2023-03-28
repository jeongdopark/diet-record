import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Main from './pages/main/main'
import Report from './pages/report/report'
import Record from './pages/record/record'
import Header from './components/header/header'
import SideNav from './components/sideNav/sideNav'
import styled from '@emotion/styled'

const ContentStyle = styled.div`
  display: flex;
  flex-direction: row;
`

const AppRouter = () => {
  return (
    <BrowserRouter>
      <Header />
      <ContentStyle>
        <SideNav />
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/report" element={<Report />} />
          <Route path="/record" element={<Record />} />
        </Routes>
      </ContentStyle>
    </BrowserRouter>
  )
}

export default AppRouter
