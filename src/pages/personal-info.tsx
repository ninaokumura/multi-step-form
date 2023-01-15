import React, { useState } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import Input from "../components/Input/Input";

const FormContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 28px;
`;

const PersonalInfo = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");

  const navigate = useNavigate();

  const handleNextClick = () => {
    navigate({ pathname: "/select-plan" });
  };

  return (
    <MainLayout
      pageTitle="Personal info"
      pageDescription="Please provide your name, email address, and phone number."
      onNextClick={handleNextClick}
      hidePreviousButton
    >
      <FormContent>
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
      </FormContent>
    </MainLayout>
  );
};

export default PersonalInfo;
