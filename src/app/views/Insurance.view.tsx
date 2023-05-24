import styled from "styled-components";
import InsuranceItem, { InsuranceDetails, InsuranceItemProps, InsuranceType } from "../components/InsuranceItem";
import Title2 from "../components/Title2";

export default function Insurance() {
  const insurance1 = {} as InsuranceItemProps;
  insurance1.data = {} as InsuranceDetails;
  insurance1.data.name = InsuranceType.SILVER;
  insurance1.data.value = "$ 199";
  insurance1.data.period = "monthly";
  insurance1.data.benefits = ["Two exchanges a year", "technical support", "Support 08h to 18h", "State coverage"]

  const insurance2 = {} as InsuranceItemProps;
  insurance2.data = {} as InsuranceDetails;
  insurance2.data.name = InsuranceType.GOLD;
  insurance2.data.value = "$ 299";
  insurance2.data.period = "monthly";
  insurance2.data.benefits = ["Five exchanges a year", "Special assistance", "Support 24h", "National coverage", "Partner discount", "Access to the Bikcraft Club"]

  let data = {} as InsuranceItemProps[];
  data = [];
  data.push(insurance1);
  data.push(insurance2);
  
  return (
    <InsuranceContainer>
      <div className="container__box insurance-container__content">
        <div className="insurance-container_title">
          <Title2 font="--font-1-xxl" color="--color-0" text="insurance" />
        </div>
        {
          data.map((value, position) => {
            return (
              <InsuranceItem key={position} data={value.data} />
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