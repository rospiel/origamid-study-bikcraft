import styled from "styled-components";
import InsuranceItem, { InsuranceDetails } from "../components/InsuranceItem";
import Title2 from "../components/Title2";
import insuranceJson from "../../data/insurance.json";

export default function Insurance() {
  const insurance = insuranceJson as InsuranceDetails[];
  return (
    <InsuranceContainer>
      <div className="container__box insurance-container__content">
        <div className="insurance-container_title">
          <Title2 font="--font-1-xxl" color="--color-0" text="insurance" />
        </div>
        {
          insurance.map((value, position) => {
            return (
              <InsuranceItem key={position} data={value} />
            )
          })
        }
      </div>
      
    </InsuranceContainer>
  )
}

const InsuranceContainer = styled.article`
  background: var(--color-11);

  .insurance-container__content {
    padding-top: 60px;
    padding-bottom: 60px;
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 40px;
    align-items: center;
  }

  .insurance-container_title {
    grid-column: 1/-1;
  }

  @media (max-width: 800px) {
    .insurance-container__content {
      grid-template-columns: 1fr;
    }
  }

`