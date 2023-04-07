import React, { useState } from 'react'
import { Container } from './styles'
import { FaBars } from 'react-icons/fa'
import Sidebar from '../Sidebar/Sidebar'
import '../../img/logo.png'

const Header = () => {
  const [sidebar, setSidebar] = useState(false)

  const showSiderbar = () => setSidebar(!sidebar)

  return (
    <Container>
      <img src={require('../../img/logo.png')}/>
      <p>Psychoterapia Szczecin</p>
      <FaBars onClick={showSiderbar} />
      {sidebar && <Sidebar active={setSidebar}/>}
    </Container>
  )
}

export default Header