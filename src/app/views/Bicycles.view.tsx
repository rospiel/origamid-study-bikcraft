import bicyclesJson from "../../data/bicycles.json";
import getImageByKey from "../../util/getImageByKey";
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
      <h2 className="bicycles-container__h2 container__box">choose your<span className="bicycles-container__dot">.</span></h2>
      <ul className="bicycles-container__ul">
        {
          bicycles.map((bicycle, position) => {
            return (
              <>
                <li className="bicycles-container__li">
                  <a className="bicycles-container__a" key={position} href={bicycle.linkHref}>
                    <img className="bicycles-container__img" src={getImageByKey(bicycle.imageHref)} alt={bicycle.imageAlt} />
                    <h3 className="bicycles-container__h3">{bicycle.name}</h3>
                    <span className="bicycles-container__span">{bicycle.value}</span>
                  </a>
                </li>
              </>
            )
          })
        }
      </ul>
    </B.BicyclesContainer>
  )
}