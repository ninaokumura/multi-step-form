import styled from "styled-components";
import Button from "../stories/Button/Button";
import desktopImg from "../assets/bg-sidebar-desktop.svg";

type Props = {};

const STEPS = [
  {
    id: 1,
    step: "Your info",
  },
  {
    id: 2,
    step: "Select plan",
  },
  {
    id: 3,
    step: "Add-ons",
  },
  {
    id: 4,
    step: "Summary",
  },
];

const Wrapper = styled.aside`
  padding: 20px;
  font-family: ${({ theme }) => theme.fonts.ubuntu};
  flex: 1;
  display: flex;
  flex-direction: column;
`;

const SidebarWrapper = styled.ul`
  padding: 40px;
  max-width: 400px;
  border-radius: 6px;
  background-image: url(${desktopImg});
  background-repeat: no-repeat;
  background-size: cover;
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 30px;
`;

const ListItems = styled.li`
  list-style: none;
  display: flex;
  align-items: flex-start;
  gap: 20px;
  color: ${({ theme }) => theme.colors["light-gray"]};
`;

const StepNumber = styled.div`
  padding-bottom: 8px;
  opacity: 0.6;
  text-transform: uppercase;
`;

const StepDescription = styled.div`
  font-weight: 600;
  font-size: 15px;
  text-transform: uppercase;
  letter-spacing: 0.8px;
`;

const Sidebar = (props: Props) => {
  return (
    <Wrapper>
      <SidebarWrapper>
        {STEPS.map((step) => (
          <ListItems key={step.id}>
            <Button
              shape="round"
              children={String(step.id)}
              onClick={() => null}
            />

            <div>
              <StepNumber>Step {step.id}</StepNumber>
              <StepDescription>{step.step}</StepDescription>
            </div>
          </ListItems>
        ))}
      </SidebarWrapper>
    </Wrapper>
  );
};

export default Sidebar;
