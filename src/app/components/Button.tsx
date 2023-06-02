import { Link } from "react-router-dom";
import styled from "styled-components";
import arrow from "../../img/icones/seta.svg";

export interface ButtonProps {
  text: string;
  href: string;
  variant: "silver" | "gold";
  hasArrow?: boolean;

}

export default function Button(props: ButtonProps) {
  return (
    <ButtonContainer hasArrow={props.hasArrow} urlArrow={arrow} variant={props.variant}>
      <Link to={props.href}>
        {props.text}
      </Link>
    </ButtonContainer>
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

const ButtonContainer = styled.div<{ variant: "silver" | "gold", hasArrow?: boolean | false, urlArrow?: string }>`
  a {
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
  }
  

  ${props => props.hasArrow && `
    a::after {
      content: '';
      display: inline-block;
      width: 18px;
      height: 10px;
      margin-left: 12px;
      background: url(${props.urlArrow});
      transition: transform 0.2s;
    }

    a:hover::after {
      transform: translateX(4px);
    }
  `}

  a:hover {
    ${props => THEME[props.variant].onHover};
  }

  @media (max-width: 600px) {
    a {
      padding: 12px 16px;
      font-size: 16px;  
    }
  }
`
