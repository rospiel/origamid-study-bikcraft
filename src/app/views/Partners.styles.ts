import styled from "styled-components";

export const PartnersContainer = styled.section`
  --border: 2px solid var(--color-2);

  padding-top: 60px;
  padding-bottom: 120px;

  .partners-container__ul {
    padding: 0 20px;
    max-width: 1400px;
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    margin: 0 auto;
  }

  .partners-container__li {
    display: flex;
    padding: 32px;
    border-left: var(--border);
  }

  .partners-container__img {
    margin: auto;
  }

  .partners-container__li:first-child, 
  .partners-container__li:nth-child(5) {
    border-left: none;
  }

  .partners-container__li:nth-child(n + 5) {
    border-top: var(--border);
  }

  @media (max-width: 800px) {
    padding-bottom: 60px;
    
    .partners-container__ul {
      grid-template-columns: repeat(2, 1fr);
    }

    .partners-container__li {
      padding: 20px;
    }

    .partners-container__li:nth-child(n + 3) {
      border-top: var(--border);
    }

    .partners-container__li:nth-child(odd) {
      border-left: none;
    }
  }

`