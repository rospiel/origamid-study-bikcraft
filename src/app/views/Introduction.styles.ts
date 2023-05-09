import styled from "styled-components";

export const IntroductionContainer = styled.main`
  background: var(--color-12);
  color: var(--color-0);
  /* allow space for the image bottom */
  box-shadow: inset 0 -120px var(--color-0);;
  
  .introduction-container__content {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 0px 40px;
    box-sizing: border-box;
  }

  .introduction-container__text {
    align-self: end;
    padding-bottom: 200px;
  }

  .introduction-container__h1 {
    margin-bottom: 32px;
    font: var(--font-1-xxl);
    
  }

  .introduction-container__h1-span {
    color: var(--color-p1);
  }

  .introduction-container__p {
    margin-bottom: 20px;
    color: var(--color-5);
    font: var(--font-2-l);
    
  }

  .introduction-container__img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 4px;
  }

  @media (max-width: 1200px) {
    .introduction-container__h1 {
      font: var(--font-1-xxl-1200px);
    }

    .introduction-container__p {
      font: var(--font-2-l-1200px);
    }
  }

  @media (max-width: 800px) {
    background: var(--color-11);
    padding-top: 40px;
    box-shadow: inset 0 -60px #fff;

    .introduction-container__content {
      grid-template-columns: 1fr;
      gap: 32px;
    }

    .introduction-container__h1 {
      font: var(--font-1-xxl-800px);
      margin-bottom: 16px;
    }

    .introduction-container__text {
      padding-bottom: 0px;
    }

  }

`