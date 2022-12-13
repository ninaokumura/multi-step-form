import React from "react";
import styled from "styled-components";

type NextButtonProps = {
  onClick: () => void;
  children: string;
};

const Button = styled.button`
  padding: 15px 40px 15px 40px;
  border-radius: 10px;
  color: ${({ theme }) => theme.colors["white"]};
  border: none;
  background-color: ${({ theme }) => theme.colors["marine-blue"]};
  font-family: ${({ theme }) => theme.fonts.ubuntu};
  font-size: 20px;
`;

const NextButton = (props: NextButtonProps) => {
  return <Button onClick={props.onClick}>{props.children}</Button>;
};

export default NextButton;
