import styled from "styled-components";
import withHeaderAndFooter from "../../util/withHeaderAndFooter"
import Title2 from "../components/Title2";
import termsJson from "../../data/terms.json";
import React from "react";

interface TermsData {
  title: string;
  descriptions: string[];
}

function Terms() {
  const terms = termsJson as TermsData[];
  
  return (
    <TermsContainer>
      <div className="terms-container__background">
        <div className="container__box">
          <p className="terms-container__title">TERMS OF USE</p>
          <Title2 color="--color-0" font="--font-1-xxl" text="terms and conditions"  />
        </div>
      </div>
      <div className="terms-container__terms container__box">
        {
          <>
            {terms && terms.map((term, termPosition) => {
              return (
                <React.Fragment key={termPosition}>
                  <h2 className="terms-container__h2">{term.title}</h2>
                  {term.descriptions && term.descriptions.map((description, descriptionPosition) => {
                    return <p className="terms-container__p" key={descriptionPosition}>{description}</p>
                  })}
                </React.Fragment>
              )
            })}
          </>
        }
      </div>
    </TermsContainer>
  )
}

const TermsContainer = styled.main`
  .terms-container__background {
    padding-top: 60px;
    padding-bottom: 60px;
    background-color: var(--color-11);
  }

  .terms-container__title {
    font: var(--font-2-l-b);
    color: var(--color-5);
    margin-bottom: 4px;
  }

  .terms-container__terms {
    padding-top: 80px;
    padding-bottom: 80px;
  }

  .terms-container__terms .terms-container__p + .terms-container__h2 {
    margin-top: 40px;
  }

  .terms-container__h2 {
    font: var(--font-1-l);
    color: var(--color-11);
    font-weight: 600;
    margin-bottom: 20px;
  }

  .terms-container__p {
    font: var(--font-2-s);
    color: var(--color-10);
    margin-bottom: 24px;
    max-width: 75ch;
  }

  @media (max-width: 800px) {
    padding-top: 40px;
    padding-bottom: 40px;

    .terms-container__title {
      font-size: 1rem;
      text-transform: lowercase;
      font-weight: 400;
    }
  }
`

export default withHeaderAndFooter(Terms);