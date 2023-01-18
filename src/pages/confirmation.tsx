import React from "react";
import styled from "styled-components";
import ConfirmationIcon from "../components/Icons/ConfirmationIcon";
import MainLayout from "../layouts/MainLayout";

type Props = {};

const Wrapper = styled.div`
  min-width: 500px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: 350px;
`;

const Title = styled.h1`
  text-align: center;
  color: ${({ theme }) => theme.colors["marine-blue"]};
`;

const Paragraph = styled.p`
  text-align: center;
  color: ${({ theme }) => theme.colors["cool-gray"]};
  letter-spacing: 0.3px;
  line-height: 28px;
`;

const Confirmation = (props: Props) => {
  return (
    <MainLayout hideButtons={true}>
      <Wrapper>
        <ConfirmationIcon />
        <div>
          <Title>Thank you</Title>
          <Paragraph>
            Thanks for confirming your subscription! We hope you have fun using
            our platform. If you ever need support, please feel free to email us
            at support@multistepform.com
          </Paragraph>
        </div>
      </Wrapper>
    </MainLayout>
  );
};

export default Confirmation;
