import React from 'react'
import styled from 'styled-components'
import { Link } from 'gatsby'

import video from '../../assets/hero.mp4'

export default () => (
  <Hero>
    <video loop muted autoPlay>
      <source src={video} type="video/mp4" />
    </video>
    <div className="text">
      <h1>Take full control of your supply chain.</h1>
      <h2>
        Keep costs down and reliability up by designing your network to minimize
        product handling.
      </h2>
      <Link to="/contact">Let's talk</Link>
    </div>
  </Hero>
)

const Hero = styled.section`
  min-height: calc(100vh - 75px);
  min-width: 100%;
  position: relative;
  video {
    object-fit: cover;
    opacity: 0.3;
    position: absolute;
    height: 100%;
    width: 100%;
    z-index: -1;
  }
  .text {
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin-left: 20%;
    min-height: calc(100vh - 75px);
    h1 {
      color: #434343;
      font-size: 48px;
      margin-bottom: 20px;
      max-width: 700px;
    }
    h2 {
      font-size: 24px;
      margin-bottom: 40px;
      max-width: 900px;
    }
    a {
      background-color: var(--color-primary);
      border-radius: var(--button-radius);
      color: #fff;
      font-size: 18px;
      padding: 10px 20px;
      align-self: flex-start;
    }
  }
  @media screen and (max-width: 1280px) {
    .text {
      margin: 0 50px;
      h1 {
        font-size: 32px;
      }
    }
  }
`
