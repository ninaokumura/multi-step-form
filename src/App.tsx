import styled from "styled-components";
import "./App.css";
import { Navigate, Route, Routes } from "react-router-dom";
import PersonalInfo from "./pages/personal-info";
import AddOns from "./pages/add-ons";
import SelectPlan from "./pages/select-plan";
import Summary from "./pages/summary";
import { AppStateProvider } from "./contexts/AppContext";

const MainWrapper = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: row-reverse;
  justify-content: center;
  background-color: ${({ theme }) => theme.colors["magnolia"]};
`;

function App() {
  return (
    <MainWrapper>
      <AppStateProvider>
        <Routes>
          <Route path="/" element={<Navigate to="/personal-info" />} />
          <Route path="/personal-info" element={<PersonalInfo />} />
          <Route path="/select-plan/:choice" element={<SelectPlan />} />
          <Route path="/select-plan" element={<SelectPlan />} />
          <Route path="/add-ons" element={<AddOns />} />
          <Route path="/summary" element={<Summary />} />
        </Routes>
      </AppStateProvider>
    </MainWrapper>
  );
}

export default App;
