import styled from "styled-components";

export interface LinkProps {
  href: string;
  text: string;
}

export default function Link(props: LinkProps) {
  return (
    <LinkContainer href={props.href}>{props.text}</LinkContainer>
  )
}

const LinkContainer = styled.a`
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