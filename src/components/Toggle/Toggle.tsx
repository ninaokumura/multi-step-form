import { ChangeEvent } from "react";
import styled, { css } from "styled-components";

type Props = {
  checked: boolean;
  onChange: (evt: ChangeEvent<HTMLInputElement>) => void;
};

const Label = styled.label`
  position: relative;
  display: inline-block;
  width: 48px;
  height: 24px;
  background-color: white;
  border-radius: 15px;
  left: 0;
  right: 0;
  margin: auto;
`;

const StyledInput = styled.input`
  position: absolute;
  opacity: 0;
  z-index: 1;
  border-radius: 15px;
  width: 20px;
  height: 10px;
`;

const CustomToggle = styled.div<{
  checked?: boolean;
}>`
  position: relative;
  width: 40px;
  height: 20px;
  background-color: ${({ theme }) => theme.colors["marine-blue"]};
  border-radius: 32px;

  &:before {
    content: "";
    position: absolute;
    width: 12px;
    height: 12px;
    border-radius: 35px;
    top: 50%;
    left: 4px;
    transition: all ease 0.3s;
    background-color: white;
    transform: ${(props) =>
      props.checked ? css`translate(150%, -50%)` : css`translate(0, -50%)`};
  }
`;

const Toggle = (props: Props) => {
  return (
    <Label>
      <StyledInput
        checked={props.checked}
        type="checkbox"
        onChange={props.onChange}
      />
      <CustomToggle checked={props.checked} />
    </Label>
  );
};

export default Toggle;
