import React from 'react'
import styled from 'styled-components'

import ElectronicManufacturing from '../../assets/whyChooseUs/elManufacturing.svg'
import LocalProfessionals from '../../assets/whyChooseUs/localProfessionals.svg'
import Fast from '../../assets/whyChooseUs/fast.svg'
import Communicate from '../../assets/whyChooseUs/communicate.svg'
import Pin from '../../assets/whyChooseUs/pin.svg'

export default () => (
  <WhyChooseUs>
    <h1>Why choose us?</h1>
    <div className="cards">
      <div className="card">
        <ElectronicManufacturing />
        <h3>Experience in electronic manufacturing service</h3>
      </div>
      <div className="card">
        <LocalProfessionals />
        <h3>We have support from local professionals</h3>
      </div>
      <div className="card">
        <Fast />
        <h3>Within 48 h, we will find the best offer</h3>
      </div>
      <div className="card">
        <Communicate />
        <h3>We speak your language and understand your needs</h3>
      </div>
      <div className="card">
        <Pin />
        <h3>We are located in center of the global electronic market</h3>
      </div>
    </div>
  </WhyChooseUs>
)

const WhyChooseUs = styled.section`
  > h1 {
    font-size: 32px;
    margin: 75px auto;
    text-align: center;
  }
  .cards {
    display: flex;
    justify-content: space-evenly;
    flex-wrap: wrap;
    .card {
      border-radius: 20px;
      box-shadow: 0 0 8px rgba(0, 0, 0, 0.15);
      margin: 0 10px 75px 10px;
      padding: 20px 10px;
      text-align: center;
      svg {
        max-width: 150px;
      }
      h3 {
        max-width: 290px;
      }
    }
  }
  @media screen and (max-width: 1366px) and (min-width: 1280px) {
    .cards {
      .card {
        svg {
          max-width: 100px;
        }
        h3 {
          max-width: 200px;
        }
      }
    }
  }
`
