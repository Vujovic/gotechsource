import React from 'react'
import { Link } from 'gatsby'
import styled from 'styled-components'

import Logo from '../assets/logo.svg'

export default () => (
  <Header>
    <Link className="logo" to="/">
      <Logo />
    </Link>
    <nav>
      <Link to="/about">About</Link>
      <Link to="/services">Services</Link>
      <Link to="/blog">Blog</Link>
      <Link className="accent" to="/contact">
        Contact
      </Link>
    </nav>
  </Header>
)

const Header = styled.header`
  background-color: #fff;
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 75px;
  padding: 0 250px;
  .logo {
    flex-grow: 3;
    svg {
      height: 35px;
    }
  }
  nav {
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-grow: 1;
    font-size: 18px;
    a {
      color: #555;
    }
    .accent {
      background-color: var(--color-primary);
      border-radius: var(--button-radius);
      color: #fff;
      padding: 10px 20px;
    }
  }
`
