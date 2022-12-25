import React, { useState } from "react";
import styled from "styled-components";
import { setTokenSourceMapRange } from "typescript";
import MainLayout from "../layouts/MainLayout";
import Button from "../stories/Button/Button";
import Input from "../stories/Input/Input";

const Wrapper = styled.div`
  width: 100%;
  padding: 40px;
  display: flex;
  flex-direction: column;
`;

const Title = styled.div`
  font-weight: bold;
  font-size: 36px;
  padding-bottom: 16px;
  color: ${({ theme }) => theme.colors["marine-blue"]};
`;

const Paragraph = styled.div`
  color: ${({ theme }) => theme.colors["cool-gray"]};
  padding-bottom: 30px;
`;

const ButtonWrapper = styled.div`
  margin: 20px 0px 0px auto;
`;

const Content = styled.div`
  width: full;
  max-width: 450px;
  display: flex;
  flex-direction: column;
  gap: 28px;
`;

const PersonalInfo = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");

  return (
    <MainLayout>
      <Wrapper>
        <Title>Personal info</Title>
        <Paragraph>
          Please provide your name, email address, and phone number.
        </Paragraph>
        <Content>
          <div>
            <Input
              type="text"
              value={name}
              name="name"
              onChange={(evt: React.ChangeEvent<HTMLInputElement>) =>
                setName(evt.currentTarget.value)
              }
              placeholder="e.g. Stephen King"
              label="Name"
            />
          </div>

          <div>
            <Input
              type="email"
              value={email}
              name="email"
              onChange={(evt: React.ChangeEvent<HTMLInputElement>) =>
                setEmail(evt.currentTarget.value)
              }
              placeholder="e.g. stephenking@mail.com"
              label="Email Address"
            />
          </div>
          <div>
            <Input
              type="tel"
              value={phoneNumber}
              name="phone"
              onChange={(evt: React.ChangeEvent<HTMLInputElement>) =>
                setPhoneNumber(evt.currentTarget.value)
              }
              placeholder="e.g. +1 234 567 890"
              label="Phone Number"
            />
          </div>

          <ButtonWrapper>
            <Button variant="secondary" children="Next Step" size="md" />
          </ButtonWrapper>
        </Content>
      </Wrapper>
    </MainLayout>
  );
};

export default PersonalInfo;
