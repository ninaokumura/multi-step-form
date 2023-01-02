import React, { useState } from "react";
import MainLayout from "../layouts/MainLayout";
import styled from "styled-components";
import arcadeIcon from "../assets/icon-arcade.svg";
import advancedIcon from "../assets/icon-advanced.svg";
import proIcon from "../assets/icon-pro.svg";
import Card from "../stories/Card/Card";
import Button from "../stories/Button/Button";
import { useNavigate, useParams } from "react-router-dom";
import Toggle from "../components/Toggle";

type Props = {};

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

const Wrapper = styled.div`
  width: 100%;
  padding: 40px;
  display: flex;
  flex-direction: column;
  font-family: ${({ theme }) => theme.fonts.ubuntu};
  font-weight: 600;
`;

const Title = styled.div`
  font-weight: bold;
  font-size: 36px;
  padding-bottom: 16px;
  color: ${({ theme }) => theme.colors["marine-blue"]};
`;

const Paragraph = styled.div`
  color: ${({ theme }) => theme.colors["cool-gray"]};
  padding-bottom: 30px;
`;

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
  gap: 8px;
`;

const ButtonWrapper = styled.div`
  display: flex;
  flex-direction: row-reverse;
  justify-content: space-between;
  padding-top: 80px;
`;

const ToggleWrapper = styled.div`
  background-color: ${({ theme }) => theme.colors["alabaster"]};
  padding: 12px 130px;
  margin-top: 20px;
  border-radius: 10px;
  display: flex;
  align-items: center;
  color: ${({ theme }) => theme.colors["cool-gray"]};
  font-size: 16px;
`;

const SelectPlan = (props: Props) => {
  const [checked, setChecked] = useState(false);

  const navigate = useNavigate();

  const params = useParams();

  const GoBackClickHandler = () => {
    navigate({ pathname: "/personal-info" });
  };

  const GoNextClickHandler = () => {
    navigate({ pathname: "/add-ons" });
  };

  return (
    <MainLayout>
      <Wrapper>
        <Title>Select your plan</Title>
        <Paragraph>
          You have the option of monthly or yearly billing.{" "}
        </Paragraph>
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

          <ButtonWrapper>
            <Button
              variant="secondary"
              children="Next Step"
              size="md"
              onClick={GoNextClickHandler}
              color="default"
            />
            <Button
              variant="primary"
              children="Go Back"
              size="md"
              onClick={GoBackClickHandler}
              color="back"
            />
          </ButtonWrapper>
        </Content>
      </Wrapper>
    </MainLayout>
  );
};

export default SelectPlan;
