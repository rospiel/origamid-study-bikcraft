import withHeaderAndFooter from "../../util/withHeaderAndFooter"
import Title2 from "../components/Title2";
import InsuranceItem, { InsuranceDetails } from "../components/InsuranceItem";
import insuranceJson from "../../data/insurance.json";
import benefitsMainInsuranceJson from "../../data/benefitsMainInsurance.json";
import questionsAnswersJson from "../../data/questionsAnswers.json";
import getImageByKey from "../../util/getImageByKey";
import arrowOpen from "../../img/icones/seta-abrir.svg";
import * as MI from "./MainInsurance.styles";
import { ReactNode, useEffect } from "react";
import { HeadProps } from "../../util/Head";

const head = {} as HeadProps;
head.title = "Insurance";
head.description = "Insurance page"

interface BenefitsInsurance {
  img: string;
  title: string;
  description: string;
}

interface QuestionAnswers {
  question: string;
  answer: string;
}

export interface MainInsuranceProps {
  title: ReactNode;
}

function MainInsurance(props: MainInsuranceProps) {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, []);

  const insurance = insuranceJson as InsuranceDetails[];
  const benefitsInsurance = benefitsMainInsuranceJson as BenefitsInsurance[];
  const questionsAnswers = questionsAnswersJson as QuestionAnswers[];
  
  return (
    <>
      <MI.MainInsuranceContainer>
        <div className="main-insurance-container__background">
          <div className="container__box">
            <p className="main-insurance-container__title">choose the insurance</p>
            {props.title}
          </div>
        </div>
        <div className="main-insurance-container__insurance">
          <div className="container__box main-insurance-container__content">
            { insurance.map((value, position) => {
                return (
                  <InsuranceItem key={position} data={value} />
                )
              }) }
          </div>
        </div>
      </MI.MainInsuranceContainer>
      <MI.BenefitsContainer>
        <div className="container__box benefits-container__content">
          <div className="benefits-container__title">
              <Title2 color="--color-0" font="--font-1-xxl" text="Benefits" />
          </div>
          <ul className="benefits-container__ul">
            { benefitsInsurance && benefitsInsurance.map((benefit, position) => {
              return (
                <li key={position}>
                  <img className="benefits-container__img" src={getImageByKey(benefit.img)} alt="" />  
                  <h3 className="benefits-container__h3">{benefit.title}</h3>
                  <p className="benefits-container__p">{benefit.description}</p>
                </li>
              )
            }) }
          </ul>
        </div>
      </MI.BenefitsContainer>
      <MI.QuestionsContainer imgArrowOpen={arrowOpen} className="container__box">
        <div className="questions-container__title">
          <Title2 color="--color-12" font="--font-1-xxl" text="FAQ" />
        </div>
        <dl>
          { questionsAnswers && questionsAnswers.map((item, position) => {
            return (
              <div className="questions-container__content" key={position}>
                <dt className="questions-container__dt">{item.question}</dt>
                <dd className="questions-container__dd">{item.answer}</dd>
              </div>
            )
          }) }
          
        </dl>
      </MI.QuestionsContainer>
    </>
    
  )
}

export default withHeaderAndFooter(MainInsurance, head);