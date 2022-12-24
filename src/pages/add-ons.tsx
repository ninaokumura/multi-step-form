import React from "react";
import MainLayout from "../layouts/MainLayout";
import styled from "styled-components";

type Props = {};

const Wrapper = styled.div`
  width: 100%;
`;

const AddOns = (props: Props) => {
  return (
    <MainLayout>
      <Wrapper>ADD ONS</Wrapper>
    </MainLayout>
  );
};

export default AddOns;
