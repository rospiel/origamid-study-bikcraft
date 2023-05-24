import bicyclesJson from "../../data/bicycles.json";
import getImageByKey from "../../util/getImageByKey";
import Title2 from "../components/Title2";
import * as B from "./Bicycles.styles";

interface BicyclesData {
  linkHref: string;
  imageHref: string;
  imageAlt: string;
  name: string;
  value: string;
}

export default function Bicycles() {
  const bicycles = bicyclesJson as BicyclesData[];

  return (
    <B.BicyclesContainer>
      <div className="container__box">
        <Title2 font="--font-1-xxl" color="--color-12" text="choose your" />
      </div>
      <ul className="bicycles-container__ul">
        {
          bicycles.map((bicycle, position) => {
            return (
              <li key={position} className="bicycles-container__li">
                <a className="bicycles-container__a" key={position} href={bicycle.linkHref}>
                  <img className="bicycles-container__img" src={getImageByKey(bicycle.imageHref)} alt={bicycle.imageAlt} />
                  <h3 className="bicycles-container__h3">{bicycle.name}</h3>
                  <span className="bicycles-container__span">{bicycle.value}</span>
                </a>
              </li>
            )
          })
        }
      </ul>
    </B.BicyclesContainer>
  )
}