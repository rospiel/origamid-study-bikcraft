import styled from "styled-components";

export const StatementContainer = styled.section`
  display: grid;
  grid-template-columns: 1fr 1fr;
  background-color: var(--color-p1);
  overflow: hidden;

  .statement-container__img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 0px;
  }

  .statement-container__text {
    padding: 40px 40px 80px 80px;
    align-self: end;
  }

  .statement-container__blockquote {
    font: var(--font-1-xl);
    color: var(--color-p5);
  }

  .statement-container__p {
    max-width: 32ch;
    font-family: var(--font-3);
    font-style: italic;
    font-weight: 900;
    margin-bottom: 32px;
    position: relative;
  }

  .statement-container__p::before { 
    content: "“";
    font-size: 5rem;
    color: var(--color-p2);
    position: absolute;
    left: -50px;
    top: -20px;
  }

  .statement-container__p::after { 
    content: "”";
    font-size: 5rem;
    color: var(--color-p2);
    position: absolute;
  }

  .statement-container__span {
    font: var(--font-1-m-b);
    color: var(--color-p4);
  }

  @media (max-width: 800px) {
    grid-template-columns: 1fr;
    text-align: center;

    .statement-container__img { 
      max-height: 200px;
    }

    .statement-container__text {
      padding: 40px 20px;
      margin: auto;
    }
  }
`