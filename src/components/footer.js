import React from 'react'
import { Link } from 'gatsby'
import styled from 'styled-components'

import Logo from '../assets/logo.svg'
import Facebook from '../assets/fb.svg'
import Twitter from '../assets/twitter.svg'
import LinkedIn from '../assets/linkedin.svg'

export default () => (
  <Footer>
    <Link className="logo" to="/">
      <Logo />
    </Link>
    <div className="info">
      <p>office@gotechsource.com</p>
      <p>Hi-Tech Park, 518057 Shenzhen, Guangdong Province, China</p>
      <p>0086 185 764 18791</p>
    </div>
    <div className="links">
      <p>Follow us:</p>
      <div className="icons">
        <a
          href="https://www.facebook.com/gotechsource"
          rel="noopener noreferrer"
          target="_blank"
        >
          <Facebook />
        </a>
        <a
          href="https://twitter.com/Dvule88"
          rel="noopener noreferrer"
          target="_blank"
        >
          <Twitter />
        </a>
        <a
          href="https://www.linkedin.com/company-beta/13314357"
          rel="noopener noreferrer"
          target="_blank"
        >
          <LinkedIn />
        </a>
      </div>
    </div>
  </Footer>
)

const Footer = styled.footer`
  border-top: 2px solid #eee;
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 75px;
  padding: 100px 250px;
  .logo {
    svg {
      height: 35px;
    }
  }
  div {
    text-align: center;
  }
  .links {
    .icons {
      display: flex;
      justify-content: space-evenly;
      svg {
        height: 25px;
        margin: 5px;
      }
    }
  }
  @media screen and (max-width: 1366px) {
    padding: 80px;
  }
  @media screen and (max-width: 1024px) {
    padding: 50px 10px;
  }
  @media screen and (max-width: 868px) {
    flex-direction: column;
    > * {
      margin: 20px;
    }
  }
`
