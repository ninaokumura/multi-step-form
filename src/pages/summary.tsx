import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { useAppStateContainer } from "../contexts/AppContext";
import MainLayout from "../layouts/MainLayout";

type Props = {};

const Wrapper = styled.div`
  width: 100%;
`;

const Summary = (props: Props) => {
  const navigate = useNavigate();

  const handlePreviousClick = () => {
    navigate({ pathname: "/add-ons" });
  };

  const handleNextClick = () => {
    navigate({ pathname: "/summary" });
  };

  const context = useAppStateContainer();

  return (
    <MainLayout
      pageTitle="Finishing up"
      pageDescription="Double-check everything looks OK before confirming."
      onNextClick={handleNextClick}
      onPreviousClick={handlePreviousClick}
      nextButtonType="confirm"
    >
      <Wrapper>Summary</Wrapper>
    </MainLayout>
  );
};

export default Summary;
