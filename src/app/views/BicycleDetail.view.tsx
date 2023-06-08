import { useParams } from "react-router-dom";
import styled from "styled-components";
import withHeaderAndFooter from "../../util/withHeaderAndFooter";
import Title2 from "../components/Title2";
import productsJson from "../../data/products.json";
import getImageByKey from "../../util/getImageByKey";
import Button from "../components/Button";
import Bicycles from "./Bicycles.view";
import { useEffect } from "react";
import * as BD from "./BicycleDetail.styles";

interface Product {
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
          <div className="bicycle-detail-container__background">
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
            <div className="bicycle-detail-container__content">
              <p className="bicycle-detail-container__description">{product.description}</p>
              <div className="bicycle-detail-container__buy">
                <div className="bicycle-detail-container__button">
                  <Button href="#" text="Buy Now" variant="gold" />
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

const BicycleDetailContainer = styled.main`
  padding-top: 60px;
  padding-bottom: 60px;
  background-color: var(--color-11);

  .bicycle-detail-container__background {
    
  }

  .bicycle-detail-container__title {
    font: var(--font-2-xl);
    color: var(--color-5);
  }

  .bicycle-detail-container__detail {
    display: grid;
    grid-template-columns: 1fr 1fr;
    align-items: flex-start;
    gap: 40px;
    padding-top: 60px;
    padding-bottom: 60px;
  }

  .bicycle-detail-container__images {
    display: flex;
    flex-wrap: wrap;
    gap: 20px;
  }

  .bicycle-detail-container__img {
    flex: 1;
    min-width: 200px; /* allow decrease size until, otherwise flex 1 */
  } 

  .bicycle-detail-container__img:first-child {
    min-width: 100%; /* just the others images min width 200px */
  }

  .bicycle-detail-container__content {

  }

  .bicycle-detail-container__description {
    font: var(--font-2-l);
    color: var(--color-5);
    margin-bottom: 32px;
  }

  .bicycle-detail-container__buy {
    display: grid;
    grid-template-columns: max-content auto;
    align-items: center;
    justify-items: start;
    gap: 8px 12px;
    margin-bottom: 40px;
  }

  .bicycle-detail-container__button {
    grid-row: span 2;
  }

  .bicycle-detail-container__buy-details {
    font: var(--font-1-xs);
    color: var(--color-6);
    display: flex;
    align-items: center;
    background-color: var(--color-12);
    gap: 8px;
    padding: 4px 8px;
    border-radius: 4px;
    
  }

  .bicycle-detail-container__h2-information {
    font: var(--font-1-xs);
    color: var(--color-0);
    text-transform: uppercase;
    letter-spacing: 0.015em;
    margin-bottom: 12px;
  }

  .bicycle-detail-container__ul-technical, 
  .bicycle-detail-container__ul-information {
    padding: 32px;
    background-color: var(--color-12);
    border-radius: 4px;
  }

  .bicycle-detail-container__ul-technical {
    font: var(--font-2-s);
    color: var(--color-4);
  }

  .bicycle-detail-container__ul-technical li {
    padding: 4px 0;
    display: flex;
    justify-content: space-between;
    border-bottom: 1px solid var(--color-11);
  }

  .bicycle-detail-container__ul-technical li:last-child {
    border-bottom: none;
  }

  .bicycle-detail-container__ul-technical span {
    color: var(--color-6);
  }

  .bicycle-detail-container__ul-information {
    margin-bottom: 40px;
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 32px;
  }

  .bicycle-detail-container__ul-information img {
    width: 24px;
    margin-bottom: 8px;
  }

  .bicycle-detail-container__info-title {
    font: var(--font-1-m);
    color: var(--color-0);
    margin-bottom: 8px;
  }

  .bicycle-detail-container__info-description {
    font: var(--font-2-xs);
    color: var(--color-5);
  }

  @media (max-width: 800px) {
    .bicycle-detail-container__detail {
      grid-template-columns: 1fr;
      padding-top: 40px;
      padding-bottom: 40px;
    }

    .bicycle-detail-container__images { 
      grid-row: 2;
    }
  }

  @media (max-width: 400px) { 
    .bicycle-detail-container__ul-information {
      grid-template-columns: 1fr;
    }

    .bicycle-detail-container__buy { 
      grid-template-columns: 1fr;
    }
  }
  
`

const InsureContainer = styled.article`
  background-color: var(--color-11);
  box-shadow: inset 0 120px var(--color-0), inset 0 -120px var(--color-12);

  .insure-container__all {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 40px;
  }

  .insure-container__image {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  .insure-container__content {
    padding-top: 180px;
    padding-bottom: 180px;
  }

  .insure-container__title {
    margin-bottom: 32px;
  }

  .insure-container__description {
    font: var(--font-2-l);
    color: var(--color-5);
    margin-bottom: 20px;
  }

  @media (max-width: 800px) {
    box-shadow: inset 0 -60px var(--color-12);

    .insure-container__all { 
      grid-template-columns: 1fr;
    }

    .insure-container__content { 
      grid-row: 1;
      padding-top: 40px;
      padding-bottom: 0px;
    }
  }

`

export default withHeaderAndFooter(BicycleDetail);