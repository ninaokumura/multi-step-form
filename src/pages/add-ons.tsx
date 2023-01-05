import { useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import CheckboxCard from "../components/CheckboxCard";
import MainLayout from "../layouts/MainLayout";

type Props = {};

const ADD_ONS = [
  {
    title: "Online service",
    description: "Access to multiplayer games",
    pricePerMonth: "+$1/mo",
    pricePerYear: "+10/yr",
  },
  {
    title: "Larger storage",
    description: "Extra 1TB of cloud save",
    pricePerMonth: "+$2/mo",
    pricePerYear: "+20/yr",
  },
  {
    title: "Customizable profile",
    description: "Custom theme on your profile",
    pricePerMonth: "+$2/mo",
    pricePerYear: "+20/yr",
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
const AddOns = (props: Props) => {
  const [selectedOptions, setSelectedOptions] = useState<string[]>([]);

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
                title={addOn.title}
                description={addOn.description}
                price={addOn.pricePerMonth}
              />
            </ListItem>
          ))}
        </ListContainer>
      </Wrapper>
    </MainLayout>
  );
};

export default AddOns;
