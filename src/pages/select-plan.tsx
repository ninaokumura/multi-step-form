import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import styled from "styled-components";
import arcadeIcon from "../assets/icon-arcade.svg";
import advancedIcon from "../assets/icon-advanced.svg";
import proIcon from "../assets/icon-pro.svg";
import Card from "../stories/Card/Card";
import MainLayout from "../layouts/MainLayout";
import Toggle from "../components/Toggle";

const CARD_ITEMS = [
  {
    icon: arcadeIcon,
    title: "Arcade",
    monthlyPrice: "$9/mo",
    annualPrice: "$90/yr",
    path: "/select-plan/arcade",
  },

  {
    icon: advancedIcon,
    title: "Advanced",
    monthlyPrice: "$12/mo",
    annualPrice: "$120/yr",
    path: "/select-plan/advanced",
  },
  {
    icon: proIcon,
    title: "Pro",
    monthlyPrice: "$15/mo",
    annualPrice: "$150/yr",
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
  const [checked, setChecked] = useState(false);

  const navigate = useNavigate();

  const params = useParams();

  const handlePreviousClick = () => {
    navigate({ pathname: "/personal-info" });
  };

  const handleNextClick = () => {
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
                price={!checked ? item.monthlyPrice : item.annualPrice}
                onClick={() => navigate(item.path)}
                active={item.path.endsWith(params.choice ?? "none")}
                message={checked ? "2 months free" : ""}
                isAnnual={checked}
              />
            </ListItem>
          ))}
        </ListWrapper>

        <ToggleWrapper>
          <div
            style={{
              color: !checked ? "hsl(213, 96%,18%)" : "",
            }}
          >
            Monthly
          </div>
          <Toggle
            checked={checked}
            onChange={(e) => setChecked(e.target.checked)}
          />
          <div
            style={{
              color: checked ? "hsl(213, 96%,18%)" : "",
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
