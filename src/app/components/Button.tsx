import styled from "styled-components";

export interface ButtonProps {
  text: string;
  href: string;
  variant: "silver" | "gold"
}

export default function Button(props: ButtonProps) {
  return (
    <ButtonContainer variant={props.variant} href={props.href}>{props.text}</ButtonContainer>
  )
}

const THEME = {
  silver: {
    background: `var(--color-10)`, 
    color: `var(--color-2)`,
    onHover: `background: var(--color-9)`
  }, 
  gold: {
    background: `linear-gradient(#ffbf00, #f2a50c)`, 
    color: "#332288",
    onHover: `background: linear-gradient(#ffb60d, #e59317)`
  }
}

const ButtonContainer = styled.a<{ variant: "silver" | "gold" }>`
  display: inline-block;
  padding: 16px 32px;
  background: ${props => THEME[props.variant].background};
  border-radius: 4px;
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.1);
  text-transform: uppercase;
  color: ${props => THEME[props.variant].color};
  font-size: 18px;
  line-height: 1.33;
  font-family: var(--font-1);
  font-weight: 600;
  max-width: max-content;

  :hover {
    ${props => THEME[props.variant].onHover};
  }

  @media (max-width: 600px) {
    padding: 12px 16px;
    font-size: 16px;
  }
`
