import styled from "styled-components"

export const MainInsuranceContainer = styled.main`
  .main-insurance-container__background {
    padding-top: 60px;
    padding-bottom: 60px;
    background-color: var(--color-11);
  }

  .main-insurance-container__title {
    font: var(--font-2-l-b);
    color: var(--color-5);
    margin-bottom: 4px;
    text-transform: uppercase;
  }

  .main-insurance-container__insurance {
    background: var(--color-11);
  }

  .main-insurance-container__content {
    padding-bottom: 60px;
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 40px;
    align-items: center;
  }

  .main-insurance-container_title {
    grid-column: 1/-1;
  }

  @media (max-width: 800px) {
    .main-insurance-container__title {
      font-size: 1rem;
      text-transform: lowercase;
      font-weight: 400;
    }

    .main-insurance-container__content { 
      grid-template-columns: 1fr;
    }
  }
`

export const BenefitsContainer = styled.article`
  background-color: var(--color-12);

  .benefits-container__content {
    padding-top: 120px;
    padding-bottom: 120px;
  }

  .benefits-container__title {
    margin-bottom: 60px;
  }

  .benefits-container__ul {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(280px, max-content));
    gap: 40px 80px;
  }

  .benefits-container__img, .benefits-container__h3 {
    margin-bottom: 8px;
  }

  .benefits-container__h3 {
    font: var(--font-1-l);
    color: var(--color-0);
  }

  .benefits-container__p {
    font: var(--font-2-s);
    color: var(--color-5);
  }

  @media (max-width: 800px) {
    .benefits-container__content { 
      padding-top: 60px;
      padding-bottom: 60px;
    }

    .benefits-container__title { 
      margin-bottom: 40px;
    }

    .benefits-container__ul {
      gap: 20px;
    }
  }
`

export const QuestionsContainer = styled.article<{ imgArrowOpen: string }>`
  padding-top: 120px;
  padding-bottom: 120px;

  .questions-container__dt {
    font: var(--font-1-m-b);
    display: grid;
    grid-template-columns: auto 1fr auto;
    align-items: center;
    gap: 8px;
    cursor: pointer;
  }

  .questions-container__dt::before {
    content: "";
    display: inline-block;
    width: 12px;
    height: 8px;
    background-color: var(--color-p1);
  }

  .questions-container__dt::after {
    content: "";
    display: inline-block;
    width: 14px;
    height: 6px;
    background: url(${props => props.imgArrowOpen});
  }

  .questions-container__dd {
    font: var(--font-2-s);
    color: var(--color-9);
    padding-left: 20px;
    padding-top: 16px;
    max-width: 80ch;
  }

  .questions-container__title {
    margin-bottom: 60px;
  }

  .questions-container__content {
    padding: 20px;
    border-radius: 4px;
  }

  .questions-container__content:nth-child(odd) {
    background-color: var(--color-1);
  }

  @media (max-width: 800px) {
    padding-bottom: 60px;
    padding-top: 60px;

    .questions-container__title {
      margin-bottom: 40px;
    }
  }
`