import styled from "styled-components";

export const BudgetContainer = styled.main`
  background: linear-gradient(var(--color-11) 600px, var(--color-1) 0px);

  .budget-container__background {
    padding-top: 60px;
    padding-bottom: 60px;
  }

  .budget-container__title {
    font: var(--font-2-l-b);
    color: var(--color-5);
    margin-bottom: 4px;
  }

  .budget-container__budget {
    display: grid;
    grid-template-columns: 1fr 1fr;
    padding-bottom: 120px;
  }

  .budget-container__product {
    border-radius: 5px 0 0 5px;
    background: var(--color-12);
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 20px;
    align-content: flex-start;
  }

  .budget-container__product, 
  .budget-container__data {
    padding: 60px;
    box-shadow: 0 1px 2px rgba(0, 0, 0, 0.1);
  }

  .budget-container__product > * {
    grid-column: 1/-1;
  }

  .budget-container__product > label {
    grid-column: initial;
  }

  /* Remove price */
  .budget-container__product label span {
    display: none;
  }

  /* Remove details from product */
  .budget-container__content {
    display: none;
  }

  /* IF selected show price */
  .budget-container__product input:checked + label span {
    display: inline-block;
  }

  /* IF selected show options */
  #bikcraft:checked ~ #budget-bikcraft,
  #insurance:checked ~ #budget-insurance {
    display: grid;
    gap: 20px;
  }

  /* IF selected show details from selected option */
  #budget-bikcraft input:checked + label + .budget-container__content-option-detail {
    display: grid;
  }

  .budget-container__product-title {
    font: var(--font-1-xs);
    color: var(--color-5);
  }

  .budget-container__content-option {
    font: var(--font-1-xs);
    color: var(--color-5);
  }

  .budget-container__content-option-detail {
    background: var(--color-0);
    padding: 20px;
    display: none;
    grid-template-columns: 1fr 1fr;
    border-radius: 4px;
    align-items: center;
  }

  .budget-container__content-option-detail ul {
    font: var(--font-1-xs);
    color: var(--color-8);
  }

  .budget-container__content-option-detail li {
    display: flex;
    align-items: center;
    margin-bottom: 8px;
  }

  .budget-container__content-option-detail li img {
    width: 16px;
    margin-right: 8px;
  }

  .budget-container__data {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 20px;
    border-radius: 0 5px 5px 0;
    background: var(--color-0);
  }

  .budget-container__data-title {
    font: var(--font-1-xs);
    color: var(--color-9);
    grid-column: span 2;
  }

  .budget-container__product-title, 
  .budget-container__data-title:nth-of-type(n + 2) {
    margin-top: 20px;
  }

  .budget-container__budget h2 {
    text-transform: uppercase;
    position: relative;
    display: flex;
    align-items: center;
  }

  .budget-container__budget h2::before {
    content: "";
    display: inline-block;
    width: 4px;
    height: 8px;
    background-color: var(--color-p1);
    position: absolute;
    left: -12px;
  }

  .budget-container__data-input {
    grid-column: span 2;
  }

  @media (max-width: 1200px) {
    .budget-container__product, 
    .budget-container__data {
      padding: 32px;
    }
  }

  @media (max-width: 800px) { 
    .budget-container__budget {
      grid-template-columns: 1fr;
    }

    .budget-container__product {
      border-radius: 5px 5px 0 0;
    }

    .budget-container__data {
      border-radius: 0 0 5px 5px;
    }
  }

  @media (max-width: 400px) { 
    .budget-container__product {
      grid-template-columns: 1fr;
    }
  }
`