import React from "react";
import styled from "styled-components";

type CardProps = {
  src: string;
  alt: string;
  plan: string;
  price: string;
};

const CardWrapper = styled.div`
  border: 1px solid ${({ theme }) => theme.colors["light-gray"]};
  font-family: ${({ theme }) => theme.fonts.ubuntu};
  max-width: 150px;
  height: 160px;
  border-radius: 10px;
  padding: 15px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 20px;
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
    <CardWrapper>
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
