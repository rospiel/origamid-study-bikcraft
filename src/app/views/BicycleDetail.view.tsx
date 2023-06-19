import { useParams } from "react-router-dom";
import withHeaderAndFooter from "../../util/withHeaderAndFooter";
import Title2 from "../components/Title2";
import productsJson from "../../data/products.json";
import getImageByKey from "../../util/getImageByKey";
import Button from "../components/Button";
import Bicycles from "./Bicycles.view";
import { useEffect } from "react";
import * as BD from "./BicycleDetail.styles";
import { HeadProps } from "../../util/Head";

const head = {} as HeadProps;
head.title = "Bicycle Detail";
head.description = "Bicycle detail page"

export interface Product {
  id: string;
  name: string;
  description: string;
  deliveryTime: string;
  stock: string;
  price: string;
  imgBicycle: [
    {
      img: string;
      alt: string;
    }
  ];
  information: [
    {
      img: string;
      title: string;
      description: string;
    }
  ];
  factSheet: [
    {
      name: string;
      value: string;
    }
  ]
}

function BicycleDetail() {
  const params = useParams();
  const products = productsJson as Product[];
  const product: Product = products.find((p) => p.id === params.id) as Product;

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [params.id]);

  return (
    <>
      <BD.BicycleDetailContainer>
        { product &&
          <div>
            <div className="container__box">
              <p className="bicycle-detail-container__title">{product.price}</p>
              <Title2 color="--color-0" font="--font-1-xxl" text={product.name} />
            </div>
          </div>
        }
        
        { product &&
          <div className="bicycle-detail-container__detail container__box">
            <div className="bicycle-detail-container__images">
              { product.imgBicycle && product.imgBicycle.map((img, position) => {
                return <img className="bicycle-detail-container__img" key={position} src={getImageByKey(img.img) }alt={img.alt} />
              }) }
            </div>
            <div>
              <p className="bicycle-detail-container__description">{product.description}</p>
              <div className="bicycle-detail-container__buy">
                <div className="bicycle-detail-container__button">
                  <Button href="/budget" text="Buy Now" variant="gold" />
                </div>
                <span className="bicycle-detail-container__buy-details">
                  <img src={getImageByKey("delivery")} alt="" /> {product.deliveryTime}
                </span>
                <span className="bicycle-detail-container__buy-details">
                  <img src={getImageByKey("stock")} alt="" /> {product.stock}
                </span>
              </div>
            
              <h2 className="bicycle-detail-container__h2-information">Information</h2>
              <ul className="bicycle-detail-container__ul-information">
                { product.information && product.information.map((info, position) => {
                  return (
                    <li key={position}>
                      <img src={getImageByKey(info.img)} alt="" />
                      <h3 className="bicycle-detail-container__info-title">{info.title}</h3>
                      <p className="bicycle-detail-container__info-description">{info.description}</p>
                    </li>
                  )
                }) }
              </ul>

              <h2 className="bicycle-detail-container__h2-information">Technical Data Sheet</h2>
              <ul className="bicycle-detail-container__ul-technical">
                { product.factSheet && product.factSheet.map((fact, position) => {
                  return (
                    <li key={position}>
                      {fact.name} <span>{fact.value}</span>  
                    </li>
                  )
                }) }
              </ul>
            </div>
          </div>

          
        }
      </BD.BicycleDetailContainer>
      <Bicycles bicycleIgnoreId={params.id} />
      <BD.InsureContainer>
        <div className="insure-container__all container__box">
          <div className="insure-container__image">
            <img src={getImageByKey("insures")} alt="person standing on top of a bicycle" />
          </div>
          <div className="insure-container__content">
            <div className="insure-container__title">
              <Title2 font="--font-1-xxl" color="--color-0" text="ride easier with our insurance" /> 
            </div>
            <p className="insure-container__description">Sign up for one of our Bikcraft insurance plans and enjoy several benefits.</p>
            <Button href="/insurance" text="Know More" variant="gold" />
          </div>
        </div>
      </BD.InsureContainer>

    </>
  )
}

export default withHeaderAndFooter(BicycleDetail, head);