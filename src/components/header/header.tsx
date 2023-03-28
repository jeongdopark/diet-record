import React, { Fragment } from 'react'
import { HeaderContainer, HeaderElement } from './headerStyled'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faRightToBracket } from '@fortawesome/free-solid-svg-icons'

const Header = () => {
  return (
    <Fragment>
      <HeaderContainer>
        <HeaderElement>Diet Record</HeaderElement>
        <HeaderElement>
          <FontAwesomeIcon icon={faRightToBracket} />
        </HeaderElement>
      </HeaderContainer>
    </Fragment>
  )
}

export default Header
