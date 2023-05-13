import technology from "../../img/fotos/tecnologia.jpg";
import electric from "../../img/icones/eletrica.svg";
import tracker from "../../img/icones/rastreador.svg";
import TechnologyItem, { TechnologyItemDescription, TechnologyItemProps } from "../components/TechnologyItem";
import Link from "../components/Link";
import * as T from "./Technology.styles";
import Title2 from "../components/Title2";

export default function Technology() {

  function buildTechnologyItemDescription(): TechnologyItemDescription[] {
    const list = {} as TechnologyItemProps;
    list.data = [];
    const one = {} as TechnologyItemDescription;
    one.srcImage = electric;
    one.name = "Electric Motor";
    one.description = "Every Bikcraft is equipped with an electric motor that lasts up to 120h. The battery is recharged with its energy spent when pedaling.";
    list.data.push(one);

    const two = {} as TechnologyItemDescription;
    two.srcImage = tracker;
    two.name = "Tracker";
    two.description = "We know how precious your Bikcraft is, so we’ve added trackers and anti-theft systems to ensure your peace of mind.";
    list.data.push(two);
    
    return list.data;
  } 

  return (
    <T.TechnologyContainer>
      <div className="container__box technology-container__content">
        <div className="technology-container__text">
          <span className="technology-container__span">advanced technology</span>
          <Title2 color="--color-0" text="choose your colors and components" />
          <p className="technology-container__p">Each Bikcraft is unique and has its own identity. The measurements will be exact for your body and height, ensuring greater comfort and ergonomics in your pedaling. You can also completely customize your colors.</p>
          <div className="technology-container__a">
            <Link href="./bicicletas.html" text="choose your model" />
          </div>
          <div className="technology-container__advantages">
            <TechnologyItem data={buildTechnologyItemDescription()} />
          </div>
        </div>
        <div>
          <img  className="technology-container__image" src={technology} alt="" />
        </div>

      </div>
    </T.TechnologyContainer>
  )
}
