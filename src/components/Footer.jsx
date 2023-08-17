import React from 'react'
import styled from '@emotion/styled'

const Footercito = styled.footer`
padding: 1.5em;
text-align: center;
font-family: 'Lato', sans-serif;
font-weight: 700;
color: #fff;
font-size: 1.1rem;
margin-top: auto;
background: linear-gradient(to right, #200122, #6f0000);
a{
  text-decoration: none;
  color: #fff;
}
a:hover{
  color: #000;
}
`

const Footer = () => {
  const year = new Date().getFullYear()
  return (
    <Footercito>
      Copyright &copy; {year}. All rights reserved. <a href="https://www.linkedin.com/in/1gabrielcarrizo/" target='_blank'>Gabriel</a>
    </Footercito>
  )
}

export default Footer