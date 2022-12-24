import React from "react";
import MainLayout from "../layouts/MainLayout";
import styled from "styled-components";

type Props = {};

const Wrapper = styled.div`
  width: 100%;
`;

const SelectPlan = (props: Props) => {
  return (
    <MainLayout>
      <Wrapper>select-plan</Wrapper>
    </MainLayout>
  );
};

export default SelectPlan;
