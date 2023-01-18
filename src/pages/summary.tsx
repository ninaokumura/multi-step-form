import { Link, useNavigate } from "react-router-dom";
import styled from "styled-components";
import { useAppStateContainer } from "../contexts/AppContext";
import MainLayout from "../layouts/MainLayout";

const Wrapper = styled.div`
  font-family: ${({ theme }) => theme.fonts.ubuntu};
  background-color: ${({ theme }) => theme.colors["alabaster"]};
  gap: 80px;
  border-radius: 8px;
  padding: 20px;
  color: ${({ theme }) => theme.colors["marine-blue"]};
`;

const PlanSummary = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  gap: 8px;
  font-weight: 600;
  letter-spacing: 0.5px;
  border-bottom: 1px solid ${({ theme }) => theme.colors["light-gray"]};
`;

const TitleGap = styled.div`
  display: flex;
  gap: 4px;
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

const Addons = styled.li`
  display: flex;
  align-items: center;
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
  opacity: 0.8;
  font-weight: 600;
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

const ListItem = styled.div`
  padding: 12px 0 12px 0;
`;

const Summary = () => {
  const navigate = useNavigate();

  const handlePreviousClick = () => {
    navigate({ pathname: "/add-ons" });
  };

  const handleNextClick = () => {
    navigate({ pathname: "/confirmation" });
  };

  const context = useAppStateContainer();

  const planPrice = Number(context.selectedPlan.price);

  const addonsPriceArr = context.selectedAddons.map((addon) =>
    Number(addon.price)
  );

  function calculateSum(array: number[]) {
    return array.reduce(
      (accumulator: number, value: number) => accumulator + value,
      0
    );
  }

  const totalPlanPrice = calculateSum(addonsPriceArr) + planPrice;

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
              <TitleGap>
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
              </TitleGap>
              <LinkContainer>
                <ChangeLink to="/select-plan">Change</ChangeLink>
              </LinkContainer>
            </div>
            <Price>
              ${context.selectedPlan.price}/
              {context.subscriptionType === "monthly" ? "mo" : "yr"}
            </Price>
          </PlanSummary>
          <AddonsWrapper>
            <ul>
              {context.selectedAddons.map((addon) => (
                <Addons key={addon.title}>
                  <ListItem>{addon.title}</ListItem>

                  <AddonPrice>
                    +${addon.price}/
                    {context.subscriptionType === "monthly" ? "mo" : "yr"}
                  </AddonPrice>
                </Addons>
              ))}
            </ul>
          </AddonsWrapper>
        </Wrapper>

        <TotalWrapper>
          <TitleGap>
            <span>
              Total{" "}
              <span>
                (per {context.subscriptionType === "monthly" ? "month" : "year"}
                )
              </span>
            </span>
          </TitleGap>

          <TotalPrice>
            +${totalPlanPrice}/
            {context.subscriptionType === "monthly" ? "mo" : "yr"}
          </TotalPrice>
        </TotalWrapper>
      </>
    </MainLayout>
  );
};

export default Summary;
