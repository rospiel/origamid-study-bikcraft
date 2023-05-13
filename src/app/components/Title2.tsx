import styled from "styled-components";

export interface Title2Props {
  text: string;
  color: string;
}

export default function Title2(props: Title2Props) {
  return (
    <Title2Container color={props.color}>
      {props.text}<span className="technology-container__dot">.</span>
    </Title2Container>
  )
}

const Title2Container = styled.h2<{color: string}>`
  font: var(--font-1-xxl);
  color: var(${props => props.color});
  margin-bottom: 32px;

  .technology-container__dot {
    color: var(--color-p1);
  }

  @media (max-width: 800px) {
    margin-bottom: 20px;
  }

`