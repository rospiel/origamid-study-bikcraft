import styled from "styled-components";
import topRight from "../../img/dec/top-right.svg";

export interface Title2Props {
  text: string;
  color: string;
  font: string;
}

export default function Title2(props: Title2Props) {
  return (
    <Title2Container color={props.color} font={props.font}>
      {props.text}<span className="technology-container__dot">.</span>
    </Title2Container>
  )
}

const Title2Container = styled.h2<{color: string, font: string}>`
  font: var(${props => props.font});
  color: var(${props => props.color});
  margin-bottom: 32px;
  background: url(${topRight}) no-repeat top right 20px;

  .technology-container__dot {
    color: var(--color-p1);
  }

  @media (max-width: 800px) {
    margin-bottom: 20px;
    font: var(--font-1-xl-800px);
  }

`