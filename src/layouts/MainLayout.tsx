import styled from "styled-components";
import Button from "../components/Button/Button";
import desktopImg from "../assets/bg-sidebar-desktop.svg";
import { Link, useLocation } from "react-router-dom";

type Props = {
  children: React.ReactElement | string;
  pageTitle: string;
  pageDescription: string;
  onNextClick?: () => void;
  onPreviousClick?: () => void;
  hidePreviousButton?: boolean;
  nextButtonType?: "next" | "confirm";
};

const STEPS = [
  {
    id: 1,
    step: "Your info",
    pageLink: "/personal-info",
  },
  {
    id: 2,
    step: "Select plan",
    pageLink: "/select-plan",
  },
  {
    id: 3,
    step: "Add-ons",
    pageLink: "/add-ons",
  },
  {
    id: 4,
    step: "Summary",
    pageLink: "/summary",
  },
];

const Wrapper = styled.aside`
  font-family: ${({ theme }) => theme.fonts.ubuntu};
  flex: 1;
  display: flex;
  margin: auto;
  gap: 80px;
  max-width: 1000px;
  height: 650px;
  border-radius: 8px;
  padding: 20px;
  background-color: ${({ theme }) => theme.colors.white};
`;

const SidebarWrapper = styled.ul`
  padding: 40px;
  max-width: 300px;
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

const ChildrenWrapper = styled.div`
  max-width: 500px;
  width: 100%;
  padding: 40px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  font-family: ${({ theme }) => theme.fonts.ubuntu};
`;

const Children = styled.div`
  margin-top: 20px;
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

const ButtonWrapper = styled.div`
  max-width: 500px;
  display: flex;
  flex-direction: row-reverse;
  justify-content: space-between;
`;

const MainLayout = (props: Props) => {
  const location = useLocation();
  return (
    <Wrapper>
      <SidebarWrapper>
        {STEPS.map((step) => (
          <ListItems key={step.id}>
            <Link to={step.pageLink}>
              <Button
                shape="round"
                children={String(step.id)}
                color={
                  location.pathname.includes(step.pageLink)
                    ? "active"
                    : "default"
                }
              />
            </Link>

            <div>
              <StepNumber>Step {step.id}</StepNumber>
              <StepDescription>{step.step}</StepDescription>
            </div>
          </ListItems>
        ))}
      </SidebarWrapper>
      <ChildrenWrapper>
        <div>
          <Title>{props.pageTitle}</Title>
          <Paragraph>{props.pageDescription}</Paragraph>
          <Children>{props.children}</Children>
        </div>

        <ButtonWrapper>
          {props.nextButtonType === "confirm" ? (
            <Button
              variant="secondary"
              size="md"
              onClick={props.onNextClick}
              color="confirm"
            >
              Confirm
            </Button>
          ) : (
            <Button
              variant="secondary"
              size="md"
              onClick={props.onNextClick}
              color="default"
            >
              Next step
            </Button>
          )}

          {!props.hidePreviousButton && (
            <Button
              variant="primary"
              size="md"
              onClick={props.onPreviousClick}
              color="back"
            >
              Go back
            </Button>
          )}
        </ButtonWrapper>
      </ChildrenWrapper>
    </Wrapper>
  );
};

export default MainLayout;
