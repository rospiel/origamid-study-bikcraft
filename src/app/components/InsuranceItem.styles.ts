import styled from "styled-components";
import { InsuranceType } from "./InsuranceItem";

export const InsuranceItemContainer = styled.div<{ insuranceType: InsuranceType, checkImage: string }>`
  background-color: var(--color-12);
  padding: 32px 32px 32px 60px;
  display: grid;
  grid-template-columns: 1fr auto;

  .insurance-item-container__h3 {
    font: var(--font-1-xl);
    color: var(${props => props.insuranceType === InsuranceType.SILVER ? "--color-6" : "--color-p1" } );
    margin-bottom: 40px;
  }

  .insurance-item-container__value {
    font: var(--font-1-xl);
    color: var(--color-0);
    grid-column: 2;
    display: block;
    text-align: right;
  }

  .insurance-item-container__period {
    font: var(--font-1-xs);
    color: var(--color-6);
    display: block;
  }

  .insurance-item-container__ul {
    font: var(--font-2-m);
    color: var(--color-0);
    grid-column: 1/-1;
    margin-bottom: 32px;
  }

  .insurance-item-container__li {
    display: flex;
    align-items: center;
    position: relative;
  }

  .insurance-item-container__li + li{
    margin-top: 20px;
  }

  .insurance-item-container__li::before {
    content: "";
    display: inline-block;
    width: 13px;
    height: 9px;
    background-image: url(${props => props.checkImage});
    position: absolute;
    left: -21px;
  }

  .insurance-item-container__button {
    grid-column: 1/-1;
  }

  @media (max-width: 800px) {
    grid-template-columns: 1fr;
  }
`