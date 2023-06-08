import styled from "styled-components";

export interface InputProps {
  label: string;
  type: string;
  idInput: string
  nameInput: string;
  placeholder?: string;
}

export default function Input(props: InputProps) {
  return (
    <InputContainer>
      <label className="input-container__label" htmlFor={props.idInput}>{props.label}</label>
      <input className="input-container__input" type={props.type} id={props.idInput} name={props.nameInput} placeholder={props.placeholder} />
    </InputContainer> 
  )
}

const InputContainer = styled.div`
  .input-container__label {
    display: block;
    font: 600 1rem/1.5 var(--font-1), var(--font-default);
    margin-bottom: 4px;
  }

  .input-container__input {
    font: 400 1rem/1.5 var(--font-2), var(--font-default);
    background: var(--color-1);
    border: 1px solid var(--color-2);
    padding: 12px;
    border-radius: 4px;
    width: 100%;
    box-sizing: border-box;
  }

  .input-container__input::-webkit-outer-spin-button,
  .input-container__input::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }

  input[type=number] {
    -moz-appearance: textfield;
  }

  .input-container__input:focus {
    outline: none;
    border-color: var(--color-p1);
    background: var(--color-0);
    box-shadow: 8 0 0 2px var(--color-13);
  }
  
`