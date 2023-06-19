import { Link } from "react-router-dom";
import styled from "styled-components";

export interface RedirectProps {
  href: string;
  text: string;
}

export default function Redirect(props: RedirectProps) {
  return (
    <LinkContainer to={props.href}>{props.text}</LinkContainer>
  )
}

const LinkContainer = styled(Link)`
  display: inline-block;
  color: var(--color-p1);
  font: 500 1.5rem/1.5 var(--font-1);
  text-transform: uppercase;

  ::after {
    content: "";
    display: block;
    width: 100%;
    height: 4px;
    background-color: currentColor;
  }

  :hover {
    color: var(--color-0);
  }
`