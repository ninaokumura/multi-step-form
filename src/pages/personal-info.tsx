import React from "react";
import styled from "styled-components";
import MainLayout from "../layouts/MainLayout";
import Input from "../stories/Input/Input";

type Props = {};

const Wrapper = styled.div`
  width: 100%;
`;

const PersonalInfo = (props: Props) => {
  return (
    <MainLayout>
      <Wrapper>
        <h1>Personal info</h1>
        <p>Please provide your name, email address, and phone number.</p>
        <div>
          <Input
            type="text"
            value=""
            name="name"
            onChange={() => null}
            placeholder="e.g. Stephen King"
            label="Name"
          />
        </div>
      </Wrapper>
    </MainLayout>
  );
};

export default PersonalInfo;
