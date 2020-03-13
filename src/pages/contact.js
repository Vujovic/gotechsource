import React from 'react'
import styled from 'styled-components'

import Layout from '../components/layout'
import SEO from '../components/seo'

export default () => (
  <Layout>
    <SEO title="Contact us" />
    <Contact>
      <h1>Contact us</h1>
      <form
        name="contact"
        action="/"
        method="POST"
        data-netlify="true"
        data-netlify-honeypot="bot-field"
      >
        <input type="hidden" name="bot-field" />
        <label htmlFor="company-name">
          Company name <span className="red">*</span>
        </label>
        <input
          type="text"
          name="company-name"
          id="company-name"
          placeholder="Enter company name..."
          required
        />
        <label htmlFor="company-website">Company website</label>
        <input
          type="url"
          name="company-website"
          id="company-website"
          placeholder="Enter company website..."
        />
        <label htmlFor="email">
          Contact email <span className="red">*</span>
        </label>
        <input
          type="email"
          name="email"
          id="email"
          placeholder="Enter contact email address..."
          required
        />
        <label htmlFor="product">
          Product you are looking for <span className="red">*</span>
        </label>
        <input
          type="text"
          name="product"
          id="product"
          placeholder="Enter product name..."
          required
        />
        <label htmlFor="specification">
          Product description and specification <span className="red">*</span>
        </label>
        <textarea
          name="specification"
          id="specification"
          rows="6"
          placeholder="Enter product description and specification..."
          required
        />
        <label htmlFor="quantity">Quantity</label>
        <input
          type="number"
          name="quantity"
          id="quantity"
          min="1"
          placeholder="Quantity..."
        />
        <div className="price">
          <label htmlFor="target-price">Target price</label>
          <select name="currency" id="currency">
            <option value="RMB">¥</option>
            <option value="USD">$</option>
            <option value="EUR">€</option>
          </select>
          <input
            type="number"
            name="target-price"
            id="target-price"
            min="1"
            placeholder="Target price..."
          />
        </div>
        <input type="submit" className="button" value="Send message" />
      </form>
    </Contact>
  </Layout>
)

const Contact = styled.section`
  margin: 0 auto 75px auto;
  max-width: 960px;
  > h1 {
    margin-top: 50px;
    text-align: center;
  }
  form {
    padding: 0 20px;
    label {
      display: block;
      margin: 25px auto;
      font-weight: 900;
      .red {
        color: #d24a4a;
      }
    }
    textarea,
    input {
      border: none;
      border-radius: 5px;
      box-shadow: 0 0 8px rgba(0, 0, 0, 0.15);
      padding: 20px 40px;
      width: 100%;
      ::placeholder {
        color: #b9b9b9;
      }
    }
    .price {
      input {
        width: calc(100% - 70px);
      }
      select {
        background-color: #fff;
        border: none;
        border-radius: 5px;
        box-shadow: 0 0 8px rgba(0, 0, 0, 0.15);
        color: #434343;
        margin-right: 20px;
        padding: 20px 0 20px 13px;
        width: 50px;
      }
    }
    .button {
      background-color: var(--color-primary);
      color: #fff;
      cursor: pointer;
      font-weight: 900;
      margin-top: 25px;
      :hover {
        opacity: 0.7;
      }
    }
  }
`
