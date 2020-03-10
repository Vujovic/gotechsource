import React from 'react'
import styled from 'styled-components'

import Check from '../../assets/check.svg'
import Vendor from '../../assets/services/vendor.svg'
import Inspection from '../../assets/services/inspection.svg'
import Launch from '../../assets/services/launch.svg'

export default () => (
  <ServiceList>
    <div className="card">
      <Vendor />
      <h2>New vendor</h2>
      <ul>
        <li>
          <Check /> Listing qualified suppliers and collect quotations
        </li>
        <li>
          <Check /> Supplier assessment
        </li>
        <li>
          <Check /> Delivery reports in real time
        </li>
        <li>
          <Check /> Negotiations with suppliers (commercial and technical terms)
        </li>
        <li>
          <Check /> Sample collecting from different suppliers and delivery to
          your address
        </li>
        <li>
          <Check /> Consulting
        </li>
      </ul>
    </div>
    <div className="card">
      <Inspection />
      <h2>Basic inspection</h2>
      <ul>
        <li>
          <Check /> Factory audit
        </li>
        <li>
          <Check /> Quality control
        </li>
        <li>
          <Check /> Pre-shipment inspection
        </li>
        <li>
          <Check /> Delivery reports in real time
        </li>
        <li>
          <Check /> Consulting
        </li>
      </ul>
    </div>
    <div className="card">
      <Launch />
      <h2>From idea to final product</h2>
      <ul>
        <li>
          <Check /> Contract manufacturing selection
        </li>
        <li>
          <Check /> Prototype and sampling
        </li>
        <li>
          <Check /> Sourcing critical components
        </li>
        <li>
          <Check /> Analysis and cost reduction
        </li>
        <li>
          <Check /> Industrial design
        </li>
        <li>
          <Check /> Production reports
        </li>
        <li>
          <Check /> Consulting
        </li>
      </ul>
    </div>
  </ServiceList>
)

const ServiceList = styled.section`
  display: flex;
  justify-content: space-evenly;
  flex-wrap: wrap;
  .card {
    margin: 0 10px 75px 10px;
    min-width: 30%;
    padding: 20px 10px;
    > svg {
      display: block;
      margin: auto;
      max-width: 150px;
    }
    h2 {
      margin-top: 20px;
      text-align: center;
    }
    ul {
      list-style-type: none;
      margin-left: 0;
      padding-left: 0;
      li {
        margin: 10px auto;
        max-width: 350px;
        text-align: justify;
        svg {
          margin-right: 5px;
          width: 18px;
        }
      }
    }
  }
`
