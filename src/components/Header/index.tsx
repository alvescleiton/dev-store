import React from 'react'

import Container from '@/Components/Container'

import { Background, Logo } from './styles'

const Header = () => {
  return (
    <Background>
      <Container display="flex" justifyContent="space-between" alignItems="center">
        <Logo>
          <img src="/assets/img/logo.png" alt="Dev Store" />
        </Logo>

        <div>teste</div>
      </Container>
    </Background>
  )
}

export default Header
