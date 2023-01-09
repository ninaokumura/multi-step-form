import { Link, useNavigate } from "react-router-dom";
import styled from "styled-components";
import { useAppStateContainer } from "../contexts/AppContext";
import MainLayout from "../layouts/MainLayout";

type Props = {};

const Wrapper = styled.div`
  font-family: ${({ theme }) => theme.fonts.ubuntu};
  background-color: ${({ theme }) => theme.colors["alabaster"]};
  gap: 80px;
  border-radius: 8px;
  padding: 20px;
`;

const PlanSummary = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  gap: 8px;
  color: ${({ theme }) => theme.colors["marine-blue"]};
  font-weight: 600;
  letter-spacing: 0.5px;
  border-bottom: 1px solid ${({ theme }) => theme.colors["light-gray"]};
`;

const Price = styled.div`
  color: ${({ theme }) => theme.colors["marine-blue"]};
  font-weight: 600;
  font-size: 15px;
`;

const LinkContainer = styled.div`
  padding-bottom: 20px;
`;

const ChangeLink = styled(Link)`
  color: ${({ theme }) => theme.colors["cool-gray"]};
  font-size: 13px;
`;

const Addons = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  color: ${({ theme }) => theme.colors["cool-gray"]};
  font-size: 14px;
`;

const AddonsWrapper = styled.div`
  padding-top: 20px;
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

const AddonPrice = styled.div`
  color: ${({ theme }) => theme.colors["marine-blue"]};
  font-weight: 500;
`;

const TotalWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 20px;
  color: ${({ theme }) => theme.colors["cool-gray"]};
  font-size: 14px;
`;

const TotalPrice = styled.span`
  color: ${({ theme }) => theme.colors["purplish-blue"]};
  font-size: 18px;
  font-weight: 600;
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
      <>
        <Wrapper>
          <PlanSummary>
            <div>
              <span>
                {context.selectedPlan.title.charAt(0).toLocaleUpperCase() +
                  context.selectedPlan.title.slice(1).toLowerCase()}
              </span>

              <span>
                (
                {context.subscriptionType.charAt(0).toLocaleUpperCase() +
                  context.subscriptionType.slice(1).toLowerCase()}
                )
              </span>
              <LinkContainer>
                <ChangeLink to="/select-plan">Change</ChangeLink>
              </LinkContainer>
            </div>
            <Price>{context.selectedPlan.price}</Price>
          </PlanSummary>
          <AddonsWrapper>
            {context.selectedAddons.map((addon) => (
              <Addons>
                <div>{addon.title}</div>
                <AddonPrice>{addon.price}</AddonPrice>
              </Addons>
            ))}
          </AddonsWrapper>
        </Wrapper>
        <TotalWrapper>
          <span>Total({context.subscriptionType})</span>
          <TotalPrice>price/yr</TotalPrice>
        </TotalWrapper>
      </>
    </MainLayout>
  );
};

export default Summary;
