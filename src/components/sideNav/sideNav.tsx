import React, { Fragment } from 'react'
import { SideVarContainerStyle, SideVarUl, SideVarLi } from './sideNavStyled'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChartSimple, faCalendar } from '@fortawesome/free-solid-svg-icons'
import { useNavigate } from 'react-router'

const SideNav = () => {
  const navigate = useNavigate()
  const movePage = (page: string) => {
    navigate(`/${page}`)
  }
  return (
    <Fragment>
      <SideVarContainerStyle>
        <SideVarUl>
          <SideVarLi onClick={() => movePage('report')}>
            <FontAwesomeIcon icon={faChartSimple} />
            <div style={{ marginLeft: '10px' }}>Report</div>
          </SideVarLi>
          <SideVarLi onClick={() => movePage('record')}>
            <FontAwesomeIcon icon={faCalendar} />
            <div style={{ marginLeft: '10px' }}>Record </div>
          </SideVarLi>
        </SideVarUl>
      </SideVarContainerStyle>
    </Fragment>
  )
}

export default SideNav
