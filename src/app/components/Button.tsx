import styled from "styled-components";

export interface ButtonProps {
  text: string;
  href: string;
}

export default function Button(props: ButtonProps) {
  return (
    <ButtonContainer href={props.href}>{props.text}</ButtonContainer>
  )
}

const ButtonContainer = styled.a`
  display: inline-block;
  padding: 16px 32px;
  background: linear-gradient(#ffbf00, #f2a50c);
  border-radius: 4px;
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.1);
  text-transform: uppercase;
  color: #332288;
  font-size: 18px;
  line-height: 1.33;
  font-family: "Poppins";
  font-weight: 600;

  :hover {
    background: linear-gradient(#ffb60d, #e59317);
  }

  @media (max-width: 600px) {
    padding: 12px 16px;
    font-size: 16px;
  }
`
