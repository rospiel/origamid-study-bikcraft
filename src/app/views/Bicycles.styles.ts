import styled from "styled-components";

export const BicyclesContainer = styled.article`
  padding-top: 60px;
  padding-bottom: 120px;

  .bicycles-container__ul {
    display: flex;
    gap: 40px;
    padding: 0 20px 20px 20px;
    max-width: 1400px;
    margin-left: auto;
    margin-right: auto;
    overflow-x: auto;
  }

  .bicycles-container__li {
    flex: 1;
    min-width: 280px;
  }

  .bicycles-container__h2 {
    font: var(--font-1-xxl);
    margin-bottom: 40px;
    box-sizing: border-box;
  }

  .bicycles-container__h3 {
    font: var(--font-1-xl);
    margin-bottom: 8px;
    display: flex;
    align-items: center;
  }

  .bicycles-container__h3::before {
    content: "";
    display: inline-block;
    height: 8px;
    width: 12px;
    margin-right: 8px;
    background-color: var(--color-p1);
    transition: width 0.2s;
  }

  .bicycles-container__span {
    font: var(--font-2-m);
    color: var(--color-8);
    padding-left: 20px;
  }

  .bicycles-container__dot {
    color: var(--color-p1);
  }

  .bicycles-container__a {
    display: block;
  }

  .bicycles-container__a:hover .bicycles-container__h3::before {
    width: 24px;
  }

  bicycles-container__img {
    margin-bottom: 16px;
  }

  @media (max-width: 800px) {
    padding-bottom: 60px;

    .bicycles-container__ul {
      gap: 20px;
    }
  }
`