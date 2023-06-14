import styled from "styled-components";
import topRight from "../../img/dec/top-right.svg";

const THEME = {
  dark: {
    colorP: `var(--color-5)`,
    colorUl: `var(--color-5)`,
    colorH2: `var(--color-0)`,
    background: `linear-gradient(to right, var(--color-0) 30%, var(--color-11) 0%)`
  }, 
  white: {
    colorP: `var(--color-8)`,
    colorUl: `var(--color-8)`,
    colorH2: "inherit",
    background: "inherit"
  }
}

export const MainBicyclesContainer = styled.main`
  .main-bicycles-container__background {
    padding-top: 60px;
    padding-bottom: 60px;
    background-color: var(--color-11);
  }

  .main-bicycles-container__title {
    font: var(--font-2-l-b);
    color: var(--color-5);
    margin-bottom: 4px;
    text-transform: uppercase;
  }

  @media (max-width: 800px) {
    .main-bicycles-container__title {
      font-size: 1rem;
      text-transform: lowercase;
      font-weight: 400;
    }
  }
`
export const BicycleContainer = styled.div<{variant: "dark" | "white"}>`
  background: ${props => THEME[props.variant].background};

  .main-bicycles-container__bicycles {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 40px;
    padding-top: 60px;
    padding-bottom: 60px;
    background: url(${topRight}) no-repeat top 40px right 20px;
  }

  .main-bicycles-container__content {
    display: grid;
    grid-template-columns: 1fr auto;
    align-content: flex-start;
  }

  .main-bicycles-container__h2 {
    font: var(--font-1-xl);
    color: ${props => THEME[props.variant].colorH2};
    grid-column: 1/-1; /* position end to end */
    margin-bottom: 20px;
  }

  .main-bicycles-container__h2::before {
    content: "";
    display: block;
    width: 12px;
    height: 8px;
    background-color: var(--color-p1);
    margin-bottom: 8px;
  }

  .main-bicycles-container__p {
    font: var(--font-2-s);
    color: ${props => THEME[props.variant].colorP};
    grid-column: 1/-1; /* position end to end */
    margin-bottom: 32px;
  }

  .main-bicycles-container__ul {
    font: var(--font-1-m);
    color: ${props => THEME[props.variant].colorUl};
  }

  .main-bicycles-container__li {
    display: flex;
    align-items: center;
    margin-top: 16px;
  }

  .main-bicycles-container__img {
    width: 24px;
    margin-right: 8px;
  }

  .main-bicycles-container__button {
    place-self: end;
  }

  @media (max-width: 800px) {
    background: ${props => props.variant === "dark" ? "var(--color-11)" : "inherit"};

    .main-bicycles-container__bicycles {
      grid-template-columns: 1fr;
      gap: 20px;
      padding-top: 40px;
      padding-bottom: 40px;
    }
  }

  @media (max-width: 600px) {
    .main-bicycles-container__content {
      grid-template-columns: 1fr;
    }

    .main-bicycles-container__ul {
      font-size: 1rem;
      margin-bottom: 32px;
    }

    .main-bicycles-container__button {
      place-self: start;
    }
  }

`