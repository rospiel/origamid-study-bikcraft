import styled from "styled-components";

export const IntroductionContainer = styled.main`
  background: #000;
  color: #fff;
  /* allow space for the image bottom */
  box-shadow: inset 0 -120px #fff;
  
  .introduction-container__content {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 0px 40px;
    box-sizing: border-box;
    max-width: 1200px;
    padding-left: 20px;
    padding-right: 20px;
    margin-left: auto;
    margin-right: auto;
  }

  .introduction-container__text {
    align-self: end;
    padding-bottom: 200px;
  }

  .introduction-container__h1 {
    margin-bottom: 32px;
    font-size: 64px;
    line-height: 1.125;
    font-family: "Poppins";
    font-weight: 400;
  }

  .introduction-container__h1-span {
    color: #ffbb00;
  }

  .introduction-container__p {
    margin-bottom: 20px;
    font-size: 24px;
    line-height: 1.5;
    color: #b2b2b2;
    font-family: "Roboto";
    font-weight: 400;
  }

  .introduction-container__img {
    height: 100%;
    object-fit: cover;
    border-radius: 4px;
  }

  @media (max-width: 1200px) {
    .introduction-container__h1 {
      font-size: 48px;
    }

    .introduction-container__p {
      font-size: 18px;
    }
  }

  @media (max-width: 800px) {
    background: #111;
    padding-top: 40px;
    box-shadow: inset 0 -60px #fff;

    .introduction-container__content {
      grid-template-columns: 1fr;
      gap: 32px;
    }

    .introduction-container__h1 {
      font-size: 32px;
      margin-bottom: 16px;
    }

    .introduction-container__text {
      padding-bottom: 0px;
    }

  }

`