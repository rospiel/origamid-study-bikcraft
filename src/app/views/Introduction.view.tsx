import introduction from "../../img/fotos/introducao.jpg";
import getImageByKey from "../../util/getImageByKey";
import Button from "../components/Button";
import * as I from "./Introduction.styles";

export default function Introduction() {
  return (
    <I.IntroductionContainer>
      <div className="introduction-container__content container__box">
        <div className="introduction-container__text">
          <h1 className="introduction-container__h1">Custom-made bicycles<span className="introduction-container__h1-span">.</span></h1>
          <p className="introduction-container__p">High precision and quality electric bikes, tailor-made for you. Explore the world at your speed with Bikcraft.</p>
          <Button variant="gold" href="./bicycles" text="choose yours" />
        </div>
        <picture>
          <source media="(max-width: 800px)" srcSet={getImageByKey("nimbus")} />
          <img className="introduction-container__img" src={introduction} width="1280" height="1600" alt="Black electric bicycle." />
        </picture>
        
      </div>
    </I.IntroductionContainer>
  )
}