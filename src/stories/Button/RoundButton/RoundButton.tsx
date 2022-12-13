import React from "react";
import styled from "styled-components";

type RoundButtonProps = {
  onClick: () => void;
  children: string;
};

const Button = styled.button`
  width: 50px;
  height: 50px;
  border-radius: 100%;
  color: ${({ theme }) => theme.colors["white"]};
  border: none;
  background-color: transparent;
  outline: 2px solid ${({ theme }) => theme.colors["white"]};
`;

const RoundButton = (props: RoundButtonProps) => {
  return <Button onClick={props.onClick}>{props.children}</Button>;
};

export default RoundButton;
