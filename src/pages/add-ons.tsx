import { useNavigate } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import styled from "styled-components";

type Props = {};

const Wrapper = styled.div`
  width: 100%;
`;

const AddOns = (props: Props) => {
  const navigate = useNavigate();

  const handlePreviousClick = () => {
    navigate({ pathname: "/select-plan" });
  };

  const handleNextClick = () => {
    navigate({ pathname: "/summary" });
  };
  return (
    <MainLayout
      pageTitle="Pick add-ons"
      pageDescription="Add-ons help enhance your gaming experience."
      onNextClick={handleNextClick}
      onPreviousClick={handlePreviousClick}
    >
      <Wrapper>ADD ONS</Wrapper>
    </MainLayout>
  );
};

export default AddOns;
