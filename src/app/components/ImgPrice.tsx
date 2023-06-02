import styled from "styled-components";
import getImageByKey from "../../util/getImageByKey";

interface ImgPriceProps {
  img: string;
  alt: string;
  price: string;
}

export default function ImgPrice(props: ImgPriceProps) {
  return (
    <ImgPrinceContainer>
      <img className="img-price-container__img" src={getImageByKey(props.img)} alt={props.alt} />
      <span className="img-price-container__value">{props.price}</span>
    </ImgPrinceContainer>
  )
}

const ImgPrinceContainer = styled.div`
  display: grid;

  .img-price-container__img {
    grid-area: 1/1;
  }

  .img-price-container__value {
    grid-area: 1/1;
    place-self: start end;
    margin-top: 20px;
    font: var(--font-2-m);
    color: var(--color-0);
    background: var(--color-12);
    display: inline-block;
    padding: 8px 16px 8px 8px;
    border-radius: 4px 0 0 4px;
  }

`