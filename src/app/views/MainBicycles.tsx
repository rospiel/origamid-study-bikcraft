import withHeaderAndFooter from "../../util/withHeaderAndFooter"
import Title2 from "../components/Title2";
import getImageByKey from "../../util/getImageByKey";
import ImgPrice from "../components/ImgPrice";
import Button from "../components/Button";
import * as MB from "./MainBicycles.styles";
import { useEffect } from "react";

interface BicycleDetails {
  img: string;
  description: string;
}

interface Bicycle {
  variant: "dark" | "white";
  id: string;
  name: string;
  imgBicycle: string;
  imgAlt: string;
  description: string;
  value: string;
  details: BicycleDetails[];
}

function MainBicycles() {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, []);

  const bicycles: Bicycle[] =
    [{
      variant: "white",
      id: "nimbus",
      name: "Nimbus Stark",
      imgBicycle: "nimbus",
      imgAlt: "black bicycle",
      description: "Nimbus Stark is the best Bikcraft ever created by our team. It comes equipped with the best accessories, which ensures greater speed.",
      value: "$ 4999",
      details: [
        { img: "electric", description: "Electric Motor" },
        { img: "carbon", description: "Carbon Fiber" },
        { img: "speed", description: "50 km/h" },
        { img: "tracker", description: "Tracker" }
      ]
    },
    {
      variant: "dark",
      id: "magic",
      name: "Magic Might",
      imgBicycle: "magic",
      imgAlt: "black bicycle",
      description: "Magic Might is the best Bikcraft ever created by our team. It comes equipped with the best accessories, which ensures greater speed.",
      value: "$ 2499",
      details: [
        { img: "electric", description: "Electric Motor" }
      ]
      },
    {
      variant: "white",  
      id: "nebula",
      name: "Nebula Cosmic",
      imgBicycle: "nebula",
      imgAlt: "black bicycle",
      description: "Nebula Cosmic is the best Bikcraft ever created by our team. It comes equipped with the best accessories, which ensures greater speed.",
      value: "$ 3999",
      details: [
        { img: "electric", description: "Electric Motor" },
        { img: "speed", description: "50 km/h" }
      ]
      }];
  
  return (
    <MB.MainBicyclesContainer>
      <div className="main-bicycles-container__background">
        <div className="container__box">
          <p className="main-bicycles-container__title">choose the best one for you</p>
          <Title2 color="--color-0" font="--font-1-xxl" text="yours bicycles"  />
        </div>
      </div>

      { bicycles.map((bike, position) => {
        return (
          <MB.BicycleContainer variant={bike.variant} key={position}>
            <div className="main-bicycles-container__bicycles container__box">
              <ImgPrice alt="" img={bike.imgBicycle} price={bike.value} />
              <div className="main-bicycles-container__content">
                <h2 className="main-bicycles-container__h2">{bike.name}</h2>
                <p className="main-bicycles-container__p">{bike.description}</p>
                <ul className="main-bicycles-container__ul">
                  {bike.details.map((value, position) => {
                    return <li className="main-bicycles-container__li" key={position}><img className="main-bicycles-container__img" src={getImageByKey(value.img)} alt="" />{value.description}</li>
                  }) }
                </ul>
                <div className="main-bicycles-container__button" >
                  <Button hasArrow={true} href={bike.id} variant="gold" text="More about"  />
                </div>
              </div>
            </div>
          </MB.BicycleContainer>
        )
      }) }
    </MB.MainBicyclesContainer>
  )
}
export default withHeaderAndFooter(MainBicycles);