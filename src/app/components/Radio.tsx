import React, { ReactNode } from "react";
import styled from "styled-components";

export interface RadioProps {
  name: string;
  options: [
    {
      value: string;
      id: string;
      children: ReactNode;
    }
  ]
}

export default function Radio(props: RadioProps) {
  return (
    <>
      { props.options.map((option, position) => {
        return (
          <React.Fragment key={position}>
            <InputRadio type="radio" name={props.name} value={option.value} id={option.id} />
            <Label htmlFor={option.id}>{option.children}</Label>
          </React.Fragment>
        )
      }) }
    </>
  )
}

const InputRadio = styled.input`
  opacity: 0;
  position: absolute;
  pointer-events: none;

  :focus + label {
    box-shadow:  0 0 0 2px var(--color-p1);
    border-color: var(--color-12);
  }

  :checked + label::before {
    border-color: var(--color-7);
    box-shadow: inset 0 0 0 3px var(--color-0), inset 0 0 0 6px var(--color-7);
  }

  :checked + label {
    background: var(--color-0);
    color: var(--color-11);
  }
`

const Label = styled.label`
  color: var(--color-4);
  background-color: var(--color-10);
  font: 400 1rem/1.5 var(--font-1), var(--font-default);
  display: grid;
  grid-template-columns: auto 1fr auto;
  align-items: center;
  padding: 12px 16px;
  border-radius: 4px;
  cursor: pointer;
  border: 1px solid var(--color-10);

  :hover {
    background-color: var(--color-9);
    border-color: var(--color-9);
  }

  ::before {
    content: "";
    display: inline-block;
    box-sizing: border-box;
    width: 12px;
    height: 12px;
    border: 1px solid var(--color-6);
    border-radius: 50%;
    margin-right: 8px;
  }
`