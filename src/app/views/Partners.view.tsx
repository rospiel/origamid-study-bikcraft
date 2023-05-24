import Title2 from "../components/Title2";
import partnersJson from "../../data/partners.json";
import getImageByKey from "../../util/getImageByKey";
import * as P from "./Partners.styles";

interface PartnersData {
  imageHref: string;
  imageAlt: string;
}

export default function Partners() {
  const partners = partnersJson as PartnersData[];

  return (
    <P.PartnersContainer aria-label="Our Partners">
      <div className="container__box">
        <Title2 font="--font-1-xxl" color="--color-12" text="our partners" />
      </div>
      <ul className="partners-container__ul">
        {
          partners.map((partner, position) => {
            return (
              <li key={position} className="partners-container__li">
                <img className="partners-container__img" src={getImageByKey(partner.imageHref)} alt={partner.imageAlt} />
              </li>
            )
          })
        }
      </ul>
    </P.PartnersContainer>
  )
}