import React from "react";
import styled, { css } from "styled-components";

type CardProps = {
  src: string;
  alt: string;
  plan: string;
  price: string;
  role?: string;
  active?: boolean;
  onClick?: () => void;
  message?: string;
  isAnnual?: boolean;
};

const VARIANTS = {
  active: css`
    outline: 1px solid ${({ theme }) => theme.colors["purplish-blue"]};
    transition: outline 0.1s linear;
    background-color: ${({ theme }) => theme.colors.alabaster};
  `,
};

const CardWrapper = styled.div<{
  active?: boolean;
  isAnnual?: boolean;
}>`
  border: 1px solid ${({ theme }) => theme.colors["light-gray"]};
  font-family: ${({ theme }) => theme.fonts.ubuntu};
  height: ${(props) => (props.isAnnual ? "180px" : "160px")};
  border-radius: 10px;
  padding: 15px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 20px;
  ${(props) => (props.active ? VARIANTS.active : null)}

  :hover {
    ${VARIANTS.active}
  }
`;

const PlanTitle = styled.h4`
  font-weight: 500;
  color: ${({ theme }) => theme.colors["marine-blue"]};
  padding-bottom: 10px;
`;

const Price = styled.p`
  color: ${({ theme }) => theme.colors["cool-gray"]};
`;

const Message = styled.p`
  color: ${({ theme }) => theme.colors["marine-blue"]};
  opacity: 0.9;
  font-size: 12px;
  padding-top: 10px;
`;

const Card = (props: CardProps) => {
  return (
    <CardWrapper
      role="button"
      onClick={props.onClick}
      active={props.active}
      isAnnual={props.isAnnual}
    >
      <div>
        <img src={props.src} alt={props.alt} />
      </div>
      <div>
        <PlanTitle>{props.plan}</PlanTitle>
        <Price>{props.price}</Price>
        {props.isAnnual && <Message>{props.message}</Message>}
      </div>
    </CardWrapper>
  );
};

export default Card;
