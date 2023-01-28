import React from 'react'
import styled from 'styled-components'
import { GoThreeBars } from "react-icons/go"; 

function header() {
  return (
    <Container>
      <a>
        <img src="/images/logo.svg" />
      </a>
      <Menu>
        <a href='#'>Model S</a> 
        <a href='#'>Model X</a> 
        <a href='#'>Model Y</a> 
        <a href='#'>Model 3</a> 
        <a href='#'>Solar Roof</a>
        <a href='#'>Solar Panels</a>
      </Menu>
      <RightMenu>
        <a href="#">Shop</a>
        <a href="#">Tesla Account</a>
        <a> <GoThreeBars/></a>
      </RightMenu>
    </Container>
  )
}

export default header

const Container = styled.div`
  min-height:60px;
  position:fixed;
  display:flex;
  flex-flow: row wrap;
  justify-content: space-between;
  padding:10px 10px;
  left:0;
  right:0;
  a img {
    padding-left: 70px;
  }
`

const Menu = styled.div`
  display:flex;
  align-items:center;
  justify-content:center;
  a {
      font-weight: 600;
      text-transform:uppercase;
      padding:0 10px;
  }

  @media(max-width: 768px) {
    display:none;
  }
`

const RightMenu = styled.div`
  display:flex;
  align-items:center;
  a {
    font-weight: 600;
    text-transform:uppercase;
    margin: 10px;
  }
`
