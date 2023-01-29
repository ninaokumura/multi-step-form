import React from "react";
import styled, { css } from "styled-components";

type ButtonProps = {
  onClick?: () => void;
  children: string;
  variant?: "primary" | "secondary";
  size?: "sm" | "md";
  shape?: "round";
  color: "default" | "active" | "back" | "confirm";
  disabled?: boolean;
};

const VARIANTS = {
  primary: css`
    border-radius: 10px;
    padding: 15px 0px;

    border: none;
    color: ${({ theme }) => theme.colors["marine-blue"]};
    background-color: transparent;
    font-family: ${({ theme }) => theme.fonts.ubuntu};
    font-size: 15px;
    text-align: center;
    font-weight: bold;
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
    width: 40px;
    height: 40px;
    font-weight: bold;
    border: 1px solid ${({ theme }) => theme.colors["light-gray"]};
  `,
};

const COLOR = {
  default: css`
    color: ${({ theme }) => theme.colors["light-gray"]};
  `,
  active: css`
    background-color: ${({ theme }) => theme.colors["light-blue"]};
    color: ${({ theme }) => theme.colors["marine-blue"]};
  `,
  back: css`
    background-color: transparent;
    color: ${({ theme }) => theme.colors["marine-blue"]};
  `,
  confirm: css`
    background-color: ${({ theme }) => theme.colors["purplish-blue"]};
  `,
};

const StyledButton = styled.button<ButtonProps>`
  cursor: pointer;
  &:hover {
    opacity: 0.8;
  }
  ${(props) => VARIANTS[props.variant ?? "primary"]};
  ${(props) => (props.shape ? SHAPE[props.shape] : null)};
  ${(props) => (props.color ? COLOR[props.color] : undefined)}
`;

const Button = (props: ButtonProps) => {
  return (
    <StyledButton
      onClick={props.onClick}
      variant={props.variant}
      shape={props.shape}
      color={props.color}
      disabled={props.disabled}
    >
      {props.children}
    </StyledButton>
  );
};

export default Button;
