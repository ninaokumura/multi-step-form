import { ChangeEvent, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import styled from "styled-components";
import arcadeIcon from "../assets/icon-arcade.svg";
import advancedIcon from "../assets/icon-advanced.svg";
import proIcon from "../assets/icon-pro.svg";
import Card from "../components/Card/Card";
import MainLayout from "../layouts/MainLayout";
import Toggle from "../components/Toggle/Toggle";
import { SubscriptionType, useAppStateContainer } from "../contexts/AppContext";

const CARD_ITEMS = [
  {
    icon: arcadeIcon,
    title: "Arcade",
    monthlyPrice: "9",
    annualPrice: "90",
    path: "/select-plan/arcade",
  },

  {
    icon: advancedIcon,
    title: "Advanced",
    monthlyPrice: "12",
    annualPrice: "120",
    path: "/select-plan/advanced",
  },
  {
    icon: proIcon,
    title: "Pro",
    monthlyPrice: "15",
    annualPrice: "150",
    path: "/select-plan/pro",
  },
];

const ListWrapper = styled.ul`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
`;

const ListItem = styled.li`
  list-style: none;
`;

const Content = styled.div`
  max-width: 500px;
  width: full;
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

const ToggleWrapper = styled.div`
  max-width: 500px;
  background-color: ${({ theme }) => theme.colors["alabaster"]};
  padding: 12px 130px;
  margin-top: 20px;
  border-radius: 10px;
  display: flex;
  color: ${({ theme }) => theme.colors["cool-gray"]};
  font-size: 16px;
`;

const SelectPlan = () => {
  const context = useAppStateContainer();

  const [subscriptionType, setSubscriptionType] = useState<SubscriptionType>(
    context.subscriptionType
  );

  const navigate = useNavigate();

  const params = useParams();

  const selectedPlan = String(
    params.choice || context.selectedPlan.title.toLowerCase()
  );

  console.log(params.choice);

  const selectedPlanObject = CARD_ITEMS.find(
    (item) => item.title.toLowerCase() === selectedPlan
  );
  const isAnnual = subscriptionType === "yearly";

  const handlePreviousClick = () => {
    navigate({ pathname: "/personal-info" });
  };

  const handleNextClick = () => {
    context.setSelectedPlan({
      title: selectedPlan,
      price:
        (isAnnual
          ? selectedPlanObject?.annualPrice
          : selectedPlanObject?.monthlyPrice) ?? "",
    });
    context.setSubmitted(false);
    context.setSubscriptionType(subscriptionType);
    navigate({ pathname: "/add-ons" });
  };

  return (
    <MainLayout
      pageTitle="Select plan"
      pageDescription="You have the option of monthly or yearly billing."
      onNextClick={handleNextClick}
      onPreviousClick={handlePreviousClick}
    >
      <Content>
        <ListWrapper>
          {CARD_ITEMS.map((item) => (
            <ListItem key={item.title}>
              <Card
                src={item.icon}
                alt={item.title}
                plan={item.title}
                price={
                  !isAnnual
                    ? `$${item.monthlyPrice}/mo`
                    : `$${item.annualPrice}/yr`
                }
                onClick={() => navigate(item.path)}
                active={item.path.endsWith(selectedPlan)}
                message={isAnnual ? "2 months free" : ""}
                isAnnual={isAnnual}
              />
            </ListItem>
          ))}
        </ListWrapper>

        <ToggleWrapper>
          <div
            style={{
              color: !isAnnual ? "hsl(213, 96%,18%)" : "",
            }}
          >
            Monthly
          </div>
          <Toggle
            checked={isAnnual}
            onChange={(e: ChangeEvent<HTMLInputElement>) =>
              setSubscriptionType(e.target.checked ? "yearly" : "monthly")
            }
          />
          <div
            style={{
              color: isAnnual ? "hsl(213, 96%,18%)" : "",
            }}
          >
            Yearly
          </div>
        </ToggleWrapper>
      </Content>
    </MainLayout>
  );
};

export default SelectPlan;
