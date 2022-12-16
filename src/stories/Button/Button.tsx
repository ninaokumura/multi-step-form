import React from "react";
import styled, { css } from "styled-components";

type ButtonProps = {
  onClick: () => void;
  children: string;
  variant?: "primary" | "secondary";
  size?: "sm" | "md";
  shape?: "round";
};

const VARIANTS = {
  primary: css`
    padding: 15px 30px;
    border-radius: 10px;
    border: none;
    color: ${({ theme }) => theme.colors["marine-blue"]};
    background-color: transparent;
    font-family: ${({ theme }) => theme.fonts.ubuntu};
    font-size: 15px;
    text-align: center;
  `,
  secondary: css`
    padding: 15px 30px;
    border-radius: 10px;
    border: none;
    color: ${({ theme }) => theme.colors["white"]};
    background-color: ${({ theme }) => theme.colors["marine-blue"]};
    font-family: ${({ theme }) => theme.fonts.ubuntu};
    font-size: 15px;
    text-align: center;
  `,
};

const SHAPE = {
  round: css`
    padding: 0px;
    border-radius: 100%;
    width: 50px;
    height: 50px;
    color: ${({ theme }) => theme.colors["marine-blue"]};
    border: 1px solid ${({ theme }) => theme.colors["purplish-blue"]};
  `,
};

const StyledButton = styled.button<ButtonProps>`
  ${(props) => VARIANTS[props.variant ?? "primary"]};
  ${(props) => (props.shape ? SHAPE[props.shape] : null)};
`;

const Button = (props: ButtonProps) => {
  return (
    <StyledButton
      onClick={props.onClick}
      variant={props.variant}
      shape={props.shape}
    >
      {props.children}
    </StyledButton>
  );
};

export default Button;
