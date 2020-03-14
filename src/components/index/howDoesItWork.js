import React from 'react'
import styled from 'styled-components'

import BG from '../../assets/howDoesItWork/bg-shape.svg'
import Mail from '../../assets/howDoesItWork/mail.svg'
import Search from '../../assets/howDoesItWork/search.svg'
import Purchase from '../../assets/howDoesItWork/purchase.svg'
import Inspection from '../../assets/howDoesItWork/inspection.svg'

export default () => (
  <HowDoesItWork>
    <h1>How does sourcing consulting service work?</h1>
    <div className="cards">
      <div className="card">
        <Mail className="icon" />
        <h2>Step 1</h2>
        <p>
          Send us a request with product specification that you want to
          purchase.
        </p>
        <BG className="bg-shape" />
      </div>
      <div className="card">
        <Search className="icon" />
        <h2>Step 2</h2>
        <p>
          We will find a few trusted suppliers with the best prices and
          recommend them to you.
        </p>
        <BG className="bg-shape" />
      </div>
      <div className="card">
        <Purchase className="icon" />
        <h2>Step 3</h2>
        <p>You can then issue a purchasing order to the selected supplier.</p>
        <BG className="bg-shape" />
      </div>
      <div className="card last">
        <Inspection className="icon" />
        <h2>Step 4</h2>
        <p>
          If it is necessary on your request we will do a pre-shipment
          inspection.
        </p>
      </div>
    </div>
  </HowDoesItWork>
)

const HowDoesItWork = styled.section`
  > h1 {
    font-size: 32px;
    margin: 75px auto;
    text-align: center;
  }
  .cards {
    display: flex;
    justify-content: space-evenly;
    margin-bottom: 75px;
    flex-wrap: wrap;
    .card {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: space-evenly;
      margin: 20px;
      padding: 30px;
      position: relative;
      height: 270px;
      width: 270px;
      .icon {
        height: 100px;
        width: 100px;
      }
      h2 {
        margin: 20px 0;
      }
      p {
        font-size: 14px;
        text-align: justify;
      }
      .bg-shape {
        position: absolute;
        z-index: -1;
        width: 360px;
        height: 360px;
      }
    }
    .last {
      box-shadow: 0 0 16px rgba(0, 0, 0, 0.15);
    }
  }
  @media screen and (max-width: 868px) {
    .cards {
      flex-direction: column;
      align-items: center;
      .card {
        margin: 40px auto;
        .bg-shape {
          transform: rotate(90deg);
        }
      }
    }
  }
`
