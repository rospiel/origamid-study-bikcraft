import styled from "styled-components"

export const BicycleDetailContainer = styled.main`
  padding-top: 60px;
  padding-bottom: 60px;
  background-color: var(--color-11);

  .bicycle-detail-container__title {
    font: var(--font-2-xl);
    color: var(--color-5);
  }

  .bicycle-detail-container__detail {
    display: grid;
    grid-template-columns: 1fr 1fr;
    align-items: flex-start;
    gap: 40px;
    padding-top: 60px;
    padding-bottom: 60px;
  }

  .bicycle-detail-container__images {
    display: flex;
    flex-wrap: wrap;
    gap: 20px;
  }

  .bicycle-detail-container__img {
    flex: 1;
    min-width: 200px; /* allow decrease size until, otherwise flex 1 */
  } 

  .bicycle-detail-container__img:first-child {
    min-width: 100%; /* just the others images min width 200px */
  }

  .bicycle-detail-container__description {
    font: var(--font-2-l);
    color: var(--color-5);
    margin-bottom: 32px;
  }

  .bicycle-detail-container__buy {
    display: grid;
    grid-template-columns: max-content auto;
    align-items: center;
    justify-items: start;
    gap: 8px 12px;
    margin-bottom: 40px;
  }

  .bicycle-detail-container__button {
    grid-row: span 2;
  }

  .bicycle-detail-container__buy-details {
    font: var(--font-1-xs);
    color: var(--color-6);
    display: flex;
    align-items: center;
    background-color: var(--color-12);
    gap: 8px;
    padding: 4px 8px;
    border-radius: 4px;
    
  }

  .bicycle-detail-container__h2-information {
    font: var(--font-1-xs);
    color: var(--color-0);
    text-transform: uppercase;
    letter-spacing: 0.015em;
    margin-bottom: 12px;
  }

  .bicycle-detail-container__ul-technical, 
  .bicycle-detail-container__ul-information {
    padding: 32px;
    background-color: var(--color-12);
    border-radius: 4px;
  }

  .bicycle-detail-container__ul-technical {
    font: var(--font-2-s);
    color: var(--color-4);
  }

  .bicycle-detail-container__ul-technical li {
    padding: 4px 0;
    display: flex;
    justify-content: space-between;
    border-bottom: 1px solid var(--color-11);
  }

  .bicycle-detail-container__ul-technical li:last-child {
    border-bottom: none;
  }

  .bicycle-detail-container__ul-technical span {
    color: var(--color-6);
  }

  .bicycle-detail-container__ul-information {
    margin-bottom: 40px;
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 32px;
  }

  .bicycle-detail-container__ul-information img {
    width: 24px;
    margin-bottom: 8px;
  }

  .bicycle-detail-container__info-title {
    font: var(--font-1-m);
    color: var(--color-0);
    margin-bottom: 8px;
  }

  .bicycle-detail-container__info-description {
    font: var(--font-2-xs);
    color: var(--color-5);
  }

  @media (max-width: 800px) {
    .bicycle-detail-container__detail {
      grid-template-columns: 1fr;
      padding-top: 40px;
      padding-bottom: 40px;
    }

    .bicycle-detail-container__images { 
      grid-row: 2;
    }
  }

  @media (max-width: 400px) { 
    .bicycle-detail-container__ul-information {
      grid-template-columns: 1fr;
    }

    .bicycle-detail-container__buy { 
      grid-template-columns: 1fr;
    }
  }
  
`

export const InsureContainer = styled.article`
  background-color: var(--color-11);
  box-shadow: inset 0 120px var(--color-0), inset 0 -120px var(--color-12);

  .insure-container__all {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 40px;
  }

  .insure-container__image {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  .insure-container__content {
    padding-top: 180px;
    padding-bottom: 180px;
  }

  .insure-container__title {
    margin-bottom: 32px;
  }

  .insure-container__description {
    font: var(--font-2-l);
    color: var(--color-5);
    margin-bottom: 20px;
  }

  @media (max-width: 800px) {
    box-shadow: inset 0 -60px var(--color-12);

    .insure-container__all { 
      grid-template-columns: 1fr;
    }

    .insure-container__content { 
      grid-row: 1;
      padding-top: 40px;
      padding-bottom: 0px;
    }
  }

`