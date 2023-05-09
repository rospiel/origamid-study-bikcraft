import styled from "styled-components";

export const TechnologyContainer = styled.article`
  background-color: var(--color-11);
  box-shadow: inset 0 80px var(--color-0), inset 0 -80px var(--color-0);
  
  .technology-container__content {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 40px;
  }

  .technology-container__span {
    font: var(--font-2-l-b);
    text-transform: uppercase;
    color: var(--color-5);
    display: block;
    margin-bottom: 20px;
  }

  .technology-container__h2 {
    font: var(--font-1-xxl);
    color: var(--color-0);
    margin-bottom: 32px;
  }

  .technology-container__dot {
    color: var(--color-p1);
  }

  .technology-container__p {
    font: var(--font-2-l);
    color: var(--color-5);
    margin-bottom: 20px;
  }

  .technology-container__a {
    margin-bottom: 80px;
  }

  .technology-container__text {
    padding-top: 160px;
    padding-bottom: 160px;
  }

  .technology-container__image {
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: left;
  }

  .technology-container__advantages {
    display: flex;
    gap: 40px;
  }

  @media (max-width: 800px) {
    box-shadow: initial;

    .technology-container__content {
      grid-template-columns: 1fr;
    }

    .technology-container__text {
      padding-top: 60px;
      padding-bottom: 60px;
    }

    .technology-container__image {
      display: none;
    }

    .technology-container__a {
      margin-bottom: 60px;
    }

    @media (max-width: 600px) {
      .technology-container__advantages {
        flex-direction: column;
      }
    }
  }
`
