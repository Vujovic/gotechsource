import React from 'react'
import { Link } from 'gatsby'
import styled from 'styled-components'

import Logo from '../assets/logo.svg'
import '../assets/hamburgerMenu.css'

export default class HeaderComponent extends React.Component {
  state = {
    isMenuOpen: false,
  }

  handleMenu = () => this.setState({ isMenuOpen: !this.state.isMenuOpen })

  render() {
    return (
      <Header>
        <div className="logo">
          <Link to="/" aria-label="Go to homepage">
            <Logo />
          </Link>
        </div>
        <div className="button">
          <button
            onClick={this.handleMenu}
            type="button"
            aria-label="Menu"
            className={
              this.state.isMenuOpen
                ? 'hamburger hamburger--spin is-active'
                : 'hamburger hamburger--spin'
            }
          >
            <span className="hamburger-box">
              <span className="hamburger-inner"></span>
            </span>
          </button>
        </div>
        <nav className={this.state.isMenuOpen ? 'menu' : 'menu hidden'}>
          <Link to="/about">About</Link>
          <Link to="/services">Services</Link>
          <Link to="/blog">Blog</Link>
          <Link className="accent" to="/contact">
            Contact
          </Link>
        </nav>
      </Header>
    )
  }
}

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
  .menu {
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
  .button {
    display: none;
  }
  @media screen and (max-width: 1366px) {
    padding: 0 80px;
  }
  @media screen and (max-width: 1024px) {
    padding: 0 10px;
  }
  @media screen and (max-width: 868px) {
    .logo {
      svg {
        height: 30px;
        padding-left: 15px;
      }
    }
    .menu {
      background-color: #fff;
      flex-direction: column;
      justify-content: space-evenly;
      height: calc(100vh - 75px);
      position: absolute;
      top: 75px;
      left: 0;
      width: 100%;
      z-index: 2;
    }
    .button {
      display: inline;
    }

    .hidden {
      display: none;
    }
  }
`
