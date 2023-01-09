import { useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import CheckboxCard from "../components/CheckboxCard";
import { useAppStateContainer } from "../contexts/AppContext";
import MainLayout from "../layouts/MainLayout";

const ADD_ONS = [
  {
    title: "Online service",
    description: "Access to multiplayer games",
    pricePerMonth: "1",
    pricePerYear: "10",
  },
  {
    title: "Larger storage",
    description: "Extra 1TB of cloud save",
    pricePerMonth: "2",
    pricePerYear: "20",
  },
  {
    title: "Customizable profile",
    description: "Custom theme on your profile",
    pricePerMonth: "2",
    pricePerYear: "20",
  },
];

const Wrapper = styled.div`
  width: 100%;
`;

const ListItem = styled.li`
  list-style: none;
`;

const ListContainer = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;
const AddOns = () => {
  console.log(AddOns);
  const [selectedOptions, setSelectedOptions] = useState<string[]>([]);

  const context = useAppStateContainer();

  const navigate = useNavigate();

  const handlePreviousClick = () => {
    navigate({ pathname: "/select-plan" });
  };

  const selectedAddons = selectedOptions
    .map((option) => ADD_ONS.find((addon) => addon.title === option))
    .map((option) => ({
      title: option?.title ?? "",
      price:
        (context.subscriptionType === "yearly"
          ? option?.pricePerYear
          : option?.pricePerMonth) ?? "",
    }));

  const handleNextClick = () => {
    context.setSelectedAddons(selectedAddons);
    navigate({ pathname: "/summary" });
  };

  return (
    <MainLayout
      pageTitle="Pick add-ons"
      pageDescription="Add-ons help enhance your gaming experience."
      onNextClick={handleNextClick}
      onPreviousClick={handlePreviousClick}
    >
      <Wrapper>
        <ListContainer>
          {ADD_ONS.map((addOn) => (
            <ListItem key={addOn.title}>
              <CheckboxCard
                checked={selectedOptions.includes(addOn.title)}
                value={addOn.title}
                onChange={(evt) =>
                  setSelectedOptions((prev) =>
                    evt.target.checked
                      ? prev.concat(addOn.title)
                      : prev.filter((option) => option !== addOn.title)
                  )
                }
                active={selectedOptions.includes(addOn.title)}
                title={addOn.title}
                description={addOn.description}
                price={
                  context.subscriptionType === "monthly"
                    ? `+$${addOn.pricePerMonth}/mo`
                    : `+$${addOn.pricePerYear}/yr`
                }
              />
            </ListItem>
          ))}
        </ListContainer>
      </Wrapper>
    </MainLayout>
  );
};

export default AddOns;
