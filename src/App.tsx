import styled from "styled-components";
import "./App.css";
import { Navigate, Route, Routes } from "react-router-dom";
import PersonalInfo from "./pages/personal-info";
import AddOns from "./pages/add-ons";
import SelectPlan from "./pages/select-plan";
import Summary from "./pages/summary";

const MainWrapper = styled.div`
  min-height: 100vh;
  border: 2px solid green;
  display: flex;
  flex-direction: row-reverse;
  justify-content: center;
  border: 1px solid red;
`;

function App() {
  return (
    <MainWrapper>
      <Routes>
        <Route path="/" element={<Navigate to="/personal-info" />} />
        <Route path="/personal-info" element={<PersonalInfo />} />
        <Route path="/add-ons" element={<AddOns />} />
        <Route path="/select-plan" element={<SelectPlan />} />
        <Route path="/summary" element={<Summary />} />
      </Routes>
    </MainWrapper>
  );
}

export default App;
