import React from "react";
import styled from "styled-components";
import MainLayout from "../layouts/MainLayout";

type Props = {};

const Wrapper = styled.div`
  width: 100%;
`;

const Summary = (props: Props) => {
  return (
    <MainLayout>
      <Wrapper>summary</Wrapper>
    </MainLayout>
  );
};

export default Summary;
