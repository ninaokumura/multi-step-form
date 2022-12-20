import React, { ChangeEvent } from "react";
import styled from "styled-components";

type Props = {
  type: string;
  value: string;
  name: string;
  id: string;
  label: string;
  errorMessage: string;
  onChange: (evt: ChangeEvent) => void;
  placeholder: string;
};

const InputDefault = styled.input<{
  error?: boolean;
}>`
  border: none;
  outline: 1px solid
    ${({ theme, error }) =>
      theme.colors[error ? "strawberry-red" : "light-gray"]};
  border-radius: 4px;
  width: full;
  min-width: 400px;
  padding: 8px;
  &:focus {
    outline: 1px solid ${({ theme }) => theme.colors["pastel-blue"]};
  }
`;

const Label = styled.label`
  color: ${({ theme }) => theme.colors["marine-blue"]};
`;

const ErrorMessage = styled.div`
  color: ${({ theme }) => theme.colors["strawberry-red"]};
  font-weight: bold;
`;

const LabelContainer = styled.div`
  display: flex;
  gap: 260px;
  padding-bottom: 8px;
`;

const Input = (props: Props) => {
  return (
    <Label>
      <LabelContainer>
        <div>{props.label}</div>
        <ErrorMessage>{props.errorMessage}</ErrorMessage>
      </LabelContainer>

      <InputDefault
        type={props.type}
        value={props.value}
        name={props.name}
        id={props.id}
        onChange={props.onChange}
        error={Boolean(props.errorMessage)}
        placeholder={props.placeholder}
      />
    </Label>
  );
};

export default Input;
