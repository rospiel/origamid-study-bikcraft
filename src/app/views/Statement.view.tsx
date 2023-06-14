import statement from "../../img/fotos/depoimento.jpg";
import * as S from "./Statement.styles";

export default function Statement() {
  return (
    <S.StatementContainer>
      <div>
        <img width="1560" height="1360" className="statement-container__img" src={statement} alt="Person Riding a Bike Bikcraft" />
      </div>
      <div className="statement-container__text">
        <blockquote className="statement-container__blockquote">
          <p className="statement-container__p">Cycling has always been my passion, what the Bikcraft people did was intensify my love for this activity. I recommend it to everyone I love.</p>
        </blockquote>
        <span className="statement-container__span">
          Ana Júlia
        </span>
      </div>
    </S.StatementContainer>
  )
}