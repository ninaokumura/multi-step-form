import React from "react";
import styled from "styled-components";

type CardProps = {
  src: string;
  alt: string;
  plan: string;
  price: string;
  role?: string;
  onClick?: () => void;
};

const CardWrapper = styled.div`
  border: 1px solid ${({ theme }) => theme.colors["light-gray"]};
  font-family: ${({ theme }) => theme.fonts.ubuntu};
  height: 180px;
  border-radius: 10px;
  padding: 15px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 20px;

  :hover {
    outline: 1px solid ${({ theme }) => theme.colors["purplish-blue"]};
    transition: outline 0.1s linear;
  }
`;

const PlanTitle = styled.h4`
  font-weight: 600;
  color: ${({ theme }) => theme.colors["marine-blue"]};
  padding-bottom: 10px;
`;

const Price = styled.p`
  color: ${({ theme }) => theme.colors["cool-gray"]};
`;

const Card = (props: CardProps) => {
  return (
    <CardWrapper role="button" onClick={props.onClick}>
      <div>
        <img src={props.src} alt={props.alt} />
      </div>
      <div>
        <PlanTitle>{props.plan}</PlanTitle>
        <Price>{props.price}</Price>
      </div>
    </CardWrapper>
  );
};

export default Card;
