import Button from "./Button";
import list from "../../img/icones/lista.svg";
import * as II from "./InsuranceItem.styles";

export interface InsuranceItemProps {
  data: InsuranceDetails;
}

export interface InsuranceDetails {
  name: InsuranceType;
  value: string;
  period: string;
  benefits: string[]
}

export enum InsuranceType {
  SILVER = "SILVER", GOLD = "GOLD"
}

function configureButtonVariant(type: InsuranceType): "silver" | "gold" {
  return type === InsuranceType.SILVER ? "silver" : "gold";
}

export default function InsuranceItem({data: { name, value, period, benefits }}: InsuranceItemProps) {
  return (
    <II.InsuranceItemContainer insuranceType={name} checkImage={list}>
      <h3 className="insurance-item-container__h3">{InsuranceType[name]}</h3>
      <span className="insurance-item-container__value">{value} <span className="insurance-item-container__period">{period}</span>
      </span> 
      <ul className="insurance-item-container__ul">
        {
          benefits.map((benefit, position) => {
            return (
              <li className="insurance-item-container__li" key={position}>{benefit}</li>
            )
          })
        }
      </ul>
      <div className="insurance-item-container__button">
        <Button variant={configureButtonVariant(name)} href={`/budget?type=insurance&product=${name}`} text="Register" />    
      </div>
    </II.InsuranceItemContainer>
  )
}