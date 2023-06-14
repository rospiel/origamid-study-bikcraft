import styled from "styled-components";

export interface TechnologyItemDescription {
  srcImage: string;
  name: string;
  description: string;
}

export interface TechnologyItemProps {
  data: TechnologyItemDescription[];
}

export default function TechnologyItem(props: TechnologyItemProps) {
  return (
    <>
      {
        props.data.map((value, position) => {
          return (
            <TechnologyItemContainer key={position}>
              <img src={value.srcImage} alt="" width="24" height="24" />
              <h3 className="technology-item-container__h3">{value.name}</h3>
              <p className="technology-item-container__p">{value.description}</p>
            </TechnologyItemContainer>
          )
        })
      }
    </>
    )
}

const TechnologyItemContainer = styled.div`
  .technology-item-container__h3 {
    font: var(--font-1-m);
    color: var(--color-0);
    margin-bottom: 8px;
    width: max-content;
  }

  .technology-item-container__p {
    font: var(--font-2-s);
    color: var(--color-5);
  }
`